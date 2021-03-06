import React, { createContext, useCallback, useState, useContext } from 'react';

import {api} from '../services/api';

interface User {
 
  email: string;
 
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@iftm2021-trabalho-final:token');
    const user = localStorage.getItem('@iftm2021-trabalho-final:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('auth/login', {
      email,
      password,
    });
    const dataResponse = response.data;
    const user = {email: dataResponse.email}
    const token = dataResponse.token
    localStorage.setItem('@iftm2021-trabalho-final:token', token);
    localStorage.setItem('@iftm2021-trabalho-final:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@iftm2021-trabalho-final:token');
    localStorage.removeItem('@iftm2021-trabalho-final:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@iftm2021-trabalho-final:user', JSON.stringify(user));
      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
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
