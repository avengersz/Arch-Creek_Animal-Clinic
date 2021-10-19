import React from 'react';
import {Col, Container, Row, Button } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <h1>Let's About Us</h1>
           <div className="about-img img-fluid">
            <img className="" src={"https://i.ibb.co/TB7fJ4R/Girl-with-dog.jpg"} alt="" />

            </div>
            <Container>
                <Row>
                    <Col> 
                
                        <div className="mt-5">
                            <h1>Welcome to Arch Creek Animal Clinic!</h1>
                            <h4>Meet the folks who make it all happen. We see big potential in every moment care deeply about what we do every day. </h4>
                            <Button className="btn-grp" variant="secondary" size="lg" active>Read More</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="margin">
                            <img src={"https://i.ibb.co/P9041bd/Handsome-veterinarian-at-vet-clinic-examining-cute-black-pug-dog-pointing-finger-at-pet-during-check.jpg"} alt="" />

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;