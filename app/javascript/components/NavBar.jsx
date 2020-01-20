import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>React Rails </Navbar.Brand>
      <Navbar.Collapse className='justify-content-end'>
        {/* <Navbar.Text>
          Signed in as: <a href='#login'>Mark Otto</a>
        </Navbar.Text> */}
        <Form inline>
          <Form.Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Form.Row>
          <Button className="ml-2">Log In</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
