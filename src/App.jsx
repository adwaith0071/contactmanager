import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import "./bootstrap.min.css"
import { Routes,Route, Navigate } from 'react-router-dom';


import './App.css'
import Contactlist from './Contactlist';
import Addcontact from './Addcontact';
import Editcontact from './Editcontact';
import Landing from './Landing';
import Footer from './Footer';
import Learnmore from './Learnmore';
import About from './About'; 

function App() {

  return (
    <>
  <Dashboard/>
  <Routes>
    <Route path='/' element={<Landing/>} />
    <Route path='/list' element={<Contactlist/>}/>
    <Route path='/add' element={<Addcontact/>}/>
    <Route path='/edit' element={<Editcontact/>}/>
    <Route path='/learn' element={<Learnmore/>}/>
    <Route path='/about' element={<About/>}/>


  </Routes>

  <Footer/>

    </>
  )
}

export default App
