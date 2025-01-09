import React from 'react';

const HomePage = () => {
    const navigate = useNavigate();
    const {user, logout} = useSession();
    return (
        <div className='p-6 bg-white rounded-lg shadow-md w-full max-w-sm mx-auto mt-10'>
            <h2 className='text-xl font-semibold mv-4'> Welcome, {user.username}! </h2>
            <p>You have successfully logged in and verify your 2FA</p>

            <button
                type='button'
                onClick={logout}
                className='w-full bg-red-500 text-white px-4 py-2 rounded-md p-10 hover:bg-red-600 mt-4'
            >
                Logout
            </button>
        </div>
    );
};

export default HomePage;