import React, { useState } from "react";
import { Link } from "react-router-dom";
import tut from "../../../media/videos/tut.mp4";
import photo from "../../../media/home/photo.svg";
import "../../../mobile.css";

import install from "../../../media/home/install.svg";
import customize from "../../../media/home/customize.svg";
import add from "../../../media/home/add.svg";
import organize from "../../../media/home/organize.svg";
import domain from "../../../media/home/domain.svg";
import payment from "../../../media/home/payment.svg";

const Home = () => {
  // for nav tabs
  const [active, setActive] = useState("tab1");

  const handleChange = (value) => {
    setActive(value);
  };

  //for dropdown options
  const [drop, setDrop] = useState("drops");

  const handledrop = (e) => {
    setDrop(e);
  };

  return (
    <main className="my-24 px-5 space-y-6 md:space-y-8 lg:space-y-12">
      {/* SECTION 1 */}
      <section
        className="mx-auto  md:3/4 lg:w-11/12 xl:w-10/12 2xl:w-2/3 shadow-md rounded-lg bg-white"
        data-aos="fade-down"
      >
        <div className="md:flex flex-wrap md:flex-row flex-col items-center ">
          <div className=" md:w-1/3">
            <video className="p-3" style={{ width: "100%", height: "100%" }}>
              <source src={tut} type="video/mp4" />
            </video>
          </div>

          <div className="md:w-2/3 py-6 md:py-6 lg:py-5 xl:py-4">
            <div className="space-y-3">
              <div className="px-5 md:px-12  flex items-center justify-between">
                <h4 className="font-semibold text-sm md:text-base">
                  How to set up Shipping?{" "}
                </h4>
                <button
                  className="mr-3 text-xl  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                  onClick={() => handledrop("drop1")}
                >
                  <i className="fa-solid fa-ellipsis "></i>
                </button>

                <div
                  hidden={drop !== "drop1"}
                  className=" absolute right-0 md:top-0 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="md:py-3 md:px-4">
                    <ul className="py-1" aria-labelledby="dropdown">
                      <li>
                        <div
                          onClick={handledrop}
                          className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          <i className="fa-solid fa-xmark mr-3 "></i> Dismiss
                        </div>
                      </li>
                      <li>
                        <Link
                          to="/shop"
                          className="block py-2 px-4  text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          <i class="fa-solid fa-eye mr-3"></i> View Transcript
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="sigin"
                          className="block py-2 px-4  text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          <i class="fa-solid fa-comment-dots mr-3"></i>Feedback
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" px-5 md:px-12 space-y-4">
                <p className="text-xs md:text-sm font-thin ">
                  Packaging and shipping your product may not sound like the
                  most glamorous part of running your own business, but it’s one
                  of the most essential aspects of your customer’s experience.
                </p>

                <button className="border py-2 px-5 text-xs md:text-sm shadow font-light rounded-md hover:bg-white bg-indigo-700 text-white hover:text-black">
                  Start shipping
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}

      <section
        className="mx-auto md:3/4 lg:w-11/12 xl:w-10/12 2xl:w-2/3 shadow-md rounded-lg bg-white"
        data-aos="fade-up "
      >
        <div className="px-5 md:px-12 lg:px-6 py-5 space-x-8 flex-wrap items-center justify-between border-b relative">
          <div className=" flex items-center justify-between space-x-10">
            <h4 className="md:text-xl">
              Get ready to sell online. Try these tips to get started.
            </h4>
            <button
              type="button"
              className="mr-3 text-xl  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
              onClick={() => handledrop("drop2")}
            >
              <i className="fa-solid fa-ellipsis"></i>
            </button>

            <div
              hidden={drop !== "drop2"}
              className="absolute right-0 top-0  z-50 my-0 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <div className="md:py-3 md:px-4">
                <ul className="py-1" aria-labelledby="dropdown">
                  <li>
                    <div
                      onClick={handledrop}
                      className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 cursor-pointer dark:hover:text-white"
                    >
                      <i className="fa-solid fa-xmark mr-3 "></i> Dismiss
                    </div>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <i className="fa-solid fa-comment-dots mr-3"></i>
                      Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="block lg:flex flex-wrap">
          <div className="lg:w-56 xl:w-1/3 bg-gray-100 flex flex-wrap lg:block justify-between">
            <div className="">
              <button
                onClick={() => handleChange("tab1")}
                className="p-4 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:p-6 text-sm font-medium md:w-28 text-center mx-auto lg:text-left text-gray-500 md:border-x md:border-y lg:border-r-2 border-transparent hover:text-gray-700 border-gray-300 dark:text-gray-400 dark:hover:textlg:-gray-300 lg:w-full active"
                active={active === "tab1"}
              >
                {" "}
                <i className="fa-solid fa-print lg:mr-3"></i>{" "}
                <span className=" hidden lg:inline-flex">
                  Install product apps
                </span>
              </button>
            </div>

            <div>
              <button
                onClick={() => handleChange("tab2")}
                className="p-4 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:p-6 text-sm font-medium md:w-28 text-center mx-auto lg:text-left text-gray-500 md:border-x md:border-y lg:border-r-2 border-transparent hover:text-gray-700 border-gray-300 dark:text-gray-400 dark:hover:textlg:-gray-300 lg:w-full active"
              >
                {" "}
                <i className="fa-solid fa-paintbrush lg:mr-3"></i>{" "}
                <span className=" hidden lg:inline-flex">Customize theme</span>
              </button>
            </div>

            <div>
              <button
                onClick={() => handleChange("tab3")}
                className="p-4 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:p-6 text-sm font-medium md:w-28 text-center mx-auto lg:text-left text-gray-500 md:border-x md:border-y lg:border-r-2 border-transparent hover:text-gray-700 border-gray-300 dark:text-gray-400 dark:hover:textlg:-gray-300 lg:w-full active"
              >
                <i className="fa-solid fa-pager lg:mr-3"></i>{" "}
                <span className=" hidden lg:inline-flex">App pages</span>
              </button>
            </div>

            <div>
              <button
                onClick={() => handleChange("tab4")}
                className="lg:text-center p-4 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:p-6 text-sm font-medium md:w-28 text-center mx-auto xl:text-left text-gray-500 md:border-x md:border-y lg:border-r-2 border-transparent hover:text-gray-700 border-gray-300 dark:text-gray-400 dark:hover:textlg:-gray-300 lg:w-full active"
              >
                {" "}
                <i className="fa-solid fa-layer-group lg:mr-3"></i>{" "}
                <span className=" hidden lg:inline-flex ">
                  Organize navigation
                </span>
              </button>
            </div>

            <div>
              <button
                onClick={() => handleChange("tab5")}
                className="p-4 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:p-6 text-sm font-medium md:w-28 text-center mx-auto lg:text-left text-gray-500 md:border-x md:border-y lg:border-r-2 border-transparent hover:text-gray-700 border-gray-300 dark:text-gray-400 dark:hover:textlg:-gray-300 lg:w-full active"
              >
                {" "}
                <i className="fa-solid fa-globe lg:mr-3"></i>{" "}
                <span className=" hidden lg:inline-flex">Add domain</span>
              </button>
            </div>

            <div>
              <button
                onClick={() => handleChange("tab6")}
                className="p-4 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:p-6 text-sm font-medium md:w-28 text-center mx-auto lg:text-left text-gray-500 md:border-x md:border-y lg:border-r-2 border-transparent hover:text-gray-700 border-gray-300 dark:text-gray-400 dark:hover:textlg:-gray-300 lg:w-full active"
              >
                <i className="fa-solid fa-money-bill-wave lg:mr-3"></i>{" "}
                <span className=" hidden lg:inline-flex">Set up payments</span>
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div hidden={active !== "tab1"}>
              <div className="px-7 py-8 md:p-8 lg:py-7 lg:px-5 xl:p-8 space-y-8 md:space-y-16 rounded-lg ">
                <div className="flex items-center justify-between md:space-x-28  lg:space-x-12 xl:space-x-28 space-x-8">
                  <div className="w-3/4 space-y-3">
                    <p className="font-semibold text-sm md:text-base">
                      Create your products with a print on demand app
                    </p>
                    <p className="text-xs md:text-sm font-thin">
                      Use your designs to create custom printed products. Try a
                      few apps to find the products, prices, and shipping
                      options that work for you.
                    </p>
                  </div>

                  <div className="w-1/4">
                    <img src={install} alt="install" />
                  </div>
                </div>

                <div className="">
                  <button
                    type="button"
                    className="bg-indigo-700 text-white  px-3 py-2 md:py-3 md:px-5 rounded-md text-xs md:text-sm"
                  >
                    Browse print on demand apps
                  </button>
                </div>
              </div>
            </div>

            <div hidden={active !== "tab2"}>
              <div className="px-7 py-8 md:p-8 lg:py-7 lg:px-5 xl:p-8 space-y-8 md:space-y-16 rounded-lg ">
                <div className="flex items-center justify-between md:space-x-28  lg:space-x-12 xl:space-x-28 space-x-8">
                  <div className="w-3/4 space-y-3">
                    <p className="font-semibold text-sm md:text-base">
                      Edit the look and feel of your online store
                    </p>
                    <p className="text-xs md:text-sm font-thin">
                      Choose a theme and add your logo, colors, and images to
                      reflect your brand.
                    </p>
                  </div>

                  <div className="w-1/4">
                    <img src={customize} alt="install" />
                  </div>
                </div>

                <div className="">
                  <button
                    type="button"
                    className="bg-indigo-700 text-white  px-3 py-2 md:py-3 md:px-5 rounded-md text-xs md:text-sm"
                  >
                    Customize Theme
                  </button>
                </div>
              </div>
            </div>

            <div hidden={active !== "tab3"}>
              <div className="px-7 py-8 md:p-8 lg:py-7 lg:px-5 xl:p-8 space-y-8 md:space-y-16 rounded-lg ">
                <div className="flex items-center justify-between md:space-x-28  lg:space-x-12 xl:space-x-28 space-x-8">
                  <div className="w-3/4 space-y-3">
                    <p className="font-semibold text-sm md:text-base">
                      Add pages to your online store
                    </p>
                    <p className="text-xs md:text-sm font-thin">
                      Share your brand story and build trust with customers.
                      Create pages that describe who you are and how people can
                      contact you.
                    </p>
                  </div>

                  <div className="w-1/4">
                    <img src={add} alt="install" />
                  </div>
                </div>

                <div className="">
                  <button
                    type="button"
                    className="bg-indigo-700 text-white  px-3 py-2 md:py-3 md:px-5 rounded-md text-xs md:text-sm"
                  >
                    Add Pages
                  </button>
                </div>
              </div>
            </div>

            <div hidden={active !== "tab4"}>
              <div className="px-7 py-8 md:p-8 lg:py-7 lg:px-5 xl:p-8 space-y-8 md:space-y-16 rounded-lg ">
                <div className="flex items-center justify-between md:space-x-28  lg:space-x-12 xl:space-x-28 space-x-8">
                  <div className="w-3/4 space-y-3">
                    <p className="font-semibold text-sm md:text-base">
                      Organize your online store navigation
                    </p>
                    <p className="text-xs md:text-sm font-thin">
                      Help customers to find what they're looking for by
                      organizing the pages on your online store.
                    </p>
                  </div>

                  <div className="w-1/4">
                    <img src={organize} alt="install" />
                  </div>
                </div>

                <div className="">
                  <button
                    type="button"
                    className="bg-indigo-700 text-white  px-3 py-2 md:py-3 md:px-5 rounded-md text-xs md:text-sm"
                  >
                    Organize navigation
                  </button>
                </div>
              </div>
            </div>

            <div hidden={active !== "tab5"}>
              <div className="px-7 py-8 md:p-8 lg:py-7 lg:px-5 xl:p-8 space-y-8 md:space-y-16 rounded-lg ">
                <div className="flex items-center justify-between md:space-x-28  lg:space-x-12 xl:space-x-28 space-x-8">
                  <div className="w-3/4 space-y-3">
                    <p className="font-semibold text-sm md:text-base">
                      Strengthen your brand with a custom domain
                    </p>
                    <p className="text-xs md:text-sm font-thin">
                      Your current domain is the-plaza-wears.myshopify.com but
                      you can add a custom domain to help customers find your
                      online store.
                    </p>
                  </div>

                  <div className="w-1/4">
                    <img src={domain} alt="install" />
                  </div>
                </div>

                <div className="">
                  <button
                    type="button"
                    className="bg-indigo-700 text-white  px-3 py-2 md:py-3 md:px-5 rounded-md text-xs md:text-sm"
                  >
                    Add Domain
                  </button>
                </div>
              </div>
            </div>

            <div hidden={active !== "tab6"}>
              <div className="px-7 py-8 md:p-8 lg:py-7 lg:px-5 xl:p-8 space-y-8 md:space-y-16 rounded-lg ">
                <div className="flex items-center justify-between md:space-x-28  lg:space-x-12 xl:space-x-28 space-x-8">
                  <div className="w-3/4 space-y-3">
                    <p className="font-semibold text-sm md:text-base">
                      Start selling with Merchantplace Payments
                    </p>
                    <p className="text-xs md:text-sm font-thin">
                      Set up your Merchantplace Payments account to start
                      accepting payments. You'll need to provide some basic
                      information about your business.
                    </p>
                  </div>

                  <div className="w-1/4">
                    <img src={payment} alt="install" />
                  </div>
                </div>

                <div className="">
                  <button
                    type="button"
                    className="bg-indigo-700 text-white  px-3 py-2 md:py-3 md:px-5 rounded-md text-xs md:text-sm"
                  >
                    Organize navigation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}

      <section className="mx-auto md:3/4  lg:w-11/12 xl:w-10/12  2xl:w-2/3  ">
        <div className="block lg:flex flex-wrap items-stretch justify-between space-y-6 lg:space-y-12 xl:space-y-0">
          <div className="xl:w-1/2 relative">
            <div className="space-y-3 p-5 md:p-8 h:52 xl:h-60 bg-white xl:mr-2 shadow-md rounded-lg">
              <div className=" flex items-center justify-between space-x-10">
                <h4 className="font-semibold text-sm md:text-base">
                  Start using Developer Tools for your next app or theme project
                </h4>
                <button
                  type="button"
                  className="mr-3 text-xl  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                  onClick={() => handledrop("drop3")}
                >
                  <i className="fa-solid fa-ellipsis"></i>
                </button>

                <div
                  hidden={drop !== "drop3"}
                  className="absolute right-0 md:right-2  z-50 my-0 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="md:py-3 md:px-4">
                    <ul className="py-1" aria-labelledby="dropdown">
                      <li>
                        <div
                          onClick={handledrop}
                          className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 cursor-pointer dark:hover:text-white"
                        >
                          <i className="fa-solid fa-xmark mr-3 "></i> Dismiss
                        </div>
                      </li>

                      <li>
                        <Link
                          to="#"
                          className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          <i className="fa-solid fa-comment-dots mr-3"></i>
                          Feedback
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs md:text-sm font-thin ">
                  Make authenticated calls to the Admin API, generate dummy data
                  for your development store, and interact with Polaris App
                  Bridge components.
                </p>

                <button className="border py-2 px-5 text-xs md:text-sm shadow-lg font-light rounded-md hover:bg-white bg-indigo-700 text-white hover:text-black">
                  Install Developer Tools{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2">
            <div className="space-y-3 p-5 md:p-8 h:52  xl:h-60 self-stretch bg-white xl:ml-2 shadow-md rounded-lg">
              <div className="  flex items-center justify-between relative space-x-6">
                <h4 className="font-semibold text-sm md:text-base">
                  Your online store is password protected
                </h4>
                <button
                  type="button"
                  className="mr-3 text-xl  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                  onClick={() => handledrop("drop4")}
                >
                  <i className="fa-solid fa-ellipsis"></i>
                </button>

                <div
                  hidden={drop !== "drop4"}
                  className="absolute z-50 -right-4 -top-8 md:-right-8 mt-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  onClick={handledrop}
                >
                  <div className="md:py-3 md:px-4">
                    <ul className="py-1" aria-labelledby="dropdown">
                      <li>
                        <div className="cursor-pointer block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                          <i className="fa-solid fa-xmark mr-3 "></i> Dismiss
                        </div>
                      </li>

                      <li>
                        <Link
                          to="#"
                          className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          <i className="fa-solid fa-comment-dots mr-3"></i>
                          Feedback
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs md:text-sm font-thin ">
                  Your store is in development. Provide the store password to
                  your visitors to let them access the store.
                </p>

                <button className="border py-2 px-5 text-xs md:text-sm shadow-lg font-light rounded-md hover:bg-white bg-indigo-700 text-white hover:text-black">
                  See Store Password{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}

      <section className="mx-auto md:3/4  lg:w-11/12 xl:w-10/12  2xl:w-2/3  ">
        <div className="block lg:flex flex-wrap items-stretch justify-between space-y-6 lg:space-y-12 xl:space-y-0">
          <div className="xl:w-1/2 relative">
            <div className="space-y-3 p-5 md:p-8 h:52 xl:h-60 bg-white xl:mr-2 shadow-md rounded-lg">
              <div className=" flex items-center justify-between space-x-10">
                <h4 className="font-semibold text-sm md:text-base">
                  Choose the way your store accepts payments
                </h4>
                <button
                  type="button"
                  className="mr-3 text-xl  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                  onClick={() => handledrop("drop5")}
                >
                  <i className="fa-solid fa-ellipsis"></i>
                </button>

                <div
                  hidden={drop !== "drop5"}
                  className="absolute right-0 md:right-2  z-50 my-0 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="md:py-3 md:px-4">
                    <ul className="py-1" aria-labelledby="dropdown">
                      <li>
                        <div
                          onClick={handledrop}
                          className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 cursor-pointer dark:hover:text-white"
                        >
                          <i className="fa-solid fa-xmark mr-3 "></i> Dismiss
                        </div>
                      </li>

                      <li>
                        <Link
                          to="#"
                          className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          <i className="fa-solid fa-comment-dots mr-3"></i>
                          Feedback
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs md:text-sm font-thin ">
                  Enable a payment provider so your customers can check out and
                  you can get paid.
                </p>

                <button className="border py-2 px-5 text-xs md:text-sm shadow-lg font-light rounded-md hover:bg-white bg-indigo-700 text-white hover:text-black">
                  Enable Payment Provider
                </button>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2">
            <div className="space-y-3 p-5 md:p-8 h:52  xl:h-60 self-stretch bg-white xl:ml-2 shadow-md rounded-lg">
              <div className="  flex items-center justify-between relative space-x-6">
                <h4 className="font-semibold text-sm md:text-base">
                  Add a shipping policy to build trust with customers
                </h4>
                <button
                  type="button"
                  className="mr-3 text-xl  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                  onClick={() => handledrop("drop6")}
                >
                  <i className="fa-solid fa-ellipsis"></i>
                </button>

                <div
                  hidden={drop !== "drop6"}
                  className="absolute z-50 -right-4 -top-8 md:-right-8 mt-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  onClick={handledrop}
                >
                  <div className="md:py-3 md:px-4">
                    <ul className="py-1" aria-labelledby="dropdown">
                      <li>
                        <div className="cursor-pointer block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                          <i className="fa-solid fa-xmark mr-3 "></i> Dismiss
                        </div>
                      </li>

                      <li>
                        <Link
                          to="#"
                          className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          <i className="fa-solid fa-comment-dots mr-3"></i>
                          Feedback
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs md:text-sm font-thin ">
                  64% of customers look for shipping costs on the product page.
                  Easy-to-find shipping details encourage them to shop with you.
                </p>
                <button className="border py-2 px-5 text-xs md:text-sm shadow-lg font-light rounded-md hover:bg-white bg-indigo-700 text-white hover:text-black">
                  Add Shipping Policy
                </button>{" "}
                <a
                  href="#"
                  className="text-xs ml-6 text-indigo-400 underline hover:text-indigo-700"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section
        className="mx-auto  md:3/4 lg:w-11/12 xl:w-10/12 2xl:w-2/3 shadow-md rounded-lg bg-white"
        data-aos="fade-down"
      >
        <div className="md:flex flex-wrap md:flex-row flex-col items-center ">
          <div className=" md:w-1/3">
            <video className="p-3" style={{ width: "100%", height: "100%" }}>
              <source src={tut} type="video/mp4" />
            </video>
          </div>

          <div className="md:w-2/3 py-6 md:py-6 lg:py-5 xl:py-4">
            <div className="space-y-3">
              <div className="px-5 md:px-12  flex items-center justify-between">
                <h4 className="font-semibold text-sm md:text-base">
                  Ready to customize your store?
                </h4>
                <button
                  className="mr-3 text-xl  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                  onClick={() => handledrop("drop7")}
                >
                  <i className="fa-solid fa-ellipsis "></i>
                </button>

                <div
                  hidden={drop !== "drop7"}
                  className=" absolute right-0 md:top-0 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="md:py-3 md:px-4">
                    <ul className="py-1" aria-labelledby="dropdown">
                      <li>
                        <div
                          onClick={handledrop}
                          className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          <i className="fa-solid fa-xmark mr-3 "></i> Dismiss
                        </div>
                      </li>
                      <li>
                        <Link
                          to="/shop"
                          className="block py-2 px-4  text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          <i class="fa-solid fa-eye mr-3"></i> View Transcript
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="sigin"
                          className="block py-2 px-4  text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          <i class="fa-solid fa-comment-dots mr-3"></i>Feedback
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="px-5 md:px-12 space-y-4">
                <p className="text-xs md:text-sm font-thin ">
                  We’ve got thousands of free and premium apps for whatever
                  added features or functionality your online store needs.
                </p>

                <button className="border py-2 px-5 text-xs md:text-sm shadow font-light rounded-md hover:bg-white bg-indigo-700 text-white hover:text-black">
                  Explore your options
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 6 */}

      <section
        className="mx-auto  md:3/4 lg:w-11/12 xl:w-10/12 2xl:w-2/3 shadow-md rounded-lg bg-white p-8"
        data-aos="fade-down"
      >
        <div className="text-right">
          <button
            className="mr-3 text-xl  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
            onClick={() => handledrop("drop8")}
          >
            <i className="fa-solid fa-ellipsis "></i>
          </button>

          <div
            hidden={drop !== "drop8"}
            className=" absolute right-0 md:top-0 z-50 my-4 text-base text-left list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <div className="md:py-3 md:px-4">
              <ul className="py-1" aria-labelledby="dropdown">
                <li>
                  <div
                    onClick={handledrop}
                    className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <i className="fa-solid fa-xmark mr-3 "></i> Dismiss
                  </div>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="block py-2 px-4  text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <i class="fa-solid fa-eye mr-3"></i> View Transcript
                  </Link>
                </li>
                <li>
                  <Link
                    to="sigin"
                    className="block py-2 px-4  text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <i class="fa-solid fa-comment-dots mr-3"></i>Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <img
            src={photo}
            alt="photo"
            className=" mx-auto pb-5 w-80 md:w-1/2"
          />

          <h4 className="font-semibold text-sm md:text-base">
            Ready to customize your store?
          </h4>

          <p className="text-xs md:text-sm font-thin mt-1">
            Search over 1000 stunning photos and download them for free.
          </p>

          <button className="border py-2 px-5 text-xs md:text-sm shadow font-light rounded-md hover:bg-white bg-indigo-700 text-white hover:text-black mt-5">
            Search Photos
          </button>
        </div>
      </section>

      {/* section 7 */}

      <section className="mx-auto md:3/4  lg:w-11/12 xl:w-10/12  2xl:w-2/3  ">
        <div className="block lg:flex flex-wrap items-stretch justify-between space-y-6 lg:space-y-12 xl:space-y-0">
          <div className="xl:w-1/2 relative">
            <div className="space-y-3 p-5 md:p-8 h:52 xl:h-60 bg-white xl:mr-2 shadow-md rounded-lg">
              <div className=" flex items-center justify-between space-x-10">
                <h4 className="font-semibold text-sm md:text-base">
                  Get to know Shopify with guided video tutorials
                </h4>
                <button
                  type="button"
                  className="mr-3 text-xl  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                  onClick={() => handledrop("drop9")}
                >
                  <i className="fa-solid fa-ellipsis"></i>
                </button>

                <div
                  hidden={drop !== "drop9"}
                  className="absolute right-0 md:right-2  z-50 my-0 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="md:py-3 md:px-4">
                    <ul className="py-1" aria-labelledby="dropdown">
                      <li>
                        <div
                          onClick={handledrop}
                          className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 cursor-pointer dark:hover:text-white"
                        >
                          <i className="fa-solid fa-xmark mr-3 "></i> Dismiss
                        </div>
                      </li>

                      <li>
                        <Link
                          to="#"
                          className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          <i className="fa-solid fa-comment-dots mr-3"></i>
                          Feedback
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs md:text-sm font-thin ">
                  Keep learning with new and upcoming videos by subscribing to
                  the Shopify Help Center YouTube Channel.
                </p>

                <button className="border py-2 px-5 text-xs md:text-sm shadow-lg font-light rounded-md hover:bg-white bg-indigo-700 text-white hover:text-black">
                  Explore YouTube Channel
                </button>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2">
            <div className="space-y-3 p-5 md:p-8 h:52  xl:h-60 self-stretch bg-white xl:ml-2 shadow-md rounded-lg">
              <div className="  flex items-center justify-between relative space-x-6">
                <h4 className="font-semibold text-sm md:text-base">
                  Tipping at checkout is now available for your online store
                </h4>
                <button
                  type="button"
                  className="mr-3 text-xl  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                  onClick={() => handledrop("drop10")}
                >
                  <i className="fa-solid fa-ellipsis"></i>
                </button>

                <div
                  hidden={drop !== "drop10"}
                  className="absolute z-50 -right-4 -top-8 md:-right-8 mt-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  onClick={handledrop}
                >
                  <div className="md:py-3 md:px-4">
                    <ul className="py-1" aria-labelledby="dropdown">
                      <li>
                        <div className="cursor-pointer block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                          <i className="fa-solid fa-xmark mr-3 "></i> Dismiss
                        </div>
                      </li>

                      <li>
                        <Link
                          to="#"
                          className="block py-2 px-4 text-xs md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          <i className="fa-solid fa-comment-dots mr-3"></i>
                          Feedback
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs md:text-sm font-thin ">
                  With tipping at checkout, your customers have the option to
                  tip a percentage of their total order or custom amount.
                </p>
                <button className="border py-2 px-5 text-xs md:text-sm shadow-lg font-light rounded-md hover:bg-white bg-indigo-700 text-white hover:text-black">
                  Add Online Tipping
                </button>{" "}
                <a
                  href="#"
                  className="text-xs ml-6 text-indigo-400 underline hover:text-indigo-700"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
