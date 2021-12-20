import React from "react";

import { GalleryPageContainer } from "./gallery.styles";

import PageTopper from "../../components/page-topper/page-topper.component";
import PhotoList from "../../components/photo-list/photo-list.component";

const photos = [
  {
    title: "Thunderstorms",
    imgURL: "/assets/category-thumbnails/thunderstorms.jpg",
  },
  {
    title: "Nature",
    imgURL: "/assets/category-thumbnails/nature.jpg",
  },
  {
    title: "Nightscapes",
    imgURL: "/assets/category-thumbnails/nightscapes.jpg",
  },
  {
    title: "Landscapes",
    imgURL: "/assets/category-thumbnails/landscapes.jpg",
  },
  {
    title: "Animals",
    imgURL: "/assets/category-thumbnails/animals.jpg",
  },
];

const GalleryPage = () => (
  <GalleryPageContainer>
    <PageTopper title="GALLERY - CATEGORIES" />
    <PhotoList photos={photos} isLink={true} />
  </GalleryPageContainer>
);

export default GalleryPage;
