import React, { ReactNode } from "react";
import Head from "next/head";
import { IconsRow } from "../components/Icons";
import Navbar from "../components/Navbar";
import styled, { css } from "styled-components";

const StyledHeader = styled.div`
  font-variation-settings: "wght" 800;
  font-size: min(
    max(calc(36px + (72 - 48) * ((100vw - 500px) / (3000 - 500))), 32px),
    108px
  );
`;

const StyledLayout = styled.div<{ $layout?: LayoutKeys }>`
  margin: auto;
  padding: 2vmin;
  width: min(max(480px, 50vw), 100vw);
  font-family: "Recursive", sans-serif;
  font-variation-settings: "wght" 400;
  font-size: min(
    max(calc(16px + (24 - 16) * ((100vw - 500px) / (3000 - 500))), 12px),
    36px
  );
  ${(props) =>
    props.$layout == "post_with_table" &&
    css`
      table {
        border: 2px solid;
        border-collapse: collapse;
      }
      td,
      th {
        border: 1px solid;
      }
    `}
`;

type ILayoutProps = {
  pageHeader: string;
  children: React.ReactNode;
};

export type PostLayoutKeys = "post" | "post_with_table";
export type LayoutKeys = ("index" | "posts") | PostLayoutKeys;

const Layout = ({ pageHeader, children }: ILayoutProps) => (
  <StyledLayout>
    <Head>
      <title>Code. Life. Everything else.</title>
    </Head>
    <StyledHeader>{pageHeader}</StyledHeader>
    <Navbar />
    {children}
    <IconsRow />
  </StyledLayout>
);

export const IndexLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout pageHeader="Code. Life. Everything else.">{children}</Layout>
);

export const PostsLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout pageHeader="Posts">{children}</Layout>
);

export const PostLayout = ({
  title,
  children,
  layout,
}: {
  title: string | undefined;
  children: React.ReactNode;
  layout: PostLayoutKeys;
}) => (
  <StyledLayout $layout={layout}>
    <Head>
      <title>{title ?? "Code. Life. Everything else."}</title>
    </Head>
    <Navbar />
    <StyledHeader>{title ?? "Post"}</StyledHeader>
    {children}
    <IconsRow />
  </StyledLayout>
);

export const AboutLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout pageHeader="About">{children}</Layout>
);

interface ImageProps {
  path: string;
  caption: string;
  alt?: string;
}

const ImageRow = ({ children }: { children: React.ReactNode }) => {
  return <div className="row">{children}</div>;
};

const ImageCol = ({
  colSizing,
  children,
}: {
  colSizing: string;
  children: React.ReactNode;
}) => {
  return <div className={colSizing}>{children}</div>;
};

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
`;

const ImageBox = ({ path, caption, alt }: ImageProps) => {
  return (
    <div className="box">
      <StyledImage src={path} alt={alt ?? caption} />
    </div>
  );
};

const StyledImageGallery = styled.div`
  width: 100%;
  margin: auto;
  font-variation-settings: "wght" 400;
  font-size: min(
    max(calc(12px + (12 - 8) * ((100vw - 500px) / (3000 - 500))), 6px),
    36px
  );
`;

export const ImageGallery = ({
  imageList,
  numRows,
  colSizing,
}: {
  imageList: Array<ImageProps>;
  numRows: number;
  colSizing: string;
}) => {
  const numPerRow = Math.ceil(imageList.length / numRows);
  return (
    <StyledImageGallery>
      {Array.from({ length: numRows }, (_, index) => index).map((r) => (
        <ImageRow key={r + 1}>
          {imageList.slice(r * numPerRow, (r + 1) * numPerRow).map((img, c) => (
            <ImageCol key={(r + 1) * (c + 1)} colSizing={colSizing}>
              <ImageBox
                key={img.path}
                path={img.path}
                caption={img.caption}
                alt={img.alt ?? img.caption}
              />
            </ImageCol>
          ))}
        </ImageRow>
      ))}
    </StyledImageGallery>
  );
};
