import {
  Container,
  Text,
  Heading,
  Box,
  VStack,
  HStack,
  Stack,
  Link,
  Icon,
} from "@chakra-ui/react";

function Resume() {
  const LinkIcon = (props) => (
    <Icon
      viewBox="0 0 12 12"
      w={4}
      h={4}
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

  const ResumeLink = (props) => {
    const { children, notExternal, ...restOfProps } = props;
    return (
      <Text>
        <Link
          color="purple.300"
          isExternal={notExternal ? false : true}
          lineHeight="1.5"
          _hover={{
            textDecoration: "underline",
          }}
          {...restOfProps}
        >
          {children}
          <LinkIcon ml="3px" />
        </Link>
      </Text>
    );
  };

  const ResumeRow = (props) => {
    return (
      <Stack
        direction={["column", "column", "row", "row"]}
        spacing={[2, 2, 8, 8]}
        align="start"
        {...props}
      />
    );
  };

  const ResumeSection = (props) => {
    const { children, title, ...restOfProps } = props;
    return (
      <Box {...restOfProps}>
        <Heading as="h3" size="md" mb="4">
          {title}
        </Heading>
        <VStack spacing={8} align="stretch">
          {children}
        </VStack>
      </Box>
    );
  };

  const ResumeDate = (props) => (
    <Text {...props} minW="125px" color="gray.300" />
  );

  return (
    <Container mt="12" fontFamily="Fira Code" fontWeight="500">
      <Heading mb="12">Resume</Heading>
      <VStack spacing={12} align="stretch">
        <ResumeSection title="Work Experience">
          <ResumeRow>
            <ResumeDate>2021 – Now</ResumeDate>
            <Box>
              <ResumeLink href="https://mark43.com/">
                Senior Front End Engineer at Mark43
              </ResumeLink>
              <Text color="gray.300">Remote</Text>
            </Box>
          </ResumeRow>
          <ResumeRow>
            <ResumeDate>2017 – 2021</ResumeDate>
            <Box>
              <ResumeLink href="https://www.usaa.com/">
                Software Engineer at USAA
              </ResumeLink>
              <Text color="gray.300">Austin, Texas</Text>
            </Box>
          </ResumeRow>
          <ResumeRow>
            <ResumeDate>2015 – 2017</ResumeDate>
            <Box>
              <ResumeLink href="https://www.kasasa.com/">
                UI Designer at Kasasa
              </ResumeLink>
              <Text color="gray.300">Austin, Texas</Text>
            </Box>
          </ResumeRow>
          <ResumeRow>
            <ResumeDate>2015</ResumeDate>
            <Box>
              <ResumeLink href="https://www.crunchbase.com/organization/mosak-advertising-insights">
                Junior Developer at MOSAK
              </ResumeLink>
              <Text color="gray.300">Austin, Texas</Text>
            </Box>
          </ResumeRow>
        </ResumeSection>
        <ResumeSection title="Education">
          <ResumeRow>
            <ResumeDate>2011 – 2015</ResumeDate>
            <Box>
              <ResumeLink href="https://www.utexas.edu/">
                The University of Texas at Austin
              </ResumeLink>
              <Text color="gray.300">B.S. Advertising</Text>
            </Box>
          </ResumeRow>
        </ResumeSection>
        <ResumeSection title="Contact">
          <ResumeRow>
            <ResumeDate>LinkedIn</ResumeDate>
            <Box>
              <ResumeLink href="https://www.linkedin.com/in/andrewheinke/">
                andrewheinke
              </ResumeLink>
            </Box>
          </ResumeRow>
          <ResumeRow>
            <ResumeDate>GitHub</ResumeDate>
            <Box>
              <ResumeLink href="https://github.com/AndrewHeinke">
                AndrewHeinke
              </ResumeLink>
            </Box>
          </ResumeRow>
          <ResumeRow>
            <ResumeDate>Instagram</ResumeDate>
            <Box>
              <ResumeLink href="https://www.instagram.com/andrewheinke/">
                andrewheinke
              </ResumeLink>
            </Box>
          </ResumeRow>
          <ResumeRow>
            <ResumeDate>Twitter</ResumeDate>
            <Box>
              <ResumeLink href="https://twitter.com/andrewheinke">
                andrewheinke
              </ResumeLink>
            </Box>
          </ResumeRow>
          <ResumeRow>
            <ResumeDate>Email</ResumeDate>
            <Box>
              <ResumeLink notExternal href="mailto:andrew.j.heinke@gmail.com">
                andrew.j.heinke@gmail.com
              </ResumeLink>
            </Box>
          </ResumeRow>
        </ResumeSection>
      </VStack>
    </Container>
  );
}

export default Resume;
