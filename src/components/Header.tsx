import React, { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Cart from './Cart/Cart';
import { Link } from 'react-scroll';

function Header(): JSX.Element {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const location = useLocation();

  console.log(location);

  return (
    <>
      <Navbar className="p-3" style={{ backgroundColor: '#303030' }}>
        <Container>
          <NavLink className="text-decoration-none" to="/">
            <Navbar.Brand>
              <span style={{ color: 'white' }}>
                <h2>OBSD</h2>
              </span>
            </Navbar.Brand>
          </NavLink>
          {location.pathname === '/dashbord' ? (
            ''
          ) : (
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <span
                style={{ color: 'white', cursor: 'pointer' }}
                className={'m-2 text-decoration-none'}
              >
                <Link
                  to="Menu"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Menu
                </Link>
              </span>
              <NavLink
                to="/mostpopular"
                style={{ color: 'white' }}
                className={'m-2 text-decoration-none'}
              >
                Most Popular
              </NavLink>
              <Cart
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
              />
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
