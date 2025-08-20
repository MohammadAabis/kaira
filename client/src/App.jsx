import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import HomePage from "./pages/HomePage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name, price) => {
    setCartItems((prev) => [...prev, { name, price }]);
  };

  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header items={cartItems} />

          {/* main content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage addToCart={addToCart} />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
