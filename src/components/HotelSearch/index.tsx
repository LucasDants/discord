import Magnify from "@/assets/magnify-icon.svg";
import Image from "next/image";

export default function HotelSearch() {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-4">
        We compare hotel prices from multiple sites
      </h2>

      <div className="flex m-3 xl:m-0 flex-col xl:flex-row drop-shadow-xl  bg-white rounded-s-2xl rounded-r-2xl ">
        <section className="p-1 xl:border-r border-b xl:border-b-0  border-gray-200">
          <div className="flex py-2 px-3 bg-white items-center gap-2 hover:bg-gray-100 rounded-2xl">
            <Image src={Magnify} alt="Magnify" />
            <div className="flex flex-col gap-2">
              <span style={{ fontSize: "0.7rem" }} className="text-gray-600 ">
                Hotel
              </span>
              <input
                style={{ fontSize: "0.75rem" }}
                className="outline-none placeholder:text-gray-300 placeholder:font-extralight font-bold text-black bg-transparent w-52"
                placeholder="Where to?"
              />
            </div>
          </div>
        </section>

        <section className="hidden xl:flex items-center px-2 xl:border-r border-b xl:border-b-0 border-gray-200">
          <div
            style={{ gap: "0.735rem" }}
            className="flex   p-2 px-4 hover:bg-gray-100 rounded-2xl items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path d="M12 12.71V17h1v-6h-.71l-1.83 1.83.71.71.83-.83z"></path>
                <path d="M19 5h-1a1 1 0 00-2 0H8a1 1 0 00-2 0H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1V9h16zm0-10H4V7a1 1 0 011-1h14a1 1 0 011 1z"></path>
              </g>
            </svg>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">Check in</span>
              <span className="text-xs font-bold text-black">
                Tue, 08/22/23
              </span>
            </div>
          </div>
          <span className="w-px h-8 bg-gray-300"></span>
          <div className="flex flex-col gap-1 p-2 px-4 hover:bg-gray-100 rounded-2xl">
            <span className="text-xs text-gray-500">Check in</span>
            <span className="text-xs font-bold text-black">Wed, 09/01/23</span>
          </div>
        </section>

        <section className="flex xl:hidden items-center px-2 xl:border-r border-b xl:border-b-0 border-gray-200">
          <div
            style={{ gap: "0.735rem" }}
            className="flex   p-2 px-2 hover:bg-gray-100 rounded-2xl items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path d="M12 12.71V17h1v-6h-.71l-1.83 1.83.71.71.83-.83z"></path>
                <path d="M19 5h-1a1 1 0 00-2 0H8a1 1 0 00-2 0H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1V9h16zm0-10H4V7a1 1 0 011-1h14a1 1 0 011 1z"></path>
              </g>
            </svg>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">Check in/out</span>
              <span className="text-xs font-bold text-black">
                Aug 22 - Sep 21
              </span>
            </div>
          </div>
        </section>

        <section className="flex p-1 pr-32 m-2 mt-1 gap-2 items-center hover:bg-gray-100 rounded-xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 12a3.1 3.1 0 00-1-2.31V6a1 1 0 00-1-1H5a1 1 0 00-1 1v3.69A3.1 3.1 0 003 12a1 1 0 00-1 1v4a2 2 0 002 2h16a2 2 0 002-2v-4a1 1 0 00-1-1zm-7.76-1a1.72 1.72 0 011.51-1h3.5a1.5 1.5 0 01.75.2 1.87 1.87 0 01.91 1.21A1.87 1.87 0 0120 12h-7a2.2 2.2 0 01.24-1zM5 6h14v3.12a2.36 2.36 0 00-.75-.12h-3.5a2.78 2.78 0 00-2.59 2 3.27 3.27 0 00-.16 1 3.27 3.27 0 00-.16-1 2.78 2.78 0 00-2.59-2h-3.5a2.36 2.36 0 00-.75.12zm-.91 5.41A1.87 1.87 0 015 10.2a1.5 1.5 0 01.75-.2h3.5a1.72 1.72 0 011.51 1 2.2 2.2 0 01.24 1H4a1.87 1.87 0 01.09-.59zM21 17a1 1 0 01-1 1H4a1 1 0 01-1-1v-4h18z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="flex flex-col gap-1 ">
            <span className="text-xs text-gray-500">Guest and rooms</span>
            <span className="text-xs font-bold text-black">
              2 Guests, 1 Room
            </span>
          </div>
        </section>

        <button className="p-8 py-7 w-full xl:w-min bg-blue-500 rounded-b-2xl  xl:rounded-bl-none xl:rounded-r-2xl self-center text-white font-bold">
          Search
        </button>
      </div>

      <div className="mt-10 flex w-full gap-8"></div>
    </div>
  );
}
