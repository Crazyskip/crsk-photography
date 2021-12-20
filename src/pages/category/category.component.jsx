import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTopper from "../../components/page-topper/page-topper.component";
import { CategoryPageContainer } from "./category.styles";

import photosData from "../../data/photos";
import PhotoList from "../../components/photo-list/photo-list.component";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const [categoryPhotos, setCategoryPhotos] = useState([]);

  useEffect(() => {
    const category = photosData[categoryName];
    if (category === undefined) {
      alert("Category not found");
    } else {
      setCategoryPhotos(category);
    }
  }, []);

  return (
    <CategoryPageContainer>
      <PageTopper title={categoryName.toUpperCase()} />
      <PhotoList photos={categoryPhotos} isLink={false} />
    </CategoryPageContainer>
  );
};

export default CategoryPage;
