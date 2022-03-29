import React, {useState} from "react";
import product1 from '../../../media/products/1.webp'
import product2 from '../../../media/products/2.webp'
import product3 from '../../../media/products/3.webp'





export const Products = () => {

    // for nav tabs
    const [active, setActive] = useState("tab1");
    const [hide, setHide] = useState(false);
  
    const handleChange = (value) => {
      setActive(value);
      console.log(active)
    };
  
    const handleView = (value) => {
      setHide(value)
    }

    const hideView = () => {
      setHide(false)
    }



  return (
    <>
      <main className="my-24 px-6 md:px-12  h-screen">

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
                  <div className="flex flex-wrap  justify-between font-medium">
                  <input type="search" placeholder="Filter products" className="rounded-md text-sm w-1/2"/>
                  <div className="flex flex-wrap">
                      <div className="border py-2.5  px-4 cursor-pointer hover:bg-slate-50 transition-all rounded-l-md">Product vendor </div>
                      <div className="border py-2.5  px-4 cursor-pointer hover:bg-slate-50 transition-all">Tagged with</div>
                      <div className="border py-2.5  px-4 cursor-pointer hover:bg-slate-50 transition-all ">Status</div>
                      <div className="border py-2.5  px-4 cursor-pointer hover:bg-slate-50 transition-all rounded-r-md">More filters</div>
                  </div>

                  <div className="flex flex-wrap">
                      <div className="border py-2.5  cursor-pointer hover:bg-slate-50  px-4 rounded-l-md" >Saved</div>
                      <div className="border py-2.5   cursor-pointer hover:bg-slate-50  px-4 rounded-r-md" >Sort</div>
                  </div> 
                  </div>

                    
                  <div className="relative  shadow-md sm:rounded-lg mt-6">
                    <table className="text-sm text-left">
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
                              <i class="fa-solid fa-eye"></i>
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
        </section>




      </main>
    </>
  );
};
