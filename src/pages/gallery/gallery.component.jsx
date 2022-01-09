import React, { useEffect, useState } from "react";

import { GalleryPageContainer } from "./gallery.styles";

import PageTopper from "../../components/page-topper/page-topper.component";
import PhotoList from "../../components/photo-list/photo-list.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Footer from "../../components/footer/footer.component";

const contentful = require("contentful");

const contentfulClient = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const PhotoListWithSpinner = WithSpinner(PhotoList);

const GalleryPage = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCategories = async () => {
    const categoriesResponse = await contentfulClient.getEntries({
      content_type: "category",
    });
    const categoriesList = categoriesResponse.items.map((category) => ({
      title: category.fields.name,
      imageURL: `${category.fields.thumbnail.fields.file.url}?w=600&h=400`,
    }));
    setCategories(categoriesList);
    setIsLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <GalleryPageContainer>
      <PageTopper title="GALLERY - CATEGORIES" />
      <PhotoListWithSpinner
        isLoading={isLoading}
        photos={categories}
        type="category"
      />
      <Footer />
    </GalleryPageContainer>
  );
};

export default GalleryPage;
