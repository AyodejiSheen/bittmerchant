import React, {useState} from "react";
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

  const handleChangeAcc = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


      //for dropdown options
  const [drop, setDrop] = useState("");

  const handledrop = (e) => {
    if (drop === "" ){
      setDrop(e)
    }else{
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

                    <button className="md:hidden border px-4  rounded-md" onClick={() => handledrop('action')}> <i className=" text-2xl fa-solid fa-ellipsis "></i>
                    <div  hidden={drop !== "action"} className="absolute shadow bg-white -ml-6  z-40 rounded-md space-y-2.5 ">
                      <div className="border-b py-2 px-4"> <button>Import</button></div>
                      <div className="border-b py-2 px-4"><button>Export</button></div>
                      </div>
                    </button>

                    <button className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-900">Add Product</button>
                </div>
            </div>


    {/* table begin */}

        <section className="shadow bg-white px-6 pt-2 pb-5 text-sm ">
            <div className=" space-x-4 md:space-x-8 border-b">
                <button className="focus:border-b-2 border-indigo-700 px-3 py-3" onClick={() => handleChangeNavTab('tab1')}>All</button>
                <button className="focus:border-b-2 border-indigo-700 px-3 py-3" onClick={() => handleChangeNavTab('tab2')}>Active</button>
                <button className="focus:border-b-2 border-indigo-700 px-3 py-3" onClick={() => handleChangeNavTab('tab3')}>Draft</button>
                <button className="focus:border-b-2 border-indigo-700 px-3 py-3" onClick={() => handleChangeNavTab('tab4')}>Archived</button>
            </div>


            <div className=" mt-5">
              <div hidden={active !== 'tab1'} className="">
                <div>
                  <div className="md:flex flex-wrap space-y-4 md:space-y-0 justify-between font-medium">
                  <input type="search" placeholder="Filter products" className="rounded-md text-xs md:text-xs xl:text-sm w-full md:w-1/4 lg:w-1/5 xl:w-80 2xl:w-1/2"/>
                  <div className="flex flex-wrap">
                      <div className="border py-2.5  px-4 md:px-3 2xl:px-4 text-xs xl:text-sm cursor-pointer hover:bg-slate-50 transition-all rounded-l-md" onClick={() => handledrop('vendor')}>Product vendor <i className="ml-3 fa-solid fa-caret-down"></i>                   
                  <div  hidden={drop !== "vendor"} className="absolute shadow text-xs bg-white -ml-6 py-5 px-4 z-40 rounded-md space-y-2.5 ">
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Great Phone Store</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Tets</div>
                      <div><input type="radio" className="focus:ring-0 mr-2"/> Shopify</div>
                      <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                  </div> 
                  </div>



                      <div className="hidden md:inline-block border py-2.5  px-4 md:px-3 2xl:px-4 text-xs xl:text-sm cursor-pointer hover:bg-slate-50 transition-all" onClick={() => handledrop('tagged')}>Tagged with  <i className="ml-3 fa-solid fa-caret-down"></i> 
                          <div  hidden={drop !== "tagged"} className="absolute shadow text-xs bg-white -ml-6 py-5 px-4 z-40 rounded-md space-y-2.5 ">
                          <input type="text" className="border w-full rounded-md border-slate-300"/>
                          <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                      </div>                       
                      </div>

                      <div className="md:hidden border py-2.5  xl:px-3 2xl:px-4 cursor-pointer hover:bg-slate-50  px-4 "  onClick={() => handledrop('sort')}>Sort
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


                      <div className="hidden md:inline-block border py-2.5  px-4 md:px-3 2xl:px-4 text-xs xl:text-sm  cursor-pointer hover:bg-slate-50 transition-all " onClick={() => handledrop('status')}>Status  <i className="ml-3 fa-solid fa-caret-down"></i>
                      <div  hidden={drop !== "status"} className="absolute shadow text-xs bg-white -ml-6 py-5 px-4 z-40 rounded-md space-y-2.5 ">
                      <div><input type="checkbox" className="rounded focus:ring-0 mr-2"/> Active</div>
                      <div><input type="checkbox" className="rounded focus:ring-0 mr-2"/> Draft</div>
                      <div><input type="checkbox" className="rounded focus:ring-0 mr-2"/> Archived</div>
                      <button className="font-light bg-indigo-700 text-white px-3 rounded py-1">Clear</button>
                  </div> 


                      </div>




                      
                      <div className="border py-2.5  px-4 md:px-3 2xl:px-4 text-xs xl:text-sm  cursor-pointer hover:bg-slate-50 transition-all rounded-r-md" onClick={handleAcc}>More filters</div>
                  </div>

                  <div className="xl:flex flex-wrap hidden">
                      <div className="border py-2.5 xl:px-3  2xl:px-4 cursor-pointer hover:bg-slate-50  px-4 rounded-l-md" >Saved</div>



                      <div className="border py-2.5  xl:px-3 2xl:px-4 cursor-pointer hover:bg-slate-50  px-4 rounded-r-md"  onClick={() => handledrop('sort')}>Sort
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
                        <th scope="col" className="md:pl-2  md:pr-6 xl:px-6 px-6 py-3">Product</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Inventory</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Vendor</th>
                        </tr>
                      </thead>

                      <tbody className="cursor-pointer">

                          <tr className="bg-white border-b text-xs xl:text-sm">
                            <th scope="col" className="px-6 py-3"><input type="checkbox" className="focus:ring-0 rounded"/></th>
                            <td className="md:pl-2 md:pr-6 xl:px-6 py-3 flex items-center  space-x-3  xl:space-x-6 font-medium">
                              <img src={product1} className="w-8"/> <span className="flex-1 hover:font-semibold hover:text-black hover:underline" onMouseOver={()=> handleView('view1')} onMouseLeave={hideView}>Awesome Sneakers</span>
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

                          <tr className="bg-white border-b text-xs xl:text-sm">
                            <th scope="col" className="px-6 py-3"><input type="checkbox" className="focus:ring-0 rounded"/></th>
                            <td className="md:pl-2 md:pr-6 xl:px-6 py-3 flex items-center space-x-3  xl:space-x-6 font-medium">
                              <img src={product1} className="w-8" /> <span className="hover:font-semibold hover:text-black hover:underline" onMouseOver={()=> handleView('view2')} onMouseLeave={hideView}>Cool Sneakers</span>
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

                  <div className={` backdrop-blur-lg w-full overflow-y-scroll md:w-80 xl:w-96 md:h-full bg-white/30 mt-5 min-h-screen  inset-y-0 right-0 top-12  shadow-2xl transform fixed transition duration-300 ease-in-out z-40 ${ acc ? "translate-x-0" : "translate-x-full"}`}>

                  <div className="px-10 space-x-8">
                  <button className=" border px-4 py-2 hover:bg-indigo-700 hover:text-white">Clear filter</button>
                    <button className="bg-red-700 text-white px-4 py-2" onClick={handleAcc}>Close</button>
                  </div>


                  <div className="py-3">

                <Accordion
                  className="shadow-none border-b"
                  expanded={expanded === "panel1"}
                  onChange={handleChangeAcc("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="focus:bg-indigo-700 focus:text-white font-semibold py-0 px-10"
                  >
                    <div className="space-x-8">
                      <i className="fa-solid fa-cart-flatbed"></i>
                      <span>Orders</span>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div class="text-sm">
                      <Link
                        to=""
                        className="block hover:bg-indigo-200 px-20 py-2"
                      >
                        {" "}
                        Manual Orders
                      </Link>
                      <Link
                        to="draft"
                        className="block hover:bg-indigo-200 px-20 py-2"
                      >
                        {" "}
                        Draft
                      </Link>
                      <Link
                        to="AbandonedCheckout"
                        className="block hover:bg-indigo-200 px-20 py-2"
                      >
                        {" "}
                        Abandoned Checkouts
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>


                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChangeAcc("panel2")}
                  className="shadow-none border-b"
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="focus:bg-indigo-700 focus:text-white font-semibold  px-10"
                  >
                    <div className="space-x-8">
                      <i className="fa-solid fa-tag"></i>
                      <span>Products</span>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="space-y-2 text-sm">
                      <Link
                        to="#"
                        className="block hover:bg-indigo-200 px-20 py-2.5"
                      >
                        Inventory
                      </Link>
                      <Link
                        to="#"
                        className="block hover:bg-indigo-200 px-20 py-2.5"
                      >
                        Transfers
                      </Link>
                      <Link
                        to="#"
                        className="block hover:bg-indigo-200 px-20 py-2.5"
                      >
                        Collections
                      </Link>
                      <Link
                        to="#"
                        className="block hover:bg-indigo-200 px-20 py-2.5"
                      >
                        Gift Cards
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>


              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChangeAcc("panel3")}
                className="shadow-none"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="focus:bg-indigo-700 focus:text-white font-semibold  px-10 "
                >
                  <div className="space-x-8">
                    <i class="fa-solid fa-wallet"></i>
                    <span>Finances</span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="text-sm">
                    <Link
                      to="#"
                      className="block hover:bg-indigo-200 px-20 py-2.5"
                    >
                      Billing
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChangeAcc("panel4")}
                className="shadow-none"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="focus:bg-indigo-700 focus:text-white font-semibold  px-10 "
                >
                  <div className="space-x-8">
                    <i class="fa-solid fa-chart-simple"></i>
                    <span>Analytics</span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="space-y-2 text-sm">
                    <Link
                      to="#"
                      className="block hover:bg-indigo-200 px-20 py-2.5"
                    >
                      Reports
                    </Link>
                    <Link
                      to="#"
                      className="block hover:bg-indigo-200 px-20 py-2.5"
                    >
                      Live View
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChangeAcc("panel5")}
                className="shadow-none"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="focus:bg-indigo-700 focus:text-white font-semibold  px-10 "
                >
                  <div className="space-x-8">
                    <i class="fa-solid fa-bullhorn"></i>
                    <span>Marketing</span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="space-y-2 text-sm">
                    <Link
                      to="#"
                      className="block hover:bg-indigo-200 px-20 py-2.5"
                    >
                      Campaigns
                    </Link>
                    <Link
                      to="#"
                      className="block hover:bg-indigo-200 px-20 py-2.5"
                    >
                      Automations
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChangeAcc("panel6")}
                className="shadow-none"
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="focus:bg-indigo-700 focus:text-white font-semibold  px-10 "
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="space-x-8">
                      <i className="fa-solid fa-store"></i>
                      <span className="">Online Store</span>
                    </div>
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </AccordionSummary>
                <AccordionDetails className="">
                  <div className="space-y-2 text-sm">
                    <Link
                      to="#"
                      className="block hover:bg-indigo-200 px-20 py-2.5"
                    >
                      Themes
                    </Link>
                    <Link
                      to="#"
                      className="block hover:bg-indigo-200 px-20 py-2.5"
                    >
                      Blog Posts
                    </Link>
                    <Link
                      to="#"
                      className="block hover:bg-indigo-200 px-20 py-2.5"
                    >
                      Pages
                    </Link>
                    <Link
                      to="#"
                      className="block hover:bg-indigo-200 px-20 py-2.5"
                    >
                      Navigation
                    </Link>
                    <Link
                      to="#"
                      className="block hover:bg-indigo-200 px-20 py-2.5"
                    >
                      Prefences
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
    


                  </div>

                  
        </section>




      </main>
    </>
  );
};
