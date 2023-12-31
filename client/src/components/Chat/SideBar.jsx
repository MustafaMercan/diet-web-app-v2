import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { baseUrl, getRequest, postRequest } from '../../services/services';
import {socket} from '../../socket';
import photo from '../../assets/cardsImage.png'
import { useNavigate} from 'react-router-dom';


const SideBar = ({ potentialChat, availableChat, setOpenChat, setDestUser}) => {


    const user = useSelector(state => {
        if(state.root?._id) return state.root;
        else if(state.user?._id) return state.user
      });
    const navigate = useNavigate();

    

    useEffect(() => {
        if (!user?._id) {
            navigate('/');
        }
        socket.emit('join',({user}))
        //socket.emit('private',{roomId:user?._id,message:"sa"})
    },[])


    const onClickHandler = async (element) => {
        //console.log(element);

        console.log(setOpenChat);
        const response = await getRequest(`${baseUrl}/chat/get/${user?._id}`);
        if (response?.chats) {
            const chats = response?.chats;

            const filteredChat = chats.filter((chat) => {
                return chat.members.includes(element?._id);
            })

            if (filteredChat){

                setOpenChat(filteredChat[0]);
                setDestUser(element);                
            } 
        }

    }


    return (

        <>

            <div className="flex flex-col py-8 pl-6 pr-2 w-64 flex-shrink-0">

                {/* Quick Chat + logo */}
                <div className="flex flex-row items-center justify-center h-12 w-full">
                    <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z">
                            </path>
                        </svg>
                    </div>
                    <div className="ml-2 font-bold text-2xl">Chat App</div>
                </div>



                {/* profile section */}

                <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
                    <div className="h-20 w-20 rounded-full border overflow-hidden">
                        <img src={photo} alt="Avatar" className="h-full w-full" />
                    </div>
                    <div className="text-sm font-semibold mt-2">{user?.firstName}.</div>
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
                                            onClick={() => onClickHandler(element)}
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



                    <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
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
                                                            user?._id
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
                    </div>
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
        </>




    )
}

export default SideBar
