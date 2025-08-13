import { useEffect, useRef } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { useNavigate } from "react-router-dom";

const ProductsSlider = ({
  products,
  loop,
  lgItems,
  mdItems,
  smItems,
  title,
  addToCart
}) => {

  const sliderRef = useRef(null);
  const sliderInstance = useRef(null);
  const navigate = new useNavigate();

  useEffect(() => {
    if (sliderRef.current) {
      sliderInstance.current = tns({
        container: sliderRef.current,
        items: 1,
        slideBy: 1,
        autoplay: false,
        controls: false,
        nav: false,
        // navPosition: "bottom",
        gutter: 20,
        loop: loop,
        responsive: {
          320: {
            items: smItems || 1,
          },
          768: {
            items: mdItems || 2,
          },
          1024: {
            items: lgItems || 4,
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
      <div className="relative mt-25 w-full max-w-7xl mx-auto overflow-hidden flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between px-5">
          <h2 className="text-3xl font-normal mb-5 uppercase tracking-wide">
            {title}
          </h2>
          <a href="#" className="text-gray-900 border-b-1 border-animate mb-5">
            View All Products
          </a>
        </div>
        <div className="my-slider" ref={sliderRef}>
          {products.map((item, index) => (
            <div
              key={index}
              className="group px-5 mt-5 w-md shrink-0 hover:scale-95 transition-all duration-400 hover:shadow-md cursor-pointer"
              data-aos="zoom-in-up"
            >
              {/* Image wrapper to position heart icon */}
              <div className="relative mr-5">
                <img src={item.path} alt={item.prodName} className="w-full" />

                {/* Heart icon (wishlist) */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => addToCart(item.prodName, item.price)}
                    className="bg-white hover:cursor-pointer p-3"
                  >
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
                </div>
              </div>
              <h3 className="uppercase text-2xl pt-4">{item.prodName}</h3>

              {/* Wrapper for smooth swap */}
              <div className="relative h-8 mt-2 overflow-hidden">
                {/* Price (default view) */}
                <p
                  className="absolute  text-gray-400 transition-all duration-700 ease-in-out
                     group-hover:translate-y-[-20px] group-hover:opacity-0"
                >
                  {item.price}
                </p>

                {/* Cart (hover view) */}
                <a
                  href="#"
                  className="absolute  uppercase transition-all duration-700 ease-in-out 
                     translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {item.cart}
                </a>
              </div>
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

export default ProductsSlider;
