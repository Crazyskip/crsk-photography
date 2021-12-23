import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTopper from "../../components/page-topper/page-topper.component";
import { CategoryPageContainer } from "./category.styles";

import PhotoList from "../../components/photo-list/photo-list.component";

const contentful = require("contentful");

const contentfulClient = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const CategoryPage = () => {
  const [categoryPhotos, setCategoryPhotos] = useState([]);

  const { categoryName } = useParams();

  const getCategoryPhotos = async () => {
    const response = await contentfulClient.getEntries({
      content_type: "category",
      "fields.name": categoryName,
    });
    const category = response.items[0];
    const photosList = [];
    for (const photo of category.fields.photos) {
      const entry = await contentfulClient.getEntry(photo.sys.id);
      const asset = await contentfulClient.getAsset(entry.fields.image.sys.id);
      const imageURL = `${asset.fields.file.url}?w=600&h=400`;
      photosList.push({
        id: photo.sys.id,
        title: photo.fields.title,
        imageURL,
      });
    }
    setCategoryPhotos(photosList);
  };

  useEffect(() => {
    getCategoryPhotos();
  }, []);

  return (
    <CategoryPageContainer>
      <PageTopper title={categoryName.toUpperCase()} />
      <PhotoList photos={categoryPhotos} type="photo" />
    </CategoryPageContainer>
  );
};

export default CategoryPage;
