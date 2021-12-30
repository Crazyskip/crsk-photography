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

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer to="/" onClick={() => setOpen(false)}>
        CRSK
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/">HOME</OptionLink>
        <OptionLink to="/gallery">GALLERY</OptionLink>
        <OptionLink to="/about">ABOUT</OptionLink>
        <OptionLink to="/cart">
          <CartIcon />
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
        <OptionLink to="/cart" onClick={() => setOpen(false)}>
          <MobileCartOption>
            CART <CartIcon />
          </MobileCartOption>
        </OptionLink>
      </StyledMenu>
    </HeaderContainer>
  );
};

export default Header;
