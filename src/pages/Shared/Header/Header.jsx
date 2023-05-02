import React from "react";
import { Nav, Button, Container, Navbar } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import rsz_two from "../../../assets/rsz_two.png"

//  <Navbar.Brand href="#home"><img src={rsz_two} alt="" /></Navbar.Brand> 
const Header = () => {
    return (
        <Container className="bg-light rounded">
            <Navbar bg="light">
                <Navbar.Brand href="#home"><img src={rsz_two} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <Button variant="secondary">Login</Button>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;