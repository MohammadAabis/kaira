const WintersCollection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start mx-3 md:mx-20 bg-white">
        <img src="./img/single-image-2.jpg" alt="" className="w-xl "/>
        <div className="flex flex-col justify-center items-start p-10 md:p-20 ">
            <h3 className="text-5xl tracking-wide font-normal">Classic Winter Collection</h3>
            <p className="text-gray-400 mt-10 tracking-wider">Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.</p>
            <button className="bg-black text-white uppercase mt-10 p-2 hover:cursor-pointer hover:bg-gray-700">Shop Collection</button>
        </div>
      </div>
    </>
  );
};

export default WintersCollection;
