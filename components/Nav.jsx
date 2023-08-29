import React, { useState } from 'react';
import { FaUser } from "react-icons/fa"
import IMG1 from "../img/logo.png"
import { NavLink } from 'react-router-dom';


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="shadow-lg flex p-4 h-16 items-center justify-between animate-boun">
                <div className="flex items-center">
                    <div className=" ml-8 mr-8 xl:mr-14 ">
                        <a href="/">
                            <img className='h-8 sm:h-10' src={IMG1} alt="Logo" />
                        </a>
                    </div>

                    <div className="hidden lg:block">
                        <ul className="flex space-x-8 text-gray-600 ">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li >
                                <NavLink to="/about">About us</NavLink>
                            </li>
                            <li ><a href="">Services</a></li>
                            <li ><a href="">Features</a></li>
                            <li >
                                <NavLink to="/contact">Contact us</NavLink>
                            </li>

                            {/* <li className="text-gray-600"><a href="">Blog</a></li> */}

                        </ul>
                    </div>
                </div>

                <div className="hidden lg:flex items-center">
                    <NavLink to="/signup" className="text-primary font-bold py-2 px-4 bg-black-600 "> Create account</NavLink>
                    <NavLink to="/signin" className="text-white ml-2 py-2 px-4 bg-primary rounded ">Sign In</NavLink>
                </div>


                <div className="lg:hidden flex">
                    <FaUser className="text-xl text-gray-600 font-bold" />

                    <button className="ml-8 mr-2 " onClick={toggleMenu} >
                        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                </div>

            </div>


            {isOpen && (
                <div className="lg:hidden shadow-lg bg-gray-100 px-4  py-2">
                    <ul className="flex flex-col space-y-4">
                        <li className="pl-3 pt-2">
                        <NavLink exact to="/">Home</NavLink>
                            </li>
                        <li className="border-t-2 pl-3 pt-2">About us
                        <NavLink to="/about">About us</NavLink>
                        
                        </li>
                        <li className="border-t-2 pl-3 pt-2">Services</li>
                        <li className="border-t-2 pl-3 mb-2 py-2">Features</li>
                        <li className="border-t-2 pl-3 mb-2 py-2">
                        <NavLink to="/contact">Contact Us</NavLink>
                            
                        </li>
                        {/* <li className="border-t-2 pl-3 mb-2 py-2">Blog</li> */}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
