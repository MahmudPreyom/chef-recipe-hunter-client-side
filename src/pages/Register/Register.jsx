import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { AuthContext } from "../../components/Provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('')

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('set 6 character')
            return
        }

        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo-Url</Form.Label>
                <Form.Control type="text" name="photo" placeholder="Photo-Url" required />
            </Form.Group>
            <p><small className="text-danger">{error}</small></p>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <p>Already have an account? <Link to="/login"> Login</Link></p>
        </Form>
    );
};

export default Register;