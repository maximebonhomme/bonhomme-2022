import { ChakraProvider } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { WagmiConfig, createConfig, mainnet } from "wagmi"
import { theme } from "../utils/theme"
import { Header } from "../components/Header"
import "../styles/globals.css"
import { ConnectKitProvider, getDefaultConfig } from "connectkit"

const wagmiConfig = createConfig(
  getDefaultConfig({
    // Required API Keys
    chains: [mainnet],
    infuraId: "ca44ce9a485946dc9625c88bd5431eed",
    walletConnectProjectId: "725416c0a4e3389225cf458a96ea7cca",
    appName: "Bonhomme",
    appDescription: "Maxime Bonhomme - Product-focused Developer",
    appUrl: "https://bonhomme.lol",
    appIcon: "https://bonhomme.lol/favicon.png",
  })
)

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectKitProvider>
        <ChakraProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
        </ChakraProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
}
