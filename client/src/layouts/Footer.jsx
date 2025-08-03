const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 space-x-2 p-4 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
        <div className="md:mt-0 lg:ml-10">
          <img src="/img/main-logo.png" alt="logo" className="w-20 sm:w-24" />
          <p className="mt-3 font-normal text-gray-400 lg:mt-6">
            Gravida massa volutpat aenean odio. Amet, turpis erat nullam
            fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit
            ac sit suscipit hendrerit.
          </p>
          <div className="flex space-x-2 mt-3">
            <a
              href="#"
              className="flex items-center justify-center w-6 h-6 fill-current text-gray-500 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"></path>
              </svg>
            </a>
            <a href="#">
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
                class="lucide lucide-twitter-icon lucide-twitter text-gray-500"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#">
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
                class="lucide lucide-youtube-icon lucide-youtube text-gray-500"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-6 h-6 fill-current text-gray-500 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 25.570312 11 C 17.925781 11 13 16.417969 13 21.648438 C 13 26.75 15.824219 27.949219 16.417969 28.292969 C 17.007812 28.636719 17.425781 28.394531 17.558594 27.921875 L 17.914062 26.5 C 17.914062 26.5 18.078125 26.121094 17.75 25.722656 C 17.347656 25.238281 16.480469 24.351562 16.480469 22.148438 C 16.480469 18.214844 19.582031 13.933594 25.210938 13.933594 C 30.734375 13.933594 32.625 17.53125 32.625 20.507812 C 32.625 24.210938 30.851562 29.746094 27.109375 29.746094 C 24.785156 29.746094 24.113281 27.949219 24.113281 27.074219 C 24.101562 26.773438 24.167969 26.476562 24.199219 26.332031 C 24.226562 26.191406 25.171875 23.183594 25.472656 22.109375 C 26.148438 19.703125 25.570312 17.703125 23.359375 17.703125 C 20.242188 17.703125 19.121094 22.089844 20.488281 24.894531 L 18.265625 34.003906 C 18.265625 34.003906 17.957031 35.496094 17.894531 36.375 C 17.804688 37.726562 17.996094 39.722656 18.0625 40.320312 C 18.109375 40.753906 18.113281 40.960938 18.308594 41 C 18.503906 41.035156 18.839844 40.703125 19.109375 40.300781 C 19.453125 39.796875 20.609375 38.164062 21.078125 37.125 C 21.496094 36.199219 21.570312 36.175781 22.003906 34.535156 C 22.441406 32.894531 23.027344 30.585938 23.027344 30.585938 C 23.027344 30.585938 24.246094 32.722656 27.542969 32.722656 C 32.230469 32.722656 37 28.640625 37 21.003906 C 37 14.816406 31.640625 11 25.570312 11 Z M 25.570312 11"></path>
              </svg>
            </a>
            <a href="#">
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
                class="lucide lucide-instagram-icon lucide-instagram text-gray-500"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-3 md:mt-0">
          <span className="text-3xl font-light uppercase">Quick Links</span>
          <ul className="mt-3 uppercase">
            <li>
              <a href="#" className="border-animate">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="border-animate">
                About
              </a>
            </li>
            <li>
              <a href="#" className="border-animate">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="border-animate">
                Single Item
              </a>
            </li>
            <li>
              <a href="#" className="border-animate">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-3 lg:mt-0">
          <span className="text-3xl font-light uppercase">Help & Info</span>
          <ul className="mt-3 uppercase ">
            <li>
              <a href="#" className="border-animate">
                Track Your Order
              </a>
            </li>
            <li>
              <a href="#" className="border-animate">
                Returns + Exchanges
              </a>
            </li>
            <li>
              <a href="#" className="border-animate">
                Shipping + Delivery
              </a>
            </li>
            <li>
              <a href="#" className="border-animate">
                Contact US
              </a>
            </li>
            <li>
              <a href="#" className="border-animate">
                Find Us Easy
              </a>
            </li>
            <li>
              <a href="#" className="border-animate">
                Faqs
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-3 lg:mt-0 mr-10">
          <span className="text-3xl font-light uppercase">Contact us</span>
          <div className="mt-3 flex flex-col">
            <span className="font-normal text-gray-400">
              Do you have any questions or suggestions?
            </span>
            <span>contact@yourcompany.com</span>
          </div>
          <div>
            <span className="font-normal text-gray-400">
              Do you need support? Give us a call.
            </span>
            <span className="border-animate">+92 123 4567890</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
