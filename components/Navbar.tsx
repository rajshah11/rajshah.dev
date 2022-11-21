import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const MainNav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  font-variation-settings: "wght" 600;
`;
const NavLi = styled.li`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  flex-grow: 1;
`;
const NavLink = styled.a<{ href: string; pathname: string }>`
  text-decoration: none;
  color: ${(props) => (props.pathname === props.href ? "red" : "black")};
`;

const Navbar = () => {
  const router = useRouter();

  return (
    <MainNav>
      <NavLi>
        <NavLink href="/" pathname={router.pathname}>
          <h2>Home</h2>
        </NavLink>
      </NavLi>
      <NavLi>
        <NavLink href="/posts" pathname={router.pathname}>
          <h2>Posts</h2>
        </NavLink>
      </NavLi>
      <NavLi>
        <NavLink href="/about" pathname={router.pathname}>
          <h2>About</h2>
        </NavLink>
      </NavLi>
    </MainNav>
  );
};

export default Navbar;
