import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import capitalize from "lodash/capitalize";
import Link from "next/link";
import * as React from "react";

import { calcReadTime } from "utils/calc-read-time";

export default function BlogPostCard({ post }) {
  const readableDate = format(parseISO(post.data.date), "MMMM dd, yyyy");

  return (
    <LinkBox
      as="article"
      cursor="pointer"
      position="relative"
      rounded="md"
      pb="3"
      _hover={{
        textDecoration: "underline",
      }}
    >
      {post.data.image && (
        <Image borderRadius="xl" src={post.data.image} alt="" mb="4" />
      )}
      <Text
        as="time"
        dateTime={post.data.date}
        fontSize="sm"
        color="gray.500"
        fontWeight="medium"
        mb="2"
      >
        {readableDate}
      </Text>
      <VStack align="flex-start">
        <Heading as="h3" size="md">
          <Link href={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`} passHref>
            <LinkOverlay>{post.data.title}</LinkOverlay>
          </Link>
        </Heading>
        <Text mb="3" noOfLines={2}>
          {post.data.description}
        </Text>
        <Box fontSize="sm" color="gray.500" pt="2">
          <Text as="span" mb="3">
            {post.data.tags.map((t) => capitalize(t)).join(",")}
          </Text>
          <Box
            bg="gray.100"
            fontWeight="semibold"
            px="2"
            py="1"
            ml="5"
            as="span"
            rounded="base"
          >
            {calcReadTime(post.content)} min read
          </Box>
        </Box>
      </VStack>
    </LinkBox>
  );
}
