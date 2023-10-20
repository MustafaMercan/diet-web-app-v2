import React from 'react'
import UserNavbar from '../../components/Navbar/UserNavbar'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Table from '../../components/Booking/User/Table'
const UserBookings = () => {


    const user = useSelector(state => state.user);
    const [pageSection, setPageSection] = useState("default");


    console.log('user -> ', user)


    return (
        <div>

            <UserNavbar />

            <div className="flex flex-col flex-1 w-full">
                <div className="container px-6 mx-auto grid">
                    <h2
                        className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
                    >
                        {user?.firstName}'s Bookings
                    </h2>
                    <a
                        className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
                        href="https://github.com/estevanmaito/windmill-dashboard"
                    >
                        <div className="flex items-center">
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                ></path>
                            </svg>
                            <span>Star this project on GitHub</span>
                        </div>
                        <span>View more &RightArrow;</span>
                    </a>

                    {/*cards*/}
                    <div className="flex my-12 justify-evenly items-center">
                        {/*card*/}
                        <div
                            className="flex items-center p-4 bg-white rounded-lg shadow-xs shadow-xl hover:cursor-pointer hover:bg-purple-700"
                            onClick={(event) => { setPageSection("future") }}
                        >
                            <div
                                className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <p
                                    className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                >
                                    Future Appointments
                                </p>
                                <p
                                    className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                >
                                
                                </p>
                            </div>
                        </div>
                        {/*card*/}
                        <div
                            className="flex items-center p-4 bg-white rounded-lg shadow-xs shadow-xl hover:cursor-pointer hover:bg-purple-700"
                            onClick={(event) => { setPageSection("completed") }}
                        >
                            <div
                                className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <p
                                    className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                >
                                    Completed Appointments
                                </p>
                                <p
                                    className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                >
                                    
                                </p>
                            </div>
                        </div>

                        {/*card*/}

                    </div>
                </div>
                <div className=' bg-gray-50 m-5 rounded-xl'>
                    {
                        pageSection === "future" && (
                            <>
                                <h1 className='text-center text-lg font-semibold my-5'> Future Appointments</h1>
                                <Table type="future" />
                            </>
                        )
                    }
                    {
                        pageSection === "completed" && (
                            <>
                                <h1 className='text-center text-lg font-semibold'>Completed Appointments </h1>
                                <Table type="completed" />

                            </>


                        )
                    }
                </div>

            </div>


        </div>
    )
}

export default UserBookings
