import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logoN.png';
import github from '../assets/github.png';

const Navbar = () => {
    //  active and inactive styles
    const activeStyle = `
        relative font-semibold text-transparent bg-clip-text 
        bg-gradient-to-bl from-[#632EE3] to-[#9F62F2]
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:w-full after:h-[2px]
        after:bg-gradient-to-bl after:from-[#632EE3] after:to-[#9F62F2]
        after:rounded-full after:transition-all after:duration-300
    `;

    const inactiveStyle = `
        relative text-gray-700 hover:text-transparent hover:bg-clip-text 
        hover:bg-gradient-to-bl hover:from-[#632EE3] hover:to-[#9F62F2]
        after:content-[''] after:absolute after:left-1/2 after:-bottom-1
        after:w-0 after:h-[2px]
        after:bg-gradient-to-bl after:from-[#632EE3] after:to-[#9F62F2]
        after:rounded-full after:transition-all after:duration-300
        hover:after:left-0 hover:after:w-full
    `;

    return (
        <div className="navbar bg-base-100 shadow-sm px-3 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='hover:text-[#632EE3] font-semibold'>
                            <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Home</NavLink>
                        </li>
                        <li className='hover:text-[#632EE3] font-semibold'>
                            <NavLink to='/apps' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Apps</NavLink>
                        </li>
                        <li className='hover:text-[#632EE3] font-semibold'>
                            <NavLink to='/installation' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="flex items-center font-bold text-transparent bg-gradient-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-3xl">
                    <img src={logo} alt="" className="h-10 w-10 mr-3" /> HERO.IO
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-3 gap-10">
                    <li className='hover:text-[#632EE3] text-base font-semibold'>
                        <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Home</NavLink>
                    </li>
                    <li className='hover:text-[#632EE3] text-base font-semibold'>
                        <NavLink to='/apps' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Apps</NavLink>
                    </li>
                    <li className='hover:text-[#632EE3] text-base font-semibold'>
                        <NavLink to='/installation' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Installation</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='https://github.com/Dipra107' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#9F62F2] hover:to-[#632EE3] hover:scale-105 hover:shadow-lg transition-all duration-300 text-white text-lg font-bold">
                    <img src={github} alt="GitHub" className="h-5 w-5 mr-2" /> Contribute
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
