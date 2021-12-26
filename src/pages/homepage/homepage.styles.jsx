import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
`;

export const ImageContainer = styled.img`
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
  object-fit: cover;
  width: 100vw;
  height: 100vh;

  -webkit-animation: fade 20s infinite;
  animation: fade 20s infinite;

  &:nth-of-type(1) {
    animation-delay: 15s;
  }

  &:nth-of-type(2) {
    animation-delay: 10s;
  }

  &:nth-of-type(3) {
    animation-delay: 5s;
  }

  &:nth-of-type(4) {
    animation-delay: 0s;
  }

  @-webkit-keyframes fade {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    95% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    95% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
