import styles from "./Footer.module.scss";
import { Container, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { HeartIcon } from "./Icons";

function Footer() {
  const footerBG = useColorModeValue("gray.100", "gray.900");
  return (
    <Flex as="footer" background={footerBG} className={styles["footer"]}>
      <Container maxW="container.xl">
        <Text className={styles["footer-text-flex"]}>
          Find me on the Internet 👨🏻‍💻
        </Text>
        <Text className={styles["footer-text-flex"]}>
          Made with <HeartIcon className="heart" /> in Austin, TX. &copy;{" "}
          {new Date().getFullYear()}
        </Text>
      </Container>
    </Flex>
  );
}

export default Footer;
