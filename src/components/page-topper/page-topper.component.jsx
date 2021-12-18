import React from "react";
import { PageTopperContainer } from "./page-topper.styles";

const PageTopper = ({ title }) => (
  <PageTopperContainer>
    {title} <hr />
  </PageTopperContainer>
);

export default PageTopper;
