import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { getContactapi } from './allApi';
import { deleteContact } from './allApi';

function Contactlist() {
  const [data, setData] = useState([]);
  const [del,setDel]= useState({})

  useEffect(() => {
    getData();
  }, [del]);

  const getData = async () => {
    const result = await getContactapi();
    if (result.status === 200) {
      setData(result.data);
    }
  };

  const deletecont= async(id)=>{
    const result=await deleteContact(id)
    if(result.status==200){
      setDel(result)

    }
  }

  return (
    <>
      <div className='container mt-3'>
        <div className='row justify-content-between'>
          <div className="col">
            <h2>My Contact</h2> 
          </div>
          <div className='col text-end'>
            <Link to={'/add'} className='btn btn-info'>
              <i className="fa-solid fa-plus fa-lg" style={{ color: "#010b13" }} /> Add New
            </Link>
          </div>
        </div>
      </div>

      <div className='container-fluid border shadow mt-4'>
        {data.length > 0 ? (
          <div className='row'>
            {data.map(item => (
              <div className='col-md-3 col-sm-6 mb-4'>
                <Card className='bg-light'>
                  <Card.Img
                    variant="top img"
                  height={'337px'} src={item.photo}
                    style={{ borderRadius: '15px' }}
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
                    <button className='btn btn-danger flex-grow-1' onClick={()=>{deletecont(item.id)}}>
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
    </>
  );
}

export default Contactlist;
