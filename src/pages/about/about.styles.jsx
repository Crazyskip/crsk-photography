import styled from "styled-components";
import device from "../../commons/breakpoints";

export const AboutPageContainer = styled.div`
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

export const ListContainer = styled.ul`
  list-style-type: none;

  li {
    margin-bottom: 8px;
  }
`;
