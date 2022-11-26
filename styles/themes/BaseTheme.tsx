import { DefaultTheme } from "styled-components";

export const BaseTheme: Omit<DefaultTheme, "colors" | "grays"> = {
  fontSize:
    "calc(min(max(14px + (28 - 14) * (100vw - 480px) / (3000 - 480), 14px), 35px))",
  fontWeights: {
    h1: 900,
    h2: 800,
    h3: 700,
    h4: 600,
    h5: 500,
    h6: 400,
    normal: 400,
    small: 300,
  },
  fontSlants: {
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0,
    normal: 0,
    small: 0,
  },
};
