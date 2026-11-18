import { Image } from "@chakra-ui/react"

export const Avatar = () => (
  <Image
    borderRadius="full"
    width={{ base: "80%", lg: "full" }}
    src="/profile.png"
    alt="Bonhomme"
  />
)
