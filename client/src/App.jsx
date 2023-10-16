import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Main/Home'
import Login from './pages/Main/Login'
import About from './pages/Main/About'
import Register from './pages/Main/Register'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import UserProfile from './pages/User/UserProfile'
import UserAuthentication from './components/Authentication/UserAuthentication'
import RootLogin from './pages/Root/RootLogin'
import Root from './pages/Root/Root'


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
        
        <Route path = '/root/login' element={<RootLogin/>} />
        <Route path = '/root' element = {<Root/> } />
        
      </Routes>
      <Footer />

    </div>
  )
}

export default App
