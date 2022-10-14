import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../../api';
import OrdersCard from './OrdersCard';
import { Row } from 'react-bootstrap';

type Props = {};

const PendiningOrders = (props: Props) => {
  const [orderData, setOrderData] = useState([]);

  const getAll = async () => {
    const userWithorder = await getAllOrders();
    const ordersInfo = userWithorder.data.data;
    setOrderData(ordersInfo);
  };
  console.log(orderData);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <h2>PendiningOrder</h2>
      <Row md={2}>
        {orderData.map(
          (order:any) => !order.completed && <OrdersCard order={order} />
        )}
      </Row>
    </div>
  );
};

export default PendiningOrders;
