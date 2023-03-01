import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';


export default function ApoioHeader(props) {

    return (
        <Navbar className="headerColor" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="pics/myxp.png"
                        width="53"
                        height="45"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Form className="d-flex" onSubmit={null}>
                            <div className="input-group">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={""}
                                    onChange={null}
                                // ON SUBMIT NEEDS PREVENTDEFAULT
                                />
                            </div>
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">
                            {/* <div>
                                <img src='pics/home.png' alt=''/>
                            </div> */}
                            <span>Home</span>
                        </Nav.Link>
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