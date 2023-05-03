import React from "react";
import { Nav, Button, Container } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import rsz_two from "../../../assets/rsz_two.png"

const Footer = () => {
    return (
        <Container className="d-flex justify-content-between mt-5 bg-warning text-light p-4 align-items-center rounded">
            <div>
                <img src={rsz_two} alt="" />
                <p>You Might Be Rest Assured That We Have<br />A Strong Reputation About Our Chefs<br />Corner. We Can Provide The Best<br />Service All Over The Country.</p>
            </div>
            <div className="mt-5">
                <h4>Contact Information</h4>
                <p>+880 123467890</p>
                <p>chefscorner@gmail.com</p>
                <p>Dhaka Bangladesh</p>
            </div>
            <div>
                <h4>Menu</h4>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="#link">Hire</Nav.Link>
            </div>
        </Container>
    );
};

export default Footer;