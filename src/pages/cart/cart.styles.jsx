import styled from "styled-components";
import device from "../../commons/breakpoints";

export const CartPageContainer = styled.div`
  max-width: 90%;
  text-align: center;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);

  @media only screen and ${device.sm} {
    max-width: 720px;
  }
  @media only screen and ${device.lg} {
    max-width: 962px;
  }
`;

export const CartItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;

  @media only screen and ${device.xs} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and ${device.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and ${device.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
