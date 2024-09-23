import React from 'react'
import { Link } from 'react-router-dom'

function Addcontact() {
  return (
<>
<section className='add-contact '>
  <div className='container p-3 '>
    <div className='row'>
      <div className='col'>
        <u><h2 className='fw-bold text-dark'>Create Contact</h2></u>
        </div> 
    </div>
    <div className='row mt-3'>
      <div className='col-md-4'>
        <form action="">

          <div className='mb-2 '>
          <input type="text" placeholder='First Name' className='form-control border-5'/>
          </div>
          <div className='mb-2 '>
          <input type="text" placeholder='Last Name' className='form-control border-5'/>
          </div>
          <div className='mb-2 '>
          <input type="text" placeholder='Photo URL' className='form-control border-5'/>
          </div>
          <div className='mb-2 '>
          <input type="number" placeholder='Phone Number' className='form-control border-5'/>
          </div>
          <div className='mb-2 '>
          <input type="email" placeholder='Email ID' className='form-control border-5'/>
          </div>

          <div className='mt-3 '>
            <input type="submit" className='btn btn-info me-5 p-3 ' value='Submit' />
            <Link to={'/list'} className='btn btn-danger p-3'>Go Back</Link>

          </div>
          
        </form>

      </div>

    </div>



  </div>
  
</section>


</>  )
}

export default Addcontact