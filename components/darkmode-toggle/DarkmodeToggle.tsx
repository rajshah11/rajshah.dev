import React from "react";
import * as Styled from "../darkmode-toggle/DarkmodeToggle.styled";
import { ThemeContext } from "../../styles/themes/ThemeContext";

export const DarkmodeToggle = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        return (
          <Styled.DarkmodeToggleIcon
            onPressedChange={toggleTheme}
            defaultPressed={false}
          >
            {theme == "dark" ? <Styled.SunIcon /> : <Styled.MoonIcon />}
          </Styled.DarkmodeToggleIcon>
        );
      }}
    </ThemeContext.Consumer>
  );
};
