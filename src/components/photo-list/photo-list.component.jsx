import React from "react";
import PhotoItem from "../photo-item/photo-item.component";
import { PhotoListContainer } from "./photo-list.styles";

const PhotoList = ({ photos }) => (
  <PhotoListContainer>
    {photos.map((photo) => (
      <PhotoItem key={photo.title} title={photo.title} imgURL={photo.imgURL} />
    ))}
  </PhotoListContainer>
);

export default PhotoList;
