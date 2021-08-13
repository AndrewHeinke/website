import {
  Link as ChakraLink,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function NavLink({ to, ariaLabel, activeProps, children, _hover, ...props }) {
  const router = useRouter();
  const isActive = router.pathname === to;
  const navLinkBG = useColorModeValue("purple.50", "gray.900");

  if (isActive) {
    return (
      <Link href={to} passHref>
        <Button
          as="a"
          variant="ghost"
          bg={navLinkBG}
          {...props}
          {...activeProps}
          color="purple.500"
          aria-label={ariaLabel}
          ml={{ base: "0", md: "1" }}
        >
          {children}
        </Button>
      </Link>
    );
  }

  return (
    <Link href={to} passHref>
      <Button
        as="a"
        variant="ghost"
        {...props}
        aria-label={ariaLabel}
        ml={{ base: "0", md: "1" }}
      >
        {children}
      </Button>
    </Link>
  );
}

export default NavLink;
