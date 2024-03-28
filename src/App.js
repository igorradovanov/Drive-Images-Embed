import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  useClipboard,
  Flex,
  Center,
  VStack,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import FAQModal from "./components/FAQModal";
import EmbedCodes from "./components/EmbedCodes";
import GithubCorner from "react-github-corner";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";

/**
 * The main component of the application.
 * Renders the Google Drive photo embedding functionality.
 *
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  const [link, setLink] = useState("");
  const [id, setId] = useState("");
  const toast = useToast();
  const { onCopy: onCopyHTML } = useClipboard(
    `<img src="https://lh3.googleusercontent.com/d/${id}">`
  );
  const { onCopy: onCopyMarkdown } = useClipboard(
    `![Image](https://lh3.googleusercontent.com/d/${id})`
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const extractId = (url) => {
    const regex = /https:\/\/drive\.google\.com\/file\/d\/([-\w]+)/;
    const match = url.match(regex);
    return match ? match[1] : "";
  };

  const generateEmbedCodes = () => {
    const extractedId = extractId(link);
    setId(extractedId);
    if (!extractedId) {
      toast({
        title: "Invalid Google Drive link!",
        position: "bottom-right",
        status: "error",
        isClosable: true,
        duration: 3000,
      });
    } else {
      toast({
        title: "Embed codes generated!",
        position: "bottom-right",
        status: "success",
        isClosable: true,
        duration: 3000,
      });
    }
  };

  return (
    <Center h="100vh" w="100vw" padding={5}>
      <GithubCorner href="https://github.com/igorradovanov/Drive-Images-Embed" />
      <VStack spacing={4} w={[300, 400, 500]}>
        <ToggleThemeButton />
        <Text fontSize="xl">Embed Google Drive Photos Easily</Text>
        <Text fontSize="md">
          Paste your Google Drive link below to generate embed codes.
        </Text>
        <Button onClick={onOpen}>Open FAQ</Button>
        <FAQModal isOpen={isOpen} onClose={onClose} />
        <Flex>
          <Input
            placeholder="Google Drive Link"
            value={link}
            mr={2}
            onChange={(e) => setLink(e.target.value)}
            width={["200px", "300px", "400px"]}
          />
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="blue"
            onClick={generateEmbedCodes}
          >
            Generate
          </Button>
        </Flex>
        {id && (
          <EmbedCodes
            id={id}
            onCopyHTML={onCopyHTML}
            onCopyMarkdown={onCopyMarkdown}
          />
        )}
        <Box position="fixed" bottom="0" width="100%" textAlign="center" pb={4}>
          <Badge
            colorScheme="gray"
            variant="solid"
            px={4}
            py={1}
            borderRadius="full"
            fontSize={8}
          >
            API Coming Soon
          </Badge>
          <Text fontSize="12px">
            ❤️ This project is open source. Submit your ideas on{" "}
            <a href="https://github.com/igorradovanov/Drive-Images-Embed">
              <u>GitHub</u>
            </a>
            !
          </Text>
        </Box>
      </VStack>
    </Center>
  );
}

export default App;
