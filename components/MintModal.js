import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  Button,
  Heading,
  Text,
  Link,
  Image,
} from '@chakra-ui/react';

export const MintModal = ({ name, isOpen, onOpen, onClose }) => {
  const lol = 'lol';

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          bg="white"
          textColor="black"
          p={12}
          borderRadius="3xl"
          textAlign="center"
        >
          <Image
            mx="auto"
            mb={6}
            width="96px"
            src="/free3x3.svg"
            alt="Free 3x3 NFT"
          />
          <Text fontWeight="semibold" mb={2}>
            Thanks, {name}
          </Text>
          <Text color="blackAlpha.700">
            As you've come all this way and even connected your wallet, it's
            only right to give you something in return. You can mint one of my
            3x3 generated NFTs for free.
          </Text>
          <Button
            _hover={{ bg: 'blackAlpha.900' }}
            bg="black"
            color="white"
            fontWeight="normal"
            textTransform="uppercase"
            fontSize="sm"
            borderRadius="lg"
            py={6}
            mt={4}
            mb={2}
          >
            Mint for free
          </Button>
          <Link opacity={0.7} href="https://etherscan.io/" fontSize="12px">
            view contract
          </Link>
        </ModalContent>
      </Modal>
    </>
  );
};
