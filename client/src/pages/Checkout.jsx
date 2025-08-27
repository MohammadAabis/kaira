import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const province = [
  { name: "Punjab", code: "PB" },
  { name: "Sindh", code: "SD" },
  { name: "Balochistan", code: "BL" },
  { name: "Khyber Pakhtunkhwa", code: "KPK" },
  { name: "Gilgit Baltistan ", code: "GB" },
];

const Checkout = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [clientSecret, setClientSecret] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
  });

  // Track if form is valid
  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  useEffect(() => {
    if (!cartItems.length) return;
    // call your backend to create a PaymentIntent
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems, currency: "usd" }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch(console.error);
  }, [cartItems]);

  const handleSelect = (prov) => {
    setSelectedProvince(prov.name);
    setIsOpen(false);
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    // Remove $ sign if present and convert to number
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + price;
  }, 0);

  const makePayment = async () => {
    if (!formData) {
      alert("Please fill all required fields");
    }
    // navigate("/payment-status", { state: { cartItems: cartItems } });

    const stripe = await loadStripe(
      "pk_test_51RzZ31RlE9sjQmLwX8jxc224x8L05x4znedfbGYfzvozC1Hye04ofhd3j1yB08teTJ8c0YiGKa4WLGFxrBGpDx4s00BZL5VCxJ"
    );

    const response = await fetch("http://localhost:4242/create-checkout-session",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({items: cartItems})
    })

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId:session.id
    })

    if(res.error){
      console.log(res.error)
    }
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-2 mb-20">
        <div className="flex flex-col space-y-2 p-5 mt-5">
          <label htmlFor="email" className="uppercase text-lg">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="border-1 p-1"
            onChange={handleChange}
          />
          <br />

          <h2 className="uppercase text-lg">Delivery</h2>
          <br />
          <div className="flex flex-row gap-2 ">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              onChange={handleChange}
              required
              className="border-1 p-2 w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              onChange={handleChange}
              required
              className="border-1 p-1 w-full"
            />
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Phone*"
            onChange={handleChange}
            required
            className="border-1 p-1"
          />
          <input
            type="text"
            name="address"
            placeholder="Address*"
            onChange={handleChange}
            required
            className="border-1 p-1"
          />
          <div className="flex relative gap-1 flex-col md:flex-row">
            <input
              type="text"
              name="city"
              placeholder="City*"
              onChange={handleChange}
              required
              className="border-1 p-1"
            />
            <div className="relative w-48">
              <input
                type="text"
                name="province"
                value={selectedProvince}
                placeholder="Province*"
                onChange={handleChange}
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
              onChange={handleChange}
              required
              className="border-1 p-1"
            />
          </div>
          <br />
          <div>
            <h4 className="uppercase text-lg mb-5">Payment Methond</h4>
            <div
              className="flex items-center justify-between border-2 mt-5 hover:cursor-pointer"
              onClick={makePayment}
            >
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

            {/* Stripe Payment */}
            {/* <div>
              {clientSecret ? (
                <Elements
                  stripe={stripePromise}
                  options={{
                    clientSecret,
                    appearance: { theme: "stripe" },
                  }}
                >
                  <CheckoutForm
                    cartItems={cartItems}
                    isFormValid={isFormValid}
                  />
                </Elements>
              ) : (
                <p>Preparing secure payment…</p>
              )}
            </div> */}
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
