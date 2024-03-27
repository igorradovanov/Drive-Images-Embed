import React from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import faqs from "./faqs.json";

/**
 * Renders a modal component displaying frequently asked questions.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Indicates whether the modal is open or closed.
 * @param {Function} props.onClose - The function to be called when the modal is closed.
 * @returns {JSX.Element} The FAQModal component.
 */
function FAQModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>FAQ</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Accordion allowMultiple>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <strong>{faq.question}</strong>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>{faq.answer}</p>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FAQModal;
