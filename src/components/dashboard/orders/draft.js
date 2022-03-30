import React from "react";
import main from "../../../media/order/main.svg";

const Draft = () => {
  return (
    <>
      <main className="my-24   px-6 md:px-12 ">
        <section className="space-y-6 md:space-y-8 lg:space-y-8">
          <h4 className="md:text-xl font-medium pt-4">Drafts</h4>

          <div className="text-center bg-white rounded-xl shadow-lg py-20">
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-2/4 2xl:w-1/4 mx-auto space-y-4 px-4 md:px-0">
              <img src={main} alt="photo" className=" mx-auto w-70 md:w-1/2" />

              <h4 className="text-sm md:text-xl">
                Manually create orders and invoices
              </h4>

              <p className="text-xs md:text-sm font-thin">
                Use draft orders to take orders over the phone, email invoices
                to customers and collect payments.
              </p>

              <button className="bg-indigo-700 text-white py-2 px-5 text-xs md:text-sm shadow font-light rounded-md hover:bg-indigo-900 transition-all">
                Create Draft Order
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Draft;
