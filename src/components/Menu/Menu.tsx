import { useState } from 'react';
import Menudetil from './Menudetils';
import NewMenubody from './NewMenubody';
import { Container, Row } from 'react-bootstrap';
import productImg from '../../imgs/pizzaModel.png';
const Menu = (): JSX.Element => {
  const [data, setData] = useState([
    {
      id: 1,
      itemName: 'seafood pizza',
      ingredients: ['snail', 'fish', 'shrimp'],
      price: 140,
      orderQty: 0,
      category: 'pizza',
      popular: true,
      img: `${productImg}`,
    },
    {
      id: 2,
      itemName: 'chicken ranch pizza',
      ingredients: ['chicken', 'ranch sauce'],
      price: 120,
      orderQty: 0,
      category: 'pizza',
      popular: true,
    },
    {
      id: 3,
      itemName: 'Cheese mix pizza',
      ingredients: ['snail', 'fish', 'shrimp'],
      price: 140,
      orderQty: 0,
      category: 'pizza',
      popular: true,
    },
    {
      id: 4,
      itemName: 'chicken ranch pizza',
      ingredients: ['chicken', 'ranch sauce'],
      price: 120,
      orderQty: 0,
      category: 'pizza',
      popular: true,
    },
    {
      id: 5,
      itemName: 'beef burger',
      ingredients: ['beef', 'cheese', 'lattice'],
      price: 45,
      orderQty: 0,
      category: 'burger',
      popular: true,
    },
    {
      id: 6,
      itemName: 'beef burger**',
      ingredients: ['beef', 'cheese', 'lattice'],
      price: 45,
      orderQty: 0,
      category: 'burger',
      popular: true,
    },
    {
      id: 7,
      itemName: 'beef burger**',
      ingredients: ['beef', 'cheese', 'lattice'],
      price: 45,
      orderQty: 0,
      category: 'burger',
      popular: true,
    },
    {
      id: 8,
      itemName: 'beef burger**',
      ingredients: ['beef', 'cheese', 'lattice'],
      price: 45,
      orderQty: 0,
      category: 'burger',
      popular: true,
    },
    {
      id: 9,
      itemName: 'espresso',
      ingredients: ['coffee'],
      price: 35,
      orderQty: 0,
      category: 'drinks',
      popular: false,
    },
    {
      id: 10,
      itemName: 'mocha**',
      ingredients: ['coffee', 'chocolate'],
      price: 55,
      orderQty: 0,
      category: 'drinks',
      popular: true,
    },
    {
      id: 11,
      itemName: 'espresso',
      ingredients: ['coffee'],
      price: 35,
      orderQty: 0,
      category: 'drinks',
      popular: false,
    },
    {
      id: 12,
      itemName: 'mocha**',
      ingredients: ['coffee', 'chocolate'],
      price: 55,
      orderQty: 0,
      category: 'drinks',
      popular: true,
    },
  ]);
  const [filterData, setFilterData] = useState(data);
  const filterHandler = (reqCat: string) => {
    if (reqCat === 'popular') {
      const newData = data.filter((item: any) => {
        return item.popular === true;
      });
      console.log(newData);

      setFilterData(newData);
    } else {
      const newData = data.filter((item: any) => {
        return item.category === reqCat;
      });
      setFilterData(newData);
    }
  };
  return (
    <>
      <Menudetil filterHandler={filterHandler} />
      <Container className="my-4 ml-1">
        <Row x={1} md={4} className="g-3 ">
          {filterData.map((item) => (
            <NewMenubody item={item} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Menu;
