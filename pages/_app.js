import PropTypes from 'prop-types';
import { ChakraProvider } from '@chakra-ui/react';
import { Fonts } from '../utils/fonts';
import { theme } from '../utils/theme';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};
