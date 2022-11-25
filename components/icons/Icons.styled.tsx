import styled, { css } from "styled-components";
import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
export const Icons = styled.div`
  width: 30%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 7.5vh;
  a {
    color: ${(props) => props.theme.colors.solidBackground};
    &:hover {
      color: ${(props) => props.theme.colors.hoveredSolidBackground};
    }
  }
`;

const IconCss = css`
  width: 2em;
  height: 2em;
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
