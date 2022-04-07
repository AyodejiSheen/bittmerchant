import React, {useState} from "react";
import product1 from '../../../media/products/1.webp'
import product2 from '../../../media/products/2.webp'
import product3 from '../../../media/products/3.webp'





export const Products = () => {

    // for nav tabs
    const [active, setActive] = useState("tab1");
    const [hide, setHide] = useState(false);
    const [acc, setAcc] = useState(false)
  
    const handleChange = (value) => {
      setActive(value);
      console.log(active)
    };
  
    // for eye
    const handleView = (value) => {
      setHide(value)
    }

    // to hide eye
    const hideView = () => {
      setHide(false)
    }


    // for more filter accordion
    const handleAcc = () => {
      setAcc(!acc);
      console.log("am clicked")
    }


      //for dropdown options
  const [drop, setDrop] = useState("");

  const handledrop = (e) => {
    setDrop(e);
  };



  return (
    <>



    
      <main className="my-24 px-6 md:px-12">

          {/* upper section */}
            <div className="flex items-center justify-between pb-10 border-b">
                <h4 className="md:text-xl font-medium pt-4">Products</h4>

                <div className="flex items-center space-x-8 font-medium text-sm">
                    <p>Export</p>
                    <p>Import</p>
                    <button className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-900">Add Product</button>
                </div>
            </div>


    {/* table begin */}

        <section className="shadow bg-white px-6 pt-2 pb-5 text-sm ">
            <div className="space-x-8 border-b">
                <button className="focus:border-b-2 border-indigo-700 px-3 py-3" onClick={() => handleChange('tab1')}>All</button>
                <button className="focus:border-b-2 border-indigo-700 px-3 py-3" onClick={() => handleChange('tab2')}>Active</button>
                <button className="focus:border-b-2 border-indigo-700 px-3 py-3" onClick={() => handleChange('tab3')}>Draft</button>
                <button className="focus:border-b-2 border-indigo-700 px-3 py-3" onClick={() => handleChange('tab4')}>Archived</button>
            </div>


            <div className=" mt-5">
              <div hidden={active !== 'tab1'} className="">
                <div>
                  <div className="flex justify-between font-medium">
                  <input type="search" placeholder="Filter products" className="rounded-md text-sm w-1/2"/>
                  <div className="flex flex-wrap">
                      <div className="border py-2.5  px-4 cursor-pointer hover:bg-slate-50 transition-all rounded-l-md" onClick={() => handledrop('vendor')}>Product vendor <i className="ml-3 fa-solid fa-caret-down"></i>                   
                  <div  hidden={drop !== "vendor"} className="absolute shadow text-xs bg-white -ml-6 py-5 px-4 z-40 rounded-md space-y-2.5 ">
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Great Phone Store</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Tets</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Shopify</div>
                      <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                  </div> 
                  </div>



                      <div className="border py-2.5  px-4 cursor-pointer hover:bg-slate-50 transition-all" onClick={() => handledrop('tagged')}>Tagged with  <i className="ml-3 fa-solid fa-caret-down"></i> 
                          <div  hidden={drop !== "tagged"} className="absolute shadow text-xs bg-white -ml-6 py-5 px-4 z-40 rounded-md space-y-2.5 ">
                          <input type="text" className="border w-full rounded-md border-slate-300"/>
                          <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                      </div>                       
                      </div>




                      <div className="border py-2.5  px-4 cursor-pointer hover:bg-slate-50 transition-all " onClick={() => handledrop('status')}>Status  <i className="ml-3 fa-solid fa-caret-down"></i>
                      <div  hidden={drop !== "status"} className="absolute shadow text-xs bg-white -ml-6 py-5 px-4 z-40 rounded-md space-y-2.5 ">
                      <div><input type="checkbox" className="rounded focus:ring-0 mr-2"/> Active</div>
                      <div><input type="checkbox" className="rounded focus:ring-0 mr-2"/> Draft</div>
                      <div><input type="checkbox" className="rounded focus:ring-0 mr-2"/> Archived</div>
                      <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                  </div> 


                      </div>




                      
                      <div className="border py-2.5  px-4 cursor-pointer hover:bg-slate-50 transition-all rounded-r-md" onClick={handleAcc}>More filters</div>
                  </div>

                  <div className="flex flex-wrap">
                      <div className="border py-2.5  cursor-pointer hover:bg-slate-50  px-4 rounded-l-md" >Saved</div>



                      <div className="border py-2.5   cursor-pointer hover:bg-slate-50  px-4 rounded-r-md"  onClick={() => handledrop('sort')}>Sort
                      <div  hidden={drop !== "sort"} className="absolute shadow text-xs bg-white -ml-28 py-5 px-4 z-40 rounded-md space-y-2.5 w-max">
                        <p>Sort  by</p>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Product title A-Z</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Product title Z-A</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Created (oldest first)</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Created (newest first)</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Updated (oldest first)</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Updated (newest first)</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Low inventory</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> High inventory</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Product type A-Z</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> product type Z-A</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/>Vendor A-Z</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Vendor Z-A</div>
                      <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                  </div>                       
                      </div>
                  </div> 
                  </div>

                    
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6 ">
                    <table className=" w-full text-sm text-left">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-medium">                  
                        <tr>
                        <th scope="col" className="px-6 py-3 w-10"><input type="checkbox" className="focus:ring-0 rounded"/></th>
                        <th scope="col" className="px-6 py-3">Product</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Inventory</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Vendor</th>
                        </tr>
                      </thead>

                      <tbody className="cursor-pointer">

                          <tr className="bg-white border-b">
                            <th scope="col" className="px-6 py-3"><input type="checkbox" className="focus:ring-0 rounded"/></th>
                            <td className="px-6 py-3 flex items-center space-x-6 font-medium">
                              <img src={product1} className="w-8" /> <span className="hover:font-semibold hover:text-black hover:underline" onMouseOver={()=> handleView('view1')} onMouseLeave={hideView}>Awesome Sneakers</span>
                              <div hidden={hide !== "view1"} className="absolute translate-x-48">
                              <i class="fa-solid fa-eye"></i>
                              </div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="bg-emerald-300 w-16 text-center rounded-full text-xs py-1.5">Active</div>
                            </td>
                            <td className="px-6 py-3 text-red-600">0 in stock</td>
                            <td className="px-6 py-3 ">kicks</td>
                            <td className="px-6 py-3">Tets</td>
                          </tr>


                          <tr className="bg-white border-b">
                            <th scope="col" className="px-6 py-3"><input type="checkbox" className="focus:ring-0 rounded"/></th>
                            <td className="px-6 py-3 flex items-center space-x-6 font-medium">
                              <img src={product1} className="w-8" /> <span className="hover:font-semibold hover:text-black hover:underline" onMouseOver={()=> handleView('view2')} onMouseLeave={hideView}>Cool Sneakers</span>
                              <div hidden={hide !== "view2"} className="absolute translate-x-48">
                              <i className="fa-solid fa-eye"></i>
                              </div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="bg-emerald-300 w-16 text-center rounded-full text-xs py-1.5">Active</div>
                            </td>
                            <td className="px-6 py-3 text-slate-500">Inventory not tracked</td>
                            <td className="px-6 py-3 ">kicks</td>
                            <td className="px-6 py-3">Tets</td>
                          </tr>

                          
                      </tbody>
                    </table>
                  </div>




        





              


























                </div>
              </div>







              <div hidden={active !== 'tab2'}>tab 2</div>
              <div hidden={active !== 'tab3'}>tab 3</div>
              <div hidden={active !== 'tab4'}>tab 4</div>
            </div>


                  {/* More filter Accordion */}

                  <div             className={` backdrop-blur-lg w-full overflow-y-scroll md:w-80 xl:w-96 md:h-full bg-white/30 mt-5 min-h-screen  inset-y-0 right-0 top-12  shadow-2xl transform fixed transition duration-300 ease-in-out z-40 ${ acc ? "translate-x-0" : "translate-x-full"}`}>

                    <button className="bg-indigo-700 text-white mt-48" onClick={handleAcc}>close</button>
                    <p>Welcome</p>
                  </div>

                  
        </section>




      </main>
    </>
  );
};
