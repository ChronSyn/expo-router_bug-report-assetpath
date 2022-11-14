import React from "react";

import { colours as defaultTheme } from "./themes/default.colours";
import { IColours, IBaseTheme } from "./interfaces";
import { BaseTheme } from "./basetheme";

const colourSchemes = {
  default: defaultTheme,
}

interface IThemeConstructorArgs {
  colourScheme: any;
}

class Theme {
  public theme: IBaseTheme = BaseTheme;
  public colours = colourSchemes.default;

  constructor({ colourScheme = colourSchemes.default }: IThemeConstructorArgs) {
    this.colours = colourScheme;
  }
}

const singleton = new Theme({
  colourScheme: colourSchemes.default,
});

const ThemeContext = React.createContext<Theme>(singleton);
export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => React.useContext(ThemeContext);