import { Box, Container, Heading, VisuallyHidden } from "@chakra-ui/react";

function Contact() {
  return (
    <Container maxW="container.xl" mt="12">
      <Heading as="h1" mb="1em">
        <VisuallyHidden>Contact Andrew Heinke</VisuallyHidden>I like words,
        let's have a few.
      </Heading>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="6">
          <Box mt="1" as="p">
            <Box as="span" fontWeight="semibold">
              Email:
            </Box>{" "}
            andrew.j.heinke@gmail.com
          </Box>
          <Box mt="1" as="p">
            <Box as="span" fontWeight="semibold">
              Phone:
            </Box>{" "}
            210-882-0062
          </Box>
          <Box mt="1" as="p">
            <Box as="span" fontWeight="semibold">
              Location:
            </Box>{" "}
            Austin, Texas
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;
