import { Button, Card, Row, Col } from 'react-bootstrap';

const OrdersCard = ({ order }: any) => {
  const productname = order.orderline.map((item: any) => item.products.name);
  console.log(order);

  console.log(order.orderline);
  const orderQuantity = order.orderline.map((item: any) => {
    return item.quantity;
  });

  console.log(productname);

  const statuHandler = () => order.completed === true;
  
  return (
    <Col md={6}>
      <Card className="d-flex " style={{ width: '50%' }}>
        <Card.Header>{order.id}</Card.Header>
        <Card.Body>
          <>
            <div>
              <Row>
                <Col md={9}>
                  <p>{productname}</p>
                </Col>
                <Col md={3}>
                  {orderQuantity.map((qty: any) => (
                    <div>{qty}</div>
                  ))}
                </Col>
              </Row>
            </div>
          </>
          <Button onClick={statuHandler} variant="primary">
            Done
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default OrdersCard;
