import styled from "styled-components";

import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

export const CartContainer = styled.div`
  margin-top: -5px;
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 32px;
  height: 32px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 0.8rem;
  font-weight: bold;
  bottom: 12px;
`;
