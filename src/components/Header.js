import React, { useState, useRef } from "react";
import styles from "./Header.module.scss";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import {
  Icon,
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
  const logoFill = useColorModeValue("gray.300", "gray.600");

  const NavLogo = (props) => (
    <Icon
      viewBox="0 0 242.41 323.21"
      w={8}
      h={8}
      stroke="currentColor"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M161.6 80.8v80.8H80.8V80.8H0v242.41h80.8v-80.8h80.8v80.8h80.81V80.8H161.6zM80.8 0h80.8v80.8H80.8z"
      />
    </Icon>
  );

  const MenuIcon = (props) => (
    <Icon
      viewBox="0 0 24 24"
      w={6}
      h={6}
      stroke="currentColor"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </Icon>
  );

  const CloseIcon = (props) => (
    <Icon
      viewBox="0 0 24 24"
      w={6}
      h={6}
      stroke="currentColor"
      fill="none"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </Icon>
  );

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
                color={logoFill}
                _hover={{
                  background:
                    "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)",
                  color: "white",
                }}
                onClick={() => setDisplay(false)}
              >
                <NavLogo />
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
              icon={display ? <CloseIcon /> : <MenuIcon />}
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
