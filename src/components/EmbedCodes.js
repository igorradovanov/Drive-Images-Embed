import React from "react";
import { Box, Button, Text, VStack, useClipboard } from "@chakra-ui/react";

/**
 * Renders the embed codes for a given ID.
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the image.
 * @param {Function} props.onCopyHTML - The function to call when copying HTML.
 * @param {Function} props.onCopyMarkdown - The function to call when copying Markdown.
 * @returns {JSX.Element} The rendered component.
 */
function EmbedCodes({ id, alt, height, width }) {
  const { onCopy: onCopyHTML } = useClipboard(
    `<img src="https://lh3.googleusercontent.com/d/${id}"${
      alt ? ` alt="${alt}"` : ""
    }${height ? ` height="${height}"` : ""}${width ? ` width="${width}"` : ""}>`
  );
  const { onCopy: onCopyMarkdown } = useClipboard(
    `!${alt ? `[${alt}]` : "[Image]"}(https://lh.googleusercontent.com/d/${id})`
  );
  return (
    <VStack spacing={2} width={["200px", "300px", "1200px"]}>
      <Box>
        <Text as="code" data-testid="output">
          &lt;img src=&quot;https://lh3.googleusercontent.com/d/{id}&quot;
          {alt && ` alt="${alt}"`}
          {height && ` height="${height}"`}
          {width && ` width="${width}"`}&gt;
        </Text>
        <Button onClick={() => onCopyHTML()} ml={2}>
          Copy HTML
        </Button>
      </Box>
      <Box>
        <Text as="code">
          !{alt ? `[${alt}]` : "[Image]"}(https://lh3.googleusercontent.com/d/
          {id})
        </Text>
        <Button onClick={() => onCopyMarkdown()} ml={2}>
          Copy Markdown
        </Button>
      </Box>
    </VStack>
  );
}

export default EmbedCodes;
