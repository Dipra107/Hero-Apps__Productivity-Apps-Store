import React, { Suspense } from 'react';

import ProductiveApps from './ProductiveApps';
import Trusted from './Trusted';
import { Link } from 'react-router';
import AppsCard from '../Components/AppsCard';
import useApps from '../Hooks/useApps';
import LoadingSpinner from '../Components/LoadingSpinner';

const Home = () => {
    const { apps, loading } = useApps();
    const trendingApps = apps.slice(0, 8);
    return (
        <div>
            <ProductiveApps></ProductiveApps>
            <Trusted></Trusted>
            <div className='flex flex-col'>
                <div className='flex flex-col items-center mt-10'>
                    <h1 className='text-4xl md:text-5xl text-black mt-6 font-bold'>Trending Apps</h1>
                    <p className='text-[#afb4b9] mt-4 mb-6 pt-3'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                {loading ? (
                    <LoadingSpinner></LoadingSpinner>
                ) :
                 (<div className='grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                    
                    {
                        trendingApps.map(app => (
                            <AppsCard key={app.id} app={app}></AppsCard>
                        ))
                    }

                </div>)}
                <div className='mt-10 mx-auto'>
                    <Link to='/apps' className="btn btn-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text- text-white font-bold hover:from-[#9F62F2] hover:to-[#632EE3] hover:scale-105 hover:shadow-lg transition-all duration-300">Show All</Link>
                </div>
            </div>

        </div>
    );
};

export default Home;