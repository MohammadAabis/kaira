import { useRef } from "react";
import Slider from "../components/Slider";

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

const HomePage = () => {
  return (
    <>
      <section className="bg-gray-100 py-5">
        <div className="flex flex-col items-center justify-center">
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
          <Slider collections={collections} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
