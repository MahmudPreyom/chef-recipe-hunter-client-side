import React from "react";
import { Card, Container } from 'react-bootstrap'

const FoodItem = ({ dishes }) => {
    const { name, food_image, description,rating } = dishes;
    // console.log(dishes)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={food_image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                    <h6>{rating}</h6>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default FoodItem;