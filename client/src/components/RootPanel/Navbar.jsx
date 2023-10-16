import React from 'react'
import { NavLink } from 'react-router-dom'
import { logoutRoot } from '../../redux/root/rootSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {

    const dispatch = useDispatch();
    return (
        <div>
            <aside className="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block shadow-2xl h-screen">

                <div className="py-4 text-gray-500 dark:text-gray-400">

                    <NavLink className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="#">
                        Windmill
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
                            <NavLink className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="index.html">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="ml-4">Dashboard</span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className="relative px-6 py-3">
                            <NavLink className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="forms.html">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                <span className="ml-4">Forms</span>
                            </NavLink>
                        </li>
                        <li className="relative px-6 py-3">
                            <NavLink className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="cards.html">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                <span className="ml-4">Cards</span>
                            </NavLink>
                        </li>
                        <li className="relative px-6 py-3">
                            <NavLink className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="charts.html">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                    <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                </svg>
                                <span className="ml-4">Charts</span>
                            </NavLink>
                        </li>
                        <li className="relative px-6 py-3">
                            <NavLink className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="buttons.html">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                                <span className="ml-4">Buttons</span>
                            </NavLink>
                        </li>
                        <li className="relative px-6 py-3">
                            <NavLink className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="modals.html">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <span className="ml-4">Modals</span>
                            </NavLink>
                        </li>
                        <li className="relative px-6 py-3">
                            <span className="absolute inset-y-0 left-0 w-1  rounded-tr-lg rounded-br-lg" aria-hidden="true" />
                            <NavLink className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100" to="tables.html">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                                <span className="ml-4">Tables</span>
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
