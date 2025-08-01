const SlidingPanel = ({ menuOpen, toggleMenu, navLinks }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      } lg:hidden`}
    >
      <div className="p-4 flex justify-end">
        <button onClick={toggleMenu} className="text-gray-700 text-2xl">
          ×
        </button>
      </div>
      <ul className="flex flex-col items-start space-y-4 px-6 text-gray-800">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlidingPanel;
