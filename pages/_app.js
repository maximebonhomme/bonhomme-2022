import { ChakraProvider } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { theme } from "../utils/theme"
import { Header } from "../components/Header"
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
}
