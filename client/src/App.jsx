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
import CreateBooking from './components/Booking/User/CreateBooking'
import UserBookings from './pages/User/UserBookings'
import RootBooking from './pages/Root/RootBooking'
import UserEditProfile from './pages/User/UserEditProfile'
import RootUserProfile from './pages/Root/UserProfile'
import Chat from './pages/Chat/Chat'

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
          <Route path=':id' element={<UserProfile />}/>
          <Route path='booking' element = {<UserBookings/>} />
          <Route path=':id/edit' element = {<UserEditProfile/>}/>
        </Route>

        
        <Route path = '/chat' element = {<Chat/>} />
        <Route path='/root/login' element={<RootLogin />} />
        <Route path='/root' element={<Root />} />
        <Route path = '/root/bookings' element={<RootBooking/>}/>
        <Route path = '/root/:id' element={<RootUserProfile/>} />

      </Routes>
      <Footer />

    </div>
  )
}

export default App
