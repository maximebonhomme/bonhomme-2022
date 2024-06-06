import { breakpoints } from "./breakpoints"
import { colors } from "./colors"
import { typography } from "./typography"
import { zIndex } from "./zIndex"
import { space } from "./space"

export const foundations = {
  breakpoints,
  zIndex,
  ...typography,
  colors,
  space,
}
