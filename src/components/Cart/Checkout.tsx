import { useEffect, useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppState } from '../../types';
import {
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import { sendOrder } from '../../api';
function Checkout() {
  const [Name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const products = useSelector(
    (state: AppState) => state.handlerCartDataReducer,
  );

  const navigate = useNavigate();

  const submitHandler = (e: any) => {
    e.preventDefault();

    const order = {
      Name,
      phoneNumber,
      address,
      city,
      products,
    };

    sendOrder(order);

    navigate('/ordersuccess');

    console.log(products);
  };

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <form onSubmit={submitHandler}>
              <Container>
                <label className="m-1">Name</label>
                <br />
                <input
                  placeholder="Enter Your Full Name"
                  id="Name"
                  name="Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={Name}
                />{' '}
                <br />
                <br />
                <label className="m-1">Mobile</label> <br />
                <input
                  placeholder="Ex: (01xxxxxxxxx)"
                  id="Mobile"
                  name="Mobile"
                  type="text"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
                <br />
                <br />
                <label className="m-1">Address</label> <br />
                <input
                  placeholder="Enter Your Address"
                  id="Address"
                  name="Address"
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
                <br />
                <br />
                <label className="m-1">City</label> <br />
                <input
                  placeholder="Enter Your City Name"
                  id="City"
                  name="City"
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
              </Container>
              <div className="mt-5">
                <Button type="submit" className="m-2" variant="light" size="lg">
                  Order Now
                </Button>
                <Link to={'/'}>
                  <Button variant="danger" size="lg">
                    Canel
                  </Button>
                </Link>
              </div>
            </form>
          </Col>
          <Col xs={6} md={4}>
            {products.map((item) => (
              <MDBRow key={item.id} className="mb-3">
                <div className="md-8">
                  <MDBRow className="g-0">
                    <MDBCol sm="5" md="7">
                      <MDBCardImage
                        style={{ width: '100%' }}
                        src={item.img}
                        alt="pizza"
                        fluid
                      />
                    </MDBCol>
                    <MDBCol size="6" md="4">
                      <MDBCardTitle>{item.name}</MDBCardTitle>
                      <MDBCardText>{item.description}</MDBCardText>
                      <MDBCardText>
                        <small className="text-muted"> {item.price} </small>
                      </MDBCardText>
                      <div className="d-flex justify-content-xxl-evenly align-items-center">
                        <span
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#E1DFDF',
                            padding: '1px',
                            width: '20px',
                            borderRadius: '6px',
                          }}
                        >
                          {products.quantity}
                        </span>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>
              </MDBRow>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;
