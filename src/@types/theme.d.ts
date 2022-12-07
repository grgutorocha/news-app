type ThemeColorType = {
  primary: string;
  secondary: string;
};

type ThemeBreakpoint = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

type ThemeType = {
  text?: ThemeColorType;
  border?: ThemeColorType;
  background?: ThemeColorType;
  breakpoint?: ThemeBreakpoint;
};
