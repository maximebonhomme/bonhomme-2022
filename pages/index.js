import { Link, Box, Text, Heading, GridItem } from "@chakra-ui/react"
import Head from "next/head"
import { Grid } from "../components/Grid"
import { Experience } from "../components/Experience"
import Cursor from "../components/Cursor"
import { Avatar } from "../components/Avatar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Bonhomme - Developer</title>
      </Head>
      <Cursor />

      <Box py="115px" px={4} maxWidth={500} mx="auto">
        <Grid fluid templateColumns="repeat(4, 1fr)" mb={10} alignItems="center">
          <GridItem colSpan={1}>
            <Avatar />
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Heading as="h1" size="lg">
                Maxime Bonhomme
              </Heading>
              <Text>Product-focused Developer</Text>
              <Link
                color="white"
                opacity={0.5}
                href="https://etherscan.io/address/0xff5fe6e0d3d48c90a66217dd4a7560a3ed8dacd2"
              >
                bonhomme.eth
              </Link>
            </Box>
          </GridItem>
        </Grid>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={2}>
            About
          </Heading>
          <Text>
            GM, I'm Max. I enjoy building dynamic, creative products from start to
            finish. Focused on developing intuitive experiences that constantly grow and
            improve based on user metrics. Always shipping.
          </Text>
        </Box>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={10}>
            Work Experience
          </Heading>

          <Experience
            href="https://iyk.app"
            side="2022 - present"
            title="Senior Frontend Engineer – IYK"
            desc="Building the Whole Wide World﹡"
            stack="Remix • Prisma • Tailwind • Shadcn"
          />
          <Experience
            href="https://everpress.com/"
            side="2020 - 2022"
            title="Full Stack & Technical Lead – Everpress"
            desc="Led a team of 5 engineers to develop our creator tools and e-commerce
        app. Collaborated closely with the Head of Product to track our tactical
        objectives, improve technical directions and shipping frequency."
            stack="React • Redux • Symfony • AWS"
          />
          <Experience
            side="2016 – 2020"
            title="Front End Engineer – Freelance"
            desc="Worked with a range of large and small agencies, start-ups and individuals to build products. Clients included Marvel App, United Nations, Netflix, Dropbox Design."
            stack="React • Redux • Styled Components • Framer Motion"
          />
          <Experience
            href="https://neverbland.com/"
            side="2014 – 2016"
            title="Front End Engineer – Neverbland"
            desc="Part of a tight-knit team of designers, developers and critical thinkers, I built MVP products and marketing experiences for start-ups."
            stack="React • Redux • CSSModules • Three.js"
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Side Projects
          </Heading>

          <Experience
            href="https://offline.london"
            image="/offline-favicon.png"
            side="2024"
            title="Offline Nostalgia"
            desc="Generative art project around the offline era. Physical mint."
            stack="Solidity • IYK Chips • fully onchain"
          />
          <Experience
            image="/tamiko.svg"
            side="Paused"
            title="Tamiko"
            desc="Tamiko are non-fungible friends that live completely on-chain. You can hatch, feed, breed and evolve them."
            stack="Solidity • ERC721 • ERC1155 • Next.js"
          />
          <Experience
            href="https://kineticspectru.ms/"
            image="/kineticspectrum.png"
            side="2022"
            title="Kinetic Spectrums"
            desc="Generative on-chain NFTs. A collection of dynamic, ever changing artworks."
            stack="Solidity • ERC721 • Next.js"
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Links
          </Heading>

          <Experience
            side="Github"
            title="@maximebonhomme"
            href="https://github.com/maximebonhomme"
            mb={4}
          />
          <Experience
            side="Etherscan"
            title="bonhomme.eth"
            href="https://etherscan.io/address/0xff5fe6e0d3d48c90a66217dd4a7560a3ed8dacd2"
            mb={4}
          />
          <Experience
            side="Foundation"
            title="@bonhomme"
            href="https://foundation.app/@bonhomme?tab=owned"
            mb={4}
          />
          <Experience
            side="Twitter"
            title="@pixel_arts"
            href="https://twitter.com/pixel_arts"
            mb={4}
          />
        </Box>
      </Box>
    </>
  )
}
