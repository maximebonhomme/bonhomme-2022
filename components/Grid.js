import PropTypes from 'prop-types';
import { Grid as ChakraGrid } from '@chakra-ui/react';
import { clamp } from '../utils/foundation/clamp';

export const gridGap = {
  min: 4,
  max: 24,
};

export const gridPx = {
  min: 24,
  max: 60,
};

export function Grid({ children, fluid, ...rest }) {
  return (
    <ChakraGrid
      maxW="1920px"
      templateColumns="repeat(12, 1fr)"
      gridGap={clamp(gridGap.min, gridGap.max)}
      px={fluid ? 0 : clamp(gridPx.min, gridPx.max)}
      width="100%"
      mx="auto"
      {...rest}
    >
      {children}
    </ChakraGrid>
  );
}

Grid.defaultProps = {
  fluid: false,
};

Grid.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
