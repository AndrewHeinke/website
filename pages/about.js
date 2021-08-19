import { Container, Heading, Text, AspectRatio } from "@chakra-ui/react";

function About() {
  return (
    <Container mt="12">
      <Heading mb="4">About</Heading>
      <Text fontSize="lg" maxW="lg">
        Andrew Heinke is a web developer currently living in Austin Texas.
        JavaScript is his language of choice writing React applications and
        developing components at USAA as part of the Design Language Systems
        team.
      </Text>
      <AspectRatio maxW="560px" ratio={16 / 9} my="4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/o5MARPLbJGg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  );
}

export default About;
