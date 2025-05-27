'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
    user: string | null; // Usuario autenticado
    isLoggedIn: boolean;
    login: (username: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Cargar el estado de autenticación desde localStorage al cargar la aplicación
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedAuth = localStorage.getItem('isLoggedIn');
        if (storedUser && storedAuth === 'true') {
            setUser(storedUser); // Asegurarse de cargar correctamente el usuario
            setIsLoggedIn(true);
        }
    }, []);

    const login = (username: string) => {
        setUser(username);
        setIsLoggedIn(true);
        localStorage.setItem('user', username); // Guardar el usuario en localStorage
        localStorage.setItem('isLoggedIn', 'true');
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('user'); // Eliminar el usuario de localStorage
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
