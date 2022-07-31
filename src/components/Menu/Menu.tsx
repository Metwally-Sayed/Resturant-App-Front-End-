import React from 'react';
import Menudetil from './Menudetils';
import NewMenubody from './NewMenybody';
import { Container, Row } from 'react-bootstrap';
import productImg from '../../imgs/pizzaModel.png';
const Menu = (): JSX.Element => {
  const menuInfo = [
    {
      id: 2,
      name: 'Pizza',
      price: 200,
      ingredients: 'x,y,x',
      img: `${productImg}`,
      details: 'Any details about the product',
    },
    {
      id: 2,
      name: 'Pizza',
      price: 200,
      ingredients: 'x,y,x',
      img: `${productImg}`,
      details: 'Any details about the product',
    },
    {
      id: 2,
      name: 'Pizza',
      price: 200,
      ingredients: 'x,y,x',
      img: `${productImg}`,
      details: 'Any details about the product',
    },
    {
      id: 2,
      name: 'Pizza',
      price: 200,
      ingredients: 'x,y,x',
      img: `${productImg}`,
      details: 'Any details about the product',
    },
    {
      id: 2,
      name: 'Pizza',
      price: 200,
      ingredients: 'x,y,x',
      img: `${productImg}`,
      details: 'Any details about the product',
    },
    {
      id: 2,
      name: 'Pizza',
      price: 200,
      ingredients: 'x,y,x',
      img: `${productImg}`,
      details: 'Any details about the product',
    },
    {
      id: 2,
      name: 'Pizza',
      price: 200,
      ingredients: 'x,y,x',
      img: `${productImg}`,
      details: 'Any details about the product',
    },
    {
      id: 2,
      name: 'Pizza',
      price: 200,
      ingredients: 'x,y,x',
      img: `${productImg}`,
      details: 'Any details about the product',
    },
  ];
  // console.log(menuInfo);
  return (
    <>
      <Menudetil />
      <Container className="my-4 ml-1">
        <Row x={1} md={4} className="g-3 ">
          {menuInfo.map((item, idx) => (
            <NewMenubody item={item} key={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Menu;
