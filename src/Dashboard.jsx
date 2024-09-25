import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '76px' }}>
        <div className="container">
          
          <Link style={{ textDecoration: 'none' }} to={'/'}>
            <a className="navbar-brand" href="#!" style={{ fontSize: '26px', fontWeight: 'bold' }}>
              <i className="fa-regular fa-address-book fa-xl fa-flip" style={{ color: "#fcfcfc" }} />
              {' '}
              CONTACT MANAGER
            </a>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-expand-lg  navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              </Link>
              <Link to={'/about'} style={{textDecoration:'none'}}> <li className="nav-item"><a className="nav-link" href="#!">About</a></li></Link>
             
              <Link to={'/list'} style={{ textDecoration: 'none' }}>
                <li className="nav-item"><a className="nav-link" href="#!">Contact List</a></li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Dashboard;