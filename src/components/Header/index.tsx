"use client";

import Image from "next/image";

import TrivagoLogo from "../../assets/trivago-logo.svg";
import HeartIcon from "../../assets/heart-icon.svg";
import MenuIcon from "../../assets/menu-icon.svg";

export default function Header() {
  return (
    <header className="flex justify-between  px-4 lg:px-72 border-b">
      <Image src={TrivagoLogo} alt="Trivago" priority={true} />

      <nav className="flex">
        <a
          href=""
          className="flex gap-1 items-center  hover:bg-gray-100 px-1 lg:px-4 py-4 lg:py-4 cursor-pointer"
        >
          <Image src={HeartIcon} alt="Trivago" priority={true} />
          <span className="text-xs hidden lg:flex">Favorites</span>
        </a>
        <select className=" gap-1 items-center  hidden lg:flex hover:bg-gray-100 p-4 cursor-pointer text-sm text-center">
          <option selected className="text-sm">
            USD
          </option>
          <option value="B">BRL - Real</option>
        </select>
        <select className=" gap-1 items-center  hidden lg:flex hover:bg-gray-100 p-4 cursor-pointer text-sm text-center">
          <option selected className="text-sm">
            EN
          </option>
          <option value="B">PT - real</option>
        </select>
        <a
          href=""
          className="flex gap-1 items-center  hover:bg-gray-100 px-3 lg:px-4 py-4 lg:py-4 cursor-pointer"
        >
          <svg
            tabIndex={-1}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill-rule="nonzero" fill="none">
              <circle fill="#F9C77F" cx="12" cy="12" r="12"></circle>
              <path
                d="M14.223 14.324H9.5c-.126 0-.227.101-.202.228.126 1.111 1.238 2.248 2.577 2.248s2.45-1.137 2.577-2.248a.226.226 0 00-.228-.228z"
                fill="#37454D"
              ></path>
              <g transform="translate(4.042 9.347)" fill="#37454D">
                <circle cx="14.425" cy="1.238" r="1.061"></circle>
                <circle cx="1.213" cy="1.314" r="1.061"></circle>
              </g>
            </g>
          </svg>
        </a>
        <button className="hidden gap-1 items-center  hover:bg-gray-100 p-4 cursor-pointer">
          <Image src={MenuIcon} alt="Usuario" priority={true} />
          <span className="text-xs">Menu</span>
        </button>
      </nav>
    </header>
  );
}
