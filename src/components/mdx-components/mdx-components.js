import * as Chakra from "@chakra-ui/react";
import { Heading, Text, Link } from "@chakra-ui/react";
import { InlineCode } from "components/mdx-components/inline-code";
import { Pre } from "components/mdx-components/pre";
import { Table, TData, THead } from "components/mdx-components/table";
import * as React from "react";

const { Alert, Box, chakra, Kbd } = Chakra;
export const MDXComponents = {
  ...Chakra,
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Heading as="h4" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  inlineCode: InlineCode,
  pre: Pre,
  kbd: Kbd,
  br: ({ reset, ...props }) => (
    <Box
      as={reset ? "br" : undefined}
      height={reset ? undefined : "24px"}
      {...props}
    />
  ),
  table: Table,
  th: THead,
  td: TData,
  a: (props) => <Link as="a" {...props} />,
  p: (props) => <Text fontSize="xl" {...props} />,
  ul: (props) => <chakra.ul apply="mdx.ul" {...props} />,
  ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props) => <chakra.li pb="4px" {...props} />,
  blockquote: (props) => (
    <Alert
      mt="4"
      role="none"
      status="warning"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  ),
};
