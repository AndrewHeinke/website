import { Box } from "@chakra-ui/react";
import * as React from "react";

export const Pre = (props) => (
  <Box as="div" my="2em" overflow="auto" borderRadius="sm" {...props} />
);
