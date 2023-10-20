import React, { useEffect } from 'react'
import TableElement from './TableElement'

import { postRequest, baseUrl } from '../../../services/services'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Table = ({type}) => {

  const userID = useSelector(state => state.user)?._id;


  const [bookingList,setBookingList] = useState(null);
  const [renderList,setRenderList] = useState(null);

  const [message,setMessage] = useState("");


  useEffect(() => {

    const listRequest = async () => {


      const response = await postRequest(`${baseUrl}/booking/user/booking`,{
        userID
      })
      if(response?.message){
        return setMessage(response?.message);
      }
      setBookingList(response?.bookings);
    }
    listRequest();
  },[]);


  useEffect(() => {
    if(type === "future"){
      const arr = bookingList?.filter(element => !element?.completed)
      if(arr) setRenderList(arr);
    }
    if(type ==="completed"){
      const arr = bookingList?.filter(element => element?.completed)
      if(arr) setRenderList(arr);
    }

  },[bookingList])



  


  return (
    <div className="mt-6 mb-12 px-10">
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Reservation</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Hour</th>

              </tr>
            </thead>

            <tbody className="bg-white divide-y ">
            {
              renderList?.map((element,index) => 
                <TableElement booking={element} key ={index}/>
              )
               
            }
            </tbody>

          </table>
        </div>

      </div>

    </div>
  )
}

export default Table
