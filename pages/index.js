import {
  Heading,
  Container,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <Container mt="12" maxW="container.xl">
      <Heading
        as="h1"
        fontSize={["2rem", "3rem", "4rem", "4rem"]}
        color={useColorModeValue("gray.600", "gray.100")}
      >
        Hi there <span className="wave">👋🏻</span>{" "}
        <span style={{ whiteSpace: "nowrap" }}>I'm Andrew 👨🏻‍💻</span>
      </Heading>
      <Heading
        as="h2"
        fontSize={["2rem", "2rem", "2.5rem", "3.5rem"]}
        color="gray.400"
      >
        I'm a frontend software engineer based in the Austin area.
      </Heading>
      <Text fontSize="2xl" mt={4} maxW="1000px">
        I specialize in React and JavaScript with a strong focus on interfaces
        and experiences. I have over 10 years of experience working on awesome
        projects across a wide variety of industries from FinTech to Crypto.
      </Text>
      <Text fontSize="2xl" mt={4} maxW="1000px">
        Check out my{" "}
        <NextLink href="/portfolio" passHref>
          <Link
            color={useColorModeValue("purple.600", "purple.300")}
            lineHeight="1.5"
            _hover={{
              textDecoration: "underline",
            }}
          >
            portfolio
          </Link>
        </NextLink>{" "}
        to see some of my past projects or connect with me over{" "}
        <Link
          color={useColorModeValue("purple.600", "purple.300")}
          lineHeight="1.5"
          _hover={{
            textDecoration: "underline",
          }}
          href="mailto:andrew.j.heinke@gmail.com"
        >
          email
        </Link>{" "}
        to chat about my latest professional projects.
      </Text>
    </Container>
  );
}
