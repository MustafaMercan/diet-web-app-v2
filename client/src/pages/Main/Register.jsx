import React from 'react'
import registerPhoto from '../../assets/registerFormImage.png'
import { formHandler } from '../../utils/formHandler'
import { useState } from 'react'
import { registerSubmitHandler } from '../../utils/submitHandler'
import { NavLink } from 'react-router-dom'
const Register = () => {

    const [registerForm,setRegisterForm] = useState({});
    const [information,setInformation] = useState({
        message:"",
        error:false
      })
    return (

        <>
            <div className="relative bg-white overflow-hidden md:m-32 max-md:m-4">
                <div className="flex justify-center min-h-screen md:p-12 max-md:p-2">
                    <div className="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: `url(${registerPhoto})` }}>
                    </div>

                    <div className="items-center w-full  p-8 mx-auto lg:px-12 lg:w-3/5">

                        <div className="w-full">
                            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Get your free account now.
                            </h1>
                            <h2 className="mt-4 text-gray-500 dark:text-gray-400">
                                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                            </h2>
     
                            <form className="grid grid-cols-1 gap-6 mt-24 md:grid-cols-2"
                             onChange={(event) => formHandler({event,form:registerForm, setForm:setRegisterForm})}
                             onSubmit={(event) => registerSubmitHandler({event, setForm:setInformation, information:registerForm,url:'/user/register'})}
                             >
                            
                                <div>
                                    <label htmlFor="firstName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                    <input required  type="text" name="firstName" placeholder="Mustafa" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label htmlFor="lastName"className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                                    <input required name="lastName" type="text" placeholder="Mercan" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                                    <input required name="phoneNumber" type="text" placeholder="(555-555-55-55)" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input required name="email" type="email" placeholder="email@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <input required name="password" type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label htmlFor="passwordConfirm" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                                    <input required name="passwordConfirm" type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <button type='submit' className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    <span>Sign Up </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </form>
                            {
                                information?.error && <p>{information?.message}</p>
                            }
                            {
                                information?.message === "The user created." && <NavLink to='/login'>Hesabınız Oluşturuldu. <span className=' text-blue-800 underline'>Lütfen Giriş Yapınız </span></NavLink>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Register
