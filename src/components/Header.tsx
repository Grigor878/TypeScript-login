import { SyntheticEvent } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  firstName: string;
  setFirstName: (firstName: string) => void;
}

const Header = ({ firstName, setFirstName }: Props) => {
  const handleLogout = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("http://localhost:8001/api/logout", {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    setFirstName("");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {firstName ? (
              <Nav className="ms-auto">
                <Nav.Link onClick={handleLogout}>Log-Out</Nav.Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/signup">
                  Sign-Up
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Log-In
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
