import React from "react";
import { Link } from "react-router-dom";
import main from "../../../media/order/main.svg";

const AbandonedCheckout = () => {
  return (
    <>
      <main className="my-24   px-6 md:px-12 ">
        <section className="space-y-6 md:space-y-8 lg:space-y-8">
          <h4 className="text-lg md:text-xl font-medium pt-4">Abandoned Checkouts</h4>

          <div className="text-center bg-white rounded-xl shadow-lg py-20">
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-2/4 2xl:w-1/3 mx-auto space-y-4 px-4 md:px-0">
              <img src={main} alt="photo" className=" mx-auto w-70 md:w-1/2" />

              <h4 className="text-sm md:text-xl">
                Abandoned checkouts will show here
              </h4>

              <p className="text-xs md:text-sm font-thin">
                See when customers put an item in their cart but don't check
                out. You can also email customers a link to their cart.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AbandonedCheckout;
