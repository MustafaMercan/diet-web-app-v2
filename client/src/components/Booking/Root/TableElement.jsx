import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    formatDateToTrLocale,
    formatDateHourTrLocale
} from '../../../utils/formatDateToTrLocale'
import { deleteRequest, baseUrl, updateRequest } from '../../../services/services'

const TableElement = ({ booking }) => {


    return (
        <tr className="text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                    {/* Avatar with inset shadow */}
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                    </div>
                    <div>
                        <p className="font-semibold">Mustafa Mercan</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-sm">

                <span className={`px-2 py-1 font-semibold leading-tight text-purple-700 bg-purple-100 rounded-full dark:bg-green-700 dark:text-green-100`}>
                    test
                </span>
            </td>
            <td className="px-4 py-3 text-xs">
                {formatDateToTrLocale(booking?.bookingTime)}
            </td>
            <td className="px-4 py-3 text-sm">
                {formatDateHourTrLocale(booking?.bookingTime)}

            </td>
            <td>
            <button
                onClick={() => {
                    deleteRequest(`${baseUrl}/booking/delete/${booking?._id}`)
                    window.location.reload()
                }}
                type='submit'
                className="px-4 py-1 my-5 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-400 border border-transparent rounded-lg  hover:bg-red-500 focus:outline-none focus:shadow-outline-purple"
            >
                Deleted
            </button>
            <button
                className=" ml-3 px-4 py-1 my-5 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-300 border border-transparent rounded-lg  hover:bg-green-800 focus:outline-none focus:shadow-outline-purple"
                onClick={() => {
                    booking.completed = true;
                    updateRequest(`${baseUrl}/booking/update/${booking._id}`,{booking})
                }}
            >
                Completed
            </button>
            </td>




        </tr>
    )
}

export default TableElement
