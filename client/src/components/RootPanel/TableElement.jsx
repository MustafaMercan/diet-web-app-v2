import React from 'react'
import { NavLink } from 'react-router-dom';
const TableElement = ({ user, state, color }) => {

    console.log(user)

    const isoDate = user?.createdAt;
    const date = new Date(isoDate);
    const dateOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    };
    const trDate = date.toLocaleDateString('tr-TR', dateOptions);

    return (
        <tr className="text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                    {/* Avatar with inset shadow */}
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                    </div>
                    <div>
                        <p className="font-semibold">{user?.firstName} {user?.lastName}</p>

                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-sm">
                $ 863.45
            </td>
            <td className="px-4 py-3 text-xs">
                <span className={`px-2 py-1 font-semibold leading-tight text-${color}-700 bg-${color}-100 rounded-full dark:bg-green-700 dark:text-green-100`}>
                    {state}
                </span>
            </td>
            <td className="px-4 py-3 text-sm">
                {trDate}
            </td>
            <td className="px-4 py-3 text-sm">
                <NavLink
                    className="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-400 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                    to={`${user?._id}`}
                >
                    View Profile
                </NavLink>
            </td>



        </tr>
    )
}

export default TableElement
