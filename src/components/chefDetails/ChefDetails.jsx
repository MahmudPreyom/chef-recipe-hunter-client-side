import React from "react";
import { useLoaderData } from 'react-router-dom'
import { Container } from "react-bootstrap"
import FoodItem from "../FoodItem/FoodItem";

const ChefDetails = () => {
    const chefDetail = useLoaderData();
    const { chef_image, _name, id, recomanded_dishes, experience, description, specialty } = chefDetail;

    return (
        <Container className="d-flex gap-2">
            <div>
                <img src={chef_image} alt="" />
                <h5>{_name}</h5>
                <p>{description}</p>
                <h5>Experience: {experience}</h5>
            </div>
            <div>
                {
                    recomanded_dishes.map((dishes, index) => <FoodItem
                        key={index}
                        dishes={dishes}
                    >
                    </FoodItem>)
                }
            </div>
        </Container>
    );
};

export default ChefDetails;