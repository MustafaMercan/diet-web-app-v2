import React, { useEffect } from 'react'
import ReactECharts from 'echarts-for-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRequest, postRequest, baseUrl, updateRequest, deleteRequest } from '../../services/services';
import { formHandler } from '../../utils/formHandler';

const AnthropometricDetailts = () => {


    const { id } = useParams();



    /*let option = {

        title: {
            text: 'Haftalık Veri Grafiği',  // Başlık metni
            left: 'center'  // Başlığı merkeze yerleştirir (isteğe bağlı)
        },
        xAxis: {
            type: 'category',
            data: ['a', 'b', 'c', 'd'],
            name: 'x axis'
        },
        yAxis: {
            type: 'value',
            name: 'y axis',
        },
        series: [
            {
                data: [1, 2, 4, 5],
                type: 'line',
                smooth: true
            },
        ]
    }*/

    const [options, setOptions] = useState(null);



    useEffect(() => {
        if (location.pathname.startsWith('/root')) setAddGraph(true);

        const customizeGraphs = async () => {
            const response = await getRequest(`${baseUrl}/graph/get/${id}`);
            setOptions(response?.data);
        }
        customizeGraphs();
    }, [])



    const [hidden, setHidden] = useState(true)
    const [editFormState, setEditFormState] = useState(true)
    const [form, setForm] = useState({});

    const [editForm, setEditForm] = useState({});

    const [addGraph, setAddGraph] = useState(false);

    useEffect(() => {
        console.log(form);
    }, [editForm])



    return (
        <div>
            <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest m-12">Anthropometrics</h1>
            <div className='flex flex-col  items-center '>

                {
                    addGraph && (
                        <>
                            <button
                                className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                onClick={() => setHidden(!hidden)}
                            >
                                Add New Chart</button>

                            <form className={`bg-purple-200 rounded-2xl shadow-2xl px-8 py-12 sm:px-12 lg:px-8 my-10 ${hidden ? `hidden` : ''} `}
                                onChange={(event) => formHandler({ event, form, setForm })}
                            >
                                <div className='flex items-center gap-10 my-5'>
                                    <label htmlFor='title'>Name for Title: </label>
                                    <input
                                        className="bg-gray-100 rounded border border-gray-400 px-3 font-medium focus:outline-none focus:bg-white"
                                        name="title"
                                        placeholder='ex: Weight Graph'
                                    ></input>
                                </div>

                                <div className='flex items-center gap-10 my-5'>
                                    <label htmlFor='yAxis'>Name for Y Axis: </label>
                                    <input
                                        className="bg-gray-100 rounded border border-gray-400 px-3 font-medium focus:outline-none focus:bg-white"
                                        name="yAxis"
                                        placeholder='ex: BMI, KG'
                                    ></input>
                                </div>
                                <div className='flex items-center gap-10 my-5'>
                                    <label htmlFor='xAxis'>Name for X Axis:</label>
                                    <input
                                        className="bg-gray-100 rounded border border-gray-400 px-3 font-medium focus:outline-none focus:bg-white"
                                        name="xAxis"
                                        placeholder='ex: Date'
                                    ></input>
                                </div>

                                <button
                                    className="px-4 py-2 my-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                    onClick={(event) => {
                                        postRequest(`${baseUrl}/graph/create/${id}`, {
                                            graphInformations: form
                                        })
                                        window.location.reload();

                                    }}
                                >
                                    Create Chart</button>

                            </form>
                        </>
                    )
                }


                <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto" />

            </div>
            {
                options && options.map((option, index) => {
                    return (
                        <div key={index}>
                            <ReactECharts option={option} />



                            <button
                                className='px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-blue-600 focus:outline-none focus:shadow-outline-purple'
                                onClick={() => setEditFormState(!editFormState)}
                            >Edit</button>

                            <div className={`flex flex-col items-center ${editFormState ? 'hidden' : ''}`}>

                                <form
                                    onChange={(event) => formHandler({ event, form: editForm, setForm: setEditForm })}
                                    className=' bg-purple-200 rounded-2xl shadow-2xl px-8 py-12 sm:px-12 lg:px-8 my-10'

                                >

                                    <div className='flex items-center justify-center gap-10 my-5'>
                                        <label htmlFor='value'>Value:</label>
                                        <input
                                            className="bg-gray-100 rounded border border-gray-400 px-3 font-medium focus:outline-none focus:bg-white"
                                            name="value"
                                            placeholder='83'
                                        ></input>
                                    </div>

                                    <div className='flex items-center gap-10 justify-center my-5'>
                                        <label htmlFor='date'>Date:</label>
                                        <input
                                            className="bg-gray-100 rounded border border-gray-400 px-3 font-medium focus:outline-none focus:bg-white"
                                            name="date"
                                            placeholder='25.01.2001'
                                        ></input>
                                    </div>


                                </form>

                                <div>


                                    <button
                                        className='px-4 py-2 mx-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-800 focus:outline-none focus:shadow-outline-purple'
                                        onClick={async (event) => {
                                            event.preventDefault();
                                            option?.xAxis?.data.push(
                                                editForm?.date,
                                            )
                                            option?.series[0]?.data.push(editForm?.value);
                                            await updateRequest(`${baseUrl}/graph/update`, { updateGraph: option });
                                            window.location.reload();
                                        }
                                        }
                                    >
                                        Submit
                                    </button>

                                    <button
                                        className='px-4 py-2 mx-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-green-800 focus:outline-none focus:shadow-outline-purple'
                                        onClick={async (event) => {
                                            event.preventDefault();
                                            await deleteRequest(`${baseUrl}/graph/delete/${option?._id}`);
                                            window.location.reload();
                                        }}
                                    >
                                        Delete

                                    </button>
                                </div>
                            </div>

                            <div className="w-full max-w-xs h-px bg-gray-600 my-6 mx-auto" />

                        </div>

                    )
                })
            }


        </div>
    )
}

export default AnthropometricDetailts
