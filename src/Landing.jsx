import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
     <header className="bg-dark py-5">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center my-5">
                            <h1 className="display-5 fw-bolder text-white mb-2">Present your Contacts in a whole new way</h1>
                            <p className="lead text-white-50 mb-4">A contact manager is a software program that enables users to easily store and find contact information, such as names, addresses and telephone numbers!</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <Link to={'/list'} className='btn btn-info fa-lg p-4'>Get Started</Link>
                                <Link to={'/learn'} > <a href="" className='btn btn-light p-4 fa-lg'>Learn More</a> </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

     <section className="py-5 border-bottom" id="features">
        <h1 className='text-center'>Features</h1>
            <div className="container px-5 my-5 ">
                <div className="row gx-5 justify-content-around align-items-center">
                <Card className='p-0' style={{ width: '18rem' }}>
                <Card.Img  variant="top p-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RWaDztHHvCITlJjt3t441NgD97iy-BgcZA&s" />
                <Card.Body>
                    <Card.Title className='text-center'>Add Contacts</Card.Title>
                    <Card.Text style={{textAlign:'justify'}}>
                     Some quick example text to build on the card title and make up the
                     bulk of the card's content.
                    </Card.Text>
                </Card.Body> 
                   </Card>
                   

                   <Card className='p-0' style={{ width: '18rem' }}>
                <Card.Img variant="top p-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf85N9gWFsDtXFx49oEkzs1CnpPq8x9SFCSg&s" />
                <Card.Body>
                    <Card.Title className='text-center'>View Contacts</Card.Title>
                    <Card.Text style={{textAlign:'justify'}}>
                     Some quick example text to build on the card title and make up the
                     bulk of the card's content.
                    </Card.Text>
                </Card.Body> 
                   </Card>

                   <Card className='p-0' style={{ width: '18rem' }}>
                <Card.Img  variant="top p-0" src="https://www.svgimages.com/svg-image/s5/edit-contact-icon-256x256.png" />
                <Card.Body>
                    <Card.Title className='text-center'>Edit Contacts</Card.Title>
                    <Card.Text style={{textAlign:'justify'}}>
                     Some quick example text to build on the card title and make up the
                     bulk of the card's content.
                    </Card.Text>
                </Card.Body> 
                   </Card>
                   
                    
                </div>
            </div>
        </section>

        <section className="bg-light py-5">
            <div className="container px-5 my-5 px-5">
                <div className="text-center mb-5">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                    <h2 className="fw-bolder">Feedback</h2>
                    <p className="lead mb-0">We'd love to hear from you</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                     
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                           
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                           
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                          
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                          
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height:'10rem'}} data-sb-validations="required"></textarea>
                                <label for="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                           
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                        
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                          
                            <div className="d-grid"><button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

       
    
    
    </>



)
}

export default Landing