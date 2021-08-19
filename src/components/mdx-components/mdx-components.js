import * as Chakra from "@chakra-ui/react";
import { Heading, Text, Link } from "@chakra-ui/react";
import { InlineCode } from "components/mdx-components/inline-code";
import { Pre } from "components/mdx-components/pre";
import { VideoEmbed } from "components/mdx-components/video-embed";
import { Table, TData, THead } from "components/mdx-components/table";
import CodeBlock from "./codeblock/codeblock";
import * as React from "react";

const { Alert, Box, chakra, Kbd } = Chakra;
export const MDXComponents = {
  ...Chakra,
  VideoEmbed,
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Heading as="h4" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  inlineCode: InlineCode,
  code: CodeBlock,
  kbd: Kbd,
  pre: Pre,
  br: ({ reset, ...props }) => (
    <Box
      as={reset ? "br" : undefined}
      height={reset ? undefined : "24px"}
      {...props}
    />
  ),
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
  table: Table,
  th: THead,
  td: TData,
  a: (props) => <Link as="a" {...props} />,
  p: (props) => <Text {...props} />,
  li: (props) => <chakra.li pb="4px" {...props} />,
};
