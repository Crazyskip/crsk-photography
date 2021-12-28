import react from "react";

import {
  ParagraphContainer,
  ParagraphListContainer,
} from "./paragraphs-list.styles";

const ParagraphsList = ({ paragraphs }) => (
  <ParagraphListContainer>
    {paragraphs.map((paragraph, index) => (
      <ParagraphContainer key={index}>
        {paragraph.content[0].value}
      </ParagraphContainer>
    ))}
  </ParagraphListContainer>
);

export default ParagraphsList;
