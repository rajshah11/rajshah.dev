import React from "react";
import * as Styled from "../navbar/Navbar.styled";
import { Header2 } from "../text/Text";

export const Navbar = () => {
  return (
    <Styled.NavigationBar>
      <Styled.NavigationItem>
        <Styled.NavigationLink href="/">
          <Header2>Home</Header2>
        </Styled.NavigationLink>
      </Styled.NavigationItem>
      <Styled.NavigationItem>
        <Styled.NavigationLink href="/posts">
          <Header2>Posts</Header2>
        </Styled.NavigationLink>
      </Styled.NavigationItem>
      <Styled.NavigationItem>
        <Styled.NavigationLink href="/about">
          <Header2>About</Header2>
        </Styled.NavigationLink>
      </Styled.NavigationItem>
    </Styled.NavigationBar>
  );
};
