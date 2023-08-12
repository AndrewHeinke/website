import React from "react";
import { Box } from "@chakra-ui/react";

function CodeContainer(props) {
  return (
    <Box
      rounded="8px"
      {...props}
      my="4"
      mx={["0px", "0px", "-3rem", "-3rem"]}
    />
  );
}

export default CodeContainer;
