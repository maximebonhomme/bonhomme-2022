import { extendTheme } from "@chakra-ui/react"
import { foundations } from "./foundation"

const config = {
  cssVarPrefix: "bonhomme",
}

export const theme = extendTheme({
  config,
  ...foundations,
  styles: {
    global: {
      "html, body": {
        color: "whiteAlpha.700",
        bg: "black.500",
        fontSize: "md",
      },
      ".js-focus-visible :focus:not([data-focus-visible-added])": {
        outline: "none",
        boxShadow: "none",
      },
      a: {
        color: "whiteAlpha.500",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "400",
        color: "white.500",
      },
      sizes: {
        lg: {
          fontSize: "lg",
        },
        md: {
          fontSize: "md",
        },
        sm: {
          fontSize: "sm",
        },
      },
    },
  },
})
