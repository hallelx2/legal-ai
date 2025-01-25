import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import axios from 'axios';

interface SignatureAuthTokens {
    accessToken: string;
    refreshToken: string;
}

interface SignatureAuthContextType {
    tokens: SignatureAuthTokens | null;
    refreshTokens: ( id: string) => Promise<void>;
    getToken: (code: string, id: string) => Promise<void>;
}

const SignatureAuthContext = createContext<SignatureAuthContextType | undefined>(undefined);


export const SignatureAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tokens, setTokens] = useState<SignatureAuthTokens | null>(null);

    useEffect(() => {
        const refreshToken = localStorage.getItem('refreshToken');
        const accessToken = localStorage.getItem('accessToken');

        if(refreshToken && accessToken){
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
        }
    }, [])
    

    const refreshTokens = async (id: string) => {
        try {
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
                throw new Error('No refresh token available');
            }

            const response = await fetch('http://localhost:8000/docusign/refresh', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "code": refreshToken,
                    "user_id": id
                })
            });
            const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await  response.json();

            // Update local storage and state
            localStorage.setItem('accessToken', newAccessToken);
            localStorage.setItem('refreshToken', newRefreshToken);

            setTokens({
                accessToken: newAccessToken,
                refreshToken: newRefreshToken
            });
        } catch (error) {
            throw error;
        }
    };


    const getToken = async (code: string, id: string) => {
        try {
            console.log(code)
            const response = await fetch(`http://localhost:8000/docusign/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "code": code,
                    "user_id": id
                })
            })
            const token = await response.json()
            localStorage.setItem('accessToken', token.accessToken);
            localStorage.setItem('refreshToken', token.refreshToken);
            setTokens({ accessToken:token.accessToken, refreshToken:token.refreshToken });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SignatureAuthContext.Provider value={{ tokens, refreshTokens, getToken}}>
            {children}
        </SignatureAuthContext.Provider>
    );
}


export const useSignatureAuth = () => {
    const context = useContext(SignatureAuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};