import { Box } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import React from "react";

function Basic({ codeString, language, ...props }) {
  return (
    <Highlight
      {...defaultProps}
      {...props}
      code={codeString}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <Box as="pre" bg="#282a36" className="code-block">
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Box>
      )}
    </Highlight>
  );
}

export default Basic;
