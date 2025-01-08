import React, { createContext, useContext, useEffect, useState } from 'react';
import { data } from 'react-router-dom';

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storeUser = JSON.parse(sessionStorage.getItem('user'));
        console.log("The useEffect runs ; ", storeUser);
        if (storeUser) {
            setIsLoggedIn(true);
            setUser(storeUser);
        }
    }, []);
    const login = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);
        sessionStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = (data) => {
        if (data) {
            setIsLoggedIn(false);
            setUser(null);
            sessionStorage.removeItem('user');
        }
    };

    return (
        <SessionContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
};