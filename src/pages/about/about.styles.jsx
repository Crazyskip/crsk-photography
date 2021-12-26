import styled from "styled-components";
import device from "../../commons/breakpoints";

export const AboutPageContainer = styled.div`
  max-width: 90%;
  text-align: center;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);

  @media only screen and ${device.sm} {
    max-width: 720px;
  }
  @media only screen and ${device.lg} {
    max-width: 962px;
  }
`;
