import { useEffect } from 'react';
import { getAllOrders } from '../../api';
import SideNav from './SideNav';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Dashbord = () => {
 

  return (
    <div>
      <Row>
        <Col md={'3'}>
          <SideNav />
        </Col>
        <Col md={'9'}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Dashbord;
