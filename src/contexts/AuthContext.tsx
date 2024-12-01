"use client";

import { verifyToken } from "@/lib/jwt";
import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { Token } from "../constants/type";

interface AuthContextTypes {
  accessToken: string | null;
  setaccessToken: (token: string) => void;
  getaccessToken: (role: string) => Promise<"authorized" | "unhautorized">;
  clearaccessToken: () => void;
  isLoading: boolean;
  changeLoading: (state: boolean) => void;
}

export const AuthContext = createContext<AuthContextTypes | null>(null);
const storageKey = "fihary_token";

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [accessToken, setToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(storageKey);
    }
    return null;
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  console.log(isLoading);

  const setaccessToken = (token: string) => {
    localStorage.setItem(storageKey, token);
    setToken(token);
  };

  const clearaccessToken = () => {
    setToken(null);
    localStorage.removeItem(storageKey);
  };

  const getaccessToken = useCallback(
    async (role: string) => {
      if (accessToken) {
        try {
          const payload = await verifyToken(accessToken);
          const user_role = (payload as Token).role;

          if (role === user_role) {
            console.log("role: ", role);

            return "authorized";
          } else {
            return "unhautorized";
          }
        } catch (error) {
          console.error("Invalid token:", error);

          return "unhautorized";
        }
      }

      return "unhautorized";
    },
    [accessToken]
  );

  const changeLoading = (state: boolean) => {
    setIsLoading(state);
  };

  return (
    <AuthContext.Provider
      value={{
        getaccessToken,
        accessToken,
        setaccessToken,
        clearaccessToken,
        isLoading,
        changeLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
