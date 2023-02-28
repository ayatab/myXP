import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';


export default function ApoioHeader(props) {


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Connection</Nav.Link>
                        <Nav.Link href="#">Game</Nav.Link>
                        <Nav.Link href="#">Notification</Nav.Link>
                        <Nav.Link href="#">Jobs</Nav.Link>
                        <Nav.Link href="#">Messaging</Nav.Link>
                        <Nav.Link href="#">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}