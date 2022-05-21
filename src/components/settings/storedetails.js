import { useState } from "react";
import { Link } from 'react-router-dom'

export const StoreDetails = () => {

    const [flagval, setFlagval] = useState("flag");
    const [save, setSave] = useState(false);


    const onEdit = () => {
        setSave(true)
    }

    const Close = () => {
        setSave(false)
    }


    const ChangeEdit = (val) => {
        setFlagval(val)
    }


    return (
        <>

            <main className='px-5 lg:px-0'>


                {save && (
                    <div className="mt-16 bg-indigo-700 p-2 w-full">
                        <div className="space-x-6 text-right">
                            <button className="bg-black text-white px-5 py-3 font-medium" onClick={Close}>Discard</button>
                            <button className="bg-white text-indigo-700 px-5 py-3 font-medium">Save</button>
                        </div>
                    </div>
                )}


                <div className={`mx-auto md:3/4 lg:w-11/12 xl:w-10/12 2xl:w-2/3 ${save ? "my-8" : "my-24"}`}>

                    <div className='border-b border-black pb-6'>
                        <h3 className='text-xl font-medium'>Store details</h3>
                    </div>


                    <div className="mt-8 space-y-8">

                        <section className="shadow-md bg-white rounded-lg border-b w-full px-auto">
                            <div className="border-b px-6 py-5">
                                <div className="flex flex-wrap justify-between items-center">
                                    <p className="text-base font-semibold">Basic information</p>
                                    <div>
                                        <p className="text-sm text-indigo-700 cursor-pointer" onClick={() => ChangeEdit("flag1")}>{flagval !== "flag1" && ("Edit")}</p>
                                        <p className="text-sm text-indigo-700 cursor-pointer" onClick={() => ChangeEdit("flag")}>{flagval === "flag1" && ("Close")}</p>
                                    </div>
                                </div>
                            </div>

                            {flagval !== "flag1" ? (<div>
                                <div className="flex flex-wrap justify-between px-6 py-5">
                                    <div className="w-1/2">
                                        <div className="flex flex-wrap  space-x-4 items-center">
                                            <div className="w-12 h-12 text-lg flex items-center justify-center text-white rounded-full bg-slate-200 text-center p-auto">
                                                <i className="fa-solid fa-store text-xl"></i>
                                            </div>
                                            <p className="text-sm font-semibold">The Plaza</p>
                                        </div>
                                    </div>

                                    <div className="w-1/2">
                                        <div className="flex flex-wrap space-x-4 items-center">
                                            <div className="w-12 h-12 text-lg flex items-center justify-center text-white rounded-full bg-slate-200 text-center p-auto">
                                                <i class="fa-solid fa-hotel text-xl"></i>
                                            </div>
                                            <div>
                                                <p className=" text-slate-400 text-sm">Industry</p>
                                                <p className="text-sm">Other</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>) : (

                                <div className="space-y-4 px-6 py-5">

                                    <div className="w-3/5 space-y-2">
                                        <label className="text-sm">Store name</label>
                                        <div><input type="text" placeholder="Input the your first name" className="font-light border rounded w-full text-sm" onFocus={onEdit}></input></div>
                                    </div>

                                    <div className="w-3/5 space-y-2">
                                        <label className="text-sm">Legal name of company</label>
                                        <div><input type="text" placeholder="Input the your first name" className="font-light border rounded w-full text-sm"></input></div>
                                    </div>

                                    <div className="w-3/5 space-y-2">
                                        <label className="text-sm">Store industry</label>
                                        <div><input type="text" placeholder="Input the your first name" className="font-light border rounded w-full text-sm"></input></div>
                                    </div>

                                </div>
                            )}
                        </section>


                        <section className="shadow-md bg-white rounded-lg border-b w-full px-auto">
                            <div className="border-b px-6 py-5">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div>
                                        <p className="text-base font-semibold">Address</p>
                                        <label className="text-sm">Used on customer order confirmations and your Shopify bill.</label>
                                    </div>
                                    <div>
                                        <p className="text-sm text-indigo-700 cursor-pointer" onClick={() => ChangeEdit("flag2")}>{flagval !== "flag2" && ("Edit")}</p>
                                        <p className="text-sm text-indigo-700 cursor-pointer" onClick={() => ChangeEdit("flag")}>{flagval === "flag2" && ("Close")}</p>
                                    </div>
                                </div>
                            </div>

                            {flagval !== "flag2" ? (<div>
                                <div className="flex flex-wrap items-center space-x-4  px-6 py-5">

                                    <div className="w-12 h-12 text-lg flex items-center justify-center text-white rounded-full bg-slate-200 text-center p-auto">
                                        <i class="fa-solid fa-location-dot text-xl"></i>
                                    </div>


                                    <div className="text-slate-800 font-semibold">
                                        <p className="text-sm">333 Fremont Street, San Francisco California 94105, United States</p>
                                    </div>
                                </div>
                            </div>) : (

                                <div className="space-y-4 px-6 py-5">

                                    <div className=" space-y-2">
                                        <label className="text-sm">Address</label>
                                        <div><input type="text" placeholder="Input the your first name" className="font-light border rounded w-full text-sm"></input></div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm">Apartment, suite, etc.</label>
                                        <div><input type="text" placeholder="Input the your first name" className="font-light border rounded w-full text-sm"></input></div>
                                    </div>

                                    <div className=" space-y-2">
                                        <label className="text-sm">City</label>
                                        <div><input type="text" placeholder="Input the your first name" className="font-light border rounded w-full text-sm"></input></div>
                                    </div>

                                    <div className="flex flex-wrap items-center">
                                        <div className="w-1/3  space-y-2">
                                            <label className="text-sm">Country/region</label>
                                            <div><input type="text" placeholder="Input the your first name" className="font-light border rounded w-full text-sm"></input></div>
                                        </div>

                                        <div className="w-1/3 px-3 space-y-2">
                                            <label className="text-sm">State</label>
                                            <div><input type="text" placeholder="Input the your first name" className="font-light border rounded w-full text-sm"></input></div>
                                        </div>

                                        <div className="w-1/3 space-y-2">
                                            <label className="text-sm">ZIP code</label>
                                            <div><input type="text" placeholder="Input the your first name" className="font-light border rounded w-full text-sm"></input></div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </section>




                        <section className="shadow-md bg-white rounded-lg border-b w-full px-auto">
                            <div className="border-b px-6 py-5">
                                <div className="flex flex-wrap justify-between items-center">
                                    <p className="text-base font-semibold">Contact information</p>
                                    <div>
                                        <p className="text-sm text-indigo-700 cursor-pointer" onClick={() => ChangeEdit("flag3")}>{flagval !== "flag3" && ("Edit")}</p>
                                        <p className="text-sm text-indigo-700 cursor-pointer" onClick={() => ChangeEdit("flag")}>{flagval === "flag3" && ("Close")}</p>
                                    </div>
                                </div>
                            </div>

                            {flagval !== "flag3" ? (<div>
                                <div>
                                    <div className="flex flex-wrap justify-between px-6 py-5">
                                        <div className="w-1/2 flex flex-wrap items-center space-x-4">
                                            <div className="w-12 h-12 text-lg flex items-center justify-center text-white rounded-full bg-slate-200 text-center p-auto">
                                                <i class="fa-solid fa-phone text-xl"></i>
                                            </div>
                                            <p className="text-sm font-semibold">08101560887</p>
                                        </div>

                                        <div className="w-1/2 flex flex-wrap items-center space-x-4">
                                            <div className="w-12 h-12 text-lg flex items-center justify-center text-white rounded-full bg-slate-200 text-center p-auto">
                                                <i class="fa-solid fa-envelope text-xl"></i>
                                            </div>

                                            <div>
                                                <p className=" text-sm font-semibold">aoluwasegun009@gmail.com</p>
                                                <p className="text-sm text-slate-400">Merchantplace uses this to contact you</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-5">
                                        <div className="w-1/2 flex flex-wrap items-center space-x-4">
                                            <div className="w-12 h-12 text-lg flex items-center justify-center text-white rounded-full bg-slate-200 text-center p-auto">
                                                <i class="fa-solid fa-envelope text-xl"></i>
                                            </div>

                                            <div>
                                                <p className=" text-sm font-semibold">aoluwasegun009@gmail.com</p>
                                                <p className="text-sm text-slate-400">Customers see this if you email them</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>) : (

                                <div className="space-y-4 px-6 py-5">

                                    <div className="w-3/5 space-y-2">
                                        <label className="text-sm">Phone</label>
                                        <div><input type="text" placeholder="Input the your first name" className="font-light border rounded w-full text-sm"></input></div>
                                    </div>

                                    <div className="w-3/5 space-y-2">
                                        <label className="text-sm">Store contact email</label>
                                        <div><input type="text" placeholder="Input the your first name" className="font-light border rounded w-full text-sm"></input></div>
                                        <label className="text-sm">Shopify uses this to contact you</label>
                                    </div>

                                    <div className="w-3/5 space-y-2">
                                        <label className="text-sm">Sender email</label>
                                        <div><input type="text" placeholder="Input the your first name" className="font-light border rounded w-full text-sm"></input></div>
                                        <label className="text-sm">Customers see this if you email them</label>
                                    </div>

                                </div>
                            )}

                            <div className="px-5 py-4 rounded-md border border-indigo-700 bg-indigo-100 mx-6 mb-5">
                                <p className="text-sm"><i className="fa-solid fa-circle-exclamation mr-3"></i> Emails you send may show up differently in some customers' inboxes. <Link to="#" className="text-indigo-700">View email settings</Link></p>
                            </div>
                        </section>



                        <section className="shadow-md bg-white rounded-lg border-b w-full px-auto">
                            <div className="border-b px-6 py-5">
                                <div className="">
                                    <div>
                                        <p className="text-base font-semibold">Store currency</p>
                                        <label className="text-sm">The currency your products are sold in. To change your payout currency, go to <Link to="#" className="text-indigo-700">payments settings.</Link> </label>
                                    </div>
                                </div>
                            </div>
                            <div>

                                <div className="px-6 py-5">
                                    <div className=" space-y-2">
                                        <label className="text-sm">Store currency</label>
                                        <div className="flex flex-wrap justify-between items-center">
                                            <div className="w-3/5">
                                                <input type="number" placeholder="US dollar USD" className="font-light border rounded w-full text-sm"></input>
                                            </div>

                                            <div>
                                                <p className="text-sm text-indigo-700 cursor-pointer" onClick={() => ChangeEdit("flag4")}>{flagval !== "flag4" && ("Change formatting")}</p>
                                                <p className="text-sm text-indigo-700 cursor-pointer" onClick={() => ChangeEdit("flag")}>{flagval === "flag4" && ("Close formatting")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {flagval === "flag4" && (
                                    <div className="space-y-4 px-6 py-5">
                                        <div>
                                            <p className="text-base font-semibold">CURRENCY FORMATTING</p>
                                            <label className="text-sm">Change how currencies are displayed on your store. {'{amount}'} and {'{amount_no_decimals}'} will be replaced with the price of your product. </label>
                                        </div>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/2 pr-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm">HTML with currency</label>
                                                    <div><input type="text" placeholder="{amount} USD" className="font-light border rounded w-full text-sm"></input></div>
                                                </div>
                                            </div>

                                            <div className="w-1/2 pl-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm">HTML without currency</label>
                                                    <div><input type="text" placeholder="{amount}" className="font-light border rounded w-full text-sm"></input></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/2 pr-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm">Email with currency</label>
                                                    <div><input type="text" placeholder="{amount} USD" className="font-light border rounded w-full text-sm"></input></div>
                                                </div>
                                            </div>

                                            <div className="w-1/2 pl-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm">Email without currency</label>
                                                    <div><input type="text" placeholder="{amount}" className="font-light border rounded w-full text-sm"></input></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>

                        </section>



                        <section className="shadow-md bg-white rounded-lg border-b w-full px-auto">
                            <div className="border-b px-6 py-5">
                                <div className="">
                                    <div>
                                        <p className="text-base font-semibold">Standards and formats</p>
                                        <label className="text-sm">Used to calculate product prices, shipping weights, and order times.</label>
                                    </div>
                                </div>
                            </div>



                            <div className="px-6 py-5 border-b">

                                <div className="w-3/4 space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm">Time zone</label>
                                        <div><input type="number" placeholder="{amount} USD" className="font-light border rounded w-full text-sm"></input></div>
                                    </div>

                                    <div className="flex flex-wrap">
                                        <div className="w-1/2 pr-4">
                                            <div className="space-y-2">
                                                <label className="text-sm">Unit system</label>
                                                <div><input type="number" placeholder="{amount} USD" className="font-light border rounded w-full text-sm"></input></div>
                                            </div>
                                        </div>

                                        <div className="w-1/2 pl-4">
                                            <div className="space-y-2">
                                                <label className="text-sm">Default weight unit</label>
                                                <div><input type="number" placeholder="{amount}" className="font-light border rounded w-full text-sm"></input></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="space-y-4 px-6 py-5">
                                    <div>
                                        <p className="text-base font-semibold">EDIT ORDER ID FORMAT (OPTIONAL)</p>
                                        <label className="text-sm">Order numbers start at #1001 by default. While you can’t change the order number itself, you can add a prefix or suffix to create IDs like "EN1001" or "1001-A."</label>
                                    </div>

                                    <div className="flex flex-wrap">
                                        <div className="w-1/2 pr-4">
                                            <div className="space-y-2">
                                                <label className="text-sm">Prefix</label>
                                                <div><input type="text" placeholder="{amount} USD" className="font-light border rounded w-full text-sm"></input></div>
                                            </div>
                                        </div>

                                        <div className="w-1/2 pl-4">
                                            <div className="space-y-2">
                                                <label className="text-sm">Suffix</label>
                                                <div><input type="text" placeholder="{amount}" className="font-light border rounded w-full text-sm"></input></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm">Your order ID will appear as #1001, #1002, #1003 ...</label>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <div className="text-right">
                            <button className="bg-slate-300 px-6 py-4 rounded-md">Save</button>
                        </div>













                    </div>




                </div>
            </main>

        </>
    )
}