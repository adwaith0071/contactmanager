import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Dashboard() {
  return (

    <>
       <Navbar className=" bg-dark" style={{height:'76px'}}>
        <Container>
          <Navbar.Brand className='text-light' href="#home" style={{fontSize:'26px', fontWeight:'bold'}}>
          <i className="fa-regular fa-address-book fa-xl fa-flip" style={{color: "#fcfcfc"}} />
          {' '}
            Contact Manager
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </>
    )
}

export default Dashboard