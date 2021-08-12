import ActiveLink from "./ActiveLink";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "./Header.module.scss";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <ActiveLink activeClassName="active" href="/" passHref>
            <a>
              <svg
                className={styles["header-nav-logo"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 242.41 323.21"
              >
                <path
                  fill="currentColor"
                  d="M161.6 80.8v80.8H80.8V80.8H0v242.41h80.8v-80.8h80.8v80.8h80.81V80.8H161.6zM80.8 0h80.8v80.8H80.8z"
                />
              </svg>
            </a>
          </ActiveLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <ActiveLink activeClassName="active" href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/resume" passHref>
              <Nav.Link>Resume</Nav.Link>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/portfolio" passHref>
              <Nav.Link>Portfolio</Nav.Link>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/contact" passHref>
              <Nav.Link>Contact</Nav.Link>
            </ActiveLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
