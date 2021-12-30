import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/cart-item/cart-item.component";
import PageTopper from "../../components/page-topper/page-topper.component";
import { selectCartItems } from "../../redux/cart/cartSlice";

import { CartItemsContainer, CartPageContainer } from "./cart.styles";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <CartPageContainer>
      <PageTopper title="CART" />
      <CartItemsContainer>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id + cartItem.printType + cartItem.printSize}
            item={cartItem}
          />
        ))}
      </CartItemsContainer>
    </CartPageContainer>
  );
};

export default CartPage;
