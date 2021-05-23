import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import styled from 'styled-components';
import navBrand from '../assets/Mu stores.png';

const Styles = styled.div`
  .navbar-light .navbar-nav .nav-link{
    color: #ffff;
  }
  .navbar{
    background-color: #7868e6;
  }
  
`;

export default function navigationBar() {
    return (
        <Styles>
  <Navbar expand="lg">
  <Navbar.Brand href="#home"><img src={navBrand} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About us</Nav.Link>
      <Nav.Link href="/contact">Contact us</Nav.Link>

    </Nav>
      
      <Form inline>
      <Button variant="outline-success">login</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  
</Styles>
    );
}
