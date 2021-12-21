import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageTopper from "../../components/page-topper/page-topper.component";
import { CategoryPageContainer } from "./category.styles";

import photosData from "../../data/photos";
import PhotoList from "../../components/photo-list/photo-list.component";

const CategoryPage = () => {
  const [categoryPhotos, setCategoryPhotos] = useState([]);

  const navigate = useNavigate();
  const { categoryName } = useParams();

  useEffect(() => {
    const category = photosData[categoryName];
    if (category === undefined) {
      alert("Category not found");
      navigate(-1);
    } else {
      setCategoryPhotos(category);
    }
  }, []);

  return (
    <CategoryPageContainer>
      <PageTopper title={categoryName.toUpperCase()} />
      <PhotoList photos={categoryPhotos} type="photo" />
    </CategoryPageContainer>
  );
};

export default CategoryPage;
