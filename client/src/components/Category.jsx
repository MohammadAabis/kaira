const Category = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 py-20 w-full" >
        <div className="flex flex-col items-center text-center  my-10 w-full" data-aos="fade-up">
          <span className="text-gray-500">
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
              class="lucide lucide-calendar-icon lucide-calendar h-10 w-10"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
          </span>
          <span className="text-3xl mt-3">Book An Appointment</span>
          <span className="text-gray-400 mt-3">
            At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-center py-10" data-aos="fade-up">
          <span className="text-gray-500">
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
              class="lucide lucide-handbag-icon lucide-handbag h-10 w-10"
            >
              <path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" />
              <path d="M8 11V6a4 4 0 0 1 8 0v5" />
            </svg>
          </span>
          <span className="text-3xl mt-3">Pick up in store</span>
          <span className="text-gray-400 mt-3">
            At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-center py-10" data-aos="fade-up">
          <span className="text-gray-500">
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
              class="lucide lucide-gift-icon lucide-gift h-10 w-10"
            >
              <rect x="3" y="8" width="18" height="4" rx="1" />
              <path d="M12 8v13" />
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
              <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
            </svg>
          </span>
          <span className="text-3xl mt-3">Special packaging</span>
          <span className="text-gray-400 mt-3">
            At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-center py-10" data-aos="fade-up">
          <span className="text-gray-500">
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
              class="lucide lucide-refresh-ccw-icon lucide-refresh-ccw h-10 w-10"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 16h5v5" />
            </svg>
          </span>
          <span className="text-3xl mt-3">Free global returns</span>
          <span className="text-gray-400 mt-3">
            At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
          </span>
        </div>        
      </div>

      {/* Images Section */}
        <div className="mt-10 px-5  flex flex-col items-center justify-center md:flex-row gap-5 w-full" data-aos="zoom-in-up">
          <a href="#" className="hover:scale-95 transition-transform duration-500">
            <img src="./img/cat-item1.jpg" alt=""  className="w-md"/>
            <span className="uppercase text-gray-400">Shop for Men</span>
          </a>
          <a href="#" className="hover:scale-95 transition-transform duration-500">
            <img src="./img/cat-item2.jpg" alt="" className="w-md" />
            <span className="uppercase text-gray-400">Shop for Women</span>
          </a>
          <a href="#" className="hover:scale-95 transition-transform duration-500">
            <img src="./img/cat-item3.jpg" alt="" className="w-md"/>
            <span className="uppercase text-gray-400">Shop Accessories</span>
          </a>
        </div>
    </>
  );
};

export default Category;
