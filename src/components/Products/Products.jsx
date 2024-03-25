import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/reducers/slice";
import useLocalStorage from "use-local-storage-state";

const Products = () => {
  const { products, setProducts } = useSelector((state) => state.products);
  const [cart, setCart] = useState("cart", {});
  console.log(products);

  const dispatch = useDispatch();

  const addToCart = (product) => {
    try {
      const updatedCart = { ...cart };
      if (updatedCart[product.id]) {
        updatedCart[product.id].quantity++;
        console.log("hureey");
      } else {
        updatedCart[product.id] = { ...product, quantity: 1 };
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
      <div>
        <div className="flex flex-col overflow-x-hidden gap-10">
          <div className="grid grid-cols-3 h-screen items-center justify-center">
            {products.map((product) => (
              <div key={product.id}>
                <img src={product.thumbnail} className=" w-20 h-20" />
                <div> {product.title} </div>
                <p>Price:{product.price}</p>
                <button
                  disabled={!!cart[product.id]}
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
