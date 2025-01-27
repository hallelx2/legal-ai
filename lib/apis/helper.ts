// lib/axios.ts
import axios from 'axios';
import { getSession } from 'next-auth/react';

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`, // Your API base URL
  });

  // Add a request interceptor
  instance.interceptors.request.use(
    async (config) => {
      try {
        const session = await getSession();

        if (session?.accessToken) {
          config.headers.Authorization = `Bearer ${session.accessToken}`;
        }

        return config;
      } catch (error) {
        console.error("Error in axios interceptor:", error);
        return config;
      }
    },
    (error) => Promise.reject(error)
  );

  return instance;
};

// Export a function that creates the axios instance
export const axiosInstance = createAxiosInstance();
