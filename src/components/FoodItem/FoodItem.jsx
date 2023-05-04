import React from "react";
import { FaGrinHearts } from "react-icons/fa";
import { Card, Container,Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodItem = ({ dishes }) => {
    const handleTost = () => {
        toast('added favourite')
    }
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
                    <Button onClick={handleTost}><FaGrinHearts />  <ToastContainer /></Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default FoodItem;