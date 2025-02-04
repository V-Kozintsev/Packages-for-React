// Product.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/productSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  if (!product) return <div>Loading...</div>; // или <div>No Product</div>

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product">
      <p>{product.title}</p>
      <p>{`${product.price} руб`}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
