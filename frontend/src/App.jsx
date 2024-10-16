import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Profile from './components/Profile'
import { Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  const footerStyle = {
    backgroundColor: '#333', // Dark background for the footer
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  };

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/log' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>

    <footer style={footerStyle}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} SRAKA MART. All rights reserved.
        </Typography>
      </footer>
    </>
  )
}

export default App
