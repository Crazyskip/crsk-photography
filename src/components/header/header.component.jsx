import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">CRSK</LogoContainer>
    <OptionsContainer>
      <OptionLink to="/">HOME</OptionLink>
      <OptionLink to="/gallery">GALLERY</OptionLink>
      <OptionLink to="/about">ABOUT</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
