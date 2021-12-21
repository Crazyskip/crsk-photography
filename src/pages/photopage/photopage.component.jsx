import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ImageContainer, PhotoPageContainer } from "./photopage.styles";

import photosData from "../../data/photos";
import PageTopper from "../../components/page-topper/page-topper.component";

const PhotoPage = () => {
  const [photo, setPhoto] = useState({});

  const navigate = useNavigate();
  const { categoryName, photoID } = useParams();

  useEffect(() => {
    const photoData = photosData[categoryName].find(
      (photoItem) => photoItem.id === photoID
    );
    if (photoData === undefined) {
      alert("Photo not found");
      navigate(-1);
    } else {
      setPhoto(photoData);
    }
  }, []);

  return (
    <PhotoPageContainer>
      <PageTopper title={photo.title} />
      <ImageContainer src={photo.imgURL} alt={photo.title} />
    </PhotoPageContainer>
  );
};

export default PhotoPage;
