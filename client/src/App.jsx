import { useState } from "react";
import SearchPopup from "./components/SearchPopup";
import SlidingPanel from "./components/SlidingPanel";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Contact", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Shop", href: "#" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <nav className="relative bg-white border-b-1 border-b-gray-300 shadow-sm py-5">
        <div className="mx-auto flex justify-between items-center px-4">
          {/* Main Logo */}
          <div className="w-20 sm:w-24">
            <img src="/img/main-logo.png" alt="" />
          </div>

          {/* Navigation Links for desktop*/}
          <div className="">
            <ul className="hidden lg:flex space-x-12 font-normal uppercase">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* wishlist and carts */}
          <div className="hidden lg:flex flex-row justify-between items-center space-x-4 uppercase">
            <button>Wishlist (0)</button>
            <button>Cart (0)</button>
            <button onClick={() => setSearchOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-search-icon lucide-search"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
            </button>
          </div>

          {/* Carts for mobile */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-2 lg:hidden">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart-icon lucide-heart"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </button>
            <button onClick={() => setSearchOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-search-icon lucide-search"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu-icon lucide-menu"
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </div>

        {/* SLIDING PANEL - Mobile Menu */}
        {menuOpen && (
          <SlidingPanel
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
            navLinks={navLinks}
          />
        )}
      </nav>

      {/* Search Area */}
      {searchOpen && (
        <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      )}
    </>
  );
}

export default App;
