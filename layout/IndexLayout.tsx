import styled from "../types/styled-components";
import React from 'react'

const StyledIndex = styled.div`
  margin: auto;
  padding: 2% 2% 2% 2%;
  width: max(480px, 60%);
  font-family: 'Recursive';
  font-variation-settings: 'wght' 800, 'CASL' 0;
  font-size: 20px;
  font-size: min(max(calc(16px + (24 - 16) * ((100vw - 500px) / (3000 - 500))), 12px), 36px);
  padding: 2vmin;
  background-image: linear-gradient(
    180deg,
    hsl(120deg 84% 56%) 0%,
    hsl(120deg 77% 53%) 20%,
    hsl(120deg 71% 50%) 29%,
    hsl(120deg 74% 47%) 36%,
    hsl(120deg 79% 43%) 43%,
    hsl(120deg 84% 40%) 50%,
    hsl(148deg 100% 37%) 57%,
    hsl(162deg 100% 36%) 64%,
    hsl(174deg 100% 36%) 71%,
    hsl(182deg 100% 35%) 80%,
    hsl(187deg 83% 40%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0,0,0, 0);
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