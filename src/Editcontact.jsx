// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState,useEffect } from 'react';
// import { updateContactApi,getContactapi } from './allApi';

// function Editcontact() {
//   const [currentContact, setCurrentContact] = useState({});
//   const [data,setData] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   // Fetch all contacts
//   const getData = async () => {
//     const result = await getContactapi();
//     if ( result.status === 200) {
//       setData(result.data);
//     }
//   };

//   // Handle form field changes
//   const handleChange = (e) => {
//     setCurrentContact({ ...currentContact, [e.target.name]: e.target.value });
//   };

//   // Handle form submission to update contact
//   const handleUpdateContact = async () => {
//     const result = await updateContactApi(currentContact.id, currentContact);
//     if (result.status === 200) {
//       getData(); // Refresh data after update
//       console.log("Contact updated successfully", result.data);

//     }
// };
//   return (
// <>
// <section className='add-contact '>
//   <div className='container p-3 '>
//     <div className='row'>
//       <div className='col'>
//         <u><h2 className='fw-bold text-dark'>Edit Contact</h2></u>
//         </div> 
//     </div>
//     <div className='row mt-3 align-items-center'>
//       <div className='col-md-4'>
//         <form action="">

//           <div className='mb-2 '>
//           <input type="text" placeholder=' Name' value={currentContact.name} onChange={handleChange} className='form-control border-5'/>
//           </div>
//           <div className='mb-2 '>
//           <input type="text" placeholder='Photo URL' value={currentContact.photo} onChange={handleChange} className='form-control border-5'/>
//           </div>
//           <div className='mb-2 '>
//           <input type="number" placeholder='Phone Number' value={currentContact.phone} onChange={handleChange} className='form-control border-5'/>
//           </div>
//           <div className='mb-2 '>
//           <input type="email" placeholder='Email ID' value={currentContact.email} onChange={handleChange}  className='form-control border-5'/>
//           </div>

//           <div className='mt-3 '>
//             <input type="submit" className='btn btn-info me-5 p-3 ' onClick={handleUpdateContact} value='Update' />
//             <Link to={'/'} className='btn btn-danger p-3'>Go Back</Link>

//           </div>
         
//         </form>
//       </div>
//       <div className='col-md-6'>
//           <img src="https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/512/Contact-icon.png" value={currentContact.photo} onChange={handleChange} alt="" style={{width:''}} className='contact-img img-fluid' />

//         </div>

//     </div>



//   </div>
  
// </section>


// </>  )
// }

// export default Editcontact


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Modal, Form, Button, Card } from 'react-bootstrap';
// import { deleteContact } from './allApi';
// import { updateContactApi,getContactapi } from './allApi';

// function Update() {
//   const [data, setData] = useState([]);
//   const [del, setDel] = useState({});
//   const [show, setShow] = useState(false);
//   const [currentContact, setCurrentContact] = useState({});

//   useEffect(() => {
//     getData();
//   }, [del]);

//   const getData = async () => {
//     const result = await getContactapi();
//     if (result.status === 200) {
//       setData(result.data);
//     }
//   };

//   const deletecont = async (id) => {
//     const result = await deleteContact(id);
//     if (result.status === 200) {
//       setDel(result);
//     }
//   };

//   const handleClose = () => setShow(false);
//   const handleShow = (contact) => {
//     setCurrentContact(contact);
//     setShow(true);
//   };

//   const handleUpdateContact = async () => {
//     const result = await updateContactApi(currentContact.id, currentContact);
//     if (result.status === 200) {
//       getData();
//       console.log("Contact Updated Successfully:", result.data);
//       handleClose();
//     }
//   };

//   const handleChange = (e) => {
//     setCurrentContact({ ...currentContact, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <div className='container-fluid mt-2 p-3' style={{ height: '100vh', width: 'auto' }}>
//         <div className="col mt-3 mb-5">
//           <h2>My Contacts</h2>
//         </div>
//         {data.length > 0 ? (
//           <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
//             {data.map(item => (
//               <div key={item.id}>
//                 <Card className='bg-light'>
//                   <Card.Img
//                     variant="top img"
//                     src={item.photo}
//                     style={{ borderRadius: '5px', height: '350px' }}
//                   />
//                   <Card.Body className='mt-0'>
//                     <ul className='list-group'>
//                       <li className='list-group-item list-group-item-action'>
//                         Name: <span>{item.name}</span>
//                       </li>
//                       <li className='list-group-item list-group-item-action'>
//                         Phone: <span>{item.phone}</span>
//                       </li>
//                       <li className='list-group-item list-group-item-action'>
//                         Email: <span>{item.email}</span>
//                       </li>
//                     </ul>
//                   </Card.Body>
//                   <Card.Footer className="d-flex justify-content-between">
//                     <Link to="#" className='btn btn-info me-1 flex-grow-1' onClick={() => handleShow(item)}>
//                       <i className="fa-solid fa-pen fa-lg" style={{ color: "#00060f" }} />
//                     </Link>
//                     <button className='btn btn-danger flex-grow-1' onClick={() => { deletecont(item.id) }}>
//                       <i className="fa-solid fa-trash fa-lg" style={{ color: "#fff" }} />
//                     </button>
//                   </Card.Footer>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <h3 className='text-danger'>No Contacts</h3>
//         )}
//       </div>
//       {/* Modal */}
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Contact</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={currentContact.name || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formPhoto">
//               <Form.Label>Photo Url</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="photo"
//                 value={currentContact.photo || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formPhone" className="mt-3">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="phone"
//                 value={currentContact.phone || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formEmail" className="mt-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={currentContact.email || ''}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleUpdateContact}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Update;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Form, Button, Card } from 'react-bootstrap';
import { deleteContact, updateContactApi, getContactapi } from './allApi';

function Update() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [currentContact, setCurrentContact] = useState({
    name: '',
    phone: '',
    email: '',
    photo: ''
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await getContactapi();
    if (result.status === 200) {
      setData(result.data);
    } else {
      console.error('Error fetching data');
    }
  };

  const deletecont = async (id) => {
    const result = await deleteContact(id);
    if (result.status === 200) {
      getData(); // Re-fetch contacts after delete
    } else {
      console.error('Error deleting contact');
    }
  };

  const handleClose = () => {
    setShow(false);
    setCurrentContact({
      name: '',
      phone: '',
      email: '',
      photo: ''
    }); // Reset currentContact on close
  };

  const handleShow = (contact) => {
    setCurrentContact(contact);
    setShow(true);
  };

  const handleUpdateContact = async () => {
    const result = await updateContactApi(currentContact.id, currentContact);
    if (result.status === 200) {
      getData(); // Refresh contacts after update
      console.log('Contact Updated Successfully:', result.data);
      handleClose();
    } else {
      console.error('Error updating contact');
    }
  };

  const handleChange = (e) => {
    setCurrentContact({ ...currentContact, [e.target.name]: e.target.value });
  };

  return (
    <>
   <Link to={'/'} className='btn btn-link mt-1'>Go Back</Link>
<div className='container-fluid p-3 mb-5'>
  <div className="row justify-content-between">
    <div className="col mt-1 mb-5">
      <h2>Edit Contacts</h2>
    </div>
  </div>
  {data.length > 0 ? (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
      {data.map(item => (
        <div key={item.id} className='col'>
          <Card className='bg-light h-100 w-75'>
            <Card.Img
              variant="top img"
              src={item.photo || 'https://via.placeholder.com/150'} // Fallback for missing photo
              style={{ borderRadius: '5px', height: '350px', objectFit: 'cover' }}
            />
            <Card.Body className='mt-0'>
              <ul className='list-group'>
                <li className='list-group-item list-group-item-action'>
                  Name: <span>{item.name}</span>
                </li>
                <li className='list-group-item list-group-item-action'>
                  Phone: <span>{item.phone}</span>
                </li>
                <li className='list-group-item list-group-item-action'>
                  Email: <span>{item.email}</span>
                </li>
              </ul>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Link to="#" className='btn btn-info me-1 flex-grow-1' onClick={() => handleShow(item)}>
                <i className="fa-solid fa-pen fa-lg" style={{ color: "#00060f" }} />
              </Link>
              <button className='btn btn-danger flex-grow-1' onClick={() => deletecont(item.id)}>
                <i className="fa-solid fa-trash fa-lg" style={{ color: "#fff" }} />
              </button>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  ) : (
    <h3 className='text-danger'>No Contacts</h3>
  )}
</div>

      
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={currentContact.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhoto">
              <Form.Label>Photo Url</Form.Label>
              <Form.Control
                type="text"
                name="photo"
                value={currentContact.photo}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={currentContact.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={currentContact.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateContact}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Update;
