import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const province = [
  { name: "Punjab", code: "PB" },
  { name: "Sindh", code: "SD" },
  { name: "Balochistan", code: "BL" },
  { name: "Khyber Pakhtunkhwa", code: "KPK" },
  { name: "Gilgit Baltistan ", code: "GB" },
];

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("");

  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

   const navigate = useNavigate();

  const handleSelect = (prov) => {
    setSelectedProvince(prov.name);
    setIsOpen(false);
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    // Remove $ sign if present and convert to number
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + price;
  }, 0);

  const makePayment = () => {
    navigate('/payment', { state: { cartItems: items } })
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-2 mb-20">
        <div className="flex flex-col space-y-2 p-5 mt-5">
          <label htmlFor="email" className="uppercase text-lg">
            Email
          </label>
          <input type="email" name="email" className="border-1 p-1" />
          <br />

          <h2 className="uppercase text-lg">Delivery</h2>
          <br />
          <div className="flex flex-row gap-2 ">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              required
              className="border-1 p-2 w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border-1 p-1 w-full"
            />
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Phone*"
            required
            className="border-1 p-1"
          />
          <input
            type="text"
            name="address"
            placeholder="Address*"
            required
            className="border-1 p-1"
          />
          <div className="flex relative gap-1 flex-col md:flex-row">
            <input
              type="text"
              name="city"
              placeholder="City*"
              required
              className="border-1 p-1"
            />
            <div className="relative w-48">
              <input
                type="text"
                name="province"
                value={selectedProvince}
                placeholder="Province*"
                readOnly
                required
                className="border-1 p-1 w-full cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
              <svg
                onClick={() => setIsOpen(!isOpen)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute right-2 top-2 cursor-pointer"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>

              {isOpen && (
                <ul className="absolute bg-white border shadow-md w-full mt-1 z-10">
                  {province.map((prov) => (
                    <li
                      key={prov.code}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect(prov)}
                    >
                      {prov.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <input
              type="number"
              name="zipCode"
              placeholder="ZIP Code*"
              required
              className="border-1 p-1"
            />
          </div>
          <br />
          <div>
            <h4 className="uppercase text-lg">Payment Methond</h4>
            <div className="flex items-center justify-between border-2 mt-5 hover:cursor-pointer" onClick={makePayment}>
              <div className="p-3">
                <p>Credit Card</p>
                <p className="text-sm text-gray-400">Secure and Encrypted</p>
              </div>
              <div className="p-3 flex flex-row gap-2">
                <img src="./img/visa-card.png" alt="" />
                <img src="./img/master-card.png" alt="" />
                <img src="./img/paypal-card.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[400px] bg-gray-200 space-y-2 p-5 mt-5 sm:mx-5 ">
          <h3 className="uppercase font-normal text-xl">Cart Summary</h3>
          {cartItems.map((item, index) => (
            <div className="flex justify-between items-center my-4 ">
              <span>
                <p className="text-gray-900">{item.name}</p>
                <p className="text-gray-500">Brief Description</p>
              </span>
              <span className="text-lime-600">{item.price}</span>
            </div>
          ))}
          <hr />
          <div className="flex justify-between items-center mb-4">
            <p>Estimated Total</p>
            <p className="font-bold">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
