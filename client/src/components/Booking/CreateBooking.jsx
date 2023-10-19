import React from 'react'
import { Calendar } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useEffect } from 'react';
import { baseUrl,getRequest,postRequest } from '../../services/services';
import { useSelector, useDispatch } from 'react-redux'

const CreateBooking = () => {


    const defaultDate = new Date();
    defaultDate.setHours(0, 0, 0, 0);


    const [selectedDate, setSelectedDate] = useState(new Date(defaultDate));
    const [displayDate, setDisplayDate] = useState("");
    const [currTime, setCurrTime] = useState("");

    const [message,setMessage] = useState("");
    
    const [reservations, setReservations] = useState(null);


    const user = useSelector(state => state.user);

    

    const dateOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }

    
    useEffect(() => {

        const getReservations = async() => {
            const response = await getRequest(`${baseUrl}/booking/get/all`);
            if(response?.message){
                setMessage(response?.message)
            }else{
                setReservations(response?.bookings);
            }
        }
        getReservations();

    },[])

    useEffect(() => {
        configureThElements();

    },[reservations])



    const configureThElements = () => {

        const thElements = document.querySelectorAll('th');

        reservations?.forEach((item) => {
            const itemDate = new Date(item.bookingTime);
            if(
                itemDate.getYear() == selectedDate.getYear() &&
                itemDate.getMonth() == selectedDate.getMonth() &&
                itemDate.getDay() == selectedDate.getDay()
            ){
                const thElements = document.querySelectorAll('th');  
                thElements.forEach((th) => {
                    //console.log(itemDate.getHours(), itemDate.getMinutes())

                    const parts = th.textContent.split(".")

                    if(itemDate.getHours() == parseInt(parts[0],10) &&
                        itemDate.getMinutes() == parseInt(parts[1],10)
                    )
                    th.classList.add('bg-gray-300');  
                })   
            }
        })

    }

    useEffect(() => {
        setDisplayDate(
            selectedDate.toLocaleDateString('tr-Tr', dateOptions)
        )
        //console.log(selectedDate.getHours(),selectedDate.getMinutes());

        const thElements = document.querySelectorAll('th');
        //console.log('selectedDate', selectedDate);

        thElements.forEach(th => {
            th.classList.remove('bg-gray-300') 
        })

        thElements.forEach(th => {
            if (currTime == th.textContent) th.classList.add('bg-red-300')
            else { th.classList.remove('bg-red-300'); }
        })
        configureThElements()

    }, [selectedDate])


    const handleDateHour = (event) => {


        if(event.target.classList.value.indexOf("bg-gray-300") > 0) return; 

        const currDate = new Date(selectedDate);
        const currTime = event.target.textContent;



        setCurrTime(event.target.textContent);

        const parts = currTime.split(".");

        const hour = parseInt(parts[0], 10);
        const minute = parseInt(parts[1], 10);

        currDate.setHours(hour);
        currDate.setMinutes(minute);
        
        setSelectedDate(currDate);
    }


    const createNewBooking = async() => {

        const hour = selectedDate.getHours();

        if(hour < 9 || hour > 18) return setMessage("Please Select A Hour...");

        const response = await  postRequest(`${baseUrl}/booking/create/new`,{
            bookingTime:selectedDate,
            _id: user?._id
        });

        setMessage(response?.message)

    }



    return (
        <>
            <div className='flex justify-center my-12 '>
                <div className='text-center'>
                    <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest my-4"> Creating Booking </h1>
                    <Calendar
                        className='shadow-2xl rounded-xl border-2'
                        date={selectedDate}
                        onChange={(event) => {
                            setSelectedDate(new Date(event))
                           
                        }}
                    />
                    <div className='shadow-2xl rounded-xl border-2 my-12' >
                        <h1 className="text-xl text-green-800 font-display"><span>Selected Date: </span>{displayDate}</h1>
                    </div>

                    <table>
                        <tbody onClick={handleDateHour}>
                            <tr className='border-b-2 border-t-2 bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
                                <th className='px-6 py-4 border-l-2 border-r-2 '>09.00</th>
                                <th className='px-6 py-4 border-r-2'>09.30</th>
                                <th className='px-6 py-4 border-r-2'>10.00</th>
                                <th className='px-6 py-4 border-r-2'>10.30</th>
                                <th className='px-6 py-4 border-r-2'>11.00</th>
                                <th className='px-6 py-4 border-r-2'>11.30</th>
                            </tr>

                            <tr className='border-b-2 bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
                                <th className='px-6 py-4 border-l-2 border-r-2'>12.00</th>
                                <th className='px-6 py-4 border-r-2'>12.30</th>
                                <th className='px-6 py-4 border-r-2'>13.00</th>
                                <th className='px-6 py-4 border-r-2' >13.30</th>
                                <th className='px-6 py-4 border-r-2'>14.00</th>
                                <th className='px-6 py-4 border-r-2'>14.30</th>
                            </tr>

                            <tr className='border-b-2 bg-gray-50 dark:bg-gray-800 dark:border-gray-700' >
                                <th className='px-6 py-4 border-l-2 border-r-2'>15.00</th>
                                <th className='px-6 py-4 border-r-2'>15.30</th>
                                <th className='px-6 py-4 border-r-2'>16.00</th>
                                <th className='px-6 py-4 border-r-2'>16.30</th>
                                <th className='px-6 py-4 border-r-2'>17.00</th>
                                <th className='px-6 py-4 border-r-2'>17.30</th>
                            </tr>
                        </tbody>
                    </table>
                    
                    <button
                        onClick={createNewBooking}
                        className="px-10 py-4 my-4 font-medium leading-5 text-white transition-colors duration-150 bg-blue-300 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-purple"
                    >
                        Create Booking
                    </button>

                    <p className='text-red-500 text-lg'>{message}</p>
                </div>

            </div>
        </>

    )
}

export default CreateBooking
