import React from "react";
import Separator from "../separator/separator.component";
import { ContentContainer, FooterContainer } from "./footer.styles";

const Footer = () => (
  <FooterContainer>
    <Separator />
    <ContentContainer>&copy; CRSK Photography 2022</ContentContainer>
  </FooterContainer>
);

export default Footer;
