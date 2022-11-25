import * as Styled from "./Icons.styled";

const IconWithLink = ({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) => {
  return <a href={link}>{children}</a>;
};
export const Icons = () => (
  <Styled.Icons>
    <IconWithLink link="https://twitter.com/rajmshah11">
      <Styled.TwitterIcon />
    </IconWithLink>
    <IconWithLink link="https://github.com/rajshah11">
      <Styled.GitHubIcon />
    </IconWithLink>
    <IconWithLink link="https://www.linkedin.com/feed/">
      <Styled.LinkedInIcon />
    </IconWithLink>
  </Styled.Icons>
);
