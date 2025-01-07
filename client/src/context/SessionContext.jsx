import React, { createContext, useContext } from 'react';
import { data } from 'react-router-dom';

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);
    };

    const logout = (data) => {
        setIsLoggedIn(false);
        setUser(null);
    };

    return (
        <SessionContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
};