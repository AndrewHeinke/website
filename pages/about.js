import { Container, Heading, Text, WrapItem, Box } from "@chakra-ui/react";
import Image from "components/Image";

function About() {
  return (
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
      <Text fontSize="lg" maxW="lg">
        Andrew Heinke is a web developer currently living in Austin Texas.
        JavaScript is his language of choice writing React applications and
        developing components at USAA as part of the Design Language Systems
        team.
      </Text>
    </Container>
  );
}

export default About;
