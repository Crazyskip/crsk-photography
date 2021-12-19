import styled from "styled-components";

import device from "../../commons/breakpoints";

export const PhotoListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;

  @media only screen and ${device.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and ${device.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
