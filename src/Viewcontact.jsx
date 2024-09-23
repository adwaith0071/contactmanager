import React from 'react'
import { Link } from 'react-router-dom'


function Viewcontact() {
  return (
    <>
    <section className='mt-3'>
  <div className='container'>
    <div className='d-flex justify-content-center align-items-center p-3' style={{ height: '100vh' }}>
      <div className=' w-md-50 p-4 border shadow'>
        <u className='h3 fw-bolder text-dark mb-4'>View Contact</u>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <ul className='list-group'>
              <li className='list-group-item list-group-item-action mt-2 shadow border p-3'>
                Name: <span>Adwaith</span>
              </li>
              <li className='list-group-item list-group-item-action mt-2 shadow border p-3'>
                Phone: <span>+917867543456</span>
              </li>
              <li className='list-group-item list-group-item-action mt-2 shadow border p-3'>
                Email: <span>Adw@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className='col-12 col-md-6 mt-3 mt-md-0'>
            <img 
              src="https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/512/Contact-icon.png" 
              alt="Contact icon" 
              className='img-fluid' 
            />
          </div>
        </div>
        <div className='mt-3'>
          <Link to={'/list'} className='btn btn-danger'>Go Back</Link>
        </div>
      </div>
    </div>
  </div>
</section>

   
    
    
    </>
  )
}

export default Viewcontact