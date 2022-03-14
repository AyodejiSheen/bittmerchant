import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "flowbite";

import Logo from "../../media/favicon.ico";
import avatar from "../../media/avatars/300-1.jpg";

export const Dashnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navhandler = () => {
    setIsOpen(!isOpen); //to toggle
  };



  return (
    <>
      {/* top menu */}
      <div className="relative">
        {/* Desktop Menus */}
        <div className="bg-slate-200 fixed w-full z-50">
          <div className="flex flex-wrap items-center py-3 md:py-5">
            <div className="w-1/2 px-5 flex flex-wrap items-center space-x-4">
              <img src={Logo} alt="LOGO" className="w-8 hidden md:block" />
              <p className="hidden md:block">Merchantplace</p>

              {/* hamburger */}
              <div className=" md:hidden">
                <button
                  onClick={navhandler}
                  className=" focus:p-4 focus:outline-none focus:bg-indigo-700 focus:text-white  menu-button"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 font-semibold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />{" "}
                    </svg>
                  )}
                </button>
              </div>

              {/* hamburger ends */}
            </div>

            <div className="w-1/2 px-5 flex  items-center space-x-4 justify-end">
              <div className="flex flex-wrap items-center md:order-2">
                <button
                  type="button"
                  className="flex mr-3 text-sm  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown"
                >
                  <span className="font-regular">Adeyemi Oluwasegun</span>
                  <img src={avatar} alt="avatar" className="w-8 rounded-full" />
                </button>

                <div
                  className="hidden z-20 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown"
                >
                  <div className="py-3 px-4">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul class="py-1" aria-labelledby="dropdown">
                    <li>
                      <Link
                        to="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* side menu bar */}

        <div className="flex flex-wrap">
          <div
            className={`w-96 md:h-full bg-white mt-6 md:fixed py-5 min-h-screen md:translate-x-0 inset-y-0 left-0 top-12 transform absolute -translate-x-full transition duration-300 ease-in-out z-40 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className=" px-5 flex flex-wrap items-center space-x-4 md:hidden my-5">
              <img src={Logo} alt="LOGO" className="w-8" />
              <p className="">The Plaza wears</p>
            </div>
            {/* Accordion start */}
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-indigo-200 text-white font-semibold text-indigo-700"
              data-inactive-classes="font-semibold"
              className=""
            >

              <Link to="/dashboard/home" onClick={navhandler}>
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  className="flex space-x-8 items-center py-3 w-full px-10 font-semibold"
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-1"
                >
                  <i className="fa-solid fa-house"></i>
                  <span>Home</span>
                </button>
              </h2>
              <div
                id="accordion-flush-body-1"
                className="invisible"
                aria-labelledby="accordion-flush-heading-1"
              >
                <div class="invisible space-y-2">{/* nothing */}</div>
              </div>
              </Link>

              <h2 id="accordion-flush-heading-2">
                <button
                  type="button"
                  className="flex justify-between items-center py-3 w-full px-10 font-semibold"
                  data-accordion-target="#accordion-flush-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-2"
                >
                  <div className="space-x-8">
                    <i className="fa-solid fa-cart-flatbed"></i>
                    <span>Orders</span>
                  </div>

                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-2"
                className="hidden"
                aria-labelledby="accordion-flush-heading-2"
              >
                <div class=" space-y-2">
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    {" "}
                    Manual Orders
                  </Link>
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    {" "}
                    Draft
                  </Link>
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    {" "}
                    Abandoned Checkouts
                  </Link>
                </div>
              </div>

              <h2 id="accordion-flush-heading-3">
                <button
                  type="button"
                  className="flex justify-between items-center py-3 w-full px-10 font-semibold"
                  data-accordion-target="#accordion-flush-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-3"
                >
                  <div className="space-x-8">
                    <i className="fa-solid fa-tag"></i>
                    <span>Products</span>
                  </div>

                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-3"
                className="hidden"
                aria-labelledby="accordion-flush-heading-3"
              >
                <div className="space-y-2">
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
              </div>

              <h2 id="accordion-flush-heading-4">
                <button
                  type="button"
                  className="flex space-x-8 items-center py-3 w-full px-10 font-semibold"
                  data-accordion-target="#accordion-flush-body-4"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-4"
                >
                  <i className="fa-solid fa-user"></i>
                  <span>Customers</span>
                </button>
              </h2>
              <div
                id="accordion-flush-body-4"
                className="invisible"
                aria-labelledby="accordion-flush-heading-4"
              >
                <div class="invisible space-y-2">{/* nothing */}</div>
              </div>

              <h2 id="accordion-flush-heading-5">
                <button
                  type="button"
                  className="flex justify-between items-center py-3 w-full px-10"
                  data-accordion-target="#accordion-flush-body-5"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-3"
                >
                  <div className="space-x-8">
                    <i className="fa-solid fa-wallet"></i>
                    <span>Finances</span>
                  </div>

                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-5"
                className="hidden"
                aria-labelledby="accordion-flush-heading-5"
              >
                <div class="space-y-2">
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Billing
                  </Link>
                </div>
              </div>

              <h2 id="accordion-flush-heading-6">
                <button
                  type="button"
                  className="flex justify-between items-center py-3 w-full px-10"
                  data-accordion-target="#accordion-flush-body-6"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-3"
                >
                  <div className="space-x-8">
                    <i className="fa-solid fa-chart-bar"></i>
                    <span>Analytics</span>
                  </div>

                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-6"
                className="hidden"
                aria-labelledby="accordion-flush-heading-6"
              >
                <div className="space-y-2">
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
              </div>

              <h2 id="accordion-flush-heading-7">
                <button
                  type="button"
                  className="flex justify-between items-center py-3 w-full px-10"
                  data-accordion-target="#accordion-flush-body-7"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-3"
                >
                  <div className="space-x-8">
                    <i className="fa-solid fa-bullhorn"></i>
                    <span>Marketing</span>
                  </div>

                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-7"
                className="hidden"
                aria-labelledby="accordion-flush-heading-7"
              >
                <div className="space-y-2">
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
              </div>

              <h2 id="accordion-flush-heading-9">
                <button
                  type="button"
                  className="flex space-x-8 items-center py-3 w-full px-10 font-semibold"
                  data-accordion-target="#accordion-flush-body-9"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-9"
                >
                  <i className="fa-solid fa-percent"></i>
                  <span>Discounts</span>
                </button>
              </h2>
              <div
                id="accordion-flush-body-9"
                className="invisible"
                aria-labelledby="accordion-flush-heading-9"
              >
                <div class="invisible space-y-2">{/* nothing */}</div>
              </div>

              <h2 id="accordion-flush-heading-10">
                <button
                  type="button"
                  className="flex space-x-8 items-center py-3 w-full px-10 font-semibold"
                  data-accordion-target="#accordion-flush-body-10"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-10"
                >
                  <i className="fa-solid fa-boxes-stacked"></i>
                  <span>App</span>
                </button>
              </h2>
              <div
                id="accordion-flush-body-10"
                className="invisible"
                aria-labelledby="accordion-flush-heading-10"
              >
                <div class="invisible space-y-2">{/* nothing */}</div>
              </div>

              <h2 id="accordion-flush-heading-11">
                <button
                  type="button"
                  className="flex justify-between items-center py-3 w-full px-10 font-semibold mt-16"
                  data-accordion-target="#accordion-flush-body-11"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-11"
                >
                  <span>Sales Channel</span>
                  <i className="fa-solid fa-circle-plus"></i>
                </button>
              </h2>
              <div
                id="accordion-flush-body-11"
                className="invisible"
                aria-labelledby="accordion-flush-heading-11"
              >
                <div class="invisible space-y-2">{/* nothing */}</div>
              </div>

              <h2 id="accordion-flush-heading-8">
                <button
                  type="button"
                  className="flex justify-between items-center py-3 w-full px-10"
                  data-accordion-target="#accordion-flush-body-8"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-8"
                >
                  <div className="space-x-8">
                    <i className="fa-solid fa-store"></i>
                    <span>Online Store</span>
                  </div>
                  <i className="fa-solid fa-eye"></i>
                </button>
              </h2>
              <div
                id="accordion-flush-body-8"
                className="hidden"
                aria-labelledby="accordion-flush-heading-8"
              >
                <div className="space-y-2">
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
              </div>

              <h2 id="accordion-flush-heading-12">
                <button
                  type="button"
                  className="flex space-x-8 items-center py-3 w-full px-10 font-semibold"
                  data-accordion-target="#accordion-flush-body-12"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-12"
                >
                  <i className="fa-solid fa-gear"></i>
                  <span>Settings</span>
                </button>
              </h2>
              <div
                id="accordion-flush-body-12"
                className="invisible"
                aria-labelledby="accordion-flush-heading-12"
              >
                <div class="invisible space-y-2">{/* nothing */}</div>
              </div>
            </div>

            {/* Accordion end */}
          </div>

          {/* End of side bar */}


          {/* main Contents */}

          <div className="flex-1 bg-slate-100 h-full md:ml-96 z-30">

          <Outlet />
          
          </div>

        </div>
      </div>
    </>
  );
};
