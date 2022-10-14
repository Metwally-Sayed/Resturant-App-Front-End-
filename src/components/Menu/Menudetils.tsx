import { Container } from 'react-bootstrap';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import { AppProps } from '../../types';

const Menudetil = ({
  filterHandler,
  filterPopularHandler,
  allitems,
}: AppProps) => {
  return (
    <Container className="d-flex justify-content-evenly mt-5">
      <MDBBtnGroup shadow="3">
        <MDBBtn
          onClick={() => {
            allitems && allitems();
          }}
          id="btttn"
          style={{ backgroundColor: '#FF9200', color: 'white' }}
          color="light"
        >
          all products
        </MDBBtn>
        <MDBBtn
          id="btttn"
          onClick={() => {
            filterPopularHandler && filterPopularHandler();
          }}
          style={{ backgroundColor: '#FF9200', color: 'white' }}
          color="light"
        >
          most popular
        </MDBBtn>
        <MDBBtn
          onClick={() => {
            filterHandler && filterHandler('Pizza');
          }}
          style={{ backgroundColor: '#FF9200', color: 'white' }}
          color="light"
        >
          pizza
        </MDBBtn>
        <MDBBtn
          onClick={() => {
            filterHandler && filterHandler('Burger');
          }}
          style={{ backgroundColor: '#FF9200', color: 'white' }}
          color="light"
        >
          sandwiches
        </MDBBtn>

        <MDBBtn
          onClick={() => {
            filterHandler && filterHandler('Drinks');
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
