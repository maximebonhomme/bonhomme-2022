import { Text, Heading, GridItem, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Grid } from './Grid';

export const Experience = ({
  side,
  title,
  desc,
  stack,
  image,
  href,
  ...props
}) => (
  <Grid fluid templateColumns="repeat(4, 1fr)" mb={10} {...props}>
    <GridItem colSpan={1}>
      <Text>{side}</Text>
    </GridItem>
    <GridItem colSpan={3}>
      {image && <Image width="36px" mb={4} src={image} alt={title} />}
      <Heading as={href ? 'a' : 'h3'} href={href} size="md">
        {title}
      </Heading>
      {desc && <Text my={2}>{desc}</Text>}
      {stack && <Text opacity={0.5}>{stack}</Text>}
    </GridItem>
  </Grid>
);

Experience.propTypes = {
  side: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  stack: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
};
