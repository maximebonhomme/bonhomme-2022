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
          <Text fontWeight="semibold" mb={2}>
            Thanks, {name}
          </Text>
          <Text color="blackAlpha.700">
            As you've come all this way and even connected your wallet, it's
            only right to give you something in return. I've added your ENS to
            friends list for my next project, Tamiko.
          </Text>
          <Button mt={4} mb={2}>
            Mint
          </Button>
          <Link fontSize="12px">view contract on etherscan</Link>
        </ModalContent>
      </Modal>
    </>
  );
};
