import React from 'react'
import { Link } from 'react-router-dom'


function Viewcontact() {
  return (
    <>
    <section>
      <div className='container'>
    <div className='d-flex justify-content-center align-items-center p-3' style={{height:'97vh'}}>

      <div className=' w-50 p-4 border shadow'>
        <u className='h3 fw-bolder text-dark mb-4'>View Conatct</u>
        <div className='row'>
          <div className='col-md-4'>
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
          <div className="col-md-6 container-fluid">
            <img src="https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/512/Contact-icon.png" alt="img" className='img-fluid' />
          </div>
           <div className='mt-3'>
      <Link to={'/list'} className='btn btn-danger'>Go Back</Link>

    </div>

        </div>

      </div>

    </div>
   

      </div>
    </section>
   
    
    
    </>
  )
}

export default Viewcontact