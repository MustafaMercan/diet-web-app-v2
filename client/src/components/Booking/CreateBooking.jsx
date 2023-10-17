import React from 'react'
import { Calendar } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useEffect } from 'react';
const CreateBooking = () => {


    const defaultDate = new Date();
    defaultDate.setHours(0,0,0,0);
    const [selectedDate, setSelectedDate] = useState(new Date(defaultDate));
    const [displayDate, setDisplayDate] = useState("");
    const [currTime,setCurrTime] = useState("");

    const dateOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }

    useEffect(() => {
        setDisplayDate(
            selectedDate.toLocaleDateString('tr-Tr', dateOptions)
        )
        console.log(selectedDate.getHours(),selectedDate.getMinutes());

        const thElements = document.querySelectorAll('th');

        thElements.forEach(th => {
            if(currTime == th.textContent) th.classList.add('bg-red-50')
            else{
                th.classList.remove('bg-red-50')
            }
        })


    }, [selectedDate])

    const handleDateHour = (event) => {
        const currDate = new Date(selectedDate);
        const currTime = event.target.textContent;

        setCurrTime(event.target.textContent);

        const parts = currTime.split(".");

        const hour = parseInt(parts[0],10);
        const minute = parseInt(parts[1],10);

        currDate.setHours(hour);
        currDate.setMinutes(minute);

        setSelectedDate(currDate);

    }


    return (
        <>
            <div className='flex justify-center my-12 '>
                <div className='text-center'>
                    <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest my-4"> Creating Booking </h1>
                    <Calendar
                        className='shadow-2xl rounded-xl border-2'
                        date={selectedDate}
                        onChange={(event) => setSelectedDate(new Date(event))}
                    />
                    <div className='shadow-2xl rounded-xl border-2 my-12' >
                        <h1 className="text-xl text-green-800 font-display"><span>Selected Date: </span>{displayDate}</h1>
                    </div>

                    <table>
                        <tbody onClick={handleDateHour}>
                            <tr className='border-b-2 border-t-2 bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
                                <th className='px-6 py-4 border-l-2 border-r-2'>09.00</th>
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
                </div>

            </div>
        </>

    )
}

export default CreateBooking
