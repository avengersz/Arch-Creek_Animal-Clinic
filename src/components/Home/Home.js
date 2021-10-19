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
      <p>A dog is one of the helpful animals that consist of a fluffy hairy body. Dogs help in protecting a house from thieves and fraud people during the night.</p>
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
      <p>One of the most faithful and helpful animals on the earth is a dog. Dogs consist of four feet for running and jumping. They have two eyes, ears, and one tail, which makes them look beautiful.</p>
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
      <p>A cat is a beautiful creature on the earth that consists of four legs and sharp teeth.</p>
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