import styles from "./Footer.module.scss";
import { HeartIcon } from "./Icons";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className="container">
        <p className={styles["footer-text-flex"]}>Find me on the Internet:</p>
        <p className={styles["footer-text-flex"]}>
          Made with <HeartIcon className="heart" /> in Austin, TX. &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
