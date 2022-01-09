import styled from "styled-components";
import device from "../../commons/breakpoints";

export const CategoryPageContainer = styled.div`
  color: #cfcfcf;
  max-width: 90%;
  text-align: center;
  margin: 0 auto;
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
