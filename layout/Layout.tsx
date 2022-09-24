import styled from "../types/styled-components";

const StyledLayout = styled.div`
  background: rgb(0,0,0,1);
  height: 100%;
  margin:0 auto;
  position:fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
`

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <StyledLayout>
    {children}
  </StyledLayout>
);

export default Layout;