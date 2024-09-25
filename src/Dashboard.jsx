import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

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
      
      </Container>
    </Navbar>
    </>
  );
}

export default Dashboard;