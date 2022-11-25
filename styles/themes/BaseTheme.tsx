import { DefaultTheme } from "styled-components";

export const BaseTheme: Omit<DefaultTheme, "colors" | "grays"> = {
  fontFamily: "'Recursive', sans-serif",
  fontSize: "calc(12px + (32 - 16)*(100vw - 480px)/(3120-480))",
  fontWeights: {
    h1: 800,
    h2: 700,
    h3: 600,
    h4: 500,
    h5: 450,
    h6: 400,
    normal: 350,
    small: 300,
  },
  fontSlants: {
    h1: -6,
    h2: -5,
    h3: -4,
    h4: -3,
    h5: -2,
    h6: -1,
    normal: 0,
    small: 0,
  },
};
