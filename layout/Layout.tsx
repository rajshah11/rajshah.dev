import styled from "styled-components";

const StyledLayout = styled.div`
  position: relative;
  padding: 0;
  margin: auto;
  top: 0;
  left: 0;
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <StyledLayout>{children}</StyledLayout>
);

export default Layout;
