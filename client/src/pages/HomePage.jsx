import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "../components/Slider";
import Category from "../components/Category";
import ProductsSlider from "../components/ProductsSlider";

const collections = [
  {
    path: "./img/banner-image-1.jpg",
    prodName: " Soft Leather Jacket",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    discover: "Discover Now",
  },
  {
    path: "./img/banner-image-2.jpg",
    prodName: " Soft Leather Jacket",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    discover: "Discover Now",
  },
  {
    path: "./img/banner-image-3.jpg",
    prodName: " Soft Leather Jacket",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    discover: "Discover Now",
  },
  {
    path: "./img/banner-image-4.jpg",
    prodName: " Soft Leather Jacket",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    discover: "Discover Now",
  },
  {
    path: "./img/banner-image-5.jpg",
    prodName: " Soft Leather Jacket",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    discover: "Discover Now",
  },
  {
    path: "./img/banner-image-6.jpg",
    prodName: " Soft Leather Jacket",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    discover: "Discover Now",
  },
];

const productList = [
  {
    path: "./img/product-item-1.jpg",
    prodName: "Dark Florish OnePiece",
    price:'$95.00',
    cart: "Add to Cart",
  },
  {
    path: "./img/product-item-2.jpg",
    prodName: "Baggy Shirt",
    price:'$55.00',
    cart: "Add to Cart",
  },
  {
    path: "./img/product-item-3.jpg",
    prodName: "Cotton Off-White Shirt",
    price:'$65.00',
    cart: "Add to Cart",
  },
  {
    path: "./img/product-item-4.jpg",
    prodName: "Cotton Sweater",
    price:'$50.00',
    cart: "Add to Cart",
  },
  {
    path: "./img/product-item-5.jpg",
    prodName: "Crop Sweater",
    price:'$45.00',
    cart: "Add to Cart",
  },
]

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <>
      {/* Starting Area */}
      <section className="bg-gray-100 py-5">
        <div
          className="flex flex-col items-center justify-center mb-10"
          data-aos="fade-up"
        >
          <div className="mt-15 md:max-w-1/2">
            <h1 className="text-6xl font-sans text-center">New Collections</h1>
            <p className="text-center mt-5 text-gray-400 px-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              voluptas ut dolorum consequuntur, adipisci repellat! Eveniet
              commodi voluptatem voluptate, eum minima, in suscipit explicabo
              voluptatibus harum, quibusdam ex repellat eaque!
            </p>
          </div>

          {/* first slidder on home screen */}
          <Slider collections={collections} loop={true} lgItems={3} mdItems={2}/>
        </div>
      </section>

      {/* Category Area */}
      <Category />

      {/* Products Slider Area */}
      <ProductsSlider products={productList} loop={false} lgItems={4} mdItems={2} smItems={2} title={'Our New Arivals'}/>
    </>
  );
};

export default HomePage;
