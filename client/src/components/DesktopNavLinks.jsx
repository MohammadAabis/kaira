const DesktopNavLinks = ({navLinks}) => {
  return (
    <>
      <ul className="hidden lg:flex space-x-12 font-normal uppercase">
        {navLinks.map((link) => (
          <li key={link.label} className="group relative">
            <a
              href={link.href}
              className="hover:text-blue-500 flex items-center gap-1"
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
                  className="lucide lucide-chevron-down-icon lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
            </a>

            {/* Dropdown if children exist */}
            {link.children && (
              <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-200 z-50">
                {link.children.map((child) => (
                  <li key={child.label}>
                    <a
                      href={child.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
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
    </>
  );
};

export default DesktopNavLinks;
