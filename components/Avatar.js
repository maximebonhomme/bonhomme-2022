import { Box, Image, Flex, keyframes, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAccount, useEnsName } from 'wagmi';
import { trimAddress } from '../utils/address';
import { MintModal } from './MintModal';

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

export const Avatar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasMounted, setMounted] = useState(false);
  const { address } = useAccount();
  const { data: ensName } = useEnsName({
    address,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!hasMounted) return false;

  return (
    <>
      {address && (
        <MintModal
          name={ensName || trimAddress(address)}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      )}
      <Box
        as="button"
        onClick={onOpen}
        type="button"
        cursor={address ? 'pointer' : 'default'}
        transition="0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
        _hover={{
          transform: 'scale(1.03)',
        }}
      >
        <Flex alignItems="center" justifyContent="center" position="relative">
          {address && (
            <Flex
              alignItems="center"
              justifyContent="center"
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              animation={`${spin} infinite 2.5s paused linear`}
              _hover={{
                animationPlayState: 'running',
              }}
            >
              <Image
                maxWidth="none"
                position="absolute"
                width={{ base: 'full', lg: '135%' }}
                src="/blurs.png"
                role="presentation"
                animation={`${spin} infinite 5s linear`}
              />
            </Flex>
          )}
          <Image
            borderRadius="full"
            width={{ base: '80%', lg: 'full' }}
            src="/profile.png"
            alt="Bonhomme"
          />
        </Flex>
      </Box>
    </>
  );
};
