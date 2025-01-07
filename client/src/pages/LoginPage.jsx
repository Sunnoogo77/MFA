import React from 'react';
import LoginForm from '../components/LoginForm';
import { useSession } from '../context/SessionContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const {login} = useSession();

    const handleLoginSuccess = (userData) => {
        console.log("The logged in user data is : ", userData);
        login(userData);
        // navigate('/');
    };
    return <LoginForm onLoginSuccess={handleLoginSuccess}/>;
};

export default LoginPage;