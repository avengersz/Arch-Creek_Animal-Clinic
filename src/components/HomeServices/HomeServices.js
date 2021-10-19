import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
const HomeServices = (props) => {
    const {name, image, Cost, description} = props.service;
    
    return (
        <Col>
        <Card className="courseCard" >
            <Card.Img variant="top" src={image} />
            <Card.Body>
               <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="courseCard"><small className='bold'>Cost:</small> {Cost}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Show more details</Card.Link>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default HomeServices;