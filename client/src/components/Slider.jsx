import { useState, useEffect } from "react";

const Slider = ({ collections }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const visibleCount =
  //   window.innerWidth >= 768 ? 2 : window.innerWidth >= 1200 ? 3 : 1;

  // Calculate visible slides based on screen width
  const getVisibleCount = () => {
    if (window.innerWidth >= 1200) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // const next = () => {
  //   // setCurrentIndex((prev) =>
  //   //   // prev + visibleCount >= collections.length ? 0 : prev + visibleCount
  //   //   prev + 1 >= collections.length - visibleCount + 1 ? 0 : prev + 1
  //   // );
  //   if(currentIndex === collections.length - 1) {
  //     setCurrentIndex(0);
  //   }
  //   else {
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // };

  const next = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      // If we're at the last possible position, return to start
      if (nextIndex > collections.length - visibleCount) {
        return 0;
      }
      return nextIndex;
    });
  };

  // const prev = () => {
  //   // setCurrentIndex((prev) =>
  //   //   // prev - visibleCount < 0
  //   //   //   ? Math.max(collections.length - visibleCount, 0)
  //   //   //   : prev - visibleCount
  //   //   prev - 1 < 0 ? Math.max(collections.length - visibleCount, 0) : prev - 1
  //   // );
  //   if(currentIndex === 0) {
  //     setCurrentIndex(collections.length - 1);
  //   }
  //   else {
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // };

  const prev = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      // If we're at the first position, jump to last possible position
      if (prevIndex < 0) {
        return collections.length - visibleCount;
      }
      return prevIndex;
    });
  };

  return (
    <div className="relative mt-10 w-full max-w-7xl mx-auto overflow-hidden">
      {/* Arrow Left */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white transition p-3 rounded-full shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Cards */}
      <div
        className="flex transition-transform duration-700 ease-in-out " 
        style={{
          transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          width: `${(collections.length * 100) / visibleCount}%`,
        }}
      >
        {collections.map((item, index) => (
          <div key={index} className="w-md px-4 shrink-0">
            <div className="mt-5 px-5">
              <img src={item.path} alt={item.prodName} className="w-md block" />
              <h3 className="uppercase text-2xl tracking-wide pt-4">
                {item.prodName}
              </h3>
              <p className="text-gray-400 mt-2">{item.description}</p>
              <a
                href="#"
                className="border-b border-animate uppercase mt-2 inline-block"
              >
                {item.discover}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow Right */}
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white transition p-3 rounded-full shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
