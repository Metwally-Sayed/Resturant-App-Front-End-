import { Container } from 'react-bootstrap';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';

const Menudetil = ({ filterHandler }: any) => {
  return (
    <Container className="d-flex justify-content-evenly mt-5">
      <MDBBtnGroup shadow="3">
        <MDBBtn
          id="btttn"
          onClick={() => {
            filterHandler('popular');
          }}
          style={{ backgroundColor: '#FF9200', color: 'white' }}
          color="light"
        >
          most popular
        </MDBBtn>
        <MDBBtn
          onClick={() => {
            filterHandler('pizza');
          }}
          style={{ backgroundColor: '#FF9200', color: 'white' }}
          color="light"
        >
          pizza
        </MDBBtn>
        <MDBBtn
          onClick={() => {
            filterHandler('burger');
          }}
          style={{ backgroundColor: '#FF9200', color: 'white' }}
          color="light"
        >
          sandwiches
        </MDBBtn>

        <MDBBtn
          onClick={() => {
            filterHandler('drinks');
          }}
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
