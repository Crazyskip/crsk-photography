import React from "react";

import {
  ImageContainer,
  PhotoItemContainer,
  TitleContainer,
} from "./photo-item.styles";

const PhotoItem = ({ imgURL, title, linkTo }) => {
  return (
    <PhotoItemContainer to={linkTo}>
      <ImageContainer src={imgURL} alt={title} />
      <TitleContainer>{title}</TitleContainer>
    </PhotoItemContainer>
  );
};

export default PhotoItem;
