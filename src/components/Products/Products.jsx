import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/reducers/slice";

const Products = () => {
  const { products, loading } = useSelector((state) => state.products);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return <div>Products</div>;
};

export default Products;
