import { Badge, Modal, Offcanvas } from 'react-bootstrap';
import { Image, Button, Stack } from 'react-bootstrap';
import logo from '../../imgs/fastDelivery.png';
import CartProductBody from './CartProductBody';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppProps, AppState, Product } from '../../types';
import { useEffect } from 'react';

const Cart = ({ show, handleShow, handleClose }: any): JSX.Element => {
  const productsData = useSelector(
    (state: AppState) => state.handlerCartDataReducer,
  );

  const getToTal = () => {
    let total = 0;
    productsData.map((x: any): any => {
      return (total += x.quantity * x.price);
    });
    return total;
  };

  useEffect(() => {
    console.log(productsData);
  }, [productsData]);

  // const totalPrice = () => {
  //   let total = 0;
  //   productsData.map((product:any) => {
  //     return (total += product.price * product.quantity);
  //   });
  // };

  return (
    <>
      {/* <Badge bg="secondary">0</Badge> */}
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
              <CartProductBody key={product.id} product={product} />
            ))}
          </Modal.Body>
        </Offcanvas.Body>
        <Stack gap={2} className="col-md-5 mx-auto">
          <div>
            <span>
              <b>Total:</b> ${getToTal()}{' '}
            </span>
          </div>
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
