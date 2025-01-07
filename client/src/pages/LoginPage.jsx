import React from 'react';
import LoginForm from '../components/LoginForm';
import { useSession } from '../context/SessionContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const {login} = useSession();

    const handleLoginSuccess = (userData) => {
        console.log("The user data is : ", userData);
        login(userData);
        if(user)
        // navigate('/');
    }
    return <LoginForm onLoginSuccess={handleLoginSuccess}/>;
};

export default LoginPage;