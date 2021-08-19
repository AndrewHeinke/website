import {
  Box,
  Center,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  Image,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
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
      display="flex"
      pb="3"
      mb="4"
      role={"group"}
    >
      <VStack
        p={6}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"lg"}
        rounded={"lg"}
        pos={"relative"}
        textAlign="left"
        align="start"
        zIndex={1}
        borderWidth="1px"
        _groupHover={{
          bg: `${useColorModeValue("purple.100", "purple.900")}`,
          transition: "0.2s ease-in",
        }}
      >
        {post.data.image && (
          <Image
            rounded={"lg"}
            mt={-12}
            mb={4}
            height={"230px"}
            w="100%"
            fit={"cover"}
            src={post.data.image}
            transition="0.3s ease"
            _groupHover={{
              transform: "scale(1.05);",
            }}
          />
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
        <Heading as="h3" zIndex={10} size="md">
          <Link href={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`} passHref>
            <LinkOverlay>{post.data.title}</LinkOverlay>
          </Link>
        </Heading>
        <Text mb="3" noOfLines={2}>
          {post.data.description}
        </Text>
        <Spacer />
        <Box
          fontSize="sm"
          bg="gray.100"
          color="gray.500"
          fontWeight="semibold"
          px="2"
          py="1"
          as="span"
          rounded="base"
        >
          {calcReadTime(post.content)} min read
        </Box>
      </VStack>
    </LinkBox>
  );
}
