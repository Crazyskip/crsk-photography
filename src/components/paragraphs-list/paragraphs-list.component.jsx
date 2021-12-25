import react from "react";

import { ParagraphContainer } from "./paragraphs-list.styles";

const ParagraphsList = ({ paragraphs }) => (
  <div>
    {paragraphs.map((paragraph, index) => (
      <ParagraphContainer key={index}>
        {paragraph.content[0].value}
      </ParagraphContainer>
    ))}
  </div>
);

export default ParagraphsList;
