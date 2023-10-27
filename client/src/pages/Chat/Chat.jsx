import React from 'react'
import SideBar from '../../components/Chat/SideBar'
import { useState, useEffect } from 'react';
import {socket} from '../../socket';
import { useSelector } from 'react-redux';
import { getRequest, baseUrl } from '../../services/services';
import ChatScreen from '../../components/Chat/ChatScreen';

const Chat = () => {

    const user = useSelector(state => {
        if(state.root?._id) return state.root;
        else if(state.user?._id) return state.user
      });

    
    
    const [potentialChat, setPotentialChat] = useState(null);

    const [openChat, setOpenChat] = useState(null);
    const [destUser,setDestUser] = useState(null);

    const [messages, setMessages] = useState(null);



    const [availableChat, setAvailableChat] = useState(null);
    
    const [availableUsers,setAvailableUsers] = useState(null);




    useEffect(() => {

        const getAvailableChat = async() => {
            try{
                getRequest(`${baseUrl}/chat/get/all`)
                .then(response => {
                    if(response?.chats) setAvailableChat(response?.chats);
                })
            }catch(err){
                console.log(err)
            }
        }

        getAvailableChat();


        return () => {
            socket.off('disconnect');
        }
    },[])


    useEffect(() => {
        //console.log(availableChat)
        const getUsers = async() => {
            try{

                if(!user.features){
                    getRequest(`${baseUrl}/user/all/get`)
                    .then(response => {
                        if(response?.users){
                            const filtered = response.users.filter((user) => {
                                return !availableChat?.some((chat) => chat.members.includes(user._id))
                            })
                            const filteredUser = response.users.filter((user) => {
                                return availableChat?.some((chat) => chat.members.includes(user._id))
                            })
                            setPotentialChat(filtered);
                            setAvailableUsers(filteredUser);
                        }
                    })
                }else{
                    getRequest(`${baseUrl}/root/get/all`)
                    .then(response => {
                        console.log(response)
                        if(response){
                            const filtered = response.filter((root) => {
                                console.log(availableChat)
                                return !availableChat?.some((chat) => chat.members.includes(user?._id));
                            })
                            const filteredUser = response.filter((root) => {
                                return availableChat?.some((chat) => chat.members.includes(user?._id))
                            })
                            setPotentialChat(filtered);
                            setAvailableUsers(filteredUser);
                        }
                    })                    
                }
               
            }
            
            catch(err){
                console.log(err)
            }
            
        }
        getUsers()

    },[availableChat])

    useEffect(() => {
        //console.log(messages);
    },[messages])

    useEffect(() => {
        //console.log('test->',openChat)
    },[openChat])




    return (
        <div className="flex h-screen antialiased text-gray-800 my-12">
            <div className="flex flex-row h-full w-full overflow-x-hidden ">
                <SideBar potentialChat = {potentialChat} availableChat={availableUsers} setOpenChat = {setOpenChat} setDestUser = {setDestUser}/>
                <ChatScreen openChat = {openChat} destUser = {destUser} />
            </div>
        </div>
    )
}

export default Chat
