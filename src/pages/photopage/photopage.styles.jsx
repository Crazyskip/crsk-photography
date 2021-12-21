import styled from "styled-components";
import device from "../../commons/breakpoints";

export const PhotoPageContainer = styled.div`
  color: #cfcfcf;
  max-width: 90%;
  text-align: center;
  margin: 0 auto;

  @media only screen and ${device.sm} {
    max-width: 720px;
  }
  @media only screen and ${device.lg} {
    max-width: 962px;
  }
`;

export const ImageContainer = styled.img`
  width: 90%;
  height: auto;
  margin-bottom: 10px;
`;
