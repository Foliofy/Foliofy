import React from "react";
import { Navbar } from "react-bootstrap";
import './Header.css';
const header = () => (
  <React.Fragment>
    <Navbar className="Nav-Shadow" bg="light" variant="light">
      <Navbar.Brand href="#home">Foliofy</Navbar.Brand>
      {/* <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav> */}
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form> */}
    </Navbar>
  </React.Fragment>
);

export default header;
