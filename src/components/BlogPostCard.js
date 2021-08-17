import {
  Box,
  Center,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  Image,
  useColorModeValue,
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
      role={"group"}
    >
      <Center>
        <Box
          p={6}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"lg"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          _groupHover={{
            bg: `${useColorModeValue("purple.100", "purple.900")}`,
            transition: "0.2s ease-in",
          }}
        >
          {post.data.image && (
            <Box
              rounded={"lg"}
              mt={-12}
              mb={12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${post.data.image})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                w="100%"
                fit={"cover"}
                src={post.data.image}
                _groupHover={{
                  transform: "translateY(-4px)",
                  transition: "0.2s ease-in",
                }}
              />
            </Box>
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
            <Heading as="h3" zIndex={10} size="md">
              <Link
                href={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
                passHref
              >
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
        </Box>
      </Center>
    </LinkBox>
  );
}
