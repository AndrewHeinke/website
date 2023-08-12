import React from "react";
import theme from "prism-react-renderer/themes/dracula";
import { Box } from "@chakra-ui/react";
import CodeContainer from "./code-container";
import CopyButton from "./copy-button";
import Highlight from "./highlight";

function CodeBlock(props) {
  const { className, children } = props;

  const language = className?.replace(/language-/, "");
  const rawCode = children.trim();

  return (
    <Box position="relative" zIndex="0">
      <CodeContainer overflow="hidden">
        <Highlight
          overflowX="auto"
          codeString={rawCode}
          language={language}
          theme={theme}
        />
      </CodeContainer>
      <CopyButton top="4" code={rawCode} />
    </Box>
  );
}

export default CodeBlock;
