import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import review from '../assets/icon-review.png';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
import ErrorPage from './ErrorPage';

const AppDetails = () => {
    const [install, setInstall] = useState('');
    const { id } = useParams();
    const { apps, loading } = useApps();
    const app = apps.find(p => String(p.id) === id);

    // If app is not found or still loading, show ErrorPage
    if (loading) return <span className="loading pt-20 lg: ml-[600px] loading-dots loading-xl"></span>;

    if (!app) return <ErrorPage />;  

    const { image, companyName, title, downloads, ratingAvg, reviews, ratings, description } = app || {};

    const handleToInstall = () => {
        const totalLocalStorageData = JSON.parse(localStorage.getItem('wishlist'));

        setInstall(true);

        let updateData = [];
        if (totalLocalStorageData) {
            const isDuplicate = totalLocalStorageData.some(p => p.id === app.id);
            if (isDuplicate) return toast('You have already Installed this App.');

            updateData = [...totalLocalStorageData, app];
        } else {
            updateData.push(app);
        }
        localStorage.setItem('wishlist', JSON.stringify(updateData));
        toast('App Installed Successfully');
    };

    return (
        <div>
            <div className='flex flex-col lg:flex-row  gap-10 items-center my-10 '>
                <div>
                    <img className='bg-white p-5 shadow-2xl rounded-xl h-[350px] w-[300px]' src={image} alt="" />
                </div>
                <div>
                    <div className='space-y-1 pb-5'>
                        <h1 className='text-2xl font-bold'>{title}</h1>
                        <p>Developed by <span className='text-[#632EE3] font-semibold'>{companyName}</span></p>
                    </div>
                    <hr className='w-full text-gray-300 lg:w-[830px] pb-5' />
                    <div className='flex items-center gap-10 space-y-3'>
                        <div className='flex flex-col items-center space-y-1'>
                            <img src={download} alt="" />
                            <h1>Downloads</h1>
                            <p className='text-3xl font-extrabold'>{downloads}</p>
                        </div>
                        <div className='flex flex-col items-center space-y-1'>
                            <img src={rating} alt="" />
                            <h1>Average Ratings</h1>
                            <p className='text-3xl font-extrabold'>{ratingAvg}</p>
                        </div>
                        <div className='flex flex-col items-center space-y-1'>
                            <img src={review} alt="" />
                            <h1>Total Reviews</h1>
                            <p className='text-3xl font-extrabold'>{reviews}</p>
                        </div>
                    </div>
                    <button onClick={() => handleToInstall()} className='btn btn-active btn-success text-white hover:shadow-lg hover:scale-105 hover:bg-green-600'>{install ? "Installed" : "Install Now "}</button>
                    <ToastContainer />
                </div>
            </div>
            <hr className='w-full text-gray-300' />
            <div className='my-10'>
                <h1>Ratings</h1>
                <div className='bg-base-100 rounded-xl p-4 h-90'>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart layout="vertical" data={ratings}>
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" barSize={20} fill="Orange" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <hr className='w-full text-gray-300' />
            <div className='my-10'>
                <h1 className='text-3xl font-bold pb-5'>Description</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
