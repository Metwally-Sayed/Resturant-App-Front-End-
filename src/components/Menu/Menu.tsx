import { useState, useEffect } from 'react';
import Menudetil from './Menudetils';
import NewMenubody from './NewMenubody';
import { Container, Row } from 'react-bootstrap';
import { getAllProducts } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/products.action';
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

  const allitems = () => {
    return setFilteredProducts(products);
  };

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
        allitems={allitems}
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
