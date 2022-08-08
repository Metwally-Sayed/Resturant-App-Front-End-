import check from '../../imgs/Check.png';
import {  Image } from 'react-bootstrap';


const Ordersuccess = () => {
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
