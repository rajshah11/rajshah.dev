import styled from "styled-components";
import * as Styled from "./ImageGallery.styled";
import * as Types from "./ImageGallery.types";

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

const ImageBox = ({ path, caption, alt }: Types.ImageProps) => {
  return (
    <div style={{ padding: "0.5em" }}>
      <Styled.Image src={path} alt={alt ?? caption} />
      <div style={{ margin: "auto", textAlign: "center" }}>
        <small>{caption}</small>
      </div>
    </div>
  );
};

export const ImageGallery = ({
  imageList,
  numRows,
  colSizing,
}: {
  imageList: Array<Types.ImageProps>;
  numRows: number;
  colSizing: string;
}) => {
  const numPerRow = Math.ceil(imageList.length / numRows);
  return (
    <Styled.ImageGallery>
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
    </Styled.ImageGallery>
  );
};
