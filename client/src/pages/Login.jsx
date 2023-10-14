import React from 'react'
import loginPhoto from '../assets/loginFormImage.png'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="relative bg-white overflow-hidden md:m-32 max-md:m-4">
      <div className="flex justify-center min-h-screen md:p-12 max-md:p-2">
        <div className="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: `url(${loginPhoto})` }}>
        </div>

        <div className="items-center w-full  p-8 mx-auto lg:px-12 lg:w-3/5">
          
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Get your free account now.
            </h1>
            <h2 className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account and begin setting up your profile.
            </h2>

            <form className="flex flex-col items-center justify-center mt-32 w-full">
              <div className='shadow-lg w-1/2'>
                <div className="my-3 text-xl font-medium text-center">Login</div>
                <div className="p-5 pt-3">
                  <input type="text" placeholder="Email Address" className="w-full p-3 my-3 border outline-0 placeholder:text-black" />
                  <input type="password" name="password" id="password" placeholder="Password" className="w-full p-3 my-3 border outline-0 placeholder:text-black" />
                  <div className="mb-3"><input type="checkbox" name="person" id="person" className="mr-2" />Remember me
                  </div>
                </div>
                <div className="w-full p-3 text-xl font-medium text-center text-white bg-blue-600">Login</div>
              </div>


              <div><NavLink to="/register" className="inline-block mt-10 text-blue-500 underline">New? signup</NavLink></div>
              <div><NavLink to="/forgotPass" className="text-blue-500 underline">Forgot Password</NavLink></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
