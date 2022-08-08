import { Button, Card } from 'react-bootstrap';

const OrdersCard = ({ item }: any) => {
  const data = item.orderline;
  console.log(data);

  const newData = data.flat().map((product: any) => {
    return {
      productName: product.products.name,
      qty: product.quantity,
    };
  });

  console.log(newData);

  return (
    <Card className="d-flex " style={{ width: '50%' }}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        {newData.map((eleData: any) => (
          <>
            <div>
              <span>
                {eleData.productName} &nbsp;&nbsp;Qty:{eleData.qty}{' '}
              </span>
            </div>
          </>
        ))}

        <Button variant="primary">Done</Button>
      </Card.Body>
    </Card>
  );
};
export default OrdersCard;
