import { Box, Flex, Image } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { ConnectButton, useConnectModal } from '@rainbow-me/rainbowkit';
import { useState, useEffect } from 'react';

export const Header = () => {
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const [hasMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!hasMounted) return false;

  return (
    <Flex
      position="fixed"
      top={0}
      width="full"
      p={4}
      as="header"
      alignItems="center"
      justifyContent="space-between"
    >
    </Flex>
  );
};
