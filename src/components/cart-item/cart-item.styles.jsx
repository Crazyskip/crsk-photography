import styled from "styled-components";

export const CartItemContainer = styled.div`
  text-align: start;
  position: relative;
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

export const QuantityContainer = styled.div`
  display: flex;

  div {
    cursor: pointer;
    margin: 0 10px;
    font-weight: bold;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export const RemoveButton = styled.div`
  margin-top: 5px;
  cursor: pointer;
  color: #ff0000;

  &:hover {
    color: #e00909;
  }
`;
