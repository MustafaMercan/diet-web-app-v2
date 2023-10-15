import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Register from './pages/Register'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import UserProfile from './pages/UserProfile'
import UserAuthentication from './components/Authentication/UserAuthentication'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />

        <Route path='/user/*' element={<UserAuthentication />}>
          <Route path=':id' element={<UserProfile />} />
        </Route>
        
      </Routes>
      <Footer />

    </div>
  )
}

export default App
