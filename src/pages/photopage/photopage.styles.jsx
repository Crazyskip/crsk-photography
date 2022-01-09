import styled from "styled-components";
import device from "../../commons/breakpoints";

export const PhotoPageContainer = styled.div`
  color: #cfcfcf;
  max-width: 90%;
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

export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  margin: 25px 0 10px 0;
`;

export const Heading = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const SubmitInput = styled.input`
  background-color: #0743c5;
  color: #ffffff;
  font-size: 0.8rem;
  margin: 10px 0;
  font-weight: bold;
  padding: 15px 30px;
  border-radius: 25px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: #074dc5;
  }
`;

export const FormContainer = styled.form`
  width: 100%;

  @media only screen and ${device.xs} {
    width: 50%;
  }

  @media only screen and ${device.sm} {
    width: 25%;
  }
`;
