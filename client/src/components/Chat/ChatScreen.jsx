import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getRequest, baseUrl, postRequest } from '../../services/services';
import { socket } from '../../socket';


const ChatScreen = ({ openChat, destUser }) => {
  const [messages, setMessages] = useState(null);



  const user = useSelector(state => {
    if (state.root?._id) return state.root;
    else if (state.user?._id) return state.user
  });


  const [messageInput, setMessageInput] = useState({
    content: "",
    chatID: openChat?._id,
    sender: user?._id
  })

  const messageInputHandler = (e) => {

    const newMessageInput = { ...messageInput, content: e.target.value };
    setMessageInput(newMessageInput);
  }

  useEffect(() => {
    console.log(messageInput)
  }, [messageInput])

  useEffect(() => {
    const newMessageInput = { ...messageInput, chatID: openChat?._id };
    setMessageInput(newMessageInput);
    const getMessages = async () => {
      if (openChat?._id) {
        const response = await getRequest(`${baseUrl}/message/get/${openChat?._id}`);
        setMessages(response);
      }
    }
    getMessages();
  }, [openChat])

  useEffect(() => {

    // socket.emit('private',{roomId:destUser?._id,messageInput})
    // socket.on('private',(message) => {
    //   console.log(message)
    // })

  }, [destUser])

  useEffect(() => {
    socket.on('private', (message) => {
      if(message.chatID)
      {
        console.log(messages)
        setMessages((prevMessages) => {
          if (prevMessages === null) {
            // Eğer mevcut array boşsa, yeni bir array oluşturun
            return [message];
          } else {
            // Mevcut array doluysa, yeni mesajı ekleyin
            return [...prevMessages, message];
          }
        });
      } 
    })

    // Bileşen söküldüğünde olay dinleyicisini temizle
    return () => {
      socket.off('private');
    };
  }, [])


  return (

    <div className="w-full px-5 flex flex-col justify-between">

      <div className="flex flex-col mt-5 overflow-y-auto">


        {
          messages && messages.map((message, index) => {
            if (message?.sender === user?._id) {
              return (
                <div key={index} className="flex justify-end mb-4">
                  <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    {
                      message?.content
                    }
                  </div>
                  <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    {user?.firstName[0]}
                  </div>

                </div>
              )
            } else {
              return (
                <div key={index} className="flex justify-start mb-4">
                  <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    {destUser?.firstName[0]}
                  </div>
                  <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                    {message?.content}
                  </div>
                </div>
              )
            }
          })
        }
      </div>


      <div className="py-5">
        <input
          className="w-full bg-gray-300 py-5 px-3 rounded-xl"
          type="text"
          placeholder={messageInput.content}
          onChange={messageInputHandler}
        />
        <button
          className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
          onClick={async(e) => {
            
            socket.emit('private', ({ roomId: destUser?._id, messageInput }))
            const response = await postRequest(`${baseUrl}/message/create/${messageInput?.chatID}`,messageInput)
            console.log(response)
            setMessages((prevMessages) => {
              if (prevMessages === null) {
                // Eğer mevcut array boşsa, yeni bir array oluşturun
                return [messageInput];
              } else {
                // Mevcut array doluysa, yeni mesajı ekleyin
                return [...prevMessages, messageInput];
              }
            });
            const newMessageInput = { ...messageInput, content: "" };
            setMessageInput(newMessageInput);
          }}

        >
          <span>Send</span>
          <span className="ml-2">
            <svg
              className="w-4 h-4 transform rotate-45 -mt-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>



  )
}

export default ChatScreen
