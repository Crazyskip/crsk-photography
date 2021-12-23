import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Heading,
  ImageContainer,
  ParagraphContainer,
  PhotoPageContainer,
} from "./photopage.styles";

const contentful = require("contentful");

const contentfulClient = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const PhotoPage = () => {
  const [photo, setPhoto] = useState({});

  const { photoID } = useParams();

  const getPhoto = async () => {
    const photoData = await contentfulClient.getEntry(photoID);
    const asset = await contentfulClient.getAsset(
      photoData.fields.image.sys.id
    );
    const imageURL = `${asset.fields.file.url}?w=900&h=600`;
    setPhoto({
      title: photoData.fields.title,
      description: photoData.fields.description,
      imageURL,
    });
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <PhotoPageContainer>
      <ImageContainer src={photo.imageURL} alt={photo.title} />
      <Heading>{photo.title}</Heading>
      {photo.description
        ? photo.description.content.map((paragraph, index) => (
            <ParagraphContainer key={index}>
              {paragraph.content[0].value}
            </ParagraphContainer>
          ))
        : ""}
    </PhotoPageContainer>
  );
};

export default PhotoPage;
