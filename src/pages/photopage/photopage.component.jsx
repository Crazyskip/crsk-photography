import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ParagraphsList from "../../components/paragraphs-list/paragraphs-list.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

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

const ImageContainerWithSpinner = WithSpinner(ImageContainer);
const ParagraphsListWithSpinner = WithSpinner(ParagraphsList);

const PhotoPage = () => {
  const [photo, setPhoto] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { photoID } = useParams();

  const getPhoto = async () => {
    const photoData = await contentfulClient.getEntry(photoID);

    setPhoto({
      title: photoData.fields.title,
      description: photoData.fields.description,
      imageURL: `${photoData.fields.image.fields.file.url}?w=900&h=600`,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <PhotoPageContainer>
      <ImageContainerWithSpinner
        isLoading={isLoading}
        src={photo.imageURL}
        alt={photo.title}
      />
      <Heading>{photo.title}</Heading>
      <ParagraphsList paragraphs={isLoading ? [] : photo.description.content} />
    </PhotoPageContainer>
  );
};

export default PhotoPage;
