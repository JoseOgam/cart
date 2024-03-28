import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import CarWidget from "../CartWidget/CarWidget";
import { navLinks } from "../../constants/constants";

const Header = () => {
  return (
    <nav
      className="w-full flex items-center fixed 
      top-0 z-20 bg-orange-100"
    >
      <div className="flex w-full justify-between items-center px-8 pt-8">
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
      </div>
    </nav>
  );
};

export default Header;
