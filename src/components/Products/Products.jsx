import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/reducers/slice";

import useLocalStorageState from "use-local-storage-state";

const Products = () => {
  const { products, setProducts } = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useLocalStorageState("cart", {});

  const dispatch = useDispatch();

  const addToCart = (product) => {
    try {
      const updatedCart = { ...cart };
      if (updatedCart[product.id]) {
        updatedCart[product.id].quantity++;
        console.log("hureey");
      } else {
        updatedCart[product.id] = { ...product, quantity: 0 };
      }
      setCart(updatedCart);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <h1 className="flex  justify-center font-bold">Products</h1>
      <div className="flex justify-center w-full px-10">
        <div className="flex flex-col overflow-x-hidden ">
          <div className="grid grid-cols-3 h-screen items-center justify-center gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className=" flex-col justify-center items-center"
              >
                <img src={product.thumbnail} className=" w-100 h-80" />
                <div> {product.title} </div>
                <p>Price:{product.price}</p>
                <button
                  // disabled={!!cart[product.id]}
                  onClick={() => addToCart(product)}
                  className=" bg-orange-400 text-black rounded items-center justify-center py-2 px-2"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
