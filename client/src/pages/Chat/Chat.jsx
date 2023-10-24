import React from 'react'
import SideBar from '../../components/Chat/SideBar'
import {socket} from '../../socket'


const Chat = () => {


    socket.on('connect',() => {
        socket.emit('user',{id:"31"})
        
    })


    
    return (
        <div className="flex h-screen antialiased text-gray-800 my-12">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <SideBar />

            </div>
        </div>
    )
}

export default Chat
