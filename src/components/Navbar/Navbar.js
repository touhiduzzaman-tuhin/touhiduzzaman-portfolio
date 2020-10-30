import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NavBar = () => {

    return (
        <div className="navigation">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav style={{ marginBottom: '0' }}>
                        <Nav.Link href="#home" style={{ color: "white" }}>HOME</Nav.Link>
                        <Nav.Link href="#about" style={{ color: "white" }}>ABOUT</Nav.Link>
                        <Nav.Link href="#projects" style={{ color: "white" }}>PROJECTS</Nav.Link>
                        <Nav.Link>
                            <Link to="/blog" style={{ textDecoration: "none", color: 'white' }}>BLOGS</Link>
                        </Nav.Link>
                        <Nav.Link href="#contacts" style={{ color: "white" }}>
                            CONTACTS
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;