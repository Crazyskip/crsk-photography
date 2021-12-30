import react from "react";
import { useSelector } from "react-redux";
import { selectTotalQuantity } from "../../redux/cart/cartSlice";

import {
  CartContainer,
  ItemCountContainer,
  ShoppingIcon,
} from "./cart-icon.styles";

const CartIcon = () => {
  const itemCount = useSelector(selectTotalQuantity);

  return (
    <CartContainer>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
