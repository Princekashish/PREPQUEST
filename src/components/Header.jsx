"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const Navbar = () => {
    setNavbar(!navbar);
  };
  console.log(navbar);

  return (
    <div className=" shadow-sm w-full flex justify-between p-5 ">
      {/* logo */}
      <div>
        <h1 className="lg:hidden uppercase text-xl font-sf-pro font-semibold tracking-tight leading-7">
          prepquest
        </h1>
        <h1 className="lg:block uppercase text-sm hidden font-sf-pro font-semibold tracking-tight leading-7">
          Find Your Privious year Question Paper
        </h1>
      </div>
      <div onClick={Navbar} className={`relative z-10 cursor-pointer lg:hidden`}>
        {navbar ? <X size={30} className="text-white" /> : <Menu size={30} />}
      </div>
      <nav
        className={`fixed h-screen w-full bg-black top-0 left-0 transition-opacity duration-500 ease-in-out ${
          navbar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul
          className={` text-[2em] text-[#7a7c7c] font-sf-pro   h-screen w-1/2 p-5 fixed top-0 left-0 transition-transform duration-500 ease-in-out transform ${
            navbar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li className=" text-[1.3em] font-light tracking-wider p-5 font-sf-pro  border-b-[0.2px] text-[#e9e9e9]">
            Menu
          </li>
          <li className="p-5 tracking-wide ">Home</li>
          <li className="p-5 tracking-wide">About</li>
          <li className="p-5 tracking-wide">Contact</li>
          <li className="p-5 capitalize tracking-wide">SingIn</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
