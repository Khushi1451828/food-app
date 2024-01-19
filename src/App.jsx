import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './shared/Navbar'
import Home from './pages/Home'
import {Route,  Routes} from 'react-router-dom'
import Footer from './shared/Footer'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   

     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
<Footer/>
    
    </>
  )
}

export default App
