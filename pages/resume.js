import Head from "next/head";
import {
  Container,
  Text,
  Heading,
  Box,
  VStack,
  Stack,
  Link,
  Icon,
  Progress,
  WrapItem,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "components/Image";

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
          color={useColorModeValue("purple.600", "purple.300")}
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
        spacing={[0, 0, 8, 8]}
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
    <Text
      {...props}
      minW="250px"
      fontSize={[".875rem", ".875rem", "inherit", "inherit"]}
      color={useColorModeValue("gray.500", "gray.300")}
    />
  );

  const ResumeLocation = (props) => (
    <Text
      {...props}
      fontSize={[".875rem", ".875rem", "inherit", "inherit"]}
      color={useColorModeValue("gray.500", "gray.300")}
    />
  );

  return (
    <>
      <Head>
        <title>Resume - Andrew Heinke</title>
        <meta
          name="description"
          content="Resume, Andrew Heinke, Senior Software Engineer."
        ></meta>
      </Head>
      <Container mt="12" fontFamily="Fira Code" fontWeight="500">
        <VisuallyHidden>
          <Heading as="h1">Andrew Heinke Resume</Heading>
        </VisuallyHidden>

        <Stack direction="row" fontFamily="Inter" spacing="4" mb="12">
          <WrapItem
            borderWidth="6px"
            borderRadius="full"
            overflow="hidden"
            bg="default"
            w="100px"
            h="100px"
          >
            <Image
              src="/images/andrew.jpg"
              width="100px"
              height="100px"
              alt="Andrew Heinke"
            />
          </WrapItem>

          <Stack spacing="0" direction="column" justify="center">
            <Heading
              as="h2"
              fontSize="1.75rem"
              fontWeight="400"
              lineHeight="1"
              mb="2px"
            >
              Andrew Heinke
            </Heading>
            <Text color={useColorModeValue("gray.500", "gray.400")}>
              Front-end Engineer in Austin, Texas
            </Text>
            <Link
              color={useColorModeValue("gray.400", "gray.600")}
              fontSize=".875rem"
              href="/"
            >
              andrewheinke.com
            </Link>
          </Stack>
        </Stack>
        <VStack spacing={12} align="stretch">
          <ResumeSection title="About">
            <Text
              fontSize="md"
              fontFamily="Inter"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Andrew Heinke is a senior front-end engineer with a strong focus
              on interfaces and experiences working remotely from Austin, Texas.
            </Text>
          </ResumeSection>
          <ResumeSection title="Work Experience">
            <ResumeRow>
              <ResumeDate>Aug 2021 – Apr 2022</ResumeDate>
              <Box>
                <ResumeLink href="https://mark43.com/">
                  Senior Software Engineer at Mark43
                </ResumeLink>
                <ResumeLocation>Remote</ResumeLocation>
              </Box>
            </ResumeRow>
            <ResumeRow>
              <ResumeDate>Apr 2017 - Aug 2021</ResumeDate>
              <Box>
                <ResumeLink href="https://www.usaa.com/">
                  Software Engineer at USAA
                </ResumeLink>
                <ResumeLocation>Austin, Texas</ResumeLocation>
              </Box>
            </ResumeRow>
            <ResumeRow>
              <ResumeDate>Oct 2015 - Apr 2017</ResumeDate>
              <Box>
                <ResumeLink href="https://www.kasasa.com/">
                  UI Designer at Kasasa
                </ResumeLink>
                <ResumeLocation>Austin, Texas</ResumeLocation>
              </Box>
            </ResumeRow>
            <ResumeRow>
              <ResumeDate>Jan 2015 - Oct 2015</ResumeDate>
              <Box>
                <ResumeLink href="https://www.crunchbase.com/organization/mosak-advertising-insights">
                  Junior Developer at MOSAK
                </ResumeLink>
                <ResumeLocation>Austin, Texas</ResumeLocation>
              </Box>
            </ResumeRow>
          </ResumeSection>
          <ResumeSection title="Education">
            <ResumeRow>
              <ResumeDate>2016</ResumeDate>
              <Box>
                <ResumeLink href="https://www.utexas.edu/">
                  The University of Texas at Austin
                </ResumeLink>
                <ResumeLocation>Full Stack Coding Bootcamp</ResumeLocation>
              </Box>
            </ResumeRow>
            <ResumeRow>
              <ResumeDate>2011 – 2015</ResumeDate>
              <Box>
                <ResumeLink href="https://www.utexas.edu/">
                  The University of Texas at Austin
                </ResumeLink>
                <ResumeLocation>B.S. Advertising</ResumeLocation>
              </Box>
            </ResumeRow>
          </ResumeSection>
          <ResumeSection title="Skills">
            <Stack spacing={5}>
              <Box>
                <Text mb="1">HTML5 &amp; CSS</Text>
                <Progress value={100} size="xs" colorScheme="green" />
              </Box>
              <Box>
                <Text mb="1">JavaScript</Text>
                <Progress value={90} size="xs" colorScheme="green" />
              </Box>
              <Box>
                <Text mb="1">React</Text>
                <Progress value={90} size="xs" colorScheme="green" />
              </Box>
              <Box>
                <Text mb="1">Accessibility</Text>
                <Progress value={95} size="xs" colorScheme="green" />
              </Box>
              <Box>
                <Text mb="1">Adobe Creative Suite</Text>
                <Progress value={100} size="xs" colorScheme="green" />
              </Box>
              <Box>
                <Text mb="1">Singing</Text>
                <Progress value={40} size="xs" colorScheme="yellow" />
              </Box>
              <Box>
                <Text mb="1">Basketball</Text>
                <Progress value={10} size="xs" colorScheme="red" />
              </Box>
            </Stack>
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
    </>
  );
}

export default Resume;
