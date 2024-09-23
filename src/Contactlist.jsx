import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Contactlist() {
  return (
<>
<div className='container mt-3'>
    <div className='row'>
        <div className='col'>
            <h1 style={{fontSize:'40px', fontWeight:'bolder'}}>Contact Manager</h1>
             <Link to={'/add'} className='btn btn-info p-2'><i className="fa-solid fa-plus fa-lg mt-3" style={{color: "#010b13",}} /> Add New</Link>
        </div>

    </div>
  

</div>

<div className='container mt-5 ' >
      <div className='row'>
        <div className='col-md-2 col-sm-6 mb-4' >
          <Card className='bg-light' >
            <Card.Img 
              variant="top text-center p-2" 
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d3c570a5-78c5-430f-902d-c375aeb23adc/d72muc8-9a1d5362-2931-4ac1-bf10-d4f4cd21a326.png" 
              style={{ borderRadius: '15px'}} 
            />
            <Card.Body className='mt-0'>
              <ul className='list-group'>
                <li className='list-group-item list-group-item-action'>
                  Name: <span>Adwaith</span>
                </li>
                <li className='list-group-item list-group-item-action'>
                  Phone: <span>+917867543456</span>
                </li>
                <li className='list-group-item list-group-item-action'>
                  Email: <span>Adw@gmail.com</span>
                </li>
              </ul>
            </Card.Body>
            <Card.Footer>
           
                <Link to={'/view'} className='btn btn-warning p-2 me-4'><i className="fa-solid fa-eye fa-lg" style={{color: "#000714"}} /></Link>
                <Link to={'/edit'} className='btn btn-info p-2 me-4'><i className="fa-solid fa-pen fa-lg" style={{color: "#00060f"}} /></Link>
                <Link className='btn p-2 ' style={{backgroundColor:'red'}}><i className="fa-solid fa-trash fa-lg" style={{color: "#00060f"}} /></Link>

               
               
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>

</>  )
}

export default Contactlist