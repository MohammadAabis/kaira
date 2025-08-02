import React from "react";

const Carts = ({ toggleCart, cartOpen }) => {
  return (
    <>
      <div className="w-70 fixed top-0 right-0 h-full bg-gray-200">
        <div className="p-4 flex justify-end">
          <button onClick={toggleCart} className="text-gray-700 text-3xl">
            ×
          </button>
        </div>

        <div className="p-4 space-y-4 ">
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4 text-xl">
            <h2 className=" font-semibold mb-4">Your Cart</h2>
            <span className="">3</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>
              <p>Growers Cider</p>
              <p>Brief Description</p>
            </span>
            <span>$12</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Total (USD)</span>
            <span>$20</span>
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
            Continue to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Carts;
