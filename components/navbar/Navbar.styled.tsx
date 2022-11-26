import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const useCurrentPath = () => {
  return useRouter().pathname;
};

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: ${(props) =>
    useCurrentPath() === props.href
      ? props.theme.colors.lowContrastText
      : props.theme.colors.highContrastText};
`;
