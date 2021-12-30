import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/cart/cartSlice";

import {
  ImageContainer,
  CartItemContainer,
  TitleContainer,
} from "./cart-item.styles";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <CartItemContainer>
      <ImageContainer src={`${item.imageURL}?h=225&w=300`} alt={item.title} />
      <TitleContainer>{item.title}</TitleContainer>
      <div>Type: {item.printType}</div>
      <div>Size: {item.printSize}</div>
      <div>Quantity: {item.quantity}</div>
      <div onClick={() => dispatch(removeItem(item))}>Remove</div>
    </CartItemContainer>
  );
};

export default CartItem;
