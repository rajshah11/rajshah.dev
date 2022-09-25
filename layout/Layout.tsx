import styled from "../types/styled-components";

const StyledLayout = styled.div`
  background: ${props => props.theme.darkmode === true ? 'black' : 'white'};
  height: 100%;
  margin: 0 auto;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  transition: background 0.6s ease-in-out;
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