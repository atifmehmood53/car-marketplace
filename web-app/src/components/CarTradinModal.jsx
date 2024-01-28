// CarTradingModal.js

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import TradinForm from "./TradinForm";

const CarTradingModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Button onClick={onOpen} w="100%" size="lg" colorScheme="gray">
        Tradin Your Car
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Car Trading Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TradinForm onSubmitSuccess={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CarTradingModal;
