import React, { useState } from "react";
import { Link } from "react-router-dom";





export const AddNewProduct = () => {

    const [drop, setDrop] = useState("");

    const handledrop = (e) => {
      if (drop === "") {
        setDrop(e)
      }else{
          setDrop("")
      }
    };





    return (
        <>

            <main className="">

                <section className=" xl:w-11/12 2xl:w-10/12 my-24 px-5  md:px-12 mx-auto space-y-8">
                    <div className="border-b pb-8">
                        <div className="flex flex-wrap gap-5 items-center pt-4 mb-8">
                            <Link to="/dashboard/products">
                            <button className="border-2 rounded px-6 py-2.5 "><i class="text-base fa-solid fa-arrow-left-long"></i></button>
                            </Link>
                            <h4 className="text-lg md:text-xl font-medium">Add Product</h4>
                        </div>

                        <section className="flex flex-wrap flex-col xl:flex-row space-y-10 xl:space-y-0">
                            <div className="space-y-6 md:space-y-8 lg:space-y-10 w-full xl:w-2/3 mx-auto" >
                                <section className="shadow-md rounded-lg bg-white p-8 space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-sm">Title</label>
                                        <div><input type="text" placeholder="Input the title" className="font-light border rounded w-full"></input></div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm">Description</label>
                                        <div><textarea rows="8" placeholder="Input the title" className="font-light border rounded w-full"></textarea></div>
                                    </div>
                                </section>


                                <section className="shadow-md rounded-lg bg-white p-8 space-y-5">
                                    <h2 className="font-medium">Media</h2>
                                    <div className="border border-dashed py-12 rounded hover:bg-slate-50">
                                        <div className="text-center space-x-6 space-y-3">
                                            <button className="font-light text-sm bg-indigo-200 text-indigo-700 px-3 rounded py-1">Add file</button>
                                            <button className="font-light text-sm border  px-3 rounded py-1 hover:underline">Add from URL</button>
                                        </div>
                                            <p className="text-center mt-3 text-sm font-light">Accepts images, videos, or 3D models</p>
                                    </div>
                                </section>

                                <section className="shadow-md rounded-lg bg-white p-8 space-y-5">
                                    <h2 className="font-medium">Pricing</h2>
                                    <div className="flex flex-wrap space-x-6 ">
                                        <div className="flex-1 space-y-2">
                                            <label className="text-sm">Price</label>
                                            <div><input type="text" placeholder="Input the title" className="font-light border rounded w-full"></input></div>
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <label className="text-sm">Compare at price</label>
                                            <div><input type="text" placeholder="Input the title" className="font-light border rounded w-full"></input></div>
                                        </div>
                                    </div>
                                    <div className="text-sm font-light"> <input type="checkbox" className="rounded w-6 h-6 mr-4 focus:ring-0"></input> Charge tax on this product</div>
                                    <div className="space-y-2">
                                        <label className="text-sm">Cost per item</label>
                                        <div><input type="text" placeholder="Input the title" className="font-light border rounded w-full"></input></div>
                                        <label className="text-sm font-light">customers won't see this</label>
                                    </div>
                                </section>


                                <section className="shadow-md rounded-lg bg-white py-8">
                                    <div className="px-8 space-y-5 pb-5">
                                        <h2 className="font-medium">Inventory</h2>
                                        <div className="flex flex-wrap space-x-6 ">
                                            <div className="flex-1 space-y-2">
                                                <label className="text-sm">SKU (Stock Keeping Unit)</label>
                                                <div><input type="text" placeholder="Input the title" className="font-light border rounded w-full"></input></div>
                                            </div>
                                            <div className="flex-1 space-y-2">
                                                <label className="text-sm">Barcode (ISBN, UPC, GTIN, etc.)</label>
                                                <div><input type="text" placeholder="Input the title" className="font-light border rounded w-full"></input></div>
                                            </div>
                                        </div>
                                        <div className="text-sm font-light"> <input type="checkbox" checked className="rounded w-6 h-6 mr-4 focus:ring-0"></input> Track quantity</div>
                                        <div className="text-sm font-light"> <input type="checkbox" className="rounded w-6 h-6 mr-4 focus:ring-0"></input> Continue selling when out of stock</div>
                                    </div>

                                    <div className="border-t space-y-5">
                                        <div className="space-y-5 px-8">
                                            <h3 className="pt-5 text-sm">QUANTITY</h3>
                                            <div className="flex flex-wrap justify-between text-sm border-b pb-5">
                                                <p>Location name</p>
                                                <p>Available</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap justify-between items-center px-8 pt-5">
                                        <p className="text-sm font-light">333 Fremont Street</p>
                                        <input type="number" className="rounded w-96" />
                                    </div>
                                </section>


                                <section className="shadow-md rounded-lg bg-white py-8 space-y-5">
                                    <div className="px-8 space-y-5">
                                        <h2 className="font-medium">Shipping</h2>
                                        <div className="text-sm font-light"> <input type="checkbox" checked className="rounded w-6 h-6 mr-4 focus:ring-0"></input> This is a physical product</div>
                                    </div>

                                    <div className="border-t border-b">
                                        <div className="px-8 space-y-3 py-5">
                                            <h3 className="text-sm">WEIGHT</h3>
                                            <p className="text-sm font-light">Used to calculate shipping rates at checkout and label prices during fulfillment.</p>
                                            <div className="flex-1 space-y-2">
                                                <label className="text-sm">Weight</label>
                                                <div className="w-96 flex flex-wrap space-x-4 hidden">
                                                    <input type="number" placeholder="Input the title" className="font-light border rounded"></input>
                                                    <select className="rounded border font-light text-sm">
                                                        <option>Ib</option>
                                                        <option>oz</option>
                                                        <option>kg</option>
                                                        <option>g</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="px-8 space-y-3">
                                            <h3 className="text-sm">CUSTOMS INFORMATION</h3>
                                            <p className="text-sm font-light">Customs authorities use this information to calculate duties when shipping internationally. Shown on printed customs forms.</p>
                                            <div className="space-y-2">
                                                <label className="text-sm">Country/Region of origin</label>
                                                <div>
                                                    <select className="font-light border rounded w-full">
                                                        <option disabled>Select country/region</option>
                                                        <option>Nigeria</option>
                                                        <option>USA</option>
                                                        <option>Poland</option>
                                                    </select>
                                                </div>
                                                <label className="text-sm font-light">In most cases, where the product is manufactured.</label>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm">HS (Harmonized System) code</label>
                                                <div><input type="search" placeholder="Input the title" className="font-light border rounded w-full"></input></div>
                                                <label className="text-sm font-light">Manually enter codes that are longer than 6 numbers.</label>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>







                            {/* the other side start */}
                            <div className="w-full xl:w-1/4  flex flex-wrap xl:block space-y-8 mx-auto">
                                <div className="w-full bg-white shadow text-xs py-6 rounded-md ">
                                    <div className="border-b">
                                        <div className="px-6 pb-6 space-y-6">
                                            <h2 className=" text-base font-medium">Product Status</h2>
                                            <div className="space-y-2">
                                                <div>
                                                    <select className="font-light border rounded w-full mb-3">
                                                        <option>Draft</option>
                                                        <option>Active</option>
                                                    </select>
                                                </div>
                                                <label className="text-sm font-light ">This product will be hidden from all sales channels.</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-6 pt-6 space-y-4">
                                    <h3 className="text-sm">SALES CHANNELS AND APPS</h3>
                                    <div className="space-y-4 ml-6">
                                    <div className="text-sm font-light"> <input type="checkbox" checked className="rounded w-6 h-6 mr-4 focus:ring-0"></input> Online store</div>
                                    <button className="text-indigo-700 hover:underline">Schedule Availability</button>
                                    </div>
                                    </div>
                                </div>


                                <div className="w-full bg-white shadow text-xs py-6 rounded-md ">
                                    <div className="border-b">
                                        <div className="px-6 pb-6 space-y-6">
                                            <h2 className=" text-base font-medium">Product Organization</h2>
                                            <div className="space-y-6 border-b pb-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm">Type</label>
                                                    <div><input type="search" placeholder="Search types" className=" text-sm font-light border rounded w-full"></input></div>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="flex flex-wrap justify-between">
                                                    <label className="text-sm">Custom Type</label>
                                                    <label className="text-sm hover:underline text-indigo-700">Remove</label>
                                                    </div>
                                                    <div><input type="search" placeholder="Search types" className=" text-sm font-light border rounded w-full"></input></div>
                                                </div>    
                                            </div>
                                        </div>

                                        <div className="px-6 pb-6 space-y-6">
                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm">Vendor</label>
                                                    <div><input type="search" placeholder="Search types" className=" text-sm font-light border rounded w-full"></input></div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm">Collections</label>
                                                    <div><input type="search" placeholder="Search types" className=" text-sm font-light border rounded w-full" onFocus={()=>handledrop("collections")}></input></div>
                                                    <div hidden={drop !== "collections"} className="absolute shadow text-xs bg-white  py-5 px-4 z-40 rounded-md space-y-2.5 w-80">
                                                        <div><input type="checkbox" className="rounded focus:ring-0 mr-2" /> Female</div>
                                                        <div><input type="checkbox" className="rounded focus:ring-0 mr-2" /> Male</div>
                                                        <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                                                    </div>

                                                </div>    
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="px-6 pt-6 space-y-2">
                                    <div className="flex flex-wrap justify-between">
                                                    <label className="text-sm">TAGS</label>
                                                    <label className="text-sm hover:underline text-indigo-700">Manage</label>
                                                    </div>
                                                    <div><input type="search" placeholder="Search types" className=" text-sm font-light border rounded w-full" ></input></div>
                                    </div>
                                </div>




                                <div className="w-full bg-white shadow text-xs py-6 rounded-md ">
                                    <div className="">
                                        <div className="px-6 pb-6 space-y-6">
                                            <h2 className=" text-base font-medium">Online Store</h2>
                                            <div className="space-y-2">
                                                <label className="text-sm font-light ">Theme template</label>
                                                <div>
                                                    <select className="font-light border rounded w-full mb-3">
                                                        <option>Default product</option>
                                                    </select>
                                                </div>
                                                <label className="text-sm font-light ">Assign a template from your current theme to define how the product is displayed.</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>









                            </div>










                            {/* End of side part */}
                        </section>

                    </div>

                    <div className=" text-right">
                        <button className="rounded bg-slate-400 px-6 py-2">Save</button>
                    </div>



                </section>



            </main>


        </>
    )
}