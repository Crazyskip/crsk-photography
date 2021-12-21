import React from "react";

import PhotoItem from "../photo-item/photo-item.component";
import { PhotoListContainer } from "./photo-list.styles";

const PhotoList = ({ photos, type }) => {
  const getLinkTo = (photo) => {
    if (type === "category") {
      return photo.title;
    } else if (type === "photo") {
      return photo.id;
    }
  };

  return (
    <PhotoListContainer>
      {photos.map((photo) => (
        <PhotoItem
          key={photo.title}
          title={photo.title}
          imgURL={photo.imgURL}
          linkTo={getLinkTo(photo)}
        />
      ))}
    </PhotoListContainer>
  );
};

export default PhotoList;
