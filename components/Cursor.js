import React, { useRef, useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useEnsName, useAccount } from 'wagmi';
import { motion } from 'framer-motion';
import { useMouse, useWindowSize } from 'react-use';
import { trimAddress } from '../utils/address';
import { getRelativeCoordinates } from '../utils/coords';

const Cursor = () => {
  const { width } = useWindowSize();
  const { address } = useAccount();
  const { data: ensName } = useEnsName({
    address,
  });
  const [mousePosition, setMousePosition] = useState({});
  const [isVisible, setVisibility] = useState(false);
  const boxRef = useRef();
  const { elX, elY } = useMouse(boxRef);
  const isMobile = width <= 768;

  useEffect(() => {
    if (boxRef.current) {
      if (elX || elY) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }

      setMousePosition(
        getRelativeCoordinates({ pageX: elX, pageY: elY }, boxRef.current)
      );
    }
  }, [elX, elY, boxRef]);

  if (!address || isMobile) return false;

  return (
    <Box
      ref={boxRef}
      position="fixed"
      pointerEvents="none"
      top={0}
      left={0}
      width="full"
      height="full"
    >
      <Box
        as={motion.div}
        position="absolute"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 80, mass: 0.2 }}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        {ensName || trimAddress(address)}
      </Box>
    </Box>
  );
};

export default Cursor;
