import Head from "next/head";
import React from "react";
import { Navbar } from "../components";
import * as Styled from "./Layout.styled";
import * as Types from "./Layout.types";

export const Layout = ({ title, children }: Types.LayoutProps) => (
  <Styled.Layout>
    <Head>
      <title>{title ?? "Hey! | Raj Shah"}</title>
    </Head>
    <Navbar></Navbar>
    {children}
  </Styled.Layout>
);
