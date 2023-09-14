import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Gigs from "./Pages/Gigs/Gigs"
import SGig from './Pages/SGig/SGig';
import MyGigs from './Pages/MyGigs/MyGigs';
import Order from './Pages/Orders/Order';
import Message from './Pages/Messages/Message';
import SMessage from './Pages/SMessage/SMessage';
import Add from './Pages/Add/Add';
import Bussiness from './Pages/Fiverr_Bussiness/Bussiness'
import Login from './Pages/Login/Login'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gigs' element={<Gigs />} />
        <Route path='/bussiness' element={<Bussiness />} />
        <Route path='/mygigs' element={<MyGigs />} />
        <Route path="/order" element={<Order />} />
        <Route path='/sgig/:id' element={<SGig />} />
        <Route path="/smessage/:id" element={<SMessage />} />
        <Route path='/add' element={<Add />} />
        <Route path="/message" element={<Message />} />
        <Route path='/login' element={<Login />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App



































