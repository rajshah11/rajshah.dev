import styled, { css } from "styled-components";
import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export const IconLink = styled.a`
  color: ${(props) => props.theme.colors.lowContrastText};
  &:visited {
    color: ${(props) => props.theme.colors.lowContrastText};
  }
  &:hover {
    color: ${(props) => props.theme.colors.highContrastText};
  }
`;
const IconCss = css`
  width: 1.5em;
  height: 1.5em;
  margin: auto;
`;

export const TwitterIcon = styled(TwitterLogoIcon)`
  ${IconCss}
`;

export const GitHubIcon = styled(GitHubLogoIcon)`
  ${IconCss}
`;

export const LinkedInIcon = styled(LinkedInLogoIcon)`
  ${IconCss}
`;
