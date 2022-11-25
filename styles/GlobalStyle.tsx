import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body{
    background-color: ${(props) => props.theme.colors.appBackground};
    --main-div-max-width: min(max(480px, 50vw), 100vw);
    font-family: ${(props) => props.theme.fontFamily};
    font-variation-settings: "wght" ${(props) =>
      props.theme.fontWeights.normal}, "slnt" ${(props) =>
  props.theme.fontSlants.normal};
    font-size: ${(props) => props.theme.fontSize};
    color: ${(props) => props.theme.colors.highContrastText}
  }

  h1{
    font-variation-settings: "wght" ${(props) =>
      props.theme.fontWeights.h1}, "slnt" ${(props) =>
  props.theme.fontSlants.h1};
  }

  h2{
    font-variation-settings: "wght" ${(props) =>
      props.theme.fontWeights.h2}, "slnt" ${(props) =>
  props.theme.fontSlants.h2};  }

  h3{
    font-variation-settings: "wght" ${(props) =>
      props.theme.fontWeights.h3}, "slnt" ${(props) =>
  props.theme.fontSlants.h3};  }

  h4{
    font-variation-settings: "wght" ${(props) =>
      props.theme.fontWeights.h4}, "slnt" ${(props) =>
  props.theme.fontSlants.h4};  }

  h5{
    font-variation-settings: "wght" ${(props) =>
      props.theme.fontWeights.h5}, "slnt" ${(props) =>
  props.theme.fontSlants.h5};  }

  h6{
    font-variation-settings: "wght" ${(props) =>
      props.theme.fontWeights.h6}, "slnt" ${(props) =>
  props.theme.fontSlants.h6};  }
  
  table {
    border: 0.125em solid;
    border-collapse: collapse;
  }
  td,
  th {
    border: 0.0625em solid;
  }
`;
