import styled from "styled-components";

export const Layout = styled.div`
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
