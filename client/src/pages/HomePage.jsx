import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/custom.css";
import Slider from "../components/Slider";
import Category from "../components/Category";
import ProductsSlider from "../components/ProductsSlider";
import WintersCollection from "../components/WintersCollection";
import BlogPost from "../components/BlogsPost";
import NewsLetter from "../components/NewsLetter";

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
    price: "$95.00",
    cart: "Add to Cart",
  },
  {
    path: "./img/product-item-2.jpg",
    prodName: "Baggy Shirt",
    price: "$55.00",
    cart: "Add to Cart",
  },
  {
    path: "./img/product-item-3.jpg",
    prodName: "Cotton Off-White Shirt",
    price: "$65.00",
    cart: "Add to Cart",
  },
  {
    path: "./img/product-item-4.jpg",
    prodName: "Cotton Sweater",
    price: "$50.00",
    cart: "Add to Cart",
  },
  {
    path: "./img/product-item-5.jpg",
    prodName: "Crop Sweater",
    price: "$45.00",
    cart: "Add to Cart",
  },
  {
    path: "./img/product-item-6.jpg",
    prodName: "Baggy Shirt",
    price: "$45.00",
    cart: "Add to Cart",
  },
  {
    path: "./img/product-item-7.jpg",
    prodName: "Blue Jeans",
    price: "$45.00",
    cart: "Add to Cart",
  },
  {
    path: "./img/product-item-8.jpg",
    prodName: "Black Jeans",
    price: "$45.00",
    cart: "Add to Cart",
  },
  {
    path: "./img/product-item-9.jpg",
    prodName: "Cotton Shirt",
    price: "$45.00",
    cart: "Add to Cart",
  },
  {
    path: "./img/product-item-10.jpg",
    prodName: "Whoolen Sweater",
    price: "$45.00",
    cart: "Add to Cart",
  },
];

const HomePage = ({addToCart}) => {
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
          <Slider
            collections={collections}
            loop={true}
            lgItems={3}
            mdItems={2}
          />
        </div>
      </section>
      {/* Category Area */}
      <Category />
      {/* Products Slider Area */}
      <ProductsSlider
        products={productList}
        loop={false}
        lgItems={4}
        mdItems={2}
        smItems={2}
        title={"Our New Arivals"}
        addToCart={addToCart}
      />
      {/* Winter Collection Area */}
      <div className="bg-gray-200 py-20">
        <WintersCollection />
      </div>
      {/* Best selling items */}
      <ProductsSlider
        products={productList}
        loop={false}
        lgItems={4}
        mdItems={2}
        smItems={2}
        title={"Best Selling Items"}
        addToCart={addToCart}
      />
      {/* Video image */}
      <div className="relative w-full mt-15">
        <div className="mx-3 relative">
          <img src="./img/video-image.jpg" alt="" className="w-full" />
          <img
            src="./img/text-pattern.png"
            alt=""
            className="absolute top-1/2 left-1/2 w-64 
                 -translate-x-1/2 -translate-y-1/2 
                 slow-spin"
          />
        </div>
      </div>
      .{/* Your Like items */}
      <ProductsSlider
        products={productList}
        loop={false}
        lgItems={4}
        mdItems={2}
        smItems={2}
        title={"You May Also Like"}
        addToCart={addToCart}
      />

      {/* Blogs Post */}
      <BlogPost />

      {/* News Letter */}
      <NewsLetter />
    </>
  );
};

export default HomePage;
