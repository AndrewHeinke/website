import { Box, Container, Grid, Heading } from "@chakra-ui/react";

function Portfolio() {
  return (
    <Container maxW="container.xl" mt="12">
      <Heading mb="4">Portfolio</Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
        <Box w="100%" h="200px" bg="blue.500" />
        <Box w="100%" h="200px" bg="blue.500" />
        <Box w="100%" h="200px" bg="blue.500" />
        <Box w="100%" h="200px" bg="blue.500" />
        <Box w="100%" h="200px" bg="blue.500" />
        <Box w="100%" h="200px" bg="blue.500" />
        <Box w="100%" h="200px" bg="blue.500" />
        <Box w="100%" h="200px" bg="blue.500" />
        <Box w="100%" h="200px" bg="blue.500" />
        <Box w="100%" h="200px" bg="blue.500" />
        <Box w="100%" h="200px" bg="blue.500" />
        <Box w="100%" h="200px" bg="blue.500" />
      </Grid>
    </Container>
  );
}

export default Portfolio;
