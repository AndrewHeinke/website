import styles from "./Header.module.scss";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

function Header() {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");

  return (
    <nav>
      <div className="container">
        <Link href="/" passHref>
          <a>
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
          </a>
        </Link>
        <div>
          <ActiveLink activeClassName="active" href="/about" passHref>
            <a className="nav-link">About</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/resume" passHref>
            <a className="nav-link">Resume</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/portfolio" passHref>
            <a className="nav-link">Portfolio</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/contact" passHref>
            <a className="nav-link">Contact</a>
          </ActiveLink>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            ml={{ base: "0", md: "3" }}
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
