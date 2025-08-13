const BlogPost = () => {
  return (
    <>
      <div className="mt-50">
        <div className="flex flex-col md:flex-row items-center justify-between px-2 lg:px-35 tracking-widest">
          <h2 className="text-3xl font-normal mb-5 uppercase">
            Read Blog Post
          </h2>
          <a href="#" className="text-gray-900 border-b-1 border-animate mb-5">
            View All
          </a>
        </div>

        <div
          className="mt-5 px-2 lg:px-35  flex flex-col items-center justify-center md:flex-row gap-5 w-full"
          data-aos="zoom-in-up"
        >
          <a href="#" className="">
            <img src="./img/post-image1.jpg" alt="" className="w-md" />
            <span className="uppercase text-gray-400">
              Fashion / jul 11, 2022
            </span>
            <h3 className="mt-3 text-2xl font-normal uppercase tracking-wide">
              How to look outstanding in pastel
            </h3>
            <p className="text-gray-500 mt-3">
              Dignissim lacus,turpis ut suspendisse vel tellus.Turpis
              purus,gravida orci,fringilla...
            </p>
          </a>
          <a href="#" className="">
            <img src="./img/post-image2.jpg" alt="" className="w-md" />
            <span className="uppercase text-gray-400">
              Fashion / jul 11, 2022
            </span>
            <h3 className="mt-3 text-2xl font-normal uppercase tracking-wide">
              Top 10 fashion trend for summer
            </h3>
            <p className="text-gray-500 mt-3">
              Dignissim lacus,turpis ut suspendisse vel tellus.Turpis
              purus,gravida orci,fringilla...
            </p>
          </a>
          <a href="#" className="">
            <img src="./img/post-image3.jpg" alt="" className="w-md" />
            <span className="uppercase text-gray-400">
              Fashion / jul 11, 2022
            </span>
            <h3 className="mt-3 text-2xl font-normal uppercase tracking-wide">
              Crazy fashion with unique moment
            </h3>
            <p className="text-gray-500 mt-3">
              Dignissim lacus,turpis ut suspendisse vel tellus.Turpis
              purus,gravida orci,fringilla...
            </p>
          </a>
        </div>

        <div className="mt-20">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row lg:px-35">
            <img src="./img/logo1.png" alt="" className="mb-10"/>
            <img src="./img/logo2.png" alt="" className="mb-10"/>
            <img src="./img/logo3.png" alt="" className="mb-10"/>
            <img src="./img/logo4.png" alt="" className="mb-10"/>
            <img src="./img/logo5.png" alt="" className="mb-10"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
