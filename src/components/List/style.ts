import styled from "styled-components";

export const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;
  margin-top: 16px;

  & > li {
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`;
