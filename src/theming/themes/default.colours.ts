import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { BaseColourAlpha, IBaseColour, IBaseColourAlpha, IColours, IElementColour } from "../interfaces";

const baseColours: Record<keyof IColours, string> = {
  primary: "71, 0, 167",      // rgb(71, 0, 167)
  secondary: "249, 179, 29",  // rgb(249, 179, 29)
  tertiary: "96, 165, 250",   // rgb(96, 165, 250)
  success: "22, 163, 74",     // rgb(22, 163, 74)
  warning: "245, 158, 11",    // rgb(245, 158, 11)
  error: "185, 28, 28",       // rgb(185, 28, 28)
  info: "37, 99, 235",        // rgb(37, 99, 235)
  light: "242, 242, 242",     // rgb(242, 242, 242)
  dark: "25, 25, 25",         // rgb(25, 25, 25)
  transparent: "transparent", // transparent
};

const colourScheme: IColours = {
  primary: {
    default: `rgba(${[baseColours.primary, BaseColourAlpha.default].join(", ")})`,
    faded: `rgba(${[baseColours.primary, BaseColourAlpha.faded].join(", ")})`,
    xfaded: `rgba(${[baseColours.primary, BaseColourAlpha.xfaded].join(", ")})`,
    xxfaded: `rgba(${[baseColours.primary, BaseColourAlpha.xxfaded].join(", ")})`,
    xxxfaded: `rgba(${[baseColours.primary, BaseColourAlpha.xxxfaded].join(", ")})`,
    xxxxfaded: `rgba(${[baseColours.primary, BaseColourAlpha.xxxxfaded].join(", ")})`,
  },
  secondary: {
    default: `rgba(${[baseColours.secondary, BaseColourAlpha.default].join(", ")})`,
    faded: `rgba(${[baseColours.secondary, BaseColourAlpha.faded].join(", ")})`,
    xfaded: `rgba(${[baseColours.secondary, BaseColourAlpha.xfaded].join(", ")})`,
    xxfaded: `rgba(${[baseColours.secondary, BaseColourAlpha.xxfaded].join(", ")})`,
    xxxfaded: `rgba(${[baseColours.secondary, BaseColourAlpha.xxxfaded].join(", ")})`,
    xxxxfaded: `rgba(${[baseColours.secondary, BaseColourAlpha.xxxxfaded].join(", ")})`,
  },
  tertiary: {
    default: `rgba(${[baseColours.tertiary, BaseColourAlpha.default].join(", ")})`,
    faded: `rgba(${[baseColours.tertiary, BaseColourAlpha.faded].join(", ")})`,
    xfaded: `rgba(${[baseColours.tertiary, BaseColourAlpha.xfaded].join(", ")})`,
    xxfaded: `rgba(${[baseColours.tertiary, BaseColourAlpha.xxfaded].join(", ")})`,
    xxxfaded: `rgba(${[baseColours.tertiary, BaseColourAlpha.xxxfaded].join(", ")})`,
    xxxxfaded: `rgba(${[baseColours.tertiary, BaseColourAlpha.xxxxfaded].join(", ")})`,
  },
  dark: {
    default: `rgba(${[baseColours.dark, BaseColourAlpha.default].join(", ")})`,
    faded: `rgba(${[baseColours.dark, BaseColourAlpha.faded].join(", ")})`,
    xfaded: `rgba(${[baseColours.dark, BaseColourAlpha.xfaded].join(", ")})`,
    xxfaded: `rgba(${[baseColours.dark, BaseColourAlpha.xxfaded].join(", ")})`,
    xxxfaded: `rgba(${[baseColours.dark, BaseColourAlpha.xxxfaded].join(", ")})`,
    xxxxfaded: `rgba(${[baseColours.dark, BaseColourAlpha.xxxxfaded].join(", ")})`,
  },
  light: {
    default: `rgba(${[baseColours.light, BaseColourAlpha.default].join(", ")})`,
    faded: `rgba(${[baseColours.light, BaseColourAlpha.faded].join(", ")})`,
    xfaded: `rgba(${[baseColours.light, BaseColourAlpha.xfaded].join(", ")})`,
    xxfaded: `rgba(${[baseColours.light, BaseColourAlpha.xxfaded].join(", ")})`,
    xxxfaded: `rgba(${[baseColours.light, BaseColourAlpha.xxxfaded].join(", ")})`,
    xxxxfaded: `rgba(${[baseColours.light, BaseColourAlpha.xxxxfaded].join(", ")})`,
  },
  error: {
    default: `rgba(${[baseColours.error, BaseColourAlpha.default].join(", ")})`,
    faded: `rgba(${[baseColours.error, BaseColourAlpha.faded].join(", ")})`,
    xfaded: `rgba(${[baseColours.error, BaseColourAlpha.xfaded].join(", ")})`,
    xxfaded: `rgba(${[baseColours.error, BaseColourAlpha.xxfaded].join(", ")})`,
    xxxfaded: `rgba(${[baseColours.error, BaseColourAlpha.xxxfaded].join(", ")})`,
    xxxxfaded: `rgba(${[baseColours.error, BaseColourAlpha.xxxxfaded].join(", ")})`,
  },
  info: {
    default: `rgba(${[baseColours.info, BaseColourAlpha.default].join(", ")})`,
    faded: `rgba(${[baseColours.info, BaseColourAlpha.faded].join(", ")})`,
    xfaded: `rgba(${[baseColours.info, BaseColourAlpha.xfaded].join(", ")})`,
    xxfaded: `rgba(${[baseColours.info, BaseColourAlpha.xxfaded].join(", ")})`,
    xxxfaded: `rgba(${[baseColours.info, BaseColourAlpha.xxxfaded].join(", ")})`,
    xxxxfaded: `rgba(${[baseColours.info, BaseColourAlpha.xxxxfaded].join(", ")})`,
  },
  success: {
    default: `rgba(${[baseColours.success, BaseColourAlpha.default].join(", ")})`,
    faded: `rgba(${[baseColours.success, BaseColourAlpha.faded].join(", ")})`,
    xfaded: `rgba(${[baseColours.success, BaseColourAlpha.xfaded].join(", ")})`,
    xxfaded: `rgba(${[baseColours.success, BaseColourAlpha.xxfaded].join(", ")})`,
    xxxfaded: `rgba(${[baseColours.success, BaseColourAlpha.xxxfaded].join(", ")})`,
    xxxxfaded: `rgba(${[baseColours.success, BaseColourAlpha.xxxxfaded].join(", ")})`,
  },
  warning: {
    default: `rgba(${[baseColours.warning, BaseColourAlpha.default].join(", ")})`,
    faded: `rgba(${[baseColours.warning, BaseColourAlpha.faded].join(", ")})`,
    xfaded: `rgba(${[baseColours.warning, BaseColourAlpha.xfaded].join(", ")})`,
    xxfaded: `rgba(${[baseColours.warning, BaseColourAlpha.xxfaded].join(", ")})`,
    xxxfaded: `rgba(${[baseColours.warning, BaseColourAlpha.xxxfaded].join(", ")})`,
    xxxxfaded: `rgba(${[baseColours.warning, BaseColourAlpha.xxxxfaded].join(", ")})`,
  },
  transparent: {
    default: `rgba(${[baseColours.transparent, BaseColourAlpha.default].join(", ")})`,
    faded: `rgba(${[baseColours.transparent, BaseColourAlpha.faded].join(", ")})`,
    xfaded: `rgba(${[baseColours.transparent, BaseColourAlpha.xfaded].join(", ")})`,
    xxfaded: `rgba(${[baseColours.transparent, BaseColourAlpha.xxfaded].join(", ")})`,
    xxxfaded: `rgba(${[baseColours.transparent, BaseColourAlpha.xxxfaded].join(", ")})`,
    xxxxfaded: `rgba(${[baseColours.transparent, BaseColourAlpha.xxxxfaded].join(", ")})`,
  },
}

type TBgOrFontColourProp = "color" | "backgroundColor" | "borderColor";

interface IGenerateColourProps {
  baseColour: keyof IColours;
  alpha: keyof IBaseColourAlpha;
  prop: TBgOrFontColourProp;
}
const generateColour = ({
  alpha = "default",
  baseColour,
  prop
}: IGenerateColourProps) => {
  return {
    [prop]: colourScheme[baseColour][alpha],
  };
}

export const colours = {
  background: {
    primary: {
      default: generateColour({ baseColour: "primary", prop: "backgroundColor", alpha: "default" }),
      faded: generateColour({ baseColour: "primary", prop: "backgroundColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "primary", prop: "backgroundColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "primary", prop: "backgroundColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "primary", prop: "backgroundColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "primary", prop: "backgroundColor", alpha: "xxxxfaded" }),
    },
    secondary: {
      default: generateColour({ baseColour: "secondary", prop: "backgroundColor", alpha: "default" }),
      faded: generateColour({ baseColour: "secondary", prop: "backgroundColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "secondary", prop: "backgroundColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "secondary", prop: "backgroundColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "secondary", prop: "backgroundColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "secondary", prop: "backgroundColor", alpha: "xxxxfaded" }),
    },
    tertiary: {
      default: generateColour({ baseColour: "tertiary", prop: "backgroundColor", alpha: "default" }),
      faded: generateColour({ baseColour: "tertiary", prop: "backgroundColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "tertiary", prop: "backgroundColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "tertiary", prop: "backgroundColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "tertiary", prop: "backgroundColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "tertiary", prop: "backgroundColor", alpha: "xxxxfaded" }),
    },
    dark: {
      default: generateColour({ baseColour: "dark", prop: "backgroundColor", alpha: "default" }),
      faded: generateColour({ baseColour: "dark", prop: "backgroundColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "dark", prop: "backgroundColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "dark", prop: "backgroundColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "dark", prop: "backgroundColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "dark", prop: "backgroundColor", alpha: "xxxxfaded" }),
    },
    light: {
      default: generateColour({ baseColour: "light", prop: "backgroundColor", alpha: "default" }),
      faded: generateColour({ baseColour: "light", prop: "backgroundColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "light", prop: "backgroundColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "light", prop: "backgroundColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "light", prop: "backgroundColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "light", prop: "backgroundColor", alpha: "xxxxfaded" }),
    },
    error: {
      default: generateColour({ baseColour: "error", prop: "backgroundColor", alpha: "default" }),
      faded: generateColour({ baseColour: "error", prop: "backgroundColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "error", prop: "backgroundColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "error", prop: "backgroundColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "error", prop: "backgroundColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "error", prop: "backgroundColor", alpha: "xxxxfaded" }),
    },
    info: {
      default: generateColour({ baseColour: "info", prop: "backgroundColor", alpha: "default" }),
      faded: generateColour({ baseColour: "info", prop: "backgroundColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "info", prop: "backgroundColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "info", prop: "backgroundColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "info", prop: "backgroundColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "info", prop: "backgroundColor", alpha: "xxxxfaded" }),
    },
    success: {
      default: generateColour({ baseColour: "success", prop: "backgroundColor", alpha: "default" }),
      faded: generateColour({ baseColour: "success", prop: "backgroundColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "success", prop: "backgroundColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "success", prop: "backgroundColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "success", prop: "backgroundColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "success", prop: "backgroundColor", alpha: "xxxxfaded" }),
    },
    warning: {
      default: generateColour({ baseColour: "warning", prop: "backgroundColor", alpha: "default" }),
      faded: generateColour({ baseColour: "warning", prop: "backgroundColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "warning", prop: "backgroundColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "warning", prop: "backgroundColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "warning", prop: "backgroundColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "warning", prop: "backgroundColor", alpha: "xxxxfaded" }),
    },
    transparent: {
      default: generateColour({ baseColour: "transparent", prop: "backgroundColor", alpha: "default" }),
      faded: generateColour({ baseColour: "transparent", prop: "backgroundColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "transparent", prop: "backgroundColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "transparent", prop: "backgroundColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "transparent", prop: "backgroundColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "transparent", prop: "backgroundColor", alpha: "xxxxfaded" }),
    }
  },
  font: {
    primary: {
      default: generateColour({ baseColour: "primary", prop: "color", alpha: "default" }),
      faded: generateColour({ baseColour: "primary", prop: "color", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "primary", prop: "color", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "primary", prop: "color", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "primary", prop: "color", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "primary", prop: "color", alpha: "xxxxfaded" }),
    },
    secondary: {
      default: generateColour({ baseColour: "secondary", prop: "color", alpha: "default" }),
      faded: generateColour({ baseColour: "secondary", prop: "color", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "secondary", prop: "color", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "secondary", prop: "color", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "secondary", prop: "color", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "secondary", prop: "color", alpha: "xxxxfaded" }),
    },
    tertiary: {
      default: generateColour({ baseColour: "tertiary", prop: "color", alpha: "default" }),
      faded: generateColour({ baseColour: "tertiary", prop: "color", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "tertiary", prop: "color", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "tertiary", prop: "color", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "tertiary", prop: "color", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "tertiary", prop: "color", alpha: "xxxxfaded" }),
    },
    dark: {
      default: generateColour({ baseColour: "dark", prop: "color", alpha: "default" }),
      faded: generateColour({ baseColour: "dark", prop: "color", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "dark", prop: "color", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "dark", prop: "color", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "dark", prop: "color", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "dark", prop: "color", alpha: "xxxxfaded" }),
    },
    light: {
      default: generateColour({ baseColour: "light", prop: "color", alpha: "default" }),
      faded: generateColour({ baseColour: "light", prop: "color", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "light", prop: "color", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "light", prop: "color", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "light", prop: "color", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "light", prop: "color", alpha: "xxxxfaded" }),
    },
    error: {
      default: generateColour({ baseColour: "error", prop: "color", alpha: "default" }),
      faded: generateColour({ baseColour: "error", prop: "color", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "error", prop: "color", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "error", prop: "color", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "error", prop: "color", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "error", prop: "color", alpha: "xxxxfaded" }),
    },
    info: {
      default: generateColour({ baseColour: "info", prop: "color", alpha: "default" }),
      faded: generateColour({ baseColour: "info", prop: "color", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "info", prop: "color", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "info", prop: "color", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "info", prop: "color", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "info", prop: "color", alpha: "xxxxfaded" }),
    },
    success: {
      default: generateColour({ baseColour: "success", prop: "color", alpha: "default" }),
      faded: generateColour({ baseColour: "success", prop: "color", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "success", prop: "color", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "success", prop: "color", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "success", prop: "color", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "success", prop: "color", alpha: "xxxxfaded" }),
    },
    warning: {
      default: generateColour({ baseColour: "warning", prop: "color", alpha: "default" }),
      faded: generateColour({ baseColour: "warning", prop: "color", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "warning", prop: "color", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "warning", prop: "color", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "warning", prop: "color", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "warning", prop: "color", alpha: "xxxxfaded" }),
    },
  },
  border: {
    primary: {
      default: generateColour({ baseColour: "primary", prop: "borderColor", alpha: "default" }),
      faded: generateColour({ baseColour: "primary", prop: "borderColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "primary", prop: "borderColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "primary", prop: "borderColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "primary", prop: "borderColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "primary", prop: "borderColor", alpha: "xxxxfaded" }),
    },
    secondary: {
      default: generateColour({ baseColour: "secondary", prop: "borderColor", alpha: "default" }),
      faded: generateColour({ baseColour: "secondary", prop: "borderColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "secondary", prop: "borderColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "secondary", prop: "borderColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "secondary", prop: "borderColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "secondary", prop: "borderColor", alpha: "xxxxfaded" }),
    },
    tertiary: {
      default: generateColour({ baseColour: "tertiary", prop: "borderColor", alpha: "default" }),
      faded: generateColour({ baseColour: "tertiary", prop: "borderColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "tertiary", prop: "borderColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "tertiary", prop: "borderColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "tertiary", prop: "borderColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "tertiary", prop: "borderColor", alpha: "xxxxfaded" }),
    },
    dark: {
      default: generateColour({ baseColour: "dark", prop: "borderColor", alpha: "default" }),
      faded: generateColour({ baseColour: "dark", prop: "borderColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "dark", prop: "borderColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "dark", prop: "borderColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "dark", prop: "borderColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "dark", prop: "borderColor", alpha: "xxxxfaded" }),
    },
    light: {
      default: generateColour({ baseColour: "light", prop: "borderColor", alpha: "default" }),
      faded: generateColour({ baseColour: "light", prop: "borderColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "light", prop: "borderColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "light", prop: "borderColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "light", prop: "borderColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "light", prop: "borderColor", alpha: "xxxxfaded" }),
    },
    error: {
      default: generateColour({ baseColour: "error", prop: "borderColor", alpha: "default" }),
      faded: generateColour({ baseColour: "error", prop: "borderColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "error", prop: "borderColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "error", prop: "borderColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "error", prop: "borderColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "error", prop: "borderColor", alpha: "xxxxfaded" }),
    },
    info: {
      default: generateColour({ baseColour: "info", prop: "borderColor", alpha: "default" }),
      faded: generateColour({ baseColour: "info", prop: "borderColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "info", prop: "borderColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "info", prop: "borderColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "info", prop: "borderColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "info", prop: "borderColor", alpha: "xxxxfaded" }),
    },
    success: {
      default: generateColour({ baseColour: "success", prop: "borderColor", alpha: "default" }),
      faded: generateColour({ baseColour: "success", prop: "borderColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "success", prop: "borderColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "success", prop: "borderColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "success", prop: "borderColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "success", prop: "borderColor", alpha: "xxxxfaded" }),
    },
    warning: {
      default: generateColour({ baseColour: "warning", prop: "borderColor", alpha: "default" }),
      faded: generateColour({ baseColour: "warning", prop: "borderColor", alpha: "faded" }),
      xfaded: generateColour({ baseColour: "warning", prop: "borderColor", alpha: "xfaded" }),
      xxfaded: generateColour({ baseColour: "warning", prop: "borderColor", alpha: "xxfaded" }),
      xxxfaded: generateColour({ baseColour: "warning", prop: "borderColor", alpha: "xxxfaded" }),
      xxxxfaded: generateColour({ baseColour: "warning", prop: "borderColor", alpha: "xxxxfaded" }),
    },
  },
  baseColours: colourScheme,
};