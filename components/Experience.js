import { Text, Heading, GridItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Grid } from './Grid';

export const Experience = ({ year, position, desc, stack }) => (
  <Grid fluid templateColumns="repeat(4, 1fr)" mb={10}>
    <GridItem colSpan={1}>
      <Text>{year}</Text>
    </GridItem>
    <GridItem colSpan={3}>
      <Heading as="h3" size="md">
        {position}
      </Heading>
      <Text my={2}>{desc}</Text>
      <Text opacity={0.5}>{stack}</Text>
    </GridItem>
  </Grid>
);

Experience.propTypes = {
  year: PropTypes.string,
  position: PropTypes.string,
  desc: PropTypes.string,
  stack: PropTypes.string,
};
