import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return <div>Корзина:{quantity}</div>;
};

export default Cart;
