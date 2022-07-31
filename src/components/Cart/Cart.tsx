import { Modal, Offcanvas } from 'react-bootstrap';
import { Image, Card, Row, Button, Container, Stack } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormSubtract } from 'react-icons/gr';
import logo from '../../imgs/fastDelivery.png';
import pizzaLogo from '../../imgs/pizzaModel.png';
import { Link } from 'react-router-dom';
import {
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer,
} from 'mdb-react-ui-kit';
const Cart = ({ show, handleShow, handleClose }: any) => {
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
            <MDBContainer breakpoint="sm">
              <MDBRow className="mb-3">
                <div className="md-8">
                  <MDBRow className="g-0">
                    <MDBCol sm="5" md="7">
                      <MDBCardImage
                        style={{ width: '100%' }}
                        src={pizzaLogo}
                        alt="pizza"
                        fluid
                      />
                    </MDBCol>
                    <MDBCol size="6" md="4">
                      <MDBCardTitle>Pizza</MDBCardTitle>
                      <MDBCardText>details</MDBCardText>
                      <MDBCardText>
                        <small className="text-muted"> $200</small>
                      </MDBCardText>
                      <div className="d-flex justify-content-xxl-evenly align-items-center">
                        <AiOutlinePlus></AiOutlinePlus>
                        <span
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#E1DFDF',
                            padding: '1px',
                            width: '20px',
                            borderRadius: '6px',
                          }}
                        >
                          0
                        </span>
                        <GrFormSubtract></GrFormSubtract>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>
              </MDBRow>
            </MDBContainer>
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
