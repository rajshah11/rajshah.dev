import styled, { css } from "styled-components";
import * as Types from "../layout/Layout.types";

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

export const PageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-grow: 1;
  padding-bottom: 1em;
`;

export const PageTitleNavbar = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
