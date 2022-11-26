import { DarkmodeToggle } from "../darkmode-toggle/DarkmodeToggle";
import { Stack } from "../stack/Stack";
import * as Styled from "./Icons.styled";

const IconWithLink = ({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) => {
  return (
    <Styled.IconLink href={link} target="_blank" rel="noreferrer">
      {children}
    </Styled.IconLink>
  );
};
export const Icons = () => (
  <Stack direction="row" gap="1em" alignItems="center">
    <IconWithLink link="https://github.com/rajshah11">
      <Styled.GitHubIcon />
    </IconWithLink>
    <IconWithLink link="https://twitter.com/rajmshah11">
      <Styled.TwitterIcon />
    </IconWithLink>
    <IconWithLink link="https://www.linkedin.com/feed/">
      <Styled.LinkedInIcon />
    </IconWithLink>
    <DarkmodeToggle></DarkmodeToggle>
  </Stack>
);
