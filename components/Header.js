import { Flex, Image } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Header = () => (
  <Flex p={4} as="header" alignItems="center" justifyContent="space-between">
    <Image src="/logo.svg" alt="Bonhomme" />
    <ConnectButton
      accountStatus="address"
      chainStatus="none"
      showBalance={false}
    />
  </Flex>
);
