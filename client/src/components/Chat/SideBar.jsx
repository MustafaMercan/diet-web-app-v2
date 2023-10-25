import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { baseUrl, postRequest } from '../../services/services';

const SideBar = ({ potentialChat, availableChat }) => {

    const root = useSelector(state => state.root);
    console.log(availableChat)


    return (
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-red-500 flex-shrink-0">

            {/* Quick Chat + logo */}
            <div className="flex flex-row items-center justify-center h-12 w-full">
                <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z">
                        </path>
                    </svg>
                </div>
                <div className="ml-2 font-bold text-2xl">QuickChat</div>
            </div>



            {/* profile section */}

            <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
                <div className="h-20 w-20 rounded-full border overflow-hidden">
                    <img src="https://avatars3.githubusercontent.com/u/2763884?s=128" alt="Avatar" className="h-full w-full" />
                </div>
                <div className="text-sm font-semibold mt-2">Aminos Co.</div>
                <div className="text-xs text-gray-500">Lead UI/UX Designer</div>
                <div className="flex flex-row items-center mt-3">
                    <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                        <div className="h-3 w-3 bg-white rounded-full self-end mr-1" />
                    </div>
                    <div className="leading-none ml-1 text-xs">Active</div>
                </div>
            </div>


            <div className="flex flex-col mt-8">
                {/*active conversations section */}
                <div className="flex flex-row items-center justify-between text-xs">
                    <span className="font-bold">Active Conversations</span>
                    <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">4</span>
                </div>


                {/* Active User List */}
                <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">

                    {
                        availableChat && (
                            availableChat.map((element, index) => {
                                return (
                                    <button 
                                    className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                                    key={index}
                                    >
                                        <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                                            {element?.firstName[0]}
                                        </div>
                                        <div className="ml-2 text-sm font-semibold">{element?.firstName} {element?.lastName}</div>
                                    </button>
                                )
                            })
                        )
                    }

                </div>


                {/* Archived section */}
                <div className="flex flex-row items-center justify-between text-xs mt-6">
                    <span className="font-bold">Potential Chat</span>
                    <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">{potentialChat?.length}</span>
                </div>
                {/* Archived users list */}

                {
                    potentialChat && (
                        potentialChat.map((element, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col space-y-1 mt-4 -mx-2"
                                >
                                    <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                                        onClick={async (event) => {
                                            await postRequest(`${baseUrl}/chat/create`, {
                                                members: [
                                                    element?._id,
                                                    root?._id
                                                ]
                                            })
                                        }}

                                    >
                                        <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                                            {element?.firstName[0]}
                                        </div>
                                        <div className="ml-2 text-sm font-semibold">{element?.firstName} {element?.lastName}</div>
                                    </button>
                                </div>
                            )
                        })
                    )
                }
                {/*<div className="flex flex-col space-y-1 mt-4 -mx-2">
                    <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                        <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                            H
                        </div>
                        <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
                    </button>
    </div>*/}
            </div>
        </div>



    )
}

export default SideBar
