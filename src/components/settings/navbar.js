import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "flowbite";

import Logo from "../../media/favicon.ico";
import avatar from "../../media/avatars/300-1.jpg";






export const SettingsNav = () => {

    //navbar
    const [isOpen, setIsOpen] = useState(false);

    const navhandler = () => {
        setIsOpen(!isOpen); //to toggle
    };

    // accordion
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    //dropdown
    const [drop, setDrop] = useState(true);

    const handlenavdrop = (e) => {
        setDrop(!drop);
    };



    return (
        <>

            {/* top menu */}
            <div className="relative text-sm md:text-base">
                {/* Desktop Menus */}
                <div className="bg-slate-200 fixed w-full z-40">
                    <div className="flex flex-wrap items-center py-2 lg:py-4">
                        <div className="w-1/2 px-4 md:px-5  ">
                            <Link to="/dashboard" className="flex flex-wrap items-center space-x-4">
                                <img src={Logo} alt="LOGO" className="w-8 hidden lg:block" />
                                <p className="hidden lg:block">Merchantplace</p>
                            </Link>

                            {/* hamburger */}
                            <div className=" lg:hidden">
                                <button
                                    onClick={navhandler}
                                    className=" p-3 focus:outline-none focus:bg-indigo-700 focus:text-white  menu-button rounded-2xl"
                                >
                                    {isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6 font-semibold text-2xl "
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 font-semibold"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            {" "}
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4 6h16M4 12h8m-8 6h16"
                                            />{" "}
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {/* hamburger ends */}
                        </div>

                        <div className="w-1/2 px-5 flex  items-center space-x-4 justify-end relative">
                            <div className="flex flex-wrap items-center md:order-2">
                                <button
                                    type="button"
                                    className="flex mr-3 text-sm  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                                    onClick={() => handlenavdrop("option")}
                                >
                                    <span className="font-regular text-xs md:text-sm ">
                                        Adeyemi Oluwasegun
                                    </span>
                                    <img src={avatar} alt="avatar" className="w-8 rounded-full" />
                                </button>

                                <div
                                    hidden={drop}
                                    className="z-20 my-4 text-base absolute top-8 right-2 list-none w-62 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                    id="dropdown"
                                >
                                    <ul class="py-1" aria-labelledby="dropdown">
                                        <li>
                                            <Link
                                                to="/profile"
                                                className="block py-2 px-4  text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                <i class="fa-solid fa-grip mr-4"></i> Manage Account
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="block py-2 px-4  text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                <i class="fa-solid fa-gears mr-4"></i> Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="block py-2 px-4  text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                <i class="fa-solid fa-sack-dollar mr-4"></i> Earnings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="block py-2 px-4  text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                <i class="fa-solid fa-right-from-bracket mr-4"></i> Sign
                                                out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* side menu bar */}

                <div className="flex flex-wrap">
                    <div
                        className={` backdrop-blur-lg overflow-y-scroll shadow-2xl md:w-80 h-screen md:h-full bg-white/30 mt-5 min-h-screen lg:translate-x-0 inset-y-0 left-0 top-11 transform fixed -translate-x-full transition duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <div className=" px-5 flex flex-wrap items-center space-x-4 lg:hidden font-medium mt-5">
                            <img src={Logo} alt="LOGO" className="w-8" />
                            <p className="">Merchantplace</p>
                        </div>

                        <div className='border-b'>
                            <Link to="#">
                                <p className='bg-slate-100 text-indigo-700 p-6 text-xs'>https://great-phone-store.com/ <span><i></i></span></p>
                            </Link>
                        </div>

                        <div className='pb-28'>
                            <Link to="#" >
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-circle-user text-2xl"></i>
                                    <span>Store details</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Plan</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Users and permissions</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Payments</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Checkout</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Shipping and delivery</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Taxes and duties</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Locations</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Gift cards</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Markets</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Sales channels</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Domains</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Notifications</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Metafields</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Files</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm">
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Languages</span>
                                </button>
                            </Link>

                            <Link to="#" className=''>
                                <button onClick={navhandler} className="px-10 text-left w-full space-x-8 hover:bg-slate-100 py-2 focus:border-l-4 
                                border-b focus:border-l-indigo-700 text-sm" >
                                    <i class="fa-solid fa-lock text-2xl"></i>
                                    <span>Policies</span>
                                </button>
                            </Link>
                        </div>


                    </div>

                    {/* End of side bar */}

                    {/* main Contents */}

                    <div className="w-full bg-slate-100 min-h-screen lg:ml-80 z-30">
                        <Outlet />
                    </div>
                </div>
            </div>


        </>
    )
}