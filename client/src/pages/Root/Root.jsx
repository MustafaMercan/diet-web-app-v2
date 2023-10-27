import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutRoot } from '../../redux/root/rootSlice'
import { NavLink } from 'react-router-dom'
import Table from '../../components/RootPanel/Home/Table'
import Navbar from '../../components/RootPanel/Navbar'
const Root = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex'>





      {/* side bar */}
      <Navbar />

      <div className="flex flex-col flex-1 w-full">

        <main className="h-full overflow-y-auto">

          <div className="container px-6 mx-auto grid">
            <h2
              className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
            >
              Admin Panel
            </h2>
            <a
              className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
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
                <span></span>
              </div>
              <span>View more</span>
            </a>

            {/*cards*/}
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              {/*card*/}
              <div
                className="flex items-center p-4 bg-white rounded-lg shadow-xs shadow-xl"
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
                    Total clients
                  </p>
                  <p
                    className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    23
                  </p>
                </div>
              </div>
              {/*card*/}

              {/*card*/}
              <div
                className="flex items-center p-4 bg-white rounded-lg shadow-xs shadow-xl"
              >
                <div
                  className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p
                    className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Total Bookings
                  </p>
                  <p
                    className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    21
                  </p>
                </div>
              </div>
              {/*card*/}

              <div
                className="flex items-center p-4 bg-white rounded-lg shadow-xs shadow-xl"
              >
                <div
                  className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p
                    className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Active Chat
                  </p>
                  <p
                    className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    8
                  </p>
                </div>
              </div>
            </div>
            
            <Table />

            
          </div>
        </main>

      </div>
    </div>
  )
}

export default Root

/*
      <button onClick={() => dispatch(logoutRoot())}>
        logout
      </button>

*/