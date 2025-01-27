import { useSession } from "next-auth/react";
import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";

// Authentication Context Type
interface ConnectionType {
  isDocusignConnected: boolean;
  getTokens: () => Promise<void>;
  isLoading: boolean;
}

// Create Authentication Context
const Connection = createContext<ConnectionType | undefined>(undefined);

export const ConnectionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDocusignConnected, setDocusignConnected] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const { data } = useSession();

  const getTokens = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/docusign/token/${data?.user.id}`,
      );
      if (!response.ok) {
        throw new Error("");
      }
      const result = await response.json();
      setDocusignConnected(result.connected);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    getTokens();
  }, []);

  return (
    <Connection.Provider value={{ isDocusignConnected, getTokens, isLoading }}>
      {children}
    </Connection.Provider>
  );
};

export const useConnection = (): ConnectionType => {
  const context = useContext(Connection);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
