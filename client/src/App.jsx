import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/register' element ={<Register/>} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
