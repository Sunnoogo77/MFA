import React from 'react';

const TwoFASetup = () => {
    return (
        <div 
            className  ='bg-white rounded-lg shadow-md w-full max-w-sm mx-auto'
        >
            <div className='pt-6'>
                <h2 className='text-3xl text-center font-extralight'> 
                    Turn on 2FA Verification 
                </h2>
            </div>
            <hr className='text-gray-200 mt-6 mb-6' />
            <p className='text-center text-gray-600 text-lg font-light pr-6 pl-6'> 
                Scan the QR code below using your 2FA app to enable 2FA
            </p>
            <div className='flex justify-center'>
                <img 
                    src='https://via.placeholder.com/150'
                    alt='2FA QR Code'
                    className='mb-4 border rounded-mb mt-6'
                />
            </div>
            <div className='flex items-center mt-3 mb-3'>
                <div className='border-t border-1 border-gray-200 flex-grow'></div>
                <div className='text-gray-600 text-sm font-light pr-2 pl-2'>Or enter the Code Manually</div>
                <div className='border-t border-1 border-gray-200 flex-grow'></div>
            </div>
            <div className='mb-6'>
                <input readOnly 
                    defaultValue="" 
                    value="" 
                    className='w-full border rounded mt-2 text-xs text-gray-600 p-4'
                    onClick={copyClipBoard}
                />
            </div>
            <button 
                onClick={onSetupComplete} 
                className='w-ful bg-blue-500 text-white py-2 rounded-md'
            >
                Continue to Verification
            </button>
        </div>
    );
};

export default TwoFASetup;