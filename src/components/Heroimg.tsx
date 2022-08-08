import React from 'react';
import Image from 'react-bootstrap/Image';
import Hero from '../imgs/pizzaHero.png';
import { Container } from 'react-bootstrap';

const Heroimg = () => {
  return (
    <div style={{ backgroundColor: '#303030' }}>
      <Container className="d-flex p-5  ">
        <p
          className="fs-1 fw-bold p-5"
          style={{ color: 'white', width: '50%' }}
        >
          ENJOY OUR <br /> DELICIOUS
          <span style={{ color: '#FF9200' }}> FOOD </span>
        </p>
        <Image src={Hero} alt="pizza" width="50%" />
      </Container>
    </div>
  );
};
export default Heroimg;
