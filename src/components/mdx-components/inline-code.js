import React from "react";
import { chakra, useColorModeValue } from "@chakra-ui/react";

export const InlineCode = (props) => (
  <chakra.code
    apply="mdx.code"
    color={useColorModeValue("purple.500", "purple.200")}
    bgColor={useColorModeValue("purple.50", "purple.900")}
    rounded="md"
    {...props}
  />
);
