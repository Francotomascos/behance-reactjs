import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src="/assets/behance-logo.png"
              width="auto"
              height="80"
              className="d-inline-block align-top"
              alt="behance logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about-us">About us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <div>
            <img src='/assets/icons/cart.svg' height={32} width='auto' alt='cart icon' />
            <span>(0)</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;