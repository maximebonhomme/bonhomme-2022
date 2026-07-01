import { Link, Box, Text, Heading, GridItem, Flex } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import Head from "next/head"
import { Grid } from "../components/Grid"
import { Experience } from "../components/Experience"
import Cursor from "../components/Cursor"
import { Avatar } from "../components/Avatar"

export default function Home() {
  const { data: reads = [] } = useQuery({
    queryKey: ["arena-reads"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.are.na/v3/channels/reads-nz-i4lkqt9a/contents?per=5&sort=position_desc"
      )
      const data = await res.json()
      console.log(data.data)
      return (data.data || []).filter((block) => block.type === "Link")
    },
  })

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
            </Box>
          </GridItem>
        </Grid>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={2}>
            About
          </Heading>
          <Text>
            I'm Max. I enjoy building dynamic, creative products from start to finish.
            Focused on developing intuitive experiences that constantly grow and improve
            based on user metrics. Always shipping.
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
            stack="Remix • Prisma • Effect • Tailwind"
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
            href="https://podpod.me"
            image="/podpod.svg"
            side="Ongoing"
            title="Podpod"
            desc="Generate podcasts from things you don't have time to read: articles, newsletters, and more."
            stack="RR7 • Mistral • Redis • Tailwind • Effect"
          />
          <Experience
            href="https://www.instagram.com/dolenn.bzh"
            image="/dolenn-single.png"
            side="2024"
            title="Dolenn - Hot Sauce"
            desc="Making hot sauces with a friend, made in Brittany with local ingredients."
            stack="Design • Illustration • Packaging • Cooking"
          />
          <Experience
            href="https://offline-nostalgia.bonhomme.lol"
            image="/offline-favicon.png"
            side="2024"
            title="Offline Nostalgia"
            desc="Generative art project around the offline era. Physical mint across London and Paris."
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
            side="Twitter"
            title="@pixel_arts"
            href="https://twitter.com/pixel_arts"
            mb={4}
          />

          {reads.length > 0 && (
            <>
              <Heading as="h2" size="md" mt={14} mb={10}>
                Latest reads
              </Heading>

              <Flex flexDirection="column" gap={4}>
                {reads.map((block) => (
                  <Link key={block.id} href={block.source?.url} isExternal _hover={{ textDecoration: "none" }} textDecoration="none" role="group">
                    <Text as="span" color="white" _groupHover={{ textDecoration: "underline" }}>
                      {block.title}
                    </Text>
                    {block.source?.url && (
                      <Text as="span" color="white" opacity={0.5}>
                        {" — "}
                        {new URL(block.source.url).hostname.replace("www.", "")}
                      </Text>
                    )}
                  </Link>
                ))}
              </Flex>
              {/* <Experience
                side=""
                title="View all"
                href="https://www.are.na/max-bonhomme/reads-nz-i4lkqt9a"
                mb={4}
              /> */}
            </>
          )}
        </Box>
      </Box>
    </>
  )
}
