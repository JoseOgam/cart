import React from "react";
import { useNavigate } from "react-router-dom";
import { shoppingCart } from "../../assets";

const CarWidget = ({ productCount }) => {
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/cart");
  };
  return (
    <div>
      <div>
        <button
          onClick={navigateToCart}
          className="flex items-center justify-between cursor-pointer backdrop-blur-none"
        >
          <img
            src={shoppingCart}
            alt="shopping cart"
            width={100}
            height={100}
          />
          <span className=" z-auto text-orange-500 font-bold">
            {productCount} 1{" "}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CarWidget;
