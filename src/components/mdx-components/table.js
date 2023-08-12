import * as React from "react";
import { chakra, useColorModeValue } from "@chakra-ui/react";

export const Table = (props) => (
  <chakra.div overflowX="auto" my="4">
    <chakra.table textAlign="left" width="full" {...props} />
  </chakra.div>
);

export const THead = (props) => (
  <chakra.th
    bg={useColorModeValue("gray.50", "whiteAlpha.100")}
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
);

export const TData = (props) => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);
