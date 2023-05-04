import React, { useContext } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import { Navigate, useLocation } from 'react-router-dom'
import { Spinner, Button } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('user success', user);
    if (loading) {
        return <div className="text-center">
            <Button variant="success" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;