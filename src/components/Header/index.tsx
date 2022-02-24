import { Navbar, Container, Stack, Nav } from "react-bootstrap";

import "./index.css";

import Logo from "../../assets/logo.png";

const index = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Stack
          direction="horizontal"
          gap={5}
          className="d-flex justify-content-between w-100"
        >
          <div>
            <Navbar.Brand href="#home">
              <img className="header__logo" src={Logo} alt="" />
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Stack>
      </Container>
    </Navbar>
  );
};

export default index;
