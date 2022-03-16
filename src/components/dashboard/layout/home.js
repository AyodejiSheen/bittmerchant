import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import tut from '../../../media/videos/tut.mp4'
import '../../../mobile.css';

import install from '../../../media/home/install.svg'
import customize from '../../../media/home/customize.svg'
import add from '../../../media/home/add.svg'
import organize from '../../../media/home/organize.svg'
import domain from '../../../media/home/domain.svg'
import payment from '../../../media/home/payment.svg'



const Home = () => {

    const [active, setActive] = useState('tab1');

    const handleChange = (value) => {
        if (value === active){
            return;
        }

        setActive(value);
    }







    return (
        <main className='my-24  px-5 space-y-12'>

{/* SECTION 1 */}
            <section className='mx-auto md:w-2/3 shadow-md rounded-lg bg-white' data-aos="fade-down">
                <div className='flex flex-wrap items-center p-3'>
                    <div className='w-1/3'>
                        <video  className="" style={{width:'100%', height:"100%"}}>
                           <source src={tut} type="video/mp4" />
                        </video>
                    </div>

                    <div className='w-2/3'>
                        <div className='space-y-3'>
                            <div className='px-12  flex items-center justify-between'>
                                <h4 className='font-semibold text-md'>How to set up Shipping? </h4>
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
                            <div className='px-12 space-y-4'>
                                <p className='text-sm font-thin sm-text'>Packaging and shipping your product may not sound like the most glamorous part of running your own business, but it’s one of the most essential aspects of your customer’s experience.</p>

                                <button className='border py-2 px-5 text-sm shadow-lg font-light rounded-md hover:bg-indigo-700 hover:text-white'>Start shipping</button>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>



{/* SECTION 2 */}

        <section className='mx-auto md:w-2/3 shadow-md rounded-lg bg-white' data-aos="fade-up ">

            
        <div className='px-8 py-5 flex flex-wrap items-center justify-between border-b'>
                    <h4 className='text-xl '>Get ready to sell online. Try these tips to get started.</h4>
                    <button
                    type="button"
                    className="mr-3 text-xl  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                    id="option-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown3"> 
                    <i className="fa-solid fa-ellipsis"></i></button>
        
                    <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown3"
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
                        <i className="fa-solid fa-comment-dots mr-3"></i>Feedback
                        </Link>
                    </li>
                    </ul>
                    </div>
                </div>
                </div>

                <div className='block md:flex flex-wrap'>
                    <div className="md:w-1/3 bg-gray-100 flex flex-wrap md:block">

                       <div>
                        <button onClick={() => handleChange('tab1')} className='py-6 px-6 text-sm font-medium  text-left text-gray-500 border-y border-r-2 border-transparent hover:text-gray-700 border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 w-full'> <i className="fa-solid fa-print mr-3" ></i> <span className=' hidden lg:inline-flex'>Install product apps</span></button>
                        </div> 

                        <div>
                        <button onClick={() => handleChange('tab2')} className='py-6 px-6 text-sm font-medium  text-left text-gray-500 border-y border-r-2 border-transparent hover:text-gray-700 border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 w-full'> <i className="fa-solid fa-paintbrush mr-3"></i> <span className=' hidden lg:inline-flex'>Customize theme</span></button>
                        </div> 

                        <div>
                        <button onClick={() => handleChange('tab3')} className='py-6 px-6 text-sm font-medium  text-left text-gray-500 border-y border-r-2 border-transparent hover:text-gray-700 border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 w-full'><i className="fa-solid fa-pager mr-3"></i> <span className=' hidden lg:inline-flex'>App pages</span></button>
                        </div> 

                        <div>
                        <button onClick={() => handleChange('tab4')} className='py-6 px-6 text-sm font-medium  text-left text-gray-500 border-y border-r-2 border-transparent hover:text-gray-700 border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 w-full'> <i className="fa-solid fa-layer-group mr-3"></i> <span className=' hidden lg:inline-flex'>Organize navigation</span></button>
                        </div> 

                        <div>
                        <button onClick={() => handleChange('tab5')} className='py-6 px-6 text-sm font-medium  text-left text-gray-500 border-y border-r-2 border-transparent hover:text-gray-700 border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 w-full'> <i className="fa-solid fa-globe mr-3"></i> <span className=' hidden lg:inline-flex'>Add domain</span></button>
                        </div> 

                        <div>
                        <button onClick={() => handleChange('tab6')} className='py-6 px-6 text-sm font-medium  text-left text-gray-500 border-y border-r-2 border-transparent hover:text-gray-700 border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 w-full'><i className="fa-solid fa-money-bill-wave mr-3"></i> <span className=' hidden lg:inline-flex'>Set up payments</span></button>
                        </div> 
                    </div>


                    <div className='flex-1'>
                        <div hidden={active !== 'tab1'}>
                        <div className=" p-8 space-y-16 rounded-lg " >
                            <div className='flex items-center justify-between space-x-28'>
                                <div className='w-3/4 space-y-3'>
                                    <p className='font-semibold text-md'>Create your products with a print on demand app</p>
                                    <p className='text-sm font-thin'>Use your designs to create custom printed products. Try a few apps to find the products, prices, and shipping options that work for you.</p>
                                </div>
        
                                <div className='w-1/4' >
                                    <img src={install} alt="install"/>
                                </div>
                            </div>
        
                            <div className=''>
                                <button type='button' className='bg-indigo-700 text-white py-3 px-5 rounded-md text-sm'>Browse print on demand apps</button>
                            </div>
                        </div>
                        </div>


                        <div hidden={active !== 'tab2'}  >
                        <div class="  p-8  rounded-lg space-y-16 dark:bg-gray-800">
                        <div className='flex items-center justify-between space-x-28'>
                                <div className='w-3/4 space-y-3'>
                                <p className='font-semibold text-md'>Edit the look and feel of your online store</p>
                                    <p className='text-sm font-thin'>Choose a theme and add your logo, colors, and images to reflect your brand.</p>
                                </div>
        
                                <div className='w-1/4' >
                                    <img src={customize} alt="install"/>
                                </div>
                            </div>
        
                            <div className=''>
                                <button type='button' className='bg-indigo-700 text-white py-3 px-5 rounded-md text-sm'>Customize Theme</button>
                            </div>
                        </div>
                        </div>


                        <div hidden={active !== 'tab3'} >
                        <div class="p-8 rounded-lg space-y-16 dark:bg-gray-800" >
                        <div className='flex items-center justify-between space-x-28'>
                                <div className='w-3/4 space-y-3'>
                                <p className='font-semibold text-md'>Add pages to your online store</p>
                                    <p className='text-sm font-thin'>Share your brand story and build trust with customers. Create pages that describe who you are and how people can contact you.</p>
                                </div>
        
                                <div className='w-1/4' >
                                    <img src={add} alt="install"/>
                                </div>
                            </div>
        
                            <div className=''>
                                <button type='button' className='bg-indigo-700 text-white py-3 px-5 rounded-md text-sm'>Add Pages</button>
                            </div>
                        </div>
                        </div>


                        <div hidden={active !== 'tab4'}>
                        <div class=" p-8 space-y-16 rounded-lg dark:bg-gray-800">
                        <div className='flex items-center justify-between space-x-28'>
                                <div className='w-3/4 space-y-3'>
                                <p className='font-semibold text-md'>Organize your online store navigation</p>
                                    <p className='text-sm font-thin'>Help customers to find what they're looking for by organizing the pages on your online store.</p>
                                </div>
        
                                <div className='w-1/4' >
                                    <img src={organize} alt="install"/>
                                </div>
                            </div>
        
                            <div className=''>
                                <button type='button' className='bg-indigo-700 text-white py-3 px-5 rounded-md text-sm'>Organize navigation</button>
                            </div>
                        </div>
                        </div>


                        <div hidden={active !== 'tab5'}  >
                        <div class="p-8 space-y-16 rounded-lg dark:bg-gray-800" >
                        <div className='flex items-center justify-between space-x-28'>
                                <div className='w-3/4 space-y-3'>
                                <p className='font-semibold text-md'>Strengthen your brand with a custom domain</p>
                                    <p className='text-sm font-thin'>Your current domain is the-plaza-wears.myshopify.com but you can add a custom domain to help customers find your online store.</p>
                                </div>
        
                                <div className='w-1/4' >
                                    <img src={domain} alt="install"/>
                                </div>
                            </div>
        
                            <div className=''>
                                <button type='button' className='bg-indigo-700 text-white py-3 px-5 rounded-md text-sm'>Add Domain</button>
                            </div>
                        </div>
                        </div>


                        <div hidden={active !== 'tab6'}>
                        <div class="p-8 space-y-16 rounded-lg dark:bg-gray-800" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                        <div className='flex items-center justify-between space-x-28'>
                                <div className='w-3/4 space-y-3'>
                                <p className='font-semibold text-md'>Start selling with Merchantplace Payments</p>
                                    <p className='text-sm font-thin'>Set up your Merchantplace Payments account to start accepting payments. You'll need to provide some basic information about your business.</p>
                                </div>
        
                                <div className='w-1/4' >
                                    <img src={payment} alt="install"/>
                                </div>
                            </div>
        
                            <div className=''>
                                <button type='button' className='bg-indigo-700 text-white py-3 px-5 rounded-md text-sm'>Organize navigation</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


        </section>



























        </main>
    )
}

export default Home


