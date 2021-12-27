import styled from "styled-components";

export const SeparatorContainer = styled.hr`
  height: 1px;
  border: none;
  background-color: #bbb;
  margin: ${({ margin }) => (margin ? margin : 0)};
  width: ${({ width }) => (width ? width : "100%")};
`;
