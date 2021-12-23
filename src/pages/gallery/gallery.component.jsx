import React, { useEffect, useState } from "react";

import { GalleryPageContainer } from "./gallery.styles";

import PageTopper from "../../components/page-topper/page-topper.component";
import PhotoList from "../../components/photo-list/photo-list.component";

const contentful = require("contentful");

const contentfulClient = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const GalleryPage = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await contentfulClient.getEntries({
      content_type: "category",
    });
    const categoriesList = [];
    for (const category of response.items) {
      const asset = await contentfulClient.getAsset(
        category.fields.thumbnail.sys.id
      );
      const imageURL = `${asset.fields.file.url}?w=600&h=400`;
      categoriesList.push({ title: category.fields.name, imageURL });
    }
    setCategories(categoriesList);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <GalleryPageContainer>
      <PageTopper title="GALLERY - CATEGORIES" />
      <PhotoList photos={categories} type="category" />
    </GalleryPageContainer>
  );
};

export default GalleryPage;
