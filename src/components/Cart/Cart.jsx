import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Quantifier from "../Quantifier/Quantifier";
import { Operation } from "../Quantifier/Quantifier";

const Cart = () => {
  const [cart, setCart] = useLocalStorageState("cart", {});
  const location = useLocation();
  // console.log(cart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleRemoveProduct = (productId) => {
    try {
      setCart((prevCart) => {
        const updatedCart = { ...prevCart };
        delete updatedCart[productId];
        return updatedCart;
      });
      // console.log("reduce");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleUpdateQuantity = (productId, { operation: Operation }) => {
    try {
      setCart((prevCart) => {
        const updatedCart = { ...prevCart };
        if (updatedCart[productId]) {
          if (Operation === "increase") {
            updatedCart[productId] = {
              ...updatedCart[productId],
              quantity: updatedCart[productId].quantity + 1,
            };
          } else {
            updatedCart[productId] = {
              ...updatedCart[productId],
              quantity: updatedCart[productId].quantity - 1,
            };
          }
        }
        return updatedCart;
      });
    } catch (error) {
      console.log(error.message);
    }
    // console.log("increase");
  };
  const getProducts = () => Object.values(cart || {});

  const totalPrice = getProducts().reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  return (
    <div>
      <div className="flex-col px-10 ">
        {getProducts().map((product) => (
          <div key={product.id}>
            <div className="flex w-full items-center justify-between">
              <div className=" pt-5 pb-5">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  width={80}
                  height={80}
                />
                <h3>{product.title}</h3>
              </div>
              <Quantifier
                removeProductCallback={handleRemoveProduct}
                handleUpdateQuantity={handleUpdateQuantity}
                productId={product.id}
              />
              <h1> Total Price {totalPrice} </h1>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
