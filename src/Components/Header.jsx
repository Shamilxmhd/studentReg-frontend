import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




function Header() {



    return (
        <Navbar collapseOnSelect expand="lg" className="bg-danger">
            <Container>
                <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
                    <h3><i class="fa-solid fa-school me-2 fa-bounce"></i>EnrollEase</h3>
            </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                      <Link to={'/'} style={{textDecoration:'none',color:'black'}}>  
                      <h5 className='fw-bold me-4'>Home</h5>
                      </Link>
                    <Link to={'/'} style={{textDecoration:'none',color:'black'}}>  
                      <h5 className='fw-bold me-4'>Services</h5>
                      </Link>
                        <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
                            <h5 className='fw-bold me-4'>About Us</h5>
                            </Link>
                       <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
                         <h5 className='fw-bold me-4'>Education</h5>
                         </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header