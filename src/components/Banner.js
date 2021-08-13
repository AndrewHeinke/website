import styles from "./Banner.module.scss";
import { Box } from "@chakra-ui/react";

function Banner({ children }) {
  return (
    <Box
      h={["300px", "300px", "350px", "400px"]}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      className={styles.banner}
    >
      {children}
    </Box>
  );
}

export default Banner;
