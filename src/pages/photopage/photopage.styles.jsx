import styled from "styled-components";
import device from "../../commons/breakpoints";

export const PhotoPageContainer = styled.div`
  color: #cfcfcf;
  max-width: 90%;
  margin: 0 auto;

  @media only screen and ${device.sm} {
    max-width: 720px;
  }
  @media only screen and ${device.lg} {
    max-width: 962px;
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const Heading = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const ParagraphContainer = styled.p`
  margin-bottom: 10px;
`;
