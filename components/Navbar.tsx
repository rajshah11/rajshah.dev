import React, { useState } from 'react';
import styled, { css, ThemeConsumer } from '../types/styled-components';
import { useRouter } from 'next/router'

type NavBarState = {
  displayNav: string
}

const Bar = styled.nav`
  padding-right: 5px;
  padding-left: 5px;
  padding-bottom: 10px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: right;
    padding-bottom: 0;
    padding-right: 0;
    padding-left: 0;
    height: 70px;
    align-items: center;
  }
`
const MainNav = styled.ul<NavBarState>`
  list-style-type: none;
  display: ${props => props.displayNav};
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 1.5vw;
    flex-direction: row;
    justify-content: flex-end;
  }
`
const NavLi = styled.li`
  text-align: center;
`
const NavLink = styled.a<{ href: string, pathname: string }>`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {    
    margin: 0px 1.5vh;
  }
  -webkit-text-fill-color: ${props => props.pathname === props.href ? props.theme.darkmode ? 'white' : 'black' : 'transparent'};
  text-decoration: none;
`

const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer; 
  color: rgba(255,255,255,0.8);
  font-size: 24px;
`
const Hamburger = styled.img<NavBarState>`
  /* add your menu icon here i.e. */
  /* content: url('../static/Hamburger_icon.svg'); */
  -webkit-filter:invert(${props => props.theme.darkmode === true ? 1 : 0});
  content: url(data:image/svg+xml,%3Csvg%20height%3D%2232px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M4%2C10h24c1.104%2C0%2C2-0.896%2C2-2s-0.896-2-2-2H4C2.896%2C6%2C2%2C6.896%2C2%2C8S2.896%2C10%2C4%2C10z%20M28%2C14H4c-1.104%2C0-2%2C0.896-2%2C2%20%20s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2S29.104%2C14%2C28%2C14z%20M28%2C22H4c-1.104%2C0-2%2C0.896-2%2C2s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2%20%20S29.104%2C22%2C28%2C22z%22%2F%3E%3C%2Fsvg%3E);
  transform: rotate(${props => props.displayNav === 'flex' ? '90deg' : '0deg'});
  -webkit-transform: rotate(${props => props.displayNav === 'flex' ? '90deg' : '0deg'});
  -moz-transform: rotate(${props => props.displayNav === 'flex' ? '90deg' : '0deg'});
  -o-transform: rotate(${props => props.displayNav === 'flex' ? '90deg' : '0deg'});
   transform: rotate(${props => props.displayNav === 'flex' ? '90deg' : '0deg'});
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
   transition-duration: 0.5s;
   position: relative;
  @media (min-width: 768px) {
    display: none;
  }
`

const StyledSun = css`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 24px;
    background: linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px -6px/2px 6px,
      linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px 14px/2px 6px,
      linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat -8px 5px/6px 2px,
      linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 14px 5px/6px 2px;
    border-radius: 100px;
    box-shadow: inset 0 0 0 2px;
    border: 6px solid transparent;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 2px;
    border-right: 4px solid;
    border-left: 4px solid;
    left: -6px;
    top: 5px;
  }
  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
  `

const StyledMoon = css`
  &,
  &::after {
    display: block;
    box-sizing: border-box;
    border-radius: 50%;
    color:white;
  }
  & {
    overflow: hidden;
    position: relative;
    transform: rotate(-135deg) scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-bottom-color: transparent;
  }
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 18px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    top: 8px;
    left: 2px;
  }
`

const StyledDarkModeIcon = styled.i`
  ${props => props.theme.darkmode === true ? StyledMoon : StyledSun};
  transition: transform 1s ease-in-out;
`

const StyledButtonDiv = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  text-align: center;
`

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: none;
  transition: 800ms ease all;
`

function Navbar() {
  const router = useRouter()
  const [state, setState] = useState<string>('none')
  const toggleNavBar = () => {
    switch (state) {
      case 'none':
        setState('flex');
        return;
      case 'flex':
        setState('none');
        return;
    }
  };


  return (
    <Bar>
      <NavBarToggle onClick={toggleNavBar}>
        <Hamburger displayNav={state} />
      </NavBarToggle>
      <MainNav displayNav={state}>
        <NavLi>
          <NavLink href="/" pathname={router.pathname}><h3>Home</h3></NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="#" pathname={router.pathname}><h3>Blog</h3></NavLink>
        </NavLi>
      </MainNav>
      <StyledButtonDiv>
        <ThemeConsumer>
          {(value) => {
            console.log('Changed!')
            return (
              <StyledButton onClick={value.toggleDarkmode}><StyledDarkModeIcon /></StyledButton>
            );
          }}
        </ThemeConsumer>
      </StyledButtonDiv>
    </Bar>
  )
}

export default Navbar;