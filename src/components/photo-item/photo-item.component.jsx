import React from "react";
import {
  ImageContainer,
  PhotoItemContainer,
  TitleContainer,
} from "./photo-item.styles";

const PhotoItem = ({ imgURL, title }) => (
  <PhotoItemContainer>
    <ImageContainer src={imgURL} alt="test" />
    <TitleContainer>{title}</TitleContainer>
  </PhotoItemContainer>
);

export default PhotoItem;
