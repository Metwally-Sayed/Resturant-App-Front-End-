import { useState, useEffect } from 'react';
import Menudetil from './Menudetils';
import NewMenubody from './NewMenubody';
import { Container, Row } from 'react-bootstrap';
import { getAllProducts } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions';
import { AppState, Product } from '../../types';
const Menu = (): JSX.Element => {
  const products = useSelector((state: AppState) => state.productsDataReducer);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const dispatch = useDispatch();

  const getAll = async () => {
    const productsToDispatch = await getAllProducts();
    console.log(productsToDispatch.data.data);

    dispatch(getProducts(productsToDispatch.data.data));
    return productsToDispatch.data.data;
  };

  useEffect(() => {
    getAll();
  }, []);

  const filterHandler = (selectedCategory: string) => {
    const newFilterdProducts = products.filter((product) => {
      return product.category.name === selectedCategory;
    });
    setFilteredProducts(newFilterdProducts);
  };

  const filterPopularHandler = () => {
    const popularProducts = products.filter((product) => {
      return product.popular;
    });
    setFilteredProducts(popularProducts);
  };

  return (
    <>
      <Menudetil
        filterHandler={filterHandler}
        filterPopularHandler={filterPopularHandler}
      />
      <Container className="my-4 ml-1">
        <Row x={1} md={4} className="g-3 ">
          {filteredProducts.map((product: Product) => (
            <NewMenubody product={product} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Menu;

// const [data, setData] = useState([
//   {
//     id: 1,
//     itemName: 'seafood pizza',
//     ingredients: ['snail', 'fish', 'shrimp'],
//     price: 140,
//     orderQty: 0,
//     category: 'pizza',
//     popular: true,
//     img: `${productImg}`,
//   },
//   {
//     id: 2,
//     itemName: 'chicken ranch pizza',
//     ingredients: ['chicken', 'ranch sauce'],
//     price: 120,
//     orderQty: 0,
//     category: 'pizza',
//     popular: true,
//   },
//   {
//     id: 3,
//     itemName: 'Cheese mix pizza',
//     ingredients: ['snail', 'fish', 'shrimp'],
//     price: 140,
//     orderQty: 0,
//     category: 'pizza',
//     popular: true,
//   },
//   {
//     id: 4,
//     itemName: 'chicken ranch pizza',
//     ingredients: ['chicken', 'ranch sauce'],
//     price: 120,
//     orderQty: 0,
//     category: 'pizza',
//     popular: true,
//   },
//   {
//     id: 5,
//     itemName: 'beef burger',
//     ingredients: ['beef', 'cheese', 'lattice'],
//     price: 45,
//     orderQty: 0,
//     category: 'burger',
//     popular: true,
//   },
//   {
//     id: 6,
//     itemName: 'beef burger**',
//     ingredients: ['beef', 'cheese', 'lattice'],
//     price: 45,
//     orderQty: 0,
//     category: 'burger',
//     popular: true,
//   },
//   {
//     id: 7,
//     itemName: 'beef burger**',
//     ingredients: ['beef', 'cheese', 'lattice'],
//     price: 45,
//     orderQty: 0,
//     category: 'burger',
//     popular: true,
//   },
//   {
//     id: 8,
//     itemName: 'beef burger**',
//     ingredients: ['beef', 'cheese', 'lattice'],
//     price: 45,
//     orderQty: 0,
//     category: 'burger',
//     popular: true,
//   },
//   {
//     id: 9,
//     itemName: 'espresso',
//     ingredients: ['coffee'],
//     price: 35,
//     orderQty: 0,
//     category: 'drinks',
//     popular: false,
//   },
//   {
//     id: 10,
//     itemName: 'mocha**',
//     ingredients: ['coffee', 'chocolate'],
//     price: 55,
//     orderQty: 0,
//     category: 'drinks',
//     popular: true,
//   },
//   {
//     id: 11,
//     itemName: 'espresso',
//     ingredients: ['coffee'],
//     price: 35,
//     orderQty: 0,
//     category: 'drinks',
//     popular: false,
//   },
//   {
//     id: 12,
//     itemName: 'mocha**',
//     ingredients: ['coffee', 'chocolate'],
//     price: 55,
//     orderQty: 0,
//     category: 'drinks',
//     popular: true,
//   },
// ]);
