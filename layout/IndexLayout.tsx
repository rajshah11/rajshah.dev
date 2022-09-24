import styled from "../types/styled-components";
import React from 'react'

const StyledIndex = styled.div`
  margin: auto;
  padding: 2vmin;
  width: min(max(480px, 60%), 100vw);
  font-family: 'Recursive', sans-serif;
  font-variation-settings: 'wght' 800;
  font-size: 20px;
  font-size: min(max(calc(16px + (24 - 16) * ((100vw - 500px) / (3000 - 500))), 12px), 36px);
  padding: 2vmin;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
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