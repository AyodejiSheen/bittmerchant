import React from 'react';
import googleicon from "../../media/google-icon.svg";





export const General = () => {
    return (

        <>

            <main className='my-24 px-5 lg:px-0'>

                <div className='mx-auto md:3/4 lg:w-11/12 xl:w-10/12 2xl:w-2/3'>

                    <div className='border-b border-black pb-6'>
                        <h3 className='text-xl font-medium'>General</h3>
                    </div>

                    <section className="py-4 border-b w-full px-auto">
                        <div className='md:flex flex-wrap md:gap-12 xl:gap-14 justify-center'>
                            <div className='md:w-3/12'>
                                <h3 className='pt-6 pb-4 md:pb-0 text-base font-medium'>Details</h3>
                            </div>

                            <div className='md:w-8/12'>
                                <div className='rounded-lg border shadow-md bg-white'>
                                    <div className="border-b py-6">
                                        <div className='flex flex-wrap space-y-3 md:space-y-0 md:space-x-3 xl:space-x-6 px-6'>
                                            <div className='w-12 h-12 text-lg flex items-center justify-center text-white rounded-full bg-indigo-700 text-center p-auto'>AI</div>
                                            <div className='space-y-3 md:space-y-0 md:space-x-3 xl:space-x-6'>
                                                <input type="file" placeholder='Upload photo' className='border w-11/12  md:w-56 lg:w-40 xl:w-80 2xl:w-96'></input>
                                                <button className='bg-indigo-700 text-white py-3 rounded-md px-4 text-sm'>Remove photo</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-6">
                                        <div className='px-6 space-y-3.5'>
                                            <div className="md:flex flex-wrap md:space-x-6 pb-2 space-y-3 md:space-y-0">
                                                <div className="flex-1 space-y-2">
                                                    <label className="text-sm">First name</label>
                                                    <div><input type="text" placeholder="Input the your first name" className="font-light border rounded w-full text-sm"></input></div>
                                                </div>
                                                <div className="flex-1 space-y-2">
                                                    <label className="text-sm">Last name</label>
                                                    <div><input type="text" placeholder="Input the last name" className="font-light border rounded w-full text-sm"></input></div>
                                                </div>
                                            </div>
                                            <label className=" text-sm font-light text-slate-700">Use your first and last name as they appear on your government-issued ID.</label>

                                            <div className="md:flex flex-wrap xl:space-x-6 items-center space-y-3 md:space-y-0">
                                                <div className=" w-full md:w-1/2 xl:flex-1 ">
                                                    <label className="text-sm">Email</label>
                                                    <p className='my-0 break-words py-0 text-sm'>adebayoiyanugreat97@gmail.com</p>
                                                    <a href="#" className='text-sm text-indigo-700'><label>Change Email</label></a>
                                                </div>
                                                <div className="w-full md:w-1/2 xl:flex-1 space-y-2">
                                                    <label className="text-sm">Phone (Optional)</label>
                                                    <div><input type="number" placeholder="Input your phone number" className="font-light border rounded w-full text-sm"></input></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-4 border-b">
                        <div className='flex flex-wrap md:gap-12 xl:gap-14 justify-center'>
                            <div className='md:w-3/12 space-y-5'>
                                <h3 className='pt-6  text-base font-medium'>Login service</h3>
                                <p className='pb-4 md:pb-0 text-sm font-light'>Connect an external login service to quickly and securely access your Merchantplace ID.</p>
                            </div>

                            <div className='md:w-8/12'>
                                <div className='shadow-md  bg-white rounded-lg'>
                                    <div className='border-b'>
                                        <div className='p-6 space-y-4'>
                                            <h3 className='text-base font-medium'>Login service</h3>
                                            <p className='font-light text-sm'>You do not have an external login service connected to your Shopify ID</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap p-6'>
                                        <img alt="Logo" src={googleicon} className="w-5 mr-3" />
                                        <a href='#' className='text-sm font-light text-indigo-700'>Continue with Google</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section className="py-4 border-b">
                        <div className='flex flex-wrap md:gap-12 xl:gap-14 justify-center'>
                            <div className='md:w-3/12 space-y-5'>
                                <h3 className='pt-6 text-base font-medium'>Preferred language</h3>
                                <p className='text-sm pb-4 md:pb-0 font-light'>When you're logged in to Shopify, this is the language you will see. It doesn't affect the language your customers see on your online store.</p>
                            </div>

                            <div className='md:w-8/12'>
                                <div className='shadow-md  bg-white rounded-lg'>
                                    <div className='border-b'>
                                        <div className="p-6 flex-1 space-y-2">
                                            <label className="text-sm">Language</label>
                                            <div>
                                                <select className="font-light text-sm border rounded w-full">
                                                    <option>English</option>
                                                    <option>French</option>
                                                    <option>Deutuch</option>
                                                    <option>Turkish</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-6 space-y-4'>
                                        <h3 className='text-base font-medium'>REGIONAL FORMAT</h3>
                                        <p className='font-light text-sm'>Your number, time, date, and currency formats are set for English (Nigeria).<br></br> <a href="#" className='text-indigo-700'>Change regional format.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section className="py-4">
                        <div className='flex flex-wrap md:gap-12 xl:gap-14 md:justify-center'>
                            <div className='md:w-3/12 space-y-5'>
                                <h3 className='text-left pt-6 text-base font-medium pb-4 md:pb-0'>Timezone</h3>
                            </div>

                            <div className='md:w-8/12'>
                                <div className='shadow-md  bg-white rounded-lg'>
                                <div className="p-6 flex-1 space-y-2">
                                            <label className="text-sm">Timezone</label>
                                            <div>
                                                <select className="font-light text-sm border rounded w-full">
                                                    <option>GMT</option>
                                                    <option>PST</option>
                                                    <option>CAT</option>
                                                    <option>GMT +1</option>
                                                </select>
                                            </div>
                                            <label className=" text-sm font-light text-slate-700">This is the timezone for your account. To set the timezone for your Merchantplace admin, go to the General section in Settings.</label>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>








                </div>
            </main>


        </>
    )
}