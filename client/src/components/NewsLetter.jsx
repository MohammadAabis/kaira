const NewsLetter = () => {
  return (
    <>
      <div className="relative bg-gray-100 mt-10">
        <img
          src="./img/pattern-bg.png"
          alt=""
          className=" h-[300px] w-full md:h-[450px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full max-w-4xl">
          <h2 className="text-2xl text-center md:text-4xl font-normal tracking-widest uppercase px-0">
            Sign Up for our newsletter
          </h2>
          <input
            type="email"
            placeholder="Your Email Address"
            className="uppercase rounded-md w-full p-3 my-3 bg-white focus:shadow-lg focus:outline-0"
          />
          <button className="uppercase py-2 w-full bg-black text-white rounded-md">
            Sign Up
          </button>
        </div>
      </div>
      <div className="relative mb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <img src="./img/insta-item1.jpg" alt="" />
          <img src="./img/insta-item2.jpg" alt="" />
          <img src="./img/insta-item3.jpg" alt="" />
          <img src="./img/insta-item4.jpg" alt="" />
          <img src="./img/insta-item5.jpg" alt="" />
          <img src="./img/insta-item6.jpg" alt="" />
        </div>
        <button className="absolute text-white bg-black py-2 px-5 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          Follow us on Instagram
        </button>
      </div>
    </>
  );
};

export default NewsLetter;
