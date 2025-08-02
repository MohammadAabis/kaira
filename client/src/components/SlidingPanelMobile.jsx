import { useState } from "react";

const SlidingPanel = ({ menuOpen, toggleMenu, navLinks }) => {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-gray-200 shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      } lg:hidden`}
    >
      <div className="p-4 flex justify-end">
        <button onClick={toggleMenu} className="text-gray-700 text-3xl">
          ×
        </button>
      </div>
      <ul className="flex flex-col items-start space-y-4 px-4 text-gray-800">
        {navLinks.map((link) => (
          <li key={link.label} className="w-full space-y-1">
            <button
              className="flex items-center gap-2 uppercase"
              onClick={() =>
                setIsOpen(isOpen === link.label ? null : link.label)
              }
            >
              {link.label}
              {link.children && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-chevron-down transition-transform duration-200 ${
                    isOpen === link.label ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
            </button>
            {/* Dropdown if child exist */}
            {link.children && isOpen == link.label && (
              <ul className="mt-1 bg-gray-50 shadow-md rounded-md w-full ">
                {link.children.map((child) => (
                  <li key={child.label} className="pl-4">
                    <a
                      href={child.href}
                      className="block px-2 py-1 text-gray-700"
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlidingPanel;
