import styled, { css } from "styled-components";
import * as Types from "./Layout.types";

export const Layout = styled.div<{ $layout?: Types.LayoutKeysType }>`
  margin: auto;
  padding: 2vmin;
  padding-top: 4vmin;
  max-width: var(--main-div-max-width);
  table {
    border: 2px solid;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 0.25em;
  }
`;
