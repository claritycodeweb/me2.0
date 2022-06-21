import 'styled-components';

export interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
  tertiary: string;
}

export interface TypeBackground {
  default: string;
  paper: string;
  overlay: string;
}

export interface PaletteColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      text: Partial<TypeText>;
      background: Partial<TypeBackground>;
      divider: string;
      black: string;
      white: string;
      lightDark: string;
      // primary: PaletteColor;
      // secondary: PaletteColor;
      border: Partial<TypeText>;
      hover: Partial<TypeText>;
      accent: Partial<TypeText>;
    };
    fonts: {
      default: string;
    };
    breakpoints: {
      values: { [name in Breakpoint]: number };
      /**
       * @param key - A breakpoint key (`mobile`, `tablet`, etc.) or a screen width number in px.
       * @returns Matches screen widths greater than the screen size given by the breakpoint key (inclusive).
       */
      up: (
        key: Breakpoint
      ) => (
        ...args: Parameters<typeof css>
      ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
      /**
       * @param key - A breakpoint key (`mobile`, `tablet`, etc.) or a screen width number in px.
       * @returns Matches screen widths greater than the screen size given by the breakpoint key (inclusive).
       */
      down: (
        key: Breakpoint
      ) => (
        ...args: Parameters<typeof css>
      ) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
    };
    mixins: {
      /**
       * @param size - example ({mobile: 1.0 }) in rems
       */
      fontSize: (size: { [key in Breakpoint]?: number }) => string;
    };
  }
}
