import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/reducers/slice";

import useLocalStorageState from "use-local-storage-state";
import { SectionWrapper } from "../../hoc";

const Products = () => {
  const { products, setProducts } = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useLocalStorageState("cart", {});

  const dispatch = useDispatch();

  const addToCart = (product) => {
    try {
      const updatedCart = { ...cart };
      if (updatedCart[product.id]) {
        updatedCart[product.id].quantity++;
      } else {
        updatedCart[product.id] = { ...product, quantity: 1 };
      }
      setCart(updatedCart);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="flex pt-28 pb-28">
      <div className="flex justify-center w-full px-10">
        <div className="flex flex-col overflow-x-hidden ">
          <div className="flex w-full pt-4 pb-4 items-center justify-center">
            <input
              placeholder="search items..."
              onChange={(e) => setQuery(e.target.value)}
              className=" w-[75%] py-2 px-2 border-slate-950 rounded-2xl"
            />
          </div>
          <div className="grid md:grid-cols-3 md:items-center md:justify-center h-screen items-center justify-center gap-10">
            {filteredProducts ? (
              filteredProducts.map((product) => (
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
              ))
            ) : (
              <div>
                <div className="text-xl">Error: Failed to Fetch, try again</div>
                {console.log("Error")}
                <button
                  className="bg-black text-white w-[100px] h-[35px] rounded-[50px] flex justify-center items-center mt-6"
                  onClick={() => window.location.reload()}
                >
                  Go Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Products, "home");
