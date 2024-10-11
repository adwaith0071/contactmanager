// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import { getContactapi } from './allApi';
// import { deleteContact } from './allApi';
// import { addContactapi } from './allApi';
// import { useNavigate } from 'react-router-dom';
// import Modal from 'react-bootstrap/Modal';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';


// function Contactlist() {
//   const [data, setData] = useState([]);
//   const [del,setDel]= useState({})
// // --------------------------------------
//   const [show, setShow] = useState(true);
//   const navigate = useNavigate()

//   const [add, setAdd] = useState({
//     name: "", photo: "", phone: "", email: ""
// })

// const handleAdd = async () => {
//   console.log(add)
//   const { name, photo, phone, email  } = add
//   if (!name ||  !photo || !phone || !email) {
//       toast.warning("Please fill all the fields")
//   }
//   else {
//       const result = await addContactapi(add)
//       console.log(result)
//       if (result.status == 201) {
//           alert("Success!!!")
//           setAdd({
//               name: "", photo: "", phone: "", email: ""
//           })
//           handleClose()
//           navigate("/")
//       }
//       else {
//           alert("Uploading Failed!!!")
//           console.log(result)
//       }
//   }
// }

// const handleClose = () => {
//   setShow(false);
//   navigate("/")
// }
// const handleShow  = () => setShow(true);
// // ----------------------------------------
//   useEffect(() => {
//     getData();
//   }, [del]);

//   const getData = async (data) => {
//     const result = await getContactapi(data);
//     if (result.status === 200) {
//       setData(result.data);
//     }
//   };

//   const deletecont= async(id)=>{
//     const result=await deleteContact(id)
//     if(result.status==200){
//       setDel(result)

//     }
//   }

//   return (
//     <>
//       <div className='container mt-3'>
//         <div className='row justify-content-between'>
         
//           <div className='col text-end'>
//             <Link onClick={handleShow} className='btn btn-info p-3'>
//               <i className="fa-solid fa-plus fa-lg" style={{ color: "#010b13" }} /> Add New
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className='container-fluid border shadow mt-4'>
//         {data.length > 0 ? (
//           <div className='row'>
//             {data.map(item => (
//               <div className='col-md-3 col-sm-6 mb-4'>
//                 <Card className='bg-light'>
//                   <Card.Img
//                     variant="top img" 
//                   height={'337px'} src={item.photo}
//                     style={{ borderRadius: '15px',objectFit:'cover' }}
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
                   
//                     <Link to={'/edit'} className='btn btn-info me-1 flex-grow-1'>
//                       <i className="fa-solid fa-pen fa-lg" style={{ color: "#00060f" }} />
//                     </Link>
//                     <button className='btn btn-danger flex-grow-1' onClick={()=>{deletecont(item.id)}}>
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


//       {/* modal */}

//       <Modal
//                 show={show}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title>Add Contact</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <FloatingLabel controlId="floatingtitle" label="Full Name" className="mb-3">
//                         <Form.Control type="text" onChange={(e) => { setAdd({ ...add, name: e.target.value }) }} placeholder="Full Name" />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingimg" label="Photo URL" className="mb-3">
//                         <Form.Control type="text" onChange={(e) => { setAdd({ ...add, photo: e.target.value }) }} placeholder="Photo URL" />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingnumber" label="Phone Number" className='mb-3'>
//                         <Form.Control type="text" onChange={(e) => { setAdd({ ...add, phone: e.target.value }) }} placeholder="+91 XXXXXXXXXX" />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingemail" label="Email ID">
//                         <Form.Control type="text" onChange={(e) => { setAdd({ ...add, email: e.target.value }) }} placeholder="name@gmail.com" />
//                     </FloatingLabel>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleAdd}>Upload</Button>
//                 </Modal.Footer>
//             </Modal>
//     </>
//   );
// }

// export default Contactlist;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { getContactapi } from './allApi';
// import { deleteContact } from './allApi';
// import { addContactapi } from './allApi';
// import { useNavigate } from 'react-router-dom';
// import Modal from 'react-bootstrap/Modal';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import { toast } from 'react-toastify';

// function Contactlist() {
//   const [data, setData] = useState([]);
//   const [del, setDel] = useState({});
//   const [show, setShow] = useState(true);
//   const navigate = useNavigate();

//   const [add, setAdd] = useState({
//     name: "", photo: "", phone: "", email: ""
//   });

//   const handleAdd = async () => {
//     console.log(add);
//     const { name, photo, phone, email } = add;
//     if (!name || !photo || !phone || !email) {
//       toast.warning("Please fill all the fields");
//     } else {
//       const result = await addContactapi(add);
//       console.log(result);
//       if (result.status === 201) {
//         alert("Success!!!");
//         setAdd({
//           name: "", photo: "", phone: "", email: ""
//         });
//         handleClose();
//         navigate("/");
//       } else {
//         alert("Uploading Failed!!!");
//         console.log(result);
//       }
//     }
//   };

//   const handleClose = () => {
//     setShow(false);
//     navigate("/");
//   };

//   const handleShow = () => setShow(true);

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

//   return (
//     <>
//       <div className='container mt-3'>
//         <div className='row justify-content-between'>
//           <div className='col text-end'>
//             <Link onClick={handleShow} className='btn btn-info p-3'>
//               <i className="fa-solid fa-plus fa-lg" style={{ color: "#010b13" }} /> Add New
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className='container-fluid border shadow mt-4'>
//         {data.length > 0 ? (
//           <div className='row'>
//             {data.map(item => (
//               <div className='col-md-3 col-sm-6 mb-4' key={item.id}>
//                 <Card className='bg-light'>
//                   <Card.Img
//                     variant="top img"
//                     height={'337px'} src={item.photo}
//                     style={{ borderRadius: '15px', objectFit: 'cover' }}
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
//                     <Link to={'/edit'} className='btn btn-info me-1 flex-grow-1'>
//                       <i className="fa-solid fa-pen fa-lg" style={{ color: "#00060f" }} />
//                     </Link>
//                     <button className='btn btn-danger flex-grow-1' onClick={() => { deletecont(item.id); }}>
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
//       <Modal
//         show={show}
//         onHide={handleClose}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Add Contact</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <FloatingLabel controlId="floatingtitle" label="Full Name" className="mb-3">
//             <Form.Control type="text" onChange={(e) => { setAdd({ ...add, name: e.target.value }) }} placeholder="Full Name" />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingimg" label="Photo URL" className="mb-3">
//             <Form.Control type="text" onChange={(e) => { setAdd({ ...add, photo: e.target.value }) }} placeholder="Photo URL" />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingnumber" label="Phone Number" className='mb-3'>
//             <Form.Control type="text" onChange={(e) => { setAdd({ ...add, phone: e.target.value }) }} placeholder="+91 XXXXXXXXXX" />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingemail" label="Email ID">
//             <Form.Control type="text" onChange={(e) => { setAdd({ ...add, email: e.target.value }) }} placeholder="name@gmail.com" />
//           </FloatingLabel>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleAdd}>Upload</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Contactlist;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getContactapi, deleteContact, addContactapi } from './allApi';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { toast } from 'react-toastify';

function Contactlist() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [add, setAdd] = useState({
    name: "", photo: "", phone: "", email: ""
  });

  // Fetch contacts when the component mounts
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await getContactapi();
    if (result.status === 200) {
      setData(result.data);
    }
  };

  const handleAdd = async () => {
    const { name, photo, phone, email } = add;
    if (!name || !photo || !phone || !email) {
      alert("Please fill all the fields");
    } else {
      const result = await addContactapi(add);
      if (result.status === 201) {
        alert("Contact added successfully!");

        // Update the state with the new contact, so it shows up immediately
        setData(prevData => [...prevData, result.data]);

        // Reset the input fields
        setAdd({
          name: "", photo: "", phone: "", email: ""
        });
        
        // Close the modal
        handleClose();
      } else {
        alert("Failed to add contact");
      }
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deletecont = async (id) => {
    const result = await deleteContact(id);
    if (result.status === 200) {
      // Filter out the deleted contact from the state
      setData(prevData => prevData.filter(item => item.id !== id));
    }
  };

  return (
    <>
      <div className='container mt-3'>
        <div className='row justify-content-between'>
          <div className='col text-end'>
            <Link onClick={handleShow} className='btn btn-info p-3'>
              <i className="fa-solid fa-plus fa-lg" style={{ color: "#010b13" }} /> Add New
            </Link>
          </div>
        </div>
      </div>

      <div className='container-fluid border shadow mt-4'>
        {data.length > 0 ? (
          <div className='row'>
            {data.map(item => (
              <div className='col-md-3 col-sm-6 mb-4' key={item.id}>
                <Card className='bg-light'>
                  <Card.Img
                    variant="top img"
                    height={'337px'} src={item.photo}
                    style={{ borderRadius: '15px', objectFit: 'cover' }}
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
                    <Link to={'/edit'} className='btn btn-info me-1 flex-grow-1'>
                      <i className="fa-solid fa-pen fa-lg" style={{ color: "#00060f" }} />
                    </Link>
                    <button className='btn btn-danger flex-grow-1' onClick={() => { deletecont(item.id); }}>
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
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingtitle" label="Full Name" className="mb-3">
            <Form.Control type="text" onChange={(e) => { setAdd({ ...add, name: e.target.value }) }} value={add.name} placeholder="Full Name" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingimg" label="Photo URL" className="mb-3">
            <Form.Control type="text" onChange={(e) => { setAdd({ ...add, photo: e.target.value }) }} value={add.photo} placeholder="Photo URL" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingnumber" label="Phone Number" className='mb-3'>
            <Form.Control type="text" onChange={(e) => { setAdd({ ...add, phone: e.target.value }) }} value={add.phone} placeholder="+91 XXXXXXXXXX" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingemail" label="Email ID">
            <Form.Control type="text" onChange={(e) => { setAdd({ ...add, email: e.target.value }) }} value={add.email} placeholder="name@gmail.com" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Contactlist;
