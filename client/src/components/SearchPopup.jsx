import { useEffect, useRef } from "react"

export default function SearchPopup({ searchOpen, setSearchOpen }) {
  const popupRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setSearchOpen(false)
      }
    }

    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [searchOpen, setSearchOpen])

  if (!searchOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-300 flex flex-col items-center justify-center">
      <div ref={popupRef} className="relative px-4 w-full md:w-3/4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-4 rounded-md text-lg focus:outline-pink-400 shadow-sm"
        />
        <button className="absolute top-4 right-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search-icon lucide-search"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
        </button>
      </div>

      <div className="mt-20 text-center text-2xl sm:text-3xl lg:text-4xl">
        <p className="uppercase text-sm font-light">Browse Categories</p>
        <div className="mt-4">
          <p>Jackets / T-shirts / Handbags / Accessories /</p>
          <p>Cosmetics / Dress / Jumpsuits</p>
        </div>
      </div>
    </div>
  )
}
