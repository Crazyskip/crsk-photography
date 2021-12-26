import React from "react";

import { HomePageContainer, ImageContainer } from "./homepage.styles";

const imageRotation = [
  "thunderstorm_towers.jpg",
  "windmill_night.jpg",
  "drop_on_leaf.jpg",
  "frangipani.jpg",
];

const HomePage = () => {
  return (
    <HomePageContainer>
      {imageRotation.map((image) => (
        <ImageContainer
          key={image}
          src={`/assets/home-images/${image}`}
          alt={`home-image`}
        />
      ))}
    </HomePageContainer>
  );
};

export default HomePage;
