import Head from "next/head";
import React from "react";
import { Icons, Navbar, DarkmodeToggle } from "../../components";
import * as Styled from "../layout/Layout.styled";
import * as Types from "../layout/Layout.types";

export const Layout = ({ title, children }: Types.LayoutProps) => (
  <Styled.Layout>
    <Head>
      <title>{title ?? "Hey! | Raj Shah"}</title>
    </Head>
    <Navbar></Navbar>
    {children}
  </Styled.Layout>
);
