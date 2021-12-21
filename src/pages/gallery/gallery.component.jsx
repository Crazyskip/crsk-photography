import React from "react";

import { GalleryPageContainer } from "./gallery.styles";

import PageTopper from "../../components/page-topper/page-topper.component";
import PhotoList from "../../components/photo-list/photo-list.component";

import photosData from "../../data/photos";

const GalleryPage = () => {
  const getCategoriesList = () => {
    const categoriesKeys = Object.keys(photosData);
    const categoriesPhotosList = categoriesKeys.map((category) => {
      return {
        imgURL: `/assets/category-thumbnails/${category}.jpg`,
        title: category,
      };
    });
    return categoriesPhotosList;
  };

  return (
    <GalleryPageContainer>
      <PageTopper title="GALLERY - CATEGORIES" />
      <PhotoList photos={getCategoriesList()} type="category" />
    </GalleryPageContainer>
  );
};

export default GalleryPage;
