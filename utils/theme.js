import { extendTheme } from '@chakra-ui/react';
import { fontBody, fontHeading } from './fonts';

import { foundations } from './foundation';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'andopen',
};

export const theme = extendTheme({
  config,
  ...foundations,
  styles: {
    global: {
      '.js-focus-visible :focus:not([data-focus-visible-added])': {
        outline: 'none',
        boxShadow: 'none',
      },
      html: {
        // scrollPaddingTop: foundations.space.xl,
        scrollBehavior: 'smooth',
      },
      body: {
        fontFamily: fontBody,
        overflowX: 'hidden',
      },
      heading: {
        fontFamily: fontHeading,
        fontWeight: foundations.fontWeights.normal,
      },
    },
  },
});
