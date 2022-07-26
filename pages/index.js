import {
  Link,
  Box,
  Flex,
  Text,
  Heading,
  Image,
  GridItem,
} from '@chakra-ui/react';
import { Grid } from '../components/Grid';
import { Experience } from '../components/Experience';

export default function Home() {
  return (
    <Box py="130px" maxWidth={490} mx="auto">
      <Flex mb={9} alignItems="center">
        <Box borderRadius="full" overflow="hidden">
          <Image
            mr={8}
            borderRadius="full"
            width="90px"
            height="90px"
            src="/profile.png"
            alt="Bonhomme"
          />
        </Box>
        <Box>
          <Heading as="h1" size="lg">
            Maxime Bonhomme
          </Heading>
          <Text>Product-focused Fullstack Developer</Text>
          <Link
            opacity={0.5}
            href="https://etherscan.io/address/0xff5fe6e0d3d48c90a66217dd4a7560a3ed8dacd2"
          >
            himlate.eth
          </Link>
        </Box>
      </Flex>
      <Box mb={14}>
        <Heading as="h2" size="md" mb={2}>
          About
        </Heading>
        <Text>
          GM, I'm Max. I enjoy building dynamic, creative products from start to
          finish. Focused on developing intuative experiences that constantly
          grow and improve based on user metrics. Always shipping.
        </Text>
      </Box>
      <Box mb={14}>
        <Heading as="h2" size="md" mb={10}>
          Work Experience
        </Heading>

        <Experience
          year="2020 - 2022"
          position="Full Stack & Technical Lead – Everpress"
          desc="Led a team of 5 engineers to develop our creator tools and e-commerce
        app. Collaborated closely with the Head of Product to track our tactical
        objectives, improve technical directions and shipping frequency."
          stack="React • Redux • Symphony • AWS"
        />
        <Experience
          year="2016 – 2020"
          position="Front End Engineer – Freelance"
          desc="Worked with a range of large and small agencies, start-ups and individuals to build products. Clients included Marvel App, United Nations, Netflix, Dropbox Design."
          stack="React • Redux/Context • PIXI.js • Three.js"
        />
        <Experience
          year="2014 – 2016"
          position="Front End Engineer – NEVERBLAND"
          desc="Part of a tight-knit team of designers, developers and critical thinkers, I built MVP products and marketing experiences for start-ups."
          stack="React • Redux/Context • PIXI.js • Three.js"
        />

        <Heading as="h2" size="md" mt={14} mb={10}>
          Side Projects
        </Heading>

        <Experience
          year="Ongoing"
          position="Tamiko"
          desc="Tamiko are non-fungible friends that live completely on-chain. You can hatch, feed, breed and evolve them."
          stack="Solidity • ERC721 • ERC1155 • Next.js"
        />
      </Box>
    </Box>
  );
}
