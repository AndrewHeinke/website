import styles from "./Footer.module.scss";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <Container>
        <p>footer content</p>
      </Container>
    </footer>
  );
}

export default Footer;
