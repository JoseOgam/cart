import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import CarWidget from "../CartWidget/CarWidget";

const Header = () => {
  return (
    <nav>
      <div className="">
        <div className="flex w-full justify-between items-center px-4">
          <Link to="/">
            <img src={logo} alt="logo" width={100} height={100} />
          </Link>

          <ul>
            {/* <CarWidget /> */}
            Cart
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
