import React from 'react';
import {Link } from 'react-router-dom';
import tut from '../../../media/videos/tut.mp4'

const Home = () => {
    return (
        <main className='my-24  px-5 space-y-12'>

{/* SECTION 1 */}
            <section className='mx-auto md:w-2/3 shadow-md rounded-lg bg-white' data-aos="fade-up">
                <div className='flex flex-wrap items-center p-3'>
                    <div className='w-1/3'>
                        <video controls className="" style={{width:'100%', height:"100%"}}>
                           <source src={tut} type="video/mp4" />
                        </video>
                    </div>

                    <div className='w-2/3'>
                        <div className=''>
                            <div className='px-8 pb-3 flex items-center justify-between'>
                                <h4 className='font-semibold text-md'>How to set up shipping?</h4>
                                <button
                                type="button"
                                className="mr-3 text-xl  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                                id="option-menu-button"
                                aria-expanded="false"
                                data-dropdown-toggle="dropdown2"> 
                                <i className="fa-solid fa-ellipsis"></i></button>

                                <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                id="dropdown2"
                                >
                                <div className="py-3 px-4">
                                <ul className="py-1" aria-labelledby="dropdown">
                                <li>
                                    <div
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                   <i className="fa-solid fa-xmark mr-3 "></i>  Dismiss
                                    </div>
                                </li>
                                <li>
                                    <Link
                                    to="#"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                    <i class="fa-solid fa-eye mr-3"></i> View Transcript
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    to="#"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                    <i class="fa-solid fa-comment-dots mr-3"></i>Feedback
                                    </Link>
                                </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className='px-8 space-y-4'>
                                <p className='text-base font-thin'>Packaging and shipping your product may not sound like the most glamorous part of running your own business, but it’s one of the most essential aspects of your customer’s experience.</p>

                                <button className='border py-2 px-5 text-md font-light rounded-md hover:bg-indigo-700 hover:text-white'>Start shipping</button>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>


{/* SECTION 2 */}

        <section className='mx-auto md:w-2/3 shadow-md rounded-lg bg-white' data-aos="fade-up ">
        <div className='flex flex-wrap items-center p-3'>
                    <div className='w-1/3'>
                        <video controls className="" style={{width:'100%', height:"100%"}}>
                           <source src={tut} type="video/mp4" />
                        </video>
                    </div>

                    <div className='w-2/3'>
                        <div className=''>
                            <div className='px-8 pb-3 flex items-center justify-between'>
                                <h4 className='font-semibold text-md'>How to set up shipping?</h4>
                                <button
                                type="button"
                                className="mr-3 text-xl  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                                id="option-menu-button"
                                aria-expanded="false"
                                data-dropdown-toggle="dropdown2"> 
                                <i className="fa-solid fa-ellipsis"></i></button>

                                <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                id="dropdown2"
                                >
                                <div className="py-3 px-4">
                                <ul className="py-1" aria-labelledby="dropdown">
                                <li>
                                    <div
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                   <i className="fa-solid fa-xmark mr-3 "></i>  Dismiss
                                    </div>
                                </li>
                                <li>
                                    <Link
                                    to="#"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                    <i class="fa-solid fa-eye mr-3"></i> View Transcript
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    to="#"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                    <i class="fa-solid fa-comment-dots mr-3"></i>Feedback
                                    </Link>
                                </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className='px-8 space-y-4'>
                                <p className='text-base font-thin'>Packaging and shipping your product may not sound like the most glamorous part of running your own business, but it’s one of the most essential aspects of your customer’s experience.</p>

                                <button className='border py-2 px-5 text-md font-light rounded-md hover:bg-indigo-700 hover:text-white'>Start shipping</button>
                            </div>
                        </div>
                    </div>  
                </div>
        </section>



{/* SECTION 3 */}

        <section>
        
        </section>



























        </main>
    )
}

export default Home


