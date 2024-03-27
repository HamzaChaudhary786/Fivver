import React, { useEffect } from 'react'
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
import Register from './Pages/Register/Register'
import Logout from './Components/Logout/Logout'
import DeleteGig from './Pages/deleteGig/DeleteGig'
import EditGig from './Pages/editGig/EditGig'
import GigDetail from './Pages/gigDetail/GigDetail'
import smoothScroll from './Components/SmoothScroll/smoothScroll'

const App = () => {
  useEffect(() => {
    smoothScroll();
  }, [])
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/register' element={<Register />} /> */}

        <Route path='/' element={<Home />} />
        <Route path='/gigs' element={<Gigs />} />
        <Route path='/bussiness' element={<Bussiness />} />
        <Route path='/mygigs' element={<MyGigs />} />
        <Route path="/order" element={<Order />} />
        <Route path='/sgig/:id' element={<SGig />} />
        <Route path="/smessage/:id" element={<SMessage />} />
        <Route path="/gigs/gigDetail/:id" element={<GigDetail />} />

        <Route path='/add' element={<Add />} />

        <Route path='/gigs/editGig/:id' element={<EditGig />} />

        <Route path='/gigs/deleteGig/:id' element={<DeleteGig />} />
        <Route path="/message" element={<Message />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} /> */}

      </Routes>
      <Footer />
    </>
  )
}

export default App



































