import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logoN.png';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded-xl mt-10 p-10">
            <div className="footer sm:footer-horizontal bg-black text-white p-10">
                <div className='grid md:grid-cols-5 grid-cols-1 text-left gap-15'>
                    <aside>
                        <Link to='/' className="flex items-center font-bold gap-3 text-[#632EE3] text-xl"><span><img src={logo} alt="" /></span>HERO.IO</Link>
                        <p className='mt-2 text-gray-400 text-left'>
                            Hero IO Apps offers a comprehensive suite of applications designed to cater to your every need.
                            Whether you're seeking powerful productivity tools, engaging social experiences, or exciting gaming solutions,
                            Hero IO Apps has everything you need in one place. Our apps are designed to boost your creativity, streamline your tasks,
                            and keep you connected with friends and colleagues alike.Hero IO Apps has everything you need.
                        </p>
                    </aside>
                    <div>
                        <h3 className="text-lg font-semibold">Company</h3>
                        <ul className="mt-4 text-sm text-gray-400 space-y-4">
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Contact Us</li>
                            <li>Hero Apps</li>
                            <li>Our Information</li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div>
                        <h3 className="text-lg font-semibold">Services</h3>
                        <ul className="mt-4 text-sm text-gray-400 space-y-4">
                            <li>Products & Services</li>
                            <li>Customer Stories</li>
                            <li>Cloud Apps</li>
                            <li>Support Center</li>
                            <li>Chat Online </li>
                        </ul>
                    </div>

                    {/* Information Section */}
                    <div>
                        <h3 className="text-lg font-semibold">Information</h3>
                        <ul className="mt-4 text-sm text-gray-400 space-y-4">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Join Us</li>
                            <li>Download our App</li>
                            <li> Our Location</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Social Links</h3>
                        <ul className="mt-4 text-sm text-gray-400 space-y-4">
                            <li className="flex items-center gap-2">
                                <FaTwitter size={20} className="text-blue-400" />
                                @Hero.IO
                            </li>
                            <li className="flex items-center gap-2">
                                <FaFacebookF size={20} className="text-blue-600" />
                                @Hero.IO
                            </li>
                            <li className="flex items-center gap-2">
                                <FaLinkedinIn size={20} className="text-blue-700" />
                                @Hero.IO Productive_Apps
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-gray-400">📧</span>
                                support@hero.io.com
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-white border-t border-white opacity-60 w-full mt-4 pt-4'>
                <p>Hero Apps by Hero Private Company Limited</p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Hero Apps</p>

            </div>
        </footer>
    );
};

export default Footer;