import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";

const Cart = () => {
  const [cart, setCart] = useLocalStorageState("cart", {});
  const location = useLocation();
  console.log(cart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const getProducts = () => Object.values(cart || {});
  console.log(`objects : ${getProducts()}`);
  return (
    <div>
      <div className="flex-col px-10 ">
        {getProducts().map((product) => (
          <div key={product.id}>
            <div className=" pt-5 pb-5">
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
