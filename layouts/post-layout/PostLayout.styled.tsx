import styled from "styled-components";
import { Layout } from "../Layout.styled";

export const PostContent = styled(Layout)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  small {
    color: ${(props) => props.theme.colors.lowContrastText};
  }
  padding: 0;
`;

export const PostDate = styled.h4`
  margin-block-start: 0;
`;
