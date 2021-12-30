import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ParagraphsList from "../../components/paragraphs-list/paragraphs-list.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { addItem } from "../../redux/cart/cartSlice";

import {
  Heading,
  ImageContainer,
  PhotoPageContainer,
  SubmitInput,
} from "./photopage.styles";

const contentful = require("contentful");

const contentfulClient = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const ImageContainerWithSpinner = WithSpinner(ImageContainer);

const printTypes = ["Canvas", "Framed Print", "Acrylic"];
const printSizes = [
  "60 x 40cm",
  "75 x 50cm",
  "100 x 66cm",
  "120 x 80cm",
  "150 x 100cm",
];

const PhotoPage = () => {
  const [photo, setPhoto] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    printType: printTypes[0],
    printSize: printSizes[0],
    quantity: 1,
  });

  const { photoID } = useParams();

  const getPhoto = async () => {
    const photoData = await contentfulClient.getEntry(photoID);

    setPhoto({
      id: photoData.sys.id,
      title: photoData.fields.title,
      description: photoData.fields.description,
      imageURL: photoData.fields.image.fields.file.url,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getPhoto();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        id: photo.id,
        title: photo.title,
        imageURL: photo.imageURL,
        printType: values.printType,
        printSize: values.printSize,
        quantity: Number(values.quantity),
      })
    );
  };

  return (
    <PhotoPageContainer>
      <ImageContainerWithSpinner
        isLoading={isLoading}
        src={`${photo.imageURL}?w=900&h=600`}
        alt={photo.title}
      />
      <Heading>{photo.title}</Heading>
      <ParagraphsList paragraphs={isLoading ? [] : photo.description.content} />
      <form onSubmit={handleSubmit}>
        <div>
          <div>Print Type:</div>
          <select
            id="printType"
            value={values.printType}
            onChange={handleChange}
          >
            {printTypes.map((printType) => (
              <option key={printType} value={printType}>
                {printType}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div>Print Size:</div>
          <select
            id="printSize"
            value={values.printSize}
            onChange={handleChange}
          >
            {printSizes.map((printSize) => (
              <option key={printSize} value={printSize}>
                {printSize}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div>Quantity:</div>
          <input
            type="number"
            id="quantity"
            min="1"
            max="500"
            value={values.quantity}
            onChange={handleChange}
          />
        </div>

        <SubmitInput type="submit" value="ADD TO CART" />
      </form>
    </PhotoPageContainer>
  );
};

export default PhotoPage;
