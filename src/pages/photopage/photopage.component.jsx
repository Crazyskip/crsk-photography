import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import ParagraphsList from "../../components/paragraphs-list/paragraphs-list.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CustomSelect from "../../components/custom-select/custom-select.component";
import CustomInput from "../../components/custom-input/custom-input.component";

import { addItem } from "../../redux/cart/cartSlice";

import {
  FormContainer,
  Heading,
  ImageContainer,
  PhotoPageContainer,
  SubmitInput,
} from "./photopage.styles";
import Footer from "../../components/footer/footer.component";

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

  const { photoID } = useParams();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      quantity: 1,
    },
  });

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

  const onSubmit = (data) => {
    dispatch(
      addItem({
        id: photo.id,
        title: photo.title,
        imageURL: photo.imageURL,
        printType: data.printType,
        printSize: data.printSize,
        quantity: Number(data.quantity),
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
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <CustomSelect
          label="Print Type:"
          values={printTypes}
          {...register("printType", { required: true })}
        />

        <CustomSelect
          label="Print Size:"
          values={printSizes}
          {...register("printSize", { required: true })}
        />

        <CustomInput
          type="number"
          label="Quantity:"
          min="1"
          max="500"
          {...register("quantity", {
            required: true,
            min: 1,
            max: 500,
          })}
        />

        <SubmitInput type="submit" value="ADD TO CART" />
      </FormContainer>
      <Footer />
    </PhotoPageContainer>
  );
};

export default PhotoPage;
