import { Modal, Offcanvas } from 'react-bootstrap';
import { Image,  Button,  Stack } from 'react-bootstrap';
import logo from '../../imgs/fastDelivery.png';
import CartProductBody from './CartProductBody';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  AppState } from '../../types';
import { useEffect } from 'react';

const Cart = ({ show, handleShow, handleClose }: any) => {
  const productsData = useSelector(
    (state: AppState) => state.handlerCartDataReducer,
  );

  useEffect(() => {
    console.log(productsData);
  }, [productsData]);

  return (
    <>
      <Image
        onClick={handleShow}
        className={'m-2 text-decoration-none'}
        src={logo}
        style={{ width: '30px', cursor: 'pointer' }}
      />
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Modal.Body>
            {productsData.map((product) => (
              <CartProductBody product={product} />
            ))}
          </Modal.Body>
        </Offcanvas.Body>
        <Stack gap={2} className="col-md-5 mx-auto">
          <h6>Total: 0 </h6>
          <Link to="/checkout">
            <Button
              style={{ backgroundColor: ' rgb(255, 146, 0 )' }}
              variant="outline-light"
            >
              CheckOut
            </Button>
          </Link>
        </Stack>
      </Offcanvas>
    </>
  );
};

export default Cart;
