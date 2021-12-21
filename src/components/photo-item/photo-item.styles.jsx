import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PhotoItemContainer = styled(NavLink)`
  text-align: start;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const TitleContainer = styled.div`
  font-size: 1rem;
  width: 100%;
  color: #cfcfcf;

  &::first-letter {
    text-transform: uppercase;
  }
`;
