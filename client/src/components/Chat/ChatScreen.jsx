import React from 'react'

const ChatScreen = () => {
  return (



    <div className="w-full px-5 flex flex-col justify-between">

      <div className="flex flex-col mt-5">

        <div className="flex justify-end mb-4">
          <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
            Welcome to group everyone !
          </div>
          <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="object-cover h-8 w-8 rounded-full" alt="" />
        </div>


        <div className="flex justify-start mb-4">
          <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
            A
          </div>
          <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          </div>
        </div>

  



      </div>
      <div className="py-5">
        <input className="w-full bg-gray-300 py-5 px-3 rounded-xl" type="text" placeholder="type your message here..." />
      </div>
    </div>



  )
}

export default ChatScreen
