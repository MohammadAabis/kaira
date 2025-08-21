import React from "react";

const Carts = ({ toggleCart, cartOpen, items }) => {
  let sum = 0;

  const totalPrice = items.reduce((sum, item) => {
    // Remove $ sign if present and convert to number
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + price;
  }, 0);
  return (
    <>
      <div className="w-50 md:w-90 fixed top-0 right-0 h-full bg-gray-200 z-10">
        <div className="p-4 flex justify-end">
          <button onClick={toggleCart} className="text-gray-700 text-3xl">
            ×
          </button>
        </div>

        <div className="p-2 space-y-4 ">
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4 text-2xl">
            <h2 className="font-normal text-lime-600 mb-4">Your Cart</h2>
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-lime-600 text-white">
              {items.length}
            </span>
          </div>
          {items.length === 0 ? (
            <p>No Items Added</p>
          ) : (
            items.map((item, index) => (
              <div className="flex justify-between items-center mb-4">
                <span>
                  <p className="text-gray-900">{item.name}</p>
                  <p className="text-gray-500">Brief Description</p>
                </span>
                <span className="text-lime-600">{item.price}</span>
              </div>
            ))
          )}
          <div className="flex justify-between items-center mb-4 text-lime-600">
            <span>Total (USD)</span>
            <span className="font-bold">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex items-center justify-center text-white mt-4">
          <button className={`${
            items.length == 0 ? "disabled bg-gray-300 px-4 py-2 rounded cursor-not-allowed" : "bg-lime-600 px-4 py-2 rounded hover:bg-lime-700 hover:cursor-pointer transition-colors"} `}>
            Continue to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Carts;
