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
      <MintModal
        name={ensName || trimAddress(address)}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
      <Box
        as="button"
        onClick={onOpen}
        type="button"
        cursor={address ? 'pointer' : 'default'}
      >
        <Flex alignItems="center" justifyContent="center" position="relative">
          {address && (
            <Image
              position="absolute"
              width="125%"
              src="/blurs.png"
              role="presentation"
              animation={`${spin} infinite 5s linear`}
            />
          )}
          <Image
            borderRadius="full"
            width="80%"
            src="/profile.png"
            alt="Bonhomme"
          />
        </Flex>
      </Box>
    </>
  );
};
