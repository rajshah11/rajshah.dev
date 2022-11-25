import Head from "next/head";
import React from "react";
import { Icons, Navbar, DarkmodeToggle } from "../../components";
import * as Styled from "../layout/Layout.styled";
import * as Types from "../layout/Layout.types";

export const Layout = ({
  title,
  pageHeader,
  layout,
  children,
}: Types.LayoutProps) => (
  <Styled.Layout $layout={layout}>
    <Head>
      <title>{title ?? "Code. Life. Everything else."}</title>
    </Head>
    <Styled.PageHeader>
      <Styled.PageTitleNavbar>
        {Types.PostLayoutKeys.find((x) => x == layout) ? <Navbar /> : null}
        {React.isValidElement(pageHeader) ? pageHeader : <h1>{pageHeader}</h1>}
        {Types.PostLayoutKeys.find((x) => x == layout) ? null : <Navbar />}
      </Styled.PageTitleNavbar>

      <DarkmodeToggle></DarkmodeToggle>
    </Styled.PageHeader>
    {children}
    <Icons />
  </Styled.Layout>
);
