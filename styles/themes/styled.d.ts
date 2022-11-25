// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      appBackground: string;
      subtleBackground: string;
      uiElementBackground: string;
      hoveredUiElementBackground: string;
      activeUiElementBackground: string;
      subtleBordersAndSeperators: string;
      uiElementBorder: string;
      hoveredUiElementBorder: string;
      solidBackground: string;
      hoveredSolidBackground: string;
      lowContrastText: string;
      highContrastText: string;
    };
    grays: {
      appBackground: string;
      subtleBackground: string;
      uiElementBackground: string;
      hoveredUiElementBackground: string;
      activeUiElementBackground: string;
      subtleBordersAndSeperators: string;
      uiElementBorder: string;
      hoveredUiElementBorder: string;
      solidBackground: string;
      hoveredSolidBackground: string;
      lowContrastText: string;
      highContrastText: string;
    };
    fontFamily: string;
    fontSize: string;
    fontWeights: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      h6: number;
      normal: number;
      small: number;
    };
    fontSlants: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      h6: number;
      normal: number;
      small: number;
    };
  }
}
