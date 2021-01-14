/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: IUser;
}

interface ISignIncredencials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: IUser;
  signIn(credencials: ISignIncredencials): Promise<void>;
  signOut(): void;
  updateUser(user: IUser): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@vemtrocar:token");
    const user = localStorage.getItem("@vemtrocar:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("session", {
      email,
      password,
    });
    const { token, user } = response.data;

    localStorage.setItem("@vemtrocar:token", token);
    localStorage.setItem("@vemtrocar:user", JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@vemtrocar:token");
    localStorage.removeItem("@vemtrocar:user");
    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: IUser): void => {
      localStorage.getItem("@vemtrocar:user");
      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token]
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
export { AuthProvider, useAuth };
