import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <p>Don't have id? Please <Link to="/register"> Register</Link></p>
        </Form>
    );
};

export default Login;