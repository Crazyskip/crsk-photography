import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTopper from "../../components/page-topper/page-topper.component";
import { CategoryPageContainer } from "./category.styles";

import PhotoList from "../../components/photo-list/photo-list.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const contentful = require("contentful");

const contentfulClient = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const PhotoListWithSpinner = WithSpinner(PhotoList);

const CategoryPage = () => {
  const [categoryPhotos, setCategoryPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryName } = useParams();

  const getCategoryPhotos = async () => {
    const response = await contentfulClient.getEntries({
      content_type: "category",
      "fields.name": categoryName,
    });

    const category = response.items[0];
    const entryPromises = category.fields.photos.map((photo) =>
      contentfulClient.getEntry(photo.sys.id)
    );
    const entries = await Promise.all(entryPromises);

    const photosList = entries.map((entry) => ({
      id: entry.sys.id,
      title: entry.fields.title,
      imageURL: `${entry.fields.image.fields.file.url}?w=600&h=400`,
    }));

    setCategoryPhotos(photosList);
    setIsLoading(false);
  };

  useEffect(() => {
    getCategoryPhotos();
  }, []);

  return (
    <CategoryPageContainer>
      <PageTopper title={categoryName.toUpperCase()} />
      <PhotoListWithSpinner
        isLoading={isLoading}
        photos={categoryPhotos}
        type="photo"
      />
    </CategoryPageContainer>
  );
};

export default CategoryPage;
