import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const routes = [
    {
      id: 0,
      name: 'Home',
      path: '/',
    },
    {
      id: 1,
      name: 'About',
      path: '/about',
    },
    {
      id: 2,
      name: 'Contact',
      path: '/contact',
    },
    {
      id: 3,
      name: 'Shop',
      path: '/shop',
    },
  ];
  return (
    <Navbar expand="lg" className="py-3 bg-transparent">
      <Container>
        <Navbar.Brand>
            <NavLink to={'/'} className="nav-link">
              <img
                src="/assets/behance-logo.png"
                width="auto"
                height="32"
                className="d-inline-block align-top"
                alt="behance logo"
              />
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {routes.map((route) => (
              <NavLink key={route.id} to={route.path} className="nav-link">
                {route.name}
              </NavLink>
            ))}
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;