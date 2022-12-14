import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from '../Login/UserContext';
import React, { useContext, useState } from "react";

function NavBar({ logOut }) {
  const { currUser, search } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  function loggedInNav(){
    return (
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <NavLink to="/">My Favorite Recipe</NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/recipes" onClick={() => search()}>Browse</NavLink>
            <NavLink to="/" onClick={logOut}>Log Out</NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <Button 
              variant="outline-success"
              type="submit"
              onClick={async e=>{
                e.preventDefault();
                search(searchTerm);
                navigate('/recipes');
              }}
            >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }

  function loggedOutNav(){
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <NavLink to="/">My Favorite Recipe</NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

  }

  return currUser? loggedInNav() : loggedOutNav();

}

export default NavBar;