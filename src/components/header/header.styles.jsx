import styled from "styled-components";
import { Link } from "react-router-dom";
import device from "../../commons/breakpoints";

export const HeaderContainer = styled.div`
  background-color: rgba(16, 16, 16, 0.6);
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 100;

  position: fixed;
  top: 0;
`;

export const LogoContainer = styled(Link)`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.5rem;
  font-weight: bold;
  width: 70px;
`;

export const OptionsContainer = styled.div`
  display: none;

  @media only screen and ${device.sm} {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
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

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media only screen and ${device.sm} {
    display: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const StyledMenu = styled.nav`
  height: calc(100vh - 70px);
  background: rgba(16, 16, 16);
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 0 6rem 0 2rem;
  position: absolute;
  top: 70px;
  right: 0;
  font-size: 2rem;
  display: ${({ open }) => (open ? "flex" : "none")};

  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
    padding: 0;
  }

  @media only screen and ${device.sm} {
    display: none;
  }
`;

export const MobileCartOption = styled.div`
  display: flex;
  justify-content: center;
`;
