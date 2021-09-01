import {
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  Image,
  Box,
  Icon,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

export default function ProjectCard({ image, title, description, link }) {
  const LinkIcon = (props) => (
    <Icon
      viewBox="0 0 12 12"
      w={5}
      h={5}
      fill="none"
      verticalAlign="baseline"
      {...props}
    >
      <path
        d="M3.5 3a.5.5 0 000 1V3zm5 .5H9a.5.5 0 00-.5-.5v.5zm-.5 5a.5.5 0 001 0H8zm-5.354.146a.5.5 0 10.708.708l-.708-.708zM3.5 4h5V3h-5v1zM8 3.5v5h1v-5H8zm.146-.354l-5.5 5.5.708.708 5.5-5.5-.708-.708z"
        fill="currentColor"
      />
    </Icon>
  );

  return (
    <LinkBox
      cursor="pointer"
      position="relative"
      rounded="md"
      display="flex"
      pb="3"
      mb="4"
      role={"group"}
    >
      <VStack
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
        <Image
          rounded={"md"}
          height={"auto"}
          borderBottomRightRadius="0"
          borderBottomLeftRadius="0"
          priority="true"
          w="100%"
          src={image}
        />
        <Box p={6}>
          <Heading as="h3" zIndex={10} size="md" mb="2">
            <Link href={link} passHref isExternal>
              <LinkOverlay>
                {title} <LinkIcon />
              </LinkOverlay>
            </Link>
          </Heading>
          <Text mb="3">{description}</Text>
        </Box>
      </VStack>
    </LinkBox>
  );
}
