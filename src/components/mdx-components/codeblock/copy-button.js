import { Button, ButtonProps, useClipboard } from "@chakra-ui/react";
import React from "react";

function CopyButton({ code, ...props }) {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <Button
      size="sm"
      position="absolute"
      textTransform="uppercase"
      colorScheme="purple"
      fontSize="xs"
      height="24px"
      top={0}
      zIndex="1"
      right={["0px", "0px", "-1.5rem", "-1.5rem"]}
      {...props}
      onClick={onCopy}
    >
      {hasCopied ? "copied" : "copy"}
    </Button>
  );
}

export default CopyButton;
