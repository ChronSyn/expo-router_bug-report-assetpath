import { StyleProp, TextStyle, ViewStyle } from 'react-native'

export interface IBaseColour {
  default: string
  faded: string
  xfaded: string
  xxfaded: string
  xxxfaded: string
  xxxxfaded: string
}
export interface IBaseColourAlpha {
  default: number
  faded: number
  xfaded: number
  xxfaded: number
  xxxfaded: number
  xxxxfaded: number
}

export const BaseColourAlpha: Record<
  keyof IBaseColourAlpha,
  IBaseColourAlpha[keyof IBaseColourAlpha]
> = {
  default: 1,
  faded: 0.8,
  xfaded: 0.6,
  xxfaded: 0.4,
  xxxfaded: 0.2,
  xxxxfaded: 0.1,
}

export interface IColours {
  primary: IBaseColour;
  secondary: IBaseColour;
  tertiary: IBaseColour;
  error: IBaseColour;
  success: IBaseColour;
  warning: IBaseColour;
  info: IBaseColour;
  dark: IBaseColour;
  light: IBaseColour;
  transparent: IBaseColour;
}

export interface IBaseBorderRadius {
  none: StyleProp<ViewStyle>
  small: StyleProp<ViewStyle>
  medium: StyleProp<ViewStyle>
  large: StyleProp<ViewStyle>
  xlarge: StyleProp<ViewStyle>
  rounded: StyleProp<ViewStyle>
}

export interface IBaseBorderWidth {
  none: StyleProp<ViewStyle>
  thin: StyleProp<ViewStyle>
  medium: StyleProp<ViewStyle>
  thick: StyleProp<ViewStyle>
}

export interface IBaseSpacing {
  none: StyleProp<ViewStyle>
  xxxsmall: StyleProp<ViewStyle>
  xxsmall: StyleProp<ViewStyle>
  xsmall: StyleProp<ViewStyle>
  small: StyleProp<ViewStyle>
  medium: StyleProp<ViewStyle>
  large: StyleProp<ViewStyle>
  xlarge: StyleProp<ViewStyle>
  xxlarge: StyleProp<ViewStyle>
  xxxlarge: StyleProp<ViewStyle>
}

export interface IViewSizes {
  fitContent: StyleProp<ViewStyle>

  // auto: StyleProp<ViewStyle>
  full: StyleProp<ViewStyle>
  half: StyleProp<ViewStyle>
  third: StyleProp<ViewStyle>
  quarter: StyleProp<ViewStyle>

  oneColumn: StyleProp<ViewStyle>
  twoColumn: StyleProp<ViewStyle>
  threeColumn: StyleProp<ViewStyle>
  fourColumn: StyleProp<ViewStyle>
  fiveColumn: StyleProp<ViewStyle>
  sixColumn: StyleProp<ViewStyle>
  sevenColumn: StyleProp<ViewStyle>
  eightColumn: StyleProp<ViewStyle>
  nineColumn: StyleProp<ViewStyle>
  tenColumn: StyleProp<ViewStyle>
  elevenColumn: StyleProp<ViewStyle>
  twelveColumn: StyleProp<ViewStyle>
}

interface ISides<T> {
  top: T
  right: T
  bottom: T
  left: T
  all: T
  horizontal: T
  vertical: T
}

interface IColoursWithSides {
  border: ISides<ViewStyle>
}

type TTextOrBg = <T = 'text' | 'bg'>(
  type: T
) => T extends 'text' ? TextStyle : ViewStyle

interface IBgAndText {
  primary: IBaseColour
  secondary: IBaseColour
  tertiary: IBaseColour
  error: IBaseColour
  success: IBaseColour
  warning: IBaseColour
  info: IBaseColour
  dark: IBaseColour
  light: IBaseColour
}

export interface IElementColour {
  font: IBgAndText
  background: IBgAndText
  border: IColoursWithSides
}

export interface IFontSizes {
  smallest: StyleProp<TextStyle>
  xxxxsmall: StyleProp<TextStyle>
  xxxsmall: StyleProp<TextStyle>
  xxsmall: StyleProp<TextStyle>
  xsmall: StyleProp<TextStyle>
  small: StyleProp<TextStyle>
  medium: StyleProp<TextStyle>
  large: StyleProp<TextStyle>
}

export interface IFontWeights {
  bold: StyleProp<TextStyle>
  extraBold: StyleProp<TextStyle>
  extraLight: StyleProp<TextStyle>
  light: StyleProp<TextStyle>
  medium: StyleProp<TextStyle>
  regular: StyleProp<TextStyle>
  semiBold: StyleProp<TextStyle>
  semiLight: StyleProp<TextStyle>
  thin: StyleProp<TextStyle>
}

export interface IRadius {
  topLeft: IBaseBorderRadius
  topRight: IBaseBorderRadius
  bottomLeft: IBaseBorderRadius
  bottomRight: IBaseBorderRadius

  // Handles 2 sides - e.g. top = top left + top right
  top: IBaseBorderRadius
  right: IBaseBorderRadius
  bottom: IBaseBorderRadius
  left: IBaseBorderRadius

  // Handles all 4 corners
  all: IBaseBorderRadius
}

export interface IBaseTheme {
  height: IViewSizes
  minHeight: IViewSizes
  maxHeight: IViewSizes
  width: IViewSizes
  minWidth: IViewSizes
  maxWidth: IViewSizes
  cursor: {
    pointer: StyleProp<ViewStyle>
    default: StyleProp<ViewStyle>
  }
  aspectRatio: {
    square: StyleProp<ViewStyle>
    widescreen: StyleProp<ViewStyle>
    // auto: StyleProp<ViewStyle>
  }
  overflow: {
    visible: StyleProp<ViewStyle>
    hidden: StyleProp<ViewStyle>
    scroll: StyleProp<ViewStyle>
  }
  font: {
    size: IFontSizes
    weight: IFontWeights
    alignment: {
      center: StyleProp<TextStyle>
      left: StyleProp<TextStyle>
      right: StyleProp<TextStyle>
    }
  }
  padding: {
    top: IBaseSpacing
    right: IBaseSpacing
    bottom: IBaseSpacing
    left: IBaseSpacing
    all: IBaseSpacing
    horizontal: IBaseSpacing
    vertical: IBaseSpacing
  }
  margin: {
    top: IBaseSpacing
    right: IBaseSpacing
    bottom: IBaseSpacing
    left: IBaseSpacing
    all: IBaseSpacing
    horizontal: IBaseSpacing
    vertical: IBaseSpacing
  }
  border: {
    radius: IRadius
    width: {
      top: IBaseBorderWidth
      right: IBaseBorderWidth
      bottom: IBaseBorderWidth
      left: IBaseBorderWidth
      all: IBaseBorderWidth
      horizontal: IBaseBorderWidth // Top + Bottom
      vertical: IBaseBorderWidth // Left + Right
    }
  }
  flex: {
    flex: StyleProp<ViewStyle>
    grow: StyleProp<ViewStyle>
    shrink: StyleProp<ViewStyle>
    direction: {
      row: StyleProp<ViewStyle>
      column: StyleProp<ViewStyle>
    }
    wrap: StyleProp<ViewStyle>
    alignItems: {
      start: StyleProp<ViewStyle>
      center: StyleProp<ViewStyle>
      end: StyleProp<ViewStyle>
    }
    alignContent: {
      start: StyleProp<ViewStyle>
      center: StyleProp<ViewStyle>
      end: StyleProp<ViewStyle>
    }
    justifyContent: {
      start: StyleProp<ViewStyle>
      center: StyleProp<ViewStyle>
      end: StyleProp<ViewStyle>
      between: StyleProp<ViewStyle>
      evenly: StyleProp<ViewStyle>
    }
    basis: Omit<IViewSizes, "fitContent">
    alignSelf: {
      start: StyleProp<ViewStyle>
      center: StyleProp<ViewStyle>
      end: StyleProp<ViewStyle>
    }
  }
  gap: IBaseSpacing
}
