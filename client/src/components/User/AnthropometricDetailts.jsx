import React from 'react'
import ReactECharts from 'echarts-for-react';
import { useState } from 'react';

const AnthropometricDetailts = () => {

    let option = {

        title: {
            text: 'Haftalık Veri Grafiği',  // Başlık metni
            subtext: 'Bu grafik haftalık verileri gösterir',  // Alt başlık metni (isteğe bağlı)
            left: 'center'  // Başlığı merkeze yerleştirir (isteğe bağlı)
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            name: 'x axis'
        },
        yAxis: {
            type: 'value',
            name: 'y axis'
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }
        ]
    }


    const [hidden, setHidden] = useState(false)
    const [form, setForm] = useState({});

    return (
        <div>
            <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest m-12">Anthropometrics</h1>
            <div className='flex flex-col  items-center '>
                <button
                    className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                    Add New Chart</button>

                <form className=''>
                    <div className='flex items-center gap-10'>
                        <label htmlFor='y-axis'>Name for Y Axis: </label>
                        <input
                            className="bg-gray-100 rounded border border-gray-400 px-3 font-medium focus:outline-none focus:bg-white"
                            name="y-axis"
                            placeholder='ex: BMI, KG'
                        ></input>
                    </div>
                    <div className='flex items-center gap-10'>
                        <label htmlFor='x-axis'>Name for X Axis:</label>
                        <input
                            className="bg-gray-100 rounded border border-gray-400 px-3 font-medium focus:outline-none focus:bg-white"
                            name="x-axis"
                            placeholder='ex: Date'
                        ></input>
                    </div>

                </form>

                <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto" />

            </div>

            <div>
                <ReactECharts option={option} />
            </div>
        </div>
    )
}

export default AnthropometricDetailts
