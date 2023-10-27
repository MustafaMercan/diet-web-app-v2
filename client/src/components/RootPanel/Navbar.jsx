import React from 'react'
import { NavLink } from 'react-router-dom'
import { logoutRoot } from '../../redux/root/rootSlice'
import { useDispatch,useSelector } from 'react-redux'

const Navbar = () => {

    const dispatch = useDispatch();
    return (
        <div>
            <aside className="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block shadow-2xl h-screen">

                <div className="py-4 text-gray-500 dark:text-gray-400">

                    <NavLink className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="#">
                        User Name
                    </NavLink>
                    <ul className="mt-6">
                        <li className="relative px-6 py-3">
                            <span className="absolute inset-y-0 left-0 w-1  rounded-tr-lg rounded-br-lg" aria-hidden="true" />
                            <NavLink className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100" to="tables.html">
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                                <span className="ml-4 ">Notifications</span>
                            </NavLink>
                        </li>

                        <li className="relative px-6 py-3">
                            <NavLink 
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" 
                            to="bookings">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                <span className="ml-4">Messages</span>
                            </NavLink>
                        </li>
                        
                        <li className="relative px-6 py-3">
                            <NavLink className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                            to="/root">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="ml-4">Dashboard</span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className="relative px-6 py-3">
                            <NavLink 
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" 
                            to="bookings">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                <span className="ml-4">Bookings</span>
                            </NavLink>
                        </li>







                        <li className="relative px-6 py-3">
                            <span className="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg" aria-hidden="true" />
                            <NavLink 
                            className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100" 
                            to="/"
                            onClick={() => dispatch(logoutRoot())}
                            >

                                <span className="ml-4">Logout</span>
                            </NavLink>
                        </li>

                        

                    </ul>
                    <div className="px-6 my-6">
                        <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                            Create account
                            <span className="ml-2" aria-hidden="true">+</span>
                        </button>
                    </div>
                </div>
            </aside >
        </div>
    )
}

export default Navbar
