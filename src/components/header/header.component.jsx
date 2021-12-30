import React, { useState } from "react";
import CartIcon from "../cart-icon/cart-icon.component";
import {
  HeaderContainer,
  LogoContainer,
  MobileCartOption,
  OptionLink,
  OptionsContainer,
  StyledBurger,
  StyledMenu,
} from "./header.styles";

const Header = ({ cartItems }) => {
  const [open, setOpen] = useState(false);

  const itemCount = cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );

  return (
    <HeaderContainer>
      <LogoContainer to="/" onClick={() => setOpen(false)}>
        CRSK
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/">HOME</OptionLink>
        <OptionLink to="/gallery">GALLERY</OptionLink>
        <OptionLink to="/about">ABOUT</OptionLink>
        <OptionLink to="/">
          <CartIcon itemCount={itemCount} />
        </OptionLink>
      </OptionsContainer>

      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </StyledBurger>

      <StyledMenu open={open}>
        <OptionLink to="/" onClick={() => setOpen(false)}>
          HOME
        </OptionLink>
        <OptionLink to="/gallery" onClick={() => setOpen(false)}>
          GALLERY
        </OptionLink>
        <OptionLink to="/about" onClick={() => setOpen(false)}>
          ABOUT
        </OptionLink>
        <OptionLink to="#" onClick={() => setOpen(false)}>
          <MobileCartOption>
            CART <CartIcon itemCount={itemCount} />
          </MobileCartOption>
        </OptionLink>
      </StyledMenu>
    </HeaderContainer>
  );
};

export default Header;
