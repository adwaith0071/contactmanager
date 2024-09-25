import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addContactapi } from './allApi'


function Addcontact() {

  const [add,setAdd]=useState({
    name:"",photo:"",phone:"", email:""
  })

  const handleAdd= async()=>{
    console.log(add)
    const {name,photo,phone,email}=add
    if(!name || !photo || !phone || !email){
      alert("Enter Valid Input")
      
    }
    else{
      const result =await addContactapi(add)
        console.log(result)
        if(result.status==201){
          alert("Success")
          setAdd({
            name:"",photo:"",phone:"", email:""
          })
        }
        else{
          alert("Uploading Failed")
        }
      
    }
  }

  return (
<>
<section className='add-contact ' style={{marginBottom:'165px'}}>
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
          <input type="text" placeholder='Full Name' onChange={(e)=>{setAdd({...add,name:e.target.value})}}  className='form-control border-5'/>
          </div>
          <div className='mb-2 '>
          <input type="text" placeholder='Photo URL' onChange={(e)=>{setAdd({...add,photo:e.target.value})}}  className='form-control border-5'/>
          </div>
          <div className='mb-2 '>
          <input type="number" placeholder='Phone Number' onChange={(e)=>{setAdd({...add,phone:e.target.value})}} className='form-control border-5'/>
          </div>
          <div className='mb-2 '>
          <input type="email" placeholder='Email ID' onChange={(e)=>{setAdd({...add,email:e.target.value})}}  className='form-control border-5'/>
          </div>

          <div className='mt-3 '>
            <button className='btn btn-info p-3 me-3' onClick={handleAdd}>Submit</button>
            <Link to={'/list'} className='btn btn-danger p-3 ' >Go Back</Link>

          </div>
          
        </form>

      </div>

    </div>



  </div>
  
</section>


</>  )
}

export default Addcontact