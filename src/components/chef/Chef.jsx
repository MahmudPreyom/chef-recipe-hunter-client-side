import React from "react";
import { Card, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Chef = ({ chef }) => {
    const { id,chef_image, specialty, _name, description, experience } = chef
    return (
        <Container className="mx-auto mb-2">
            <Card style={{ width: '100%'}}>
            <Card.Img variant="top" src={chef_image} />
            <Card.Body>
                <Card.Title>{_name}</Card.Title>
                <p>{description}</p>
                <h6>Experience: {experience}</h6>
                <Link to={`/chefdetails/${id}`}><Button variant="primary">See More Details</Button></Link>
            </Card.Body>
        </Card>
        </Container>
    );
};

export default Chef;