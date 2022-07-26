import { clamp } from './clamp';

export const typography = {
  letterSpacings: {
    tight: '-0.005em',
    normal: '0',
    wide: '0.005em',
  },

  lineHeights: {
    none: 1,
    short: 1.2,
    base: 1.3,
  },

  fontWeights: {
    normal: 400,
    bold: 700,
  },

  fonts: {
    heading: `"Leitura", “Didot”, "Times New Roman", Times, serif`,
    body: `"Nitti Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },

  fontSizes: {
    sm: clamp(16, 20),
    md: clamp(16, 24),
    lg: clamp(18, 48),
    xl: clamp(24, 80),
    '2xl': clamp(32, 110, 'xs', '2xl'),
    '3xl': clamp(48, 195),
  },
};
