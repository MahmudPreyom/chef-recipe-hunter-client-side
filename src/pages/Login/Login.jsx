import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, getAuth, GithubAuthProvider } from "firebase/auth";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import React, { useContext, useEffect } from "react";
import app from '../../firebase/firebase.config'
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from "../../components/Provider/AuthProvider";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

    }
    const handleSignInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => { 'error', console.log(error.message) })
    }

    const handleSignInWithGoogle = () => {
        
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => { 'error', console.log(error.message) })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                navigate('/');
            }
        })
    }, [])
    
    return (
        <div>
            <div>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <p>Don't have id? Please <Link to="/register"> Register</Link></p>
                </Form>
            </div>
            <div>
                <Button onClick={handleSignInWithGoogle} className="mb-2" variant="light" type="submit">
                    <FaGoogle /> <span className="fw-bold text-primary">Login with Google</span>
                </Button>
                <br />
                <Button onClick={handleSignInWithGithub} variant="light" type="submit">
                   <FaGithub /> <span className="fw-bold text-primary">Login with Github</span>
                </Button>
            </div>
        </div>
    );
};

export default Login;