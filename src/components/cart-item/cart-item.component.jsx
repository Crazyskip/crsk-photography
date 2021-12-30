import React from "react";

import {
  ImageContainer,
  CartItemContainer,
  TitleContainer,
} from "./cart-item.styles";

const CartItem = ({ item }) => {
  return (
    <CartItemContainer>
      <ImageContainer src={item.imageURL} alt={item.title} />
      <TitleContainer>{item.title}</TitleContainer>
      <div>Type: {item.printType}</div>
      <div>Size: {item.printSize}</div>
      <div>Quantity: {item.quantity}</div>
    </CartItemContainer>
  );
};

export default CartItem;
