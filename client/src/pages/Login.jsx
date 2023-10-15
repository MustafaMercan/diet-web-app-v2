import React, { useEffect } from 'react'
import loginPhoto from '../assets/loginFormImage.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { formHandler } from '../utils/formHandler'
import { loginSubmitHandler } from '../utils/submitHandler'

const Login = () => {

  const [loginForm, setLoginForm] = useState({})
  const [information, setInformation] = useState({
    message: "",
  })

  useEffect(() => {
    console.log(loginForm)
  }, [loginForm])

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
            <form className="flex flex-col items-center justify-center mt-32 w-full "
              onChange={(event) => formHandler({ event, form: loginForm, setForm: setLoginForm })}
              onSubmit={(event) => loginSubmitHandler({ event, setForm: setInformation, data: loginForm, url: '/user/login' })}
            >
              <div className='shadow-lg w-full'>
                <div className="my-3 text-xl font-medium text-center">Login</div>
                <div className="p-5 pt-3">
                  <input name="email" type="text" placeholder="Email Address" className="w-full p-3 my-3 border outline-0 placeholder:text-black" />
                  <input name="password" type="password" id="password" placeholder="Password" className="w-full p-3 my-3 border outline-0 placeholder:text-black" />
                  <div className="mb-3"><input type="checkbox" name="person" id="person" className="mr-2" />Remember me
                  </div>
                </div>
                <button type='submit' className="w-full p-3 text-xl font-medium text-center text-white bg-blue-600">Login</button>
              </div>
              {
                information?.message && <p>{information?.message}</p>
              }
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
