import { useEffect, useRef } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";

const Slider = ({ collections }) => {

  const sliderRef = useRef(null);
  const sliderInstance = useRef(null);

  useEffect(() => {
  if (sliderRef.current) {
    sliderInstance.current = tns({
      container: sliderRef.current,
      items: 1,
      slideBy: 1,
      autoplay: false,
      controls: false,
      nav: false,
      gutter: 20,
      responsive: {
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  }
}, []);


  const handlePrev = () => {
    sliderInstance.current?.goTo("prev");
  };

  const handleNext = () => {
    sliderInstance.current?.goTo("next");
  };

  return (
    <>
      <div className="relative mt-10 w-full max-w-7xl mx-auto overflow-hidden">
        <div className="my-slider" ref={sliderRef}>
          {collections.map((item, index) => (
          <div key={index} className="px-5 mt-5  w-md shrink-0">
            <img src={item.path} alt={item.prodName} className="w-md" />
            <h3 className="uppercase text-2xl tracking-wide pt-4">
              {item.prodName}
            </h3>
            <p className="text-gray-400 mt-2 mr-1">{item.description}</p>
            <a
              href="#"
              className="lg:border-b lg:border-animate uppercase mt-2 inline-block"
            >
              {item.discover}
            </a>
          </div>
        ))}
        </div>

        {/* Custom Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white transition p-3 rounded-full shadow"
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
        <button
          onClick={handleNext}
          className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white transition p-3 rounded-full shadow"
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
    </>
  );
};

export default Slider;