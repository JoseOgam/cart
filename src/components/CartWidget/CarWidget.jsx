import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { shoppingCart } from "../../assets";
import useLocalStorageState from "use-local-storage-state";

const CarWidget = () => {
  const { cart } = useLocalStorageState("cart", {});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navigateToCart = () => {
    navigate("/cart");
  };

  const productIncart = () => Object.values(cart || {});
  const productCount = productIncart();
  console.log(productCount);
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
            className=" bg-orange-100"
          />
          <span className=" z-auto text-orange-500 font-bold">
            {productCount}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CarWidget;
