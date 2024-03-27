import React from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

function EmbedCodes({ id, onCopyHTML, onCopyMarkdown }) {
  return (
    <VStack spacing={2}>
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
