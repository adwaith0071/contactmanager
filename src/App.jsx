import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import "./bootstrap.min.css"
import { Routes,Route, Navigate } from 'react-router-dom';


import './App.css'
import Contactlist from './Contactlist';
import Addcontact from './Addcontact';
import Viewcontact from './Viewcontact';
import Editcontact from './Editcontact';

function App() {

  return (
    <>
  <Dashboard/>
  <Routes>
    <Route path='/' element={<Contactlist/>}  />
    <Route path='/list' element={<Contactlist/>}/>
    <Route path='/add' element={<Addcontact/>}/>
    <Route path='view' element={<Viewcontact/>}/>
    <Route path='/edit' element={<Editcontact/>}/>
  </Routes>

    </>
  )
}

export default App
