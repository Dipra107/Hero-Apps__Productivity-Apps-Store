import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppsCard from '../Components/AppsCard';
import searchIcon from '../assets/search.png';
import LoadingSpinner from '../Components/LoadingSpinner';
import notFoundImage from '../assets/App-error.png'; 
const Apps = () => {
    const { apps, loading } = useApps();
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();
    const searchApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps;

    const handleSearchLoading = e => {
        e.preventDefault();
        setSearch(e.target.value);
        
    };

    return (
        <div>
            <div>
                <div className='flex flex-col items-center mt-10'>
                    <h1 className='md:text-5xl text-4xl text-black font-bold'>Our All Applications</h1>
                    <p className='text-gray-500 text-center m-6 text-lg pt-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between items-center mt-10'>
                    <p className='text-3xl m-2 mb-5 p-4 font-bold'>
                        (<span>{searchApps.length}</span>) Apps Found
                    </p>
                    <label className="input flex items-center mr-6 w-full sm:w-auto">
                        <img src={searchIcon} alt="" className="mr-2" />
                        <input
                            value={search}
                            onChange={handleSearchLoading}
                            type="search"
                            required
                            placeholder="Search Apps"
                            className="w-full sm:w-64 lg:w-80"  
                        />
                    </label>
                </div>
            </div>

            {
                loading ? (
                    <LoadingSpinner />
                ) : searchApps.length === 0 ? (
                    <div className='flex flex-col items-center mt-10'>
                        <img src={notFoundImage} alt="App Not Found" className="w-150 h-120 mb-4" />
                        <h2 className="text-6xl mt-8 font-bold">OPPS!! APP NOT FOUND</h2>
                        <p className="text-gray-500 mt-10 mb-10 text-2xl">The App you are requesting is not found on our system. Please try another apps.</p>
                        
                    </div>
                ) : (
                    <div className='grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                        {
                            searchApps.map(app => (
                                <AppsCard key={app.id} app={app} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Apps;
