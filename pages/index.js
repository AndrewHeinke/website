import { Heading, Text } from "@chakra-ui/react";
import Banner from "components/Banner";

export default function Home() {
  return (
    <>
      <Banner>
        <Heading
          as="h1"
          fontSize={["2rem", "3rem", "4rem", "4rem"]}
          color="gray.100"
          maxW="600px"
          mx="auto"
        >
          Hello, my name is Andrew Heinke
        </Heading>
        <Text fontSize="xl" color="gray.100" mt="8">
          You are viewing my personal website where I showcase my latest
          projects.
        </Text>
      </Banner>
    </>
  );
}
