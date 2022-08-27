import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import ShowCard from './tradeo/ShowCard.tsx';
export default function Index() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width="500" height="600"
          src="https://i.ytimg.com/vi/dbZ6X1bARAo/maxresdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width="500" height="600"
          src="https://depor.com/resizer/wjP1zII3gZbVxbDDekKTWtTHCzI=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/D7NMVK7ELJGZLOLGXWBI6CSFXI.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width="500" height="600"
          src="https://i.ytimg.com/vi/O6rblYt2-xU/maxresdefault.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container>   
      
    </Container>
    </div>
  );
}
