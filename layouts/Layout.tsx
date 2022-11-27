import Head from "next/head";
import React from "react";
import { Navbar } from "../components";
import { INDEX_PAGE_TITLE } from "../constants";
import * as Styled from "./Layout.styled";
import * as Types from "./Layout.types";

export const Layout = ({ children }: Types.LayoutProps) => (
  <Styled.Layout>
    <Head>
      <title>{INDEX_PAGE_TITLE}</title>
    </Head>
    <Navbar />
    {children}
  </Styled.Layout>
);
