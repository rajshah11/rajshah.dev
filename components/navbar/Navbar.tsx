import React from "react";
import { Icons } from "../icons/Icons";
import * as Styled from "../navbar/Navbar.styled";
import { Stack } from "../stack/Stack";

export const Navbar = () => {
  return (
    <Stack
      direction="row"
      margin="0 0 3em 0"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack direction="row" gap="1em" alignItems="center">
        <Styled.NavigationLink href="/">
          <h3>/home</h3>
        </Styled.NavigationLink>

        <Styled.NavigationLink href="/code">
          <h3>/code</h3>
        </Styled.NavigationLink>
      </Stack>
      <Icons></Icons>
    </Stack>
  );
};
