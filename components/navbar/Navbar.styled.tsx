import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const getCurrentPath = () => {
  return useRouter().pathname;
};

export const NavigationBar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  margin-block-start: 0em;
`;

export const NavigationItem = styled.li`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  flex-grow: 1;
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: ${(props) =>
    getCurrentPath() === props.href
      ? props.theme.colors.lowContrastText
      : props.theme.colors.highContrastText};
`;
