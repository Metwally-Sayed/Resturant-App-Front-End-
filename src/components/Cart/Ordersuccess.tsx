import check from '../../imgs/Check.png';
import { Container, Image } from 'react-bootstrap';
type Props = {};

const Ordersuccess = (props: Props) => {
  return (
    <>
      <div className=" d-flex align-items-center justify-content-center">
        <Image src={check} />
      </div>
      <div className=" d-flex align-items-center justify-content-center">
        <h1>ORDER PLACED</h1>
      </div>
    </>
  );
};

export default Ordersuccess;
