import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div
      className="vh-100 text-center"
      style={{ backgroundColor: '#303030', color: 'white', paddingTop: '80px' }}
    >
      <h3>Dash Board</h3>
      <Link
        className="text-decoration-none py-3"
        style={{ color: 'white' }}
        to="penddingorders"
      >
        <p>Pending Orders</p>
      </Link>
      <Link
        className="text-decoration-none py-3"
        style={{ color: 'white' }}
        to="completedorders"
      >
        <p>Completed Orders</p>
      </Link>
    </div>
  );
};

export default SideNav;
