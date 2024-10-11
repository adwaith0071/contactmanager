import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import { Routes,Route} from 'react-router-dom';
import './bootstrap.min.css'


import './App.css'
import Contactlist from './Contactlist';
import Addcontact from './Addcontact';
import Editcontact from './Editcontact';
import Footer from './Footer';


function App() {

  return (
    <>
  <Dashboard/>
  <Routes>
    <Route path='/' element={<Contactlist/>}/>
    {/* <Route path='/add' element={<Addcontact/>}/> */}
    <Route path='/edit' element={<Editcontact/>}/>
   


  </Routes>

  <Footer/>

    </>
  )
}

export default App
