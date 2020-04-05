import React from "react";
import { Navbar,Nav } from "react-bootstrap";
import './Header.css';
import {Link} from "react-router-dom";
class Header extends React.Component{
  constructor(){
    super();
    this.state = {value: 'hello'}
  }
  

  render() {
    return (
        <React.Fragment>
          <Navbar className="Nav-Shadow" bg="light" variant="light">
            <Navbar.Brand href="">Foliofy</Navbar.Brand>
            <Nav className="mr-auto">
                 <Nav.Link href="" ><Link to={"/Personal"}  >Personal</Link></Nav.Link> 
                <Nav.Link href="" ><Link to={"/Education"}  >Education</Link></Nav.Link>
                <Nav.Link href="" ><Link to={"/Experience"}  >Experience</Link></Nav.Link>
                <Nav.Link href="" ><Link to={"/Abilities"}  >Abilities</Link></Nav.Link>
                 
            </Nav> 
                    
          </Navbar>
    </React.Fragment>
    );
  };
} 
  


export default Header;


