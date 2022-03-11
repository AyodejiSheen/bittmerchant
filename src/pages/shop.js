import React, { Fragment } from 'react'

import { Link, Outlet } from "react-router-dom";



//image import
import logo from "../media/logo.png";
import dark from "../media/11-dark.png";

const Shop = () => {
    return (
        <Fragment>
            <div className="flex flex-wrap ">
                {/* section 1 */}
                <div className="w-full h-full md:w-1/2 p-12 md:p-12 lg:py-18 lg:px-24 2xl:py-24 md:fixed overflow-y-scroll" style={{backgroundColor:'#f2c98a'}}>
                <Link to="/"><img alt="logo" src={logo} className="w-24 mx-auto" /></Link>
                    <h1 className="text-yellow-600 text-3xl md:text-2xl lg:text-3xl xl:text-5xl xl:font-medium 2xl:text-6xl text-center font-semibold my-5">
                        Welcome to Merchantplace
                    </h1>
                    <p className="text-yellow-600 md:text-md lg:text-lg text-center my-5">
                        The platform commerce is built on
                    </p>
                    <img data-aos="zoom-in" alt="demo" src={dark} className="mx-auto md:w-11/12 lg:w-full xl:w-11/12 2xl:w-2/3" />
                </div>

                {/* section 2 */}
                <div className="w-full md:w-1/2 bg-white md:h-screen  py-12 px-10 md:p-12 lg:py-16 lg:px-0 ml-auto">

                    <Outlet />

                    {/* footer */}
                    <div className="mx-auto text-center text-sm my-12 text-slate-400 font-semibold">
                        <Link to="#" className="px-2" target="_blank">
                            About
                        </Link>
                        <Link to="#" className="px-2" target="_blank">
                            Support
                        </Link>
                        <Link
                            to="#"
                            className=" px-2"
                            target="_blank"
                        >
                            Pricing
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Shop