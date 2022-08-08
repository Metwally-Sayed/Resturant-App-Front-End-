import { useEffect, useState } from 'react';
import OrdersCard from './OrdersCard';
import { getAllOrders } from '../../api';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';

const Dashbord = () => {
  const [order, setOrder] = useState([]);

  const getAll = async () => {
    const userWithorder = await getAllOrders();
    const ordersInfo = userWithorder.data.data;

    setOrder(ordersInfo);

    return ordersInfo;
  };

  console.log(order);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <MDBRow>
        <MDBCol md="2">
          <div
            style={{
              backgroundColor: '#303030',
              height: '100%',
              margin: 'auto',
            }}
          >
            <button
              style={{
                width: '100%',
                height: '40px',
                backgroundColor: '#303030',
                border: '0px',
                color: 'white',
              }}
            >
              Pendining Order
            </button>
            <br />
            <br />
            <button
              style={{
                width: '100%',
                height: '40px',
                backgroundColor: '#303030',
                border: '0px',
                color: 'white',
              }}
            >
              Finished Order
            </button>
          </div>
        </MDBCol>
        <MDBCol md="" style={{ height: '100%', margin: 'auto' }}>
          <Container className="d-flex justify-content-around">
            {order.map((item) => (
              <OrdersCard item={item} style={{ margin: '10px' }} />
            ))}
          </Container>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Dashbord;
