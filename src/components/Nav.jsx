import React, { useState } from 'react';
import { FaUser } from "react-icons/fa"



const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="shadow-lg flex p-4 h-16 items-center justify-between">
                <div className="flex items-center">
                    <div className="font-bold ml-12 mr-8  text-xl">
                        <img src="" alt="" />
                        LOGO
                    </div>

                    <div className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li className="text-gray-600"><a href="">Home</a></li>
                            <li className="text-gray-600">About us</li>
                            <li className="text-gray-600">Services</li>
                            <li className="text-gray-600">Features</li>
                        </ul>
                    </div>
                </div>

                <div className="hidden md:flex items-center">
                    <button className="text-primary font-bold py-2 px-4 bg-black-600">Sign in</button>
                    <button className="text-white ml-2 py-2 px-4 bg-primary rounded">Sign up</button>
                </div>


                <div className="md:hidden flex">
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
                <div className="md:hidden shadow-lg bg-gray-100 px-4  py-2">
                    <ul className="flex flex-col space-y-4">
                        <li className="border-t-2 pl-3 pt-2">Home</li>
                        <li className="border-t-2 pl-3 pt-2">About us</li>
                        <li className="border-t-2 pl-3 pt-2">Services</li>
                        <li className="border-t-2 pl-3 mb-2 py-2">Features</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
