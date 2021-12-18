import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color: rgba(36, 36, 36, 0.4);
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 0 20px;
`;

export const LogoContainer = styled(Link)`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.5rem;
  font-weight: bold;
  width: 70px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;
