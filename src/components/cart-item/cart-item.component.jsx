import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeItem,
} from "../../redux/cart/cartSlice";

import {
  ImageContainer,
  CartItemContainer,
  TitleContainer,
  RemoveButton,
  QuantityContainer,
} from "./cart-item.styles";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <CartItemContainer>
      <ImageContainer src={`${item.imageURL}?h=225&w=300`} alt={item.title} />
      <TitleContainer>{item.title}</TitleContainer>
      <div>Type: {item.printType}</div>
      <div>Size: {item.printSize}</div>
      <QuantityContainer>
        Quantity:{" "}
        <div onClick={() => dispatch(decrementItem(item))}>&#8722;</div>
        <span>{item.quantity}</span>
        <div onClick={() => dispatch(incrementItem(item))}>&#43;</div>
      </QuantityContainer>
      <RemoveButton onClick={() => dispatch(removeItem(item))}>
        Remove
      </RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
