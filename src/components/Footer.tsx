import { Container, Card, Col, Row } from 'react-bootstrap';


const Footer = () => {
  return (
    <Card
      style={{
        border: '0px',
        borderRadius: '0px',
        backgroundColor: '#303030',
        color: 'white',
        position: 'fixed',
        bottom: '0',
      }}
    >
      <Container className="py-2 ">
        <Row>
          <Col sm>
            <h6>OBSD</h6>
          </Col>
          <Col md={5}>
            <div className="text-center">
              © 2022 OBSD - All Rights Reserved.
            </div>{' '}
          </Col>
          <Col sm></Col>
        </Row>
      </Container>
    </Card>
  );
};
export default Footer;
