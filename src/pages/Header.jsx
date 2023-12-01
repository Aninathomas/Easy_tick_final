import React from 'react'
import icon from '../icons/icon.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

function Header() {
  return (
    <>
    
      <nav>
      <div>
     

    <Navbar expand="lg" className="bg-warning position-fixed top-0 w-100" style={{zIndex:'1'}} >
    <Container>
      
      <a class="navbar-brand"  href="/"> <img style={{width:'40px'}} src={icon}></img>Easy Tick</a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">

          <Nav.Link className='btn border rounded me-5 mt-1'></Nav.Link>

          <Nav.Link className='btn border rounded me-5 mt-1'></Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

      
  </div>
</nav>
    </>
    
  )
}

export default Header