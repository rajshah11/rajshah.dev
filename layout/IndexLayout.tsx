import styled, { css } from "../types/styled-components";
import React from 'react'

const lightmodeBackground = css`
  background: rgb(100,0,255);
  background: -moz-linear-gradient(109deg, rgba(100,0,255,1) 15%, rgba(255,41,41,1) 85%);
  background: -webkit-linear-gradient(109deg, rgba(100,0,255,1) 15%, rgba(255,41,41,1) 85%);
  background: linear-gradient(109deg, rgba(100,0,255,1) 15%, rgba(255,41,41,1) 85%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#6400ff",endColorstr="#ff2929",GradientType=1);
`
const darkmodeBackground = css`
  background: rgb(0,148,255);
  background: -moz-linear-gradient(109deg, rgba(0,148,255,1) 15%, rgba(61,245,167,1) 85%);
  background: -webkit-linear-gradient(109deg, rgba(0,148,255,1) 15%, rgba(61,245,167,1) 85%);
  background: linear-gradient(109deg, rgba(0,148,255,1) 15%, rgba(61,245,167,1) 85%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0094ff",endColorstr="#3df5a7",GradientType=1);
`

const StyledIndex = styled.div`
  margin: auto;
  padding: 2vmin;
  width: min(max(480px, 60%), 100vw);
  font-family: 'Recursive', sans-serif;
  font-variation-settings: 'wght' 800;
  font-size: 20px;
  font-size: min(max(calc(16px + (24 - 16) * ((100vw - 500px) / (3000 - 500))), 12px), 36px);
  padding: 2vmin;
  ${props => props.theme.darkmode === true ? darkmodeBackground : lightmodeBackground};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

type IndexLayoutProps = {
  children: React.ReactNode
}

const IndexLayout = ({ children }: IndexLayoutProps) => (
  <StyledIndex>
    {children}
  </StyledIndex>
);

export default IndexLayout;