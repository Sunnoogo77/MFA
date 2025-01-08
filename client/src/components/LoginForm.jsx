import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register, login } from '../service/authApi';

const LoginForm = ({onLoginSuccess}) => {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const {data} = await login(username, password);
            
            setMessage(data.message);
            setUsername("");
            setPassword("");
            onLoginSuccess(data);
            
        } catch (error) {
            console.log("The error is : ", error.message);
            setUsername("");
            setPassword("");
            setError("Invalid username or password");
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const {data} = await register(username, password);
            setIsRegister(false);
            setMessage(data.message);
            setUsername("");
            setPassword("");
            setConfirmPassword("");

        } catch (error) {
            console.log("The error is : ", error.message);
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            setError("Something went wrong during user registration");
        }
    }
    

    const handleRegisterToggle = () => {
        setIsRegister(!isRegister);
        setError("");
        setMessage("");
    }
    return (
        <form 
            onSubmit={isRegister ? handleRegister : handleLogin } 
            className  ='bg-white rounded-lg shadow-md w-full max-w-sm mx-auto'
        >
            <div className='pt-6'>
                <h2 className='text-3xl text-center font-extralight'> 
                    {isRegister ? "Create Account": "Login"} 
                </h2>
            </div>
            <hr className='text-gray-200 mt-6 mb-6' />
            <p className='text-center text-gray-600 text-lg font-light '> 
                {isRegister ? "Looks like you are new here! " : "Glad to see you again"}
            </p>
            <div className='p-6'>
                <div className='mb-4'>
                    <label className='text-gray-600 text-sm font-light mb-2'> Username </label>
                    <input 
                        className='w-full border rounded-lg p-2 mt-2' 
                        label="Username" 
                        type='text' 
                        placeholder="Enter Your Password"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='text-gray-600 text-sm font-light mb-2'> Password </label>
                    <input 
                        className='w-full border rounded-lg p-2 mt-2' 
                        type="password" 
                        label="Password" 
                        placeholder="Enter Your Password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                </div>
                {isRegister ? (
                    <div className='mb-4'>
                        <label className='text-gray-600 text-sm font-light mb-2'> Confirm Password </label>
                        <input 
                            className='w-full border rounded-lg p-2 mt-2' 
                            type="password" 
                            label="Confirm Password" 
                            placeholder="Enter Your Password Again"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}  
                            required
                        />
                    </div>
                ) : (
                    ""
                    )
                }
                {error && <p className='text-red-500 text-sm font-light mb-3'>{error}</p>}
                {message && <p className='text-green-500 text-sm font-light mb-3'>{message}</p>}
                <button 
                    type='submit'
                    className='w-full bg-blue-500 text-white py-2 rounded-md'
                >
                    {isRegister ? " Register": "Login"}
                </button>
                <div>
                    <p className='pt-4 text-center text-gray-900 text-sm font-light'>
                        {isRegister ? "Already have an account ?" : "Don't have any account !?"}{" "}
                        <Link to="" onClick={handleRegisterToggle}>
                            {isRegister ? "Login" : " Create Account"}
                        </Link>
                    </p>
                </div>
            </div>
            
        </form>
    );
};

export default LoginForm;

