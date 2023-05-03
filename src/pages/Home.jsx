import React from "react";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
// import one from "../assets/one.png"
import three from "../assets/three.png"

const Home = () => {
    return (
        <Container className="rounded d-flex align-items-center bg-info justify-content-between pb-4">
        <div className="mt-3">
            <h2>Thinking Of<br /><span className="text-success">What To Cook?</span></h2>
            <p>Find the best recipes from the small community in our country</p>
            <div className="d-flex">
                <h5 className="bg-warning p-2 text-success">Quotes</h5>
                <Marquee>
                    <h5 className="bg-light text-warning p-2">Whatever you do, do with determination. I'm not a chef. If you want to become a great chef, you have to work with great chefs.</h5>
                </Marquee>
            </div>
            <input className="rounded" type="text" />
            <br />
            <Button variant="warning" className="mt-1 text-danger fw-bold">Search</Button>
        </div>
        <div className="mt-4">
            <img src={three} alt="" />
        </div>
    </Container>
    );
};

export default Home;