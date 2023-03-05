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


export default function Header(props) {

    const navList = ["Home", "Connection", "Game", "Notification", "Jobs", "Messaging", "Profile"];

    const navButtons = navList.map((navName) => {
        const component = (
            <li className="nav-item d-flex">
                <Nav.Link className="d-flex flex-column" href="#">
                    <img className="nav-icon" src={'pics/header/' + navName + '.svg'} alt='' />
                    <span className="nav-text">{navName}</span>
                </Nav.Link>
            </li>);
        return component;
    })

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
                        <ul className="navbar-nav nav-justified w-100 text-center">
                            {navButtons}
                        </ul>
                        {/* <Nav.Link className="d-flex flex-column" href="#">
                            <img className="nav-icon" src='pics/profile.svg' alt='' />
                            <span>Profile</span>
                        </Nav.Link> */}
                    </Nav>
                    <Nav>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}