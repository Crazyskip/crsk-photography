import styled from "styled-components";

export const CartItemContainer = styled.div`
  text-align: start;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const TitleContainer = styled.div`
  font-size: 1rem;
  width: 100%;
  color: #cfcfcf;

  &::first-letter {
    text-transform: uppercase;
  }
`;
