import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Vet = (props) => {
    const {name, title, about, email, image } = props.vet;
    return (
        <div>
            <Col className="gap">
            <Card className="courseCard" >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>{about}</Card.Title>
                    <Card.Title>Email: {email}</Card.Title>

                </Card.Body>

            </Card>
            </Col>
        </div>
    );
};

export default Vet;