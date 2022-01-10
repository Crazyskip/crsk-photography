import React from "react";
import Separator from "../separator/separator.component";
import { PageTopperContainer, Title } from "./page-topper.styles";

const PageTopper = ({ title }) => (
  <PageTopperContainer>
    <Title>{title}</Title>
    <Separator width="100%" margin="20px 0" />
  </PageTopperContainer>
);

export default PageTopper;
