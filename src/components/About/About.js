import Button from '@restart/ui/esm/Button';
import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <h1>Let's About Us</h1>
           <div className="about-img img-fluid">
            <img className="" src={"http://s3.amazonaws.com/assets.brightspot.vetstreet.com/assets/a4/37/40b10925-4a46-4a1b-ac5d-8ad59bb50b07.jpg?1412026898000"} alt="" />

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
                            <img src={"https://media.istockphoto.com/photos/happy-doctor-with-dog-at-vet-clinic-picture-id489083722?b=1&k=20&m=489083722&s=170667a&w=0&h=8lTrjdGB80HBWhaZayciBs62cm_1z591_8oTi48vpz0="} alt="" />

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;