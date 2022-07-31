import { Container, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function FormTextExample() {
  return (
    <div>
      <Container className="p-5 m-5">
        <Form.Label className="m-1">Name</Form.Label>
        <Form.Control style={{ width: '40%' }} type="string" />
        <Form.Text muted></Form.Text>
        <Form.Label className="m-1">Mobile</Form.Label>
        <Form.Control style={{ width: '40%' }} type="string" />
        <Form.Text muted></Form.Text>
        <Form.Label className="m-1">address</Form.Label>
        <Form.Control style={{ width: '65%' }} type="string" />
        <Form.Text muted></Form.Text>
        <Form.Label className="m-1">City</Form.Label>
        <Form.Control style={{ width: '25%' }} type="string" />
        <Form.Text muted></Form.Text>
        <div className="mt-5">
          <Link to={'/ordersuccess'}>
            <Button className="m-2" variant="light" size="lg">
              Order Now
            </Button>
          </Link>
          <Link to={'/'}>
            <Button variant="danger" size="lg">
              Canel
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default FormTextExample;
