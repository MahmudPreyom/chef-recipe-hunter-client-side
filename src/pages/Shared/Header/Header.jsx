import React, { useContext } from "react";
import { Nav, Button, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import rsz_two from "../../../assets/rsz_two.png"
import { AuthContext } from "../../../components/Provider/AuthProvider";

//  <Navbar.Brand href="#home"><img src={rsz_two} alt="" /></Navbar.Brand> 
const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <Container className="bg-light rounded">
            <Navbar bg="light">
                <Navbar.Brand href="#home"><h4 className="rounded bg-dark text-warning fst-italic p-1 fw-bold">Chef-Corner</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                    {/* <Link to='/login'><Button variant="secondary">Login</Button></Link> */}
                    {user && <FaUserCircle style={{ fontSize: '2rem' }} />}
                    {user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                        <Link to="/login"><Button variant="secondary">Login</Button></Link>}
                    <Link to="/register"><Button>Register</Button></Link>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;