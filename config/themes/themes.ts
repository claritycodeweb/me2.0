import { DefaultTheme, css } from 'styled-components';
import common, { breakpoints as values, defaultFontFamily } from './common';
import { Breakpoint } from './styled';

const unit = 'px';

const breakpoints = {
  values: { ...values },
  up: (key: Breakpoint) => {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return (...args: Parameters<typeof css>) => css`
      @media (min-width: ${value}${unit}) {
        ${css(...args)}
      }
    `;
  },
  down: (key: Breakpoint) => {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return (...args: Parameters<typeof css>) => css`
      @media (max-width: ${value}${unit}) {
        ${css(...args)}
      }
    `;
  },
};

const mixins = {
  fontSize: (size: { [key in Breakpoint]?: number }) => {
    return Object.keys(size)
      .map((key) => ({
        value: values[key as Breakpoint],
        fontSize: size[key as Breakpoint],
      }))
      .reduce((acc, key) => {
        acc += `@media (max-width:${key.value}${unit}){
         font-size: ${key.fontSize as number}rem;
        }`;
        return acc;
      }, '');
  },
};

const fonts = {
  default: defaultFontFamily,
};

export const darkTheme: DefaultTheme = {
  palette: {
    text: {
      primary: '#d4d4d4', //common.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      // icon: 'rgba(255, 255, 255, 0.5)',
      tertiary: '#A6ADB4',
    },
    background: {
      paper: '#121212',
      default: '#222222',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    black: common.black,
    white: common.white,
    lightDark: common.lightDark, // we can use this color for text for white backgrounds
    border: {
      primary: '#373737',
    },
    accent: {
      primary: '#dea32a',
    },
    hover: {
      primary: '#db8548',
    },
  },
  breakpoints,
  mixins,
  fonts,
};

export const lightTheme: DefaultTheme = {
  palette: {
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.6)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)',
      tertiary: 'rgba(0, 0, 0, 0.20)',
    },
    background: {
      paper: common.white,
      default: common.white,
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    black: common.black,
    white: common.white,
    lightDark: common.lightDark,
    border: {
      primary: '#121212',
    },
    accent: {
      primary: '#dea32a',
    },
    hover: {
      primary: '#db8548',
    },
  },
  breakpoints,
  mixins,
  fonts,
};
