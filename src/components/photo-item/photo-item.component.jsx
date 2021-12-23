import React from "react";

import {
  ImageContainer,
  PhotoItemContainer,
  TitleContainer,
} from "./photo-item.styles";

const PhotoItem = ({ imageURL, title, linkTo }) => {
  return (
    <PhotoItemContainer to={linkTo}>
      <ImageContainer src={imageURL} alt={title} />
      <TitleContainer>{title}</TitleContainer>
    </PhotoItemContainer>
  );
};

export default PhotoItem;
