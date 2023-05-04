import React from "react";
import { FaGrinHearts } from "react-icons/fa";
import { Card, Container } from 'react-bootstrap'

const FoodItem = ({ dishes }) => {
    const { name, food_image, description,rating, ingredients } = dishes;
    // console.log(dishes)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={food_image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p><span className="fw-bold">Ingredients:</span> {ingredients}</p>
                    <p><span className="fw-bold">Cooking Method:</span> {description}</p>
                    <h6><span className="fw-bold">Rating:</span> {rating}</h6>
                    <FaGrinHearts />
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default FoodItem;