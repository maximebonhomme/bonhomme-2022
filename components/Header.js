import { Box, Flex, Image } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { ConnectButton, useConnectModal } from '@rainbow-me/rainbowkit';

export const Header = () => {
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

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
      <Image src="/logo.svg" alt="Bonhomme" />
      {address ? (
        <Flex alignItems="center" height="24px">
          <ConnectButton
            accountStatus="address"
            chainStatus="icon"
            showBalance={false}
          />
        </Flex>
      ) : (
        <Box
          onClick={openConnectModal}
          height="24px"
          position="relative"
          as="button"
          role="button"
          textTransform="uppercase"
          px={3}
          border="1px solid"
          borderColor="pink.500"
          color="pink.500"
          borderRadius="lg"
          bg="transparent"
          fontSize="sm"
          transition="0.1s"
          _hover={{ borderColor: 'purple.500', color: 'purple.500' }}
        >
          <Box as="span" position="relative" zIndex={10}>
            Connect Wallet
          </Box>
        </Box>
      )}
    </Flex>
  );
};
