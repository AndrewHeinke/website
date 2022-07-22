import Head from "next/head";
import {
  Container,
  Heading,
  Text,
  WrapItem,
  Box,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "components/Image";

function About() {
  const AboutLink = (props) => {
    const { children, notExternal, ...restOfProps } = props;
    return (
      <Link
        color={useColorModeValue("purple.600", "purple.300")}
        isExternal={notExternal ? false : true}
        lineHeight="1.5"
        fontSize="lg"
        _hover={{
          textDecoration: "underline",
        }}
        {...restOfProps}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      <Head>
        <title>About - Andrew Heinke</title>
        <meta
          name="description"
          content="Andrew Heinke is a web developer living in Austin, Texas. Working in
        React, TypeScript and NextJS."
        ></meta>
      </Head>
      <Container mt="12" maxW="container.md">
        <Heading mb="12" textAlign="center">
          About Me
        </Heading>
        <Box
          position="relative"
          borderWidth="1px"
          rounded="lg"
          pl={["5", "125px", "200px", "200px"]}
          pt="5"
          pr={["50px", "5", "5", "5"]}
          pb="5"
          mb="12"
        >
          <WrapItem
            w={["75px", "100px", "175px", "200px"]}
            position="absolute"
            bottom="0"
            right={["-.5rem", null, null, null]}
            left={[null, "-.5rem", "-1.5rem", "-2.5rem"]}
          >
            <Image src="/images/unicorn.png" alt="" />
          </WrapItem>

          <Heading
            as="h2"
            fontSize={["1rem", "1.25rem", "1.75rem", "2rem"]}
            fontWeight="400"
            mb="2px"
          >
            A developer with a mind for design.
            <br />I have a wide array of skills to develop amazing experiences.
          </Heading>
        </Box>
        <Text fontSize="lg" maxW="lg" mb={3}>
          Andrew Heinke is a web developer living in Austin, Texas. Working in
          React, TypeScript and NextJS. Currently open to new opportunities.
        </Text>
        <Text fontSize="lg" maxW="lg">
          Building projects on the Solana{" "}
          <img
            style={{
              display: "inline-block",
              width: "1em",
              verticalAlign: "middle",
            }}
            src="https://abs.twimg.com/hashflags/Solana_Dec_2021/Solana_Dec_2021.png"
          />{" "}
          Blockchain
        </Text>
        <Text>
          <AboutLink href="https://www.saibagang.com/">Saiba Gang</AboutLink> /{" "}
          <AboutLink href="https://www.musicbros.io/">Music Bros NFT</AboutLink>
        </Text>
      </Container>
    </>
  );
}

export default About;
