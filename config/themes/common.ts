import { lighten } from 'polished';

const common = {
  black: '#000',
  white: '#fff',
  lightDark: lighten(0.1, '#000'),
};

export const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
};

export const defaultFontFamily =
  '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif';

export const fontSizeBase = 16;

export default common;
