import React, { useState, useRef } from "react";
import styles from "./Header.module.scss";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import {
  IconButton,
  Container,
  Flex,
  Box,
  Spacer,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function Header() {
  const [display, setDisplay] = useState(false);
  const toggleMenu = () => {
    setDisplay((prevState) => !prevState);
  };
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const menuBG = useColorModeValue("gray.100", "gray.900");

  return (
    <Box as="nav" my="2">
      <Container maxW="container.xl">
        <Flex>
          <Box>
            <Link href="/" passHref>
              <IconButton
                as="a"
                variant="ghost"
                aria-label="Home"
                onClick={() => setDisplay(false)}
              >
                <svg
                  className={styles["nav-logo"]}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 242.41 323.21"
                >
                  <path
                    fill="currentColor"
                    d="M161.6 80.8v80.8H80.8V80.8H0v242.41h80.8v-80.8h80.8v80.8h80.81V80.8H161.6zM80.8 0h80.8v80.8H80.8z"
                  />
                </svg>
              </IconButton>
            </Link>
          </Box>
          <Spacer />
          <Flex align="center">
            <Box display={["none", "none", "flex", "flex"]}>
              <ActiveLink activeClassName="active" href="/about" passHref>
                <Button as="a" variant="ghost" aria-label="About">
                  About
                </Button>
              </ActiveLink>
              <ActiveLink activeClassName="active" href="/resume" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Resume"
                  ml={{ base: "0", md: "1" }}
                >
                  Resume
                </Button>
              </ActiveLink>
              <ActiveLink activeClassName="active" href="/portfolio" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Portfolio"
                  ml={{ base: "0", md: "1" }}
                >
                  Portfolio
                </Button>
              </ActiveLink>
              <ActiveLink activeClassName="active" href="/contact" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Contact"
                  ml={{ base: "0", md: "1" }}
                >
                  Contact
                </Button>
              </ActiveLink>
            </Box>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "1" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <IconButton
              size="md"
              fontSize="lg"
              aria-label="Open Menu"
              zIndex="30"
              variant="ghost"
              color="current"
              ml="2"
              display={["flex", "flex", "none", "none"]}
              onClick={toggleMenu}
              icon={display ? <FaTimes /> : <FaBars />}
            />
          </Flex>

          {/* mobile menu */}
          {display && (
            <Flex
              w="100vw"
              zIndex="20"
              h="100vh"
              pos="fixed"
              top="14"
              left="0"
              p="4"
              overflowY="auto"
              flexDir="column"
              bg={menuBG}
              display={["flex", "flex", "none", "none"]}
            >
              <ActiveLink activeClassName="active" href="/about" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="About"
                  width="100%"
                  onClick={toggleMenu}
                >
                  About
                </Button>
              </ActiveLink>
              <ActiveLink activeClassName="active" href="/resume" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Resume"
                  width="100%"
                  onClick={toggleMenu}
                >
                  Resume
                </Button>
              </ActiveLink>
              <ActiveLink activeClassName="active" href="/portfolio" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Portfolio"
                  width="100%"
                  onClick={toggleMenu}
                >
                  Portfolio
                </Button>
              </ActiveLink>
              <ActiveLink activeClassName="active" href="/contact" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Contact"
                  width="100%"
                  onClick={toggleMenu}
                >
                  Contact
                </Button>
              </ActiveLink>
            </Flex>
          )}
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
