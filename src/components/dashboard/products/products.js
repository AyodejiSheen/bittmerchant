import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import product1 from '../../../media/products/1.webp'
import product2 from '../../../media/products/2.webp'
import product3 from '../../../media/products/3.webp'



// for Accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";





export const Products = () => {

  // for nav tabs
  const [active, setActive] = useState("tab1");
  const [hide, setHide] = useState(false);
  const [acc, setAcc] = useState(false)

  const handleChangeNavTab = (value) => {
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


  // accordion
  const [expanded, setExpanded] = React.useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [arrow, setArrow] = useState(false);

  const handleChangeAcc = (panel) => {
    setExpanded(isExpanded ? panel : false);
    setArrow  (isExpanded === panel)
    setIsExpanded(!isExpanded);
  };



  // useEffect(() => {
  //   console.log(expanded);
  //   console.log(isExpanded)

  //   if (expanded === "panel1") {
  //     console.log("yes")
  //   } else {
  //     console.log("no")
  //   }

  // })

  //for dropdown options
  const [drop, setDrop] = useState("");

  const handledrop = (e) => {
    if (drop === "") {
      setDrop(e)
    } else {
      setDrop("");
    }
  };



  return (
    <>

      <main className="my-24 px-6 md:px-12">

        {/* upper section */}
        <div className="flex items-center justify-between pb-10 border-b">
          <h4 className=" text-lg md:text-xl font-medium pt-4">Products</h4>

          <div className="flex items-center space-x-8 font-medium text-sm">
            <p className="hidden md:inline-block">Export</p>
            <p className="hidden md:inline-block">Import</p>
            <div>

              <button className="md:hidden border px-4  rounded-md" onClick={() => handledrop('action')}> <i className=" text-xl fa-solid fa-ellipsis "></i> </button>
              <div hidden={drop !== "action"} className="absolute shadow bg-white -ml-6  z-40 rounded-md space-y-2.5 ">
                <div className="border-b py-2 px-4"> <button>Import</button></div>
                <div className="border-b py-2 px-4"><button>Export</button></div>
              </div>
            </div>

            <Link to="addnewproduct">
            <button className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-900">Add Product</button>
            </Link>
          </div>
        </div>


        {/* table begin */}

        <section className="shadow bg-white px-3 md:px-6 pt-2 pb-5 text-sm ">
          <div className=" space-x-2 md:space-x-8 border-b">
            <button className="focus:border-b-2 border-indigo-700 px-3 py-3" onClick={() => handleChangeNavTab('tab1')}>All</button>
            <button className="focus:border-b-2 border-indigo-700 px-3 py-3" onClick={() => handleChangeNavTab('tab2')}>Active</button>
            <button className="focus:border-b-2 border-indigo-700 px-3 py-3" onClick={() => handleChangeNavTab('tab3')}>Draft</button>
            <button className="focus:border-b-2 border-indigo-700 px-3 py-3" onClick={() => handleChangeNavTab('tab4')}>Archived</button>
          </div>


          <div className=" mt-5">
            <div hidden={active !== 'tab1'} className="">
              <div>
                <div className="md:flex flex-wrap space-y-4 md:space-y-0 justify-between font-medium">
                  <input type="search" placeholder="Filter products" className="rounded-md text-xs md:text-xs xl:text-sm w-full md:w-1/4 lg:w-1/5  xl:w-80 2xl:w-1/2" />
                  <div className="flex flex-wrap justify-between">
                    <div>
                      <div className="border py-2.5 px-4 md:px-3 2xl:px-4 text-xs xl:text-sm  cursor-pointer hover:bg-slate-50 transition-all rounded-l-md" onClick={() => handledrop('vendor')}>Product vendor <i className="ml-3 fa-solid fa-caret-down"></i> </div>
                      <div hidden={drop !== "vendor"} className="absolute shadow text-xs bg-white -ml-6 py-5 px-4 z-40 rounded-md space-y-2.5 ">
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Great Phone Store</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Tets</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Shopify</div>
                        <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                      </div>
                    </div>

                    <div>
                      <div className="hidden md:inline-block border py-2.5  px-4 md:px-3 2xl:px-4 text-xs xl:text-sm cursor-pointer hover:bg-slate-50 transition-all" onClick={() => handledrop('tagged')}>Tagged with  <i className="ml-3 fa-solid fa-caret-down"></i> </div>
                      <div hidden={drop !== "tagged"} className="absolute shadow text-xs bg-white -ml-6 py-5 px-4 z-40 rounded-md space-y-2.5 ">
                        <input type="search" className="border w-full rounded-md border-slate-300 text-xs xl:text-sm" />
                        <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                      </div>
                    </div>

                    <div>
                      <div className="md:hidden border py-2.5  px-4 md:px-3 2xl:px-4 text-xs xl:text-sm  cursor-pointer hover:bg-slate-50" onClick={() => handledrop('sort')}>Sort</div>
                      <div hidden={drop !== "sort"} className="absolute shadow text-xs bg-white -ml-28 py-5 px-4 z-40 rounded-md space-y-2.5 w-max">
                        <p>Sort  by</p>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Product title A-Z</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Product title Z-A</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Created (oldest first)</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Created (newest first)</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Updated (oldest first)</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Updated (newest first)</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Low inventory</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> High inventory</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Product type A-Z</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> product type Z-A</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" />Vendor A-Z</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Vendor Z-A</div>
                        <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                      </div>
                    </div>


                    <div>
                      <div className="hidden md:inline-block border py-2.5  px-4 md:px-3 2xl:px-4 text-xs xl:text-sm  cursor-pointer hover:bg-slate-50 transition-all " onClick={() => handledrop('status')}>Status  <i className="ml-3 fa-solid fa-caret-down"></i></div>
                      <div hidden={drop !== "status"} className="absolute shadow text-xs bg-white -ml-6 py-5 px-4 z-40 rounded-md space-y-2.5 ">
                        <div><input type="checkbox" className="rounded focus:ring-0 mr-2" /> Active</div>
                        <div><input type="checkbox" className="rounded focus:ring-0 mr-2" /> Draft</div>
                        <div><input type="checkbox" className="rounded focus:ring-0 mr-2" /> Archived</div>
                        <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                      </div>


                    </div>





                    <div className="border py-2.5  px-4 md:px-3 2xl:px-4 text-xs xl:text-sm  cursor-pointer hover:bg-slate-50 transition-all rounded-r-md" onClick={handleAcc}>More filters</div>
                  </div>



                  <div className="xl:flex flex-wrap hidden">
                    <div className="border py-2.5 xl:px-3  2xl:px-4 cursor-pointer hover:bg-slate-50  px-4 rounded-l-md" >Saved</div>



                    <div>
                      <div className="border py-2.5  xl:px-3 2xl:px-4 cursor-pointer hover:bg-slate-50  px-4 rounded-r-md" onClick={() => handledrop('sort2')}>Sort</div>
                      <div hidden={drop !== "sort2"} className="absolute shadow text-xs bg-white -ml-28 py-5 px-4 z-40 rounded-md space-y-2.5 w-max">
                        <p>Sort  by</p>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Product title A-Z</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Product title Z-A</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Created (oldest first)</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Created (newest first)</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Updated (oldest first)</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Updated (newest first)</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Low inventory</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> High inventory</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Product type A-Z</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> product type Z-A</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" />Vendor A-Z</div>
                        <div><input type="radio" className="focus:ring-0 mr-2" /> Vendor Z-A</div>
                        <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6 ">
                  <table className=" w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-medium">
                      <tr>
                        <th scope="col" className="px-6 py-3 w-10"><input type="checkbox" className="focus:ring-0 rounded" /></th>
                        <th scope="col" className="md:pl-2  md:pr-6 xl:px-6 px-6 py-3">Product</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Inventory</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Vendor</th>
                      </tr>
                    </thead>

                    <tbody >

                      <tr className="bg-white border-b text-xs xl:text-sm cursor-pointer">
                        <th scope="col" className="px-6 py-3"><input type="checkbox" className="focus:ring-0 rounded" /></th>
                        <td className="md:pl-2 md:pr-6 xl:px-6 py-3 flex items-center  space-x-3  xl:space-x-6 font-medium">
                          <img src={product1} className="w-8" />

                          <span className="flex-1 hover:font-semibold hover:text-black hover:underline" onMouseOver={() => handleView('view1')} onMouseLeave={hideView}>Awesome Sneakers</span>
                          <div hidden={hide !== "view1"} className=" absolute translate-x-24 md:translate-x-28 lg:translate-x-48">
                            <i class="fa-solid fa-eye hidden md:inline-block "></i>
                          </div>
                        </td>

                        <td className="px-6 py-3">
                          <div className="bg-emerald-300 w-16 text-center rounded-full text-xs py-1.5">Active</div>
                        </td>
                        <td className="px-6 py-3 text-red-600">0 in stock</td>
                        <td className="px-6 py-3 ">kicks</td>
                        <td className="px-6 py-3">Tets</td>
                      </tr>

                      <tr className="bg-white border-b text-xs xl:text-sm cursor-pointer">
                        <th scope="col" className="px-6 py-3"><input type="checkbox" className="focus:ring-0 rounded" /></th>
                        <td className="md:pl-2 md:pr-6 xl:px-6 py-3 flex items-center space-x-3  xl:space-x-6 font-medium">
                          <img src={product1} className="w-8" /> <span className="hover:font-semibold hover:text-black hover:underline" onMouseOver={() => handleView('view2')} onMouseLeave={hideView}>Cool Sneakers</span>
                          <div hidden={hide !== "view2"} className="absolute translate-x-24 md:translate-x-28 lg:translate-x-48">
                            <i className="fa-solid fa-eye hidden md:inline-block "></i>
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

          <div className={` backdrop-blur-lg w-full overflow-y-scroll md:w-80 xl:w-96 md:h-full bg-white/30 mt-5 min-h-screen  inset-y-0 right-0 top-12  shadow-2xl transform fixed transition duration-300 ease-in-out z-40 ${acc ? "translate-x-0" : "translate-x-full"}`}>

            <div className="border-b py-2 bg-white">
              <div className="items-center flex flex-wrap px-6 justify-between">
                <h2 className="text-base font-medium">More filter</h2>
                <button onClick={handleAcc} className="border rounded px-6 py-2.5 shadow"><i className="text-base fa-solid fa-xmark"></i></button>
              </div>
            </div>


            {/* custom Accordion start */}
            <div>
              <div className="px-6">

                <div className="wrapper">
                  <div className="py-4 flex flex-wrap justify-between cursor-pointer" onClick={() => handleChangeAcc("panel1")}>
                    <p>Product vendors</p>
                    <i className={`fa-solid fa-angle-down transform ${expanded !== "panel1" ? "rotate-0" : "rotate-180"}`}></i>
                  </div>

                  <div hidden={expanded !== 'panel1'} className="shadow text-xs bg-white py-5 px-4 z-40 rounded-md space-y-2.5 ">
                    <div><input type="radio" className="focus:ring-0 mr-2" /> Great Phone Store</div>
                    <div><input type="radio" className="focus:ring-0 mr-2" /> Tets</div>
                    <div><input type="radio" className="focus:ring-0 mr-2" /> Shopify</div>
                    <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                  </div>
                </div>


                <div className="wrapper">
                <div className="py-4 flex flex-wrap justify-between cursor-pointer" onClick={() => handleChangeAcc("panel2")}>
                    <p>Tagged with</p>
                    <i className={`fa-solid fa-angle-down transform ${expanded !== 'panel2' ? "rotate-0" : "rotate-180"}`}></i>
                  </div>

                  <div hidden={expanded !== 'panel2'} className="shadow text-xs bg-white py-5 px-4 z-40 rounded-md space-y-2.5 ">
                    <input type="search" className="border w-full rounded-md border-slate-300 text-xs xl:text-sm" />
                    <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                  </div>
                </div>


                <div className="wrapper">
                <div className="py-4 flex flex-wrap justify-between cursor-pointer" onClick={() => handleChangeAcc("panel3")}>
                    <p>Status</p>
                    <i className={`fa-solid fa-angle-down transform ${expanded !== 'panel3'  ? "rotate-0" : "rotate-180"}`}></i>
                  </div>

                  <div hidden={expanded !== 'panel3'} className="shadow text-xs bg-white py-5 px-4 z-40 rounded-md space-y-2.5 ">
                  <div><input type="checkbox" className="rounded focus:ring-0 mr-2" /> Active</div>
                        <div><input type="checkbox" className="rounded focus:ring-0 mr-2" /> Draft</div>
                        <div><input type="checkbox" className="rounded focus:ring-0 mr-2" /> Archived</div>
                        <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                  </div>
                </div>


                <div className="wrapper">
                  <div className="py-4 flex flex-wrap justify-between cursor-pointer" onClick={() => handleChangeAcc("panel4")}>
                    <p>Availability</p>
                    <i className={`fa-solid fa-angle-down transform ${expanded !== 'panel4' ? "rotate-0" : "rotate-180"}`}></i>
                  </div>

                  <div hidden={expanded !== 'panel4'} className="shadow text-xs bg-white py-5 px-4 z-40 rounded-md space-y-2.5 ">
                    <div><input type="radio" className="focus:ring-0 mr-2" /> Unavailable on all channels</div>
                    <div><input type="radio" className="focus:ring-0 mr-2" /> Available on Online Store</div>
                    <div><input type="radio" className="focus:ring-0 mr-2" /> Unavailable on Online Store</div>
                    <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                  </div>
                </div>


                <div className="wrapper">
                  <div className="py-4 flex flex-wrap justify-between cursor-pointer" onClick={() => handleChangeAcc("panel5")}>
                    <p>Product Type</p>
                    <i className={`fa-solid fa-angle-down transform ${expanded !== 'panel5' ? "rotate-0" : "rotate-180"}`}></i>
                  </div>

                  <div hidden={expanded !== 'panel5'} className="shadow text-xs bg-white py-5 px-4 z-40 rounded-md space-y-2.5 ">
                    <div><input type="radio" className="focus:ring-0 mr-2" /> kicks</div>
                    <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                  </div>
                </div>


                <div className="wrapper">
                  <div className="py-4 flex flex-wrap justify-between cursor-pointer" onClick={() => handleChangeAcc("panel6")}>
                    <p>Collection</p>
                    <i className={`fa-solid fa-angle-down transform ${expanded !== 'panel6' ? "rotate-0" : "rotate-180"}`}></i>
                  </div>

                  <div hidden={expanded !== 'panel6'} className="shadow text-xs bg-white py-5 px-4 z-40 rounded-md space-y-2.5 ">
                  <input type="search" className="border w-full rounded-md border-slate-300 text-xs xl:text-sm mb-3" />

                    <div><input type="radio" className="focus:ring-0 mr-2" /> female</div>
                    <div><input type="radio" className="focus:ring-0 mr-2" /> male</div>
                    <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                  </div>
                </div>


                <div className="wrapper">
                  <div className="py-4 flex flex-wrap justify-between cursor-pointer" onClick={() => handleChangeAcc("panel7")}>
                    <p>Publishing error</p>
                    <i className={`fa-solid fa-angle-down transform ${expanded !== 'panel7' ? "rotate-0" : "rotate-180"}`}></i>
                  </div>

                  <div hidden={expanded !== 'panel7'} className="shadow text-xs bg-white py-5 px-4 z-40 rounded-md space-y-2.5 ">
                    <div><input type="radio" className="focus:ring-0 mr-2" /> Online Store</div>
                    <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                  </div>
                </div>


                <div className="wrapper">
                  <div className="py-4 flex flex-wrap justify-between cursor-pointer" onClick={() => handleChangeAcc("panel8")}>
                    <p>Gift card</p>
                    <i className={`fa-solid fa-angle-down transform ${expanded !== 'panel8' ? "rotate-0" : "rotate-180"}`}></i>
                  </div>

                  <div hidden={expanded !== 'panel8'} className="shadow text-xs bg-white py-5 px-4 z-40 rounded-md space-y-2.5 ">
                    <div><input type="checkbox" className="focus:ring-0 mr-2" /> Online Store</div>
                    <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                  </div>
                </div>

              </div>
            </div>

               <div className="flex flex-wrap justify-between mt-16 border-t px-6 py-2">
                <button className="border px-10 py-3 rounded"> Clear filter</button>
                <button className="bg-emerald-800 text-white px-6 py-3 rounded"> Done</button>
                </div>
          </div>


        </section>




      </main>
    </>
  );
};
