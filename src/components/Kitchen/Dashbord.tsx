import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
type Props = {};

const Dashbord = (props: Props) => {
  return (
    <>
      <Row>
        <Col>
          <div className="container-fluid">
            <div className="row flex-nowrap">
              <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                  <a
                    href="/"
                    className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                  >
                    <span className="fs-5 d-none d-sm-inline fw-bolded">
                      Dashboard
                    </span>
                  </a>
                  <ul
                    className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                    id="menu"
                  >
                    <li className="nav-item">
                      <a href="#" className="nav-link align-middle px-0">
                        <i className="fs-4 bi-house"></i>{' '}
                        <span className="ms-1 d-none d-sm-inline fw-bold">
                          Pending Orders
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#submenu1"
                        data-bs-toggle="collapse"
                        className="nav-link px-0 align-middle"
                      >
                        <i className="fs-4 bi-speedometer2"></i>{' '}
                        <span className="ms-1 d-none d-sm-inline fw-bold">
                          Completed Orders
                        </span>{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashbord;
