import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Dashboard() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark p-3" >
      <Container >
      <Link style={{ textDecoration: 'none' }} to={'/'}>
            <a className="navbar-brand" href="#!" style={{ fontSize: '26px', fontWeight: 'bold', color:'whitesmoke' }}>
              <i className="fa-regular fa-address-book fa-xl fa-flip" style={{ color: "#fcfcfc" }} />
              {' '}
              CONTACT MANAGER
            </a>
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'whitesmoke',borderColor:'whitesmoke'}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container justify-content-end">
          <Link to={'/'} style={{ textDecoration: 'none' }}>
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!" style={{color:'whitesmoke'}}>Home</a></li>
              </Link>
              <Link to={'/about'} style={{textDecoration:'none'}}> <li className="nav-item"><a className="nav-link" href="#!" style={{color:'whitesmoke'}}>About</a></li></Link>
             
              <Link to={'/list'} style={{ textDecoration: 'none' }}>
                <li className="nav-item"><a className="nav-link" href="#!" style={{color:'whitesmoke'}}>Contact List</a></li>
              </Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Dashboard;