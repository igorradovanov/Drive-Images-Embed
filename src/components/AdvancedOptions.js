import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function AdvancedOptions({ setAlt, setHeight, setWidth }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleAltChange = (event) => {
    setAlt(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  return (
    <>
      <Button
        variant={"outline"}
        leftIcon={<AddIcon />}
        ref={btnRef}
        colorScheme="blue"
        onClick={onOpen}
      >
        Advanced
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Additional options</DrawerHeader>

          <DrawerBody>
            <FormControl>
              <FormLabel>Alt description</FormLabel>
              <Input
                mt={2}
                mb={2}
                placeholder="Example: Masterpiece"
                onChange={handleAltChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image Height</FormLabel>
              <Input
                mt={2}
                mb={2}
                type="number"
                placeholder="Example: 500"
                onChange={handleHeightChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image Width</FormLabel>
              <Input
                mt={2}
                mb={2}
                type="number"
                placeholder="Example: 250"
                onChange={handleWidthChange}
              />
            </FormControl>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Apply
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AdvancedOptions;
