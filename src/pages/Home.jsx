import React from "react";
import { Card, CardGroup, Button, Container, Carousel } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { useLoaderData } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FcOnlineSupport, FcInTransit, FcInfo } from "react-icons/fc";
import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"
import three from "../assets/three.png"
import Chef from "../components/chef/Chef";

const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div>
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
            <div>
                <h2 className="text-center mt-5 mb-4">Our service</h2>
                <CardGroup className="mt-3 mb-3 text-center gap-2">
                    <Card>
                        <FcOnlineSupport style={{ fontSize: '4rem' }} />
                        <Card.Body className="bg-warning">
                            <Card.Title>Online Contact</Card.Title>
                            <Card.Text>
                                <FaFacebook />
                                <br />
                                <FaTwitter />
                                <br />
                                <FaInstagram />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <FcInTransit style={{ fontSize: '4rem' }} />
                        <Card.Body className="bg-warning">
                            <Card.Title>Food Delivery</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <FcInfo style={{ fontSize: '4rem' }} />
                        <Card.Body className="bg-warning">
                            <Card.Title>More Info</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            <div>
                <h2 className="text-center mt-5 mb-4">Cooking Thrilling</h2>
                <Carousel className="mb-5">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                        />
                        <Carousel.Caption className="bg-info">
                            <h3>Vegetables Mixing</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className="bg-info">
                            <h3>Vegetables Slicing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="bg-info">
                            <h3>Cooking Vegetables</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <h2 className="text-center text-primary mb-3">Chefs Corner</h2>
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>
        </div>
    );
};

export default Home;