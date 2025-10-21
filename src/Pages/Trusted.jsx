import React from 'react';
import hero from '../assets/hero.png';

const Trusted = () => {
    return (
        <div>
            <div className='flex justify-center mt-10'>
                <img className='lg:h-[400px]' src={hero} alt="" />
            </div>
            <div className='text-white py-12 space-y-10 text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                <h1 className='text-4xl lg:text-5xl font-bold'>Trusted By Billions, Built For You</h1>
                <div className='flex flex-col lg:flex-row justify-center mt-5 gap-10 lg:gap-50'>
                    <div className='space-y-2'>
                        <h5 className='text-[#afb4b9]'>Total Downloads</h5>
                        <h1 className='lg:text-6xl text-4xl font-bold'>478.9B</h1>
                        <p className='text-[#afb4b9]'>21% more than last month</p>
                    </div>
                    <div className='space-y-2'>
                        <h5 className='text-[#afb4b9]'>Total Reviews</h5>
                        <h1 className='lg:text-6xl text-4xl font-bold'>31M</h1>
                        <p className='text-[#afb4b9]'>46% more than last month </p>
                    </div>
                    <div className='space-y-2'>
                        <h5 className='text-[#afb4b9]'>Active Apps</h5>
                        <h1 className='lg:text-6xl text-4xl font-bold'>40+</h1>
                        <p className='text-[#afb4b9]'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trusted;