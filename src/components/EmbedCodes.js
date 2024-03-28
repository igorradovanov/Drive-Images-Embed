import React from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

/**
 * Renders the embed codes for a given ID.
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the image.
 * @param {Function} props.onCopyHTML - The function to call when copying HTML.
 * @param {Function} props.onCopyMarkdown - The function to call when copying Markdown.
 * @returns {JSX.Element} The rendered component.
 */
function EmbedCodes({ id, onCopyHTML, onCopyMarkdown }) {
  return (
    <VStack spacing={2} width={["200px", "300px", "1200px"]}>
      <Box>
        <Text as="code">
          &lt;img src=&quot;https://lh3.googleusercontent.com/d/{id}&quot;&gt;
        </Text>
        <Button onClick={() => onCopyHTML()} ml={2}>
          Copy HTML
        </Button>
      </Box>
      <Box>
        <Text as="code">
          ![Image](https://lh3.googleusercontent.com/d/{id})
        </Text>
        <Button onClick={() => onCopyMarkdown()} ml={2}>
          Copy Markdown
        </Button>
      </Box>
    </VStack>
  );
}

export default EmbedCodes;
