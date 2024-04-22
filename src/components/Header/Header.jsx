import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import CarWidget from "../CartWidget/CarWidget";
import { navLinks } from "../../constants/constants";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleToggleNav = () => {
    setNav(!nav);
  };
  return (
    <nav
      className="w-full flex items-center fixed 
      top-0 z-20 bg-orange-100"
    >
      <div className="flex w-full justify-between items-center px-8 pt-8">
        {/* Desktop View */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className=" object-contain items-center justify-center"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2 justify-center items-center">
          {navLinks.map((nav) => (
            <li key={nav.id} className="">
              <a href={`#${nav.id}`}> {nav.title} </a>
            </li>
          ))}

          <CarWidget />
        </ul>
        {/* Mobile View */}
        <div
          className="block md:hidden font-extrabold"
          onClick={handleToggleNav}
        >
          {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[50%] h-full border-r border-r-orange-100 bg-[#faedcd] ease-in-out duration-500 scroll-m-5"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className=" object-contain items-center justify-center"
            />
          </Link>

          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className=" p-4 border-b rounded-xl hover:bg-[#f4a261] hover:text-black text-[#000000] cursor-pointer"
              onClick={handleToggleNav}
            >
              <a href={`#${nav.id}`}> {nav.title} </a>
            </li>
          ))}

          <CarWidget />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
