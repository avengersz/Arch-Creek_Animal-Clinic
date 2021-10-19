import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import Photo1  from '../images/handsome-veterinarian-vet-clinic-examining-cute-black-pug-dog-pointing-finger-pet-during-check-up-with-stethoscope-white-background.jpg';
import Photo2  from '../images/veterinarian-latex-loves-dong-injection-dog-vet-holds-syringe-hands.jpg';
import Photo3  from '../images/white-fluffy-cat-veterinarian-with-cats-animals-couch.jpg';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch('./services.JSON')
      .then(res => res.json())
      .then(data => setServices(data))
    }, []);
    return (
      <div>
   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Photo1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Photo2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Photo3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h1>
      Services
</h1>
   <div>
   <Row  xs={1} md={3} className="gaps">
     {
       services.map(service => <HomeServices
       key={service.id}
       service={service}>

       </HomeServices>)
     }
     </Row>
   </div>
      </div>

    );
};

export default Home;