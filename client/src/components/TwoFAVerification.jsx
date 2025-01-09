import React from 'react';
import { reset2FA, verify2FA } from '../service/authApi';


const TwoFAVerification = ({onVerifySuccess, onResetSuccess}) => {
    const [otp, setOtp] = React.useState("");
    const [error, setError] = React.useState("");

    const handleTokenVerification = async (e) => {
        e.preventDefault();
        try {
            const {data} = await verify2FA(otp);
            onVerifySuccess(data);
        } catch (error) {
            setOtp("");
            console.log("The error is : ", error.message);
            setError("Invalid OTP");
        }
    };

    const handleReset = async (e) => {
        e.preventDefault();
        try {
            const {data} = await reset2FA(otp);
            onResetSuccess(data);
        } catch (error) {
            console.log("The error is : ", error.message);
            setError(error.message);
        }
    };
    return (
        <form 
            onSubmit={handleTokenVerification}
            className  ='bg-white rounded-lg shadow-md w-full max-w-sm mx-auto'
        >
            <div className='pt-6'>
                <h2 className='text-3xl text-center font-extralight'> 
                    Validate TOTP 
                </h2>
            </div>
            <hr className='text-gray-200 mt-6 mb-6' />
            <p className='text-center text-gray-600 text-lg font-light '> 
                Please enter 6-digit Time based OTP to verify your account
            </p>
            <div className='p-6'>
                <div className='mb-4'>
                    <label className='text-gray-600 text-sm font-light mb-2'> TOTP </label>
                    <input 
                        className='w-full border rounded-lg p-2 mt-2' 
                        label="TOTP" 
                        type='text' 
                        placeholder="Enter Your TOTP"
                        value={otp} 
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                </div>
                {error && <p className='text-red-500 text-sm font-light mb-3'>{error}</p>}
                <button 
                    type='submit'
                    className='w-full bg-blue-500 text-white py-2 rounded-md'
                >
                    Verify TOTP
                </button>
                <button 
                    type='submit'
                    className='w-full bg-slate-500 text-white py-2 rounded-md'
                    onClick={handleReset}
                >
                    Reset 2FA
                </button>
                
            </div>
            
        </form>
    );
};

export default TwoFAVerification;