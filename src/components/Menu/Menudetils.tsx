import { Container } from 'react-bootstrap';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';

const Menudetil = () => {
  return (
    <Container
      className="d-flex justify-content-evenly mt-5"
    >
      <MDBBtnGroup shadow="3">
        <MDBBtn
          style={{ backgroundColor: '#FF9200', color: 'white' }}
          color="light"
        >
          most popular
        </MDBBtn>
        <MDBBtn
          style={{ backgroundColor: '#FF9200', color: 'white' }}
          color="light"
        >
          pizza
        </MDBBtn>
        <MDBBtn
          style={{ backgroundColor: '#FF9200', color: 'white' }}
          color="light"
        >
          sandwiches
        </MDBBtn>
        <MDBBtn
          style={{ backgroundColor: '#FF9200', color: 'white' }}
          color="light"
        >
          creb{' '}
        </MDBBtn>
        <MDBBtn
          style={{ backgroundColor: '#FF9200', color: 'white' }}
          color="light"
        >
          drinks
        </MDBBtn>
      </MDBBtnGroup>
    </Container>
  );
};

export default Menudetil;
