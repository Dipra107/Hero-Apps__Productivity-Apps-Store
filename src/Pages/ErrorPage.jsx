import React from 'react';
import error from '../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='max-w-auto mx-auto flex flex-col min-h-screen'>
            <div className='max-w-screen mx-auto w-full px-5 flex-1 justify-center my-10 flex flex-col items-center'><img className='text-center' src={error} alt="" /> <h1 className='text-6xl mt-5 font-bold pb-5'>Oops, Page Not Found...!</h1>
                <p className='text-2xl mt-5 text-gray-500'>The page you are looking for is not available.</p>
                <div className='mt-10 mx-auto'>
                    <Link to='/' className="btn btn-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-white hover:scale-110 transition-all duration-300 text-white font-bold">Go Back</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;