import React from 'react'
import Navbar from '../components/Navbar'
import photo from '../assets/homePhoto.jpg';
import { useState } from 'react';
import services from '../assets/services.png';



const Home = () => {


    const [inputValue, setInputValue] = useState({
        height: '',
        weight: ''
    })
    const [result, setResult] = useState({
        bmi: '',
        state: ''
    });

    const formHandle = (event) => {

        const { name, value } = event.target;
        setInputValue(
            prevData => ({
                ...prevData,
                [name]: value
            })
        )

    }

    const resetHandle = (event) => {
        event.preventDefault();
        const inputs = document.querySelectorAll('input');

        Object.keys(inputs).forEach(key => {
            const value = inputs[key];
            inputs[key].value = ''
        })
        setInputValue({
            height: '',
            weight: ''
        })
        setResult({
            bmi: '',
            state: '',
        })
    }

    const calculate = (event) => {
    
        event.preventDefault();
        const height = parseFloat(inputValue.height) / 100;
        const weight = parseFloat(inputValue.weight);

        const bmiValue = (weight / (height * height).toFixed(2));

        if (bmiValue < 16) setResult({
            bmi: bmiValue,
            state: 'Zayıfsınız'
        })
        else if (bmiValue <= 16 && 24.9) setResult({
            bmi: bmiValue,
            state: 'Normal Kilolusunuz'
        })
        else if (bmiValue <= 25 && 29.9) setResult({
            bmi: bmiValue,
            state: 'Fazla Kilolusunuz'
        })
        else if (bmiValue <= 30 && 24.9) setResult({
            bmi: bmiValue,
            state: 'Obezsiniz'
        })
        else if (bmiValue > 40) setResult({
            bmi: bmiValue,
            state: 'Morbid Obezsiniz'
        })


    }
    return (
        <>
            <Navbar />

            {/* Home Page First Section 
            <div className="xl:p-48 p-16  flex flex-col xl:flex-row  items-center justify-center bg-primaryBackground">
                <div className="xl:w-1/2 ">
                    <div className="w-96 h-96 rounded-full overflow-hidden">
                        <img
                            src={photo} // Büyük profil fotoğrafı URL'si
                            alt="Profil Fotoğrafı"
                        />
                    </div>
                </div>
                <div className="xl:w-1/2">
                    <h1 className="text-2xl font-semibold my-4 xl:hidden">Başlık</h1>
                    <h2 className="text-xl text-gray-600 xl:hidden">Alt Başlık</h2>
                    <p className="my-4 xl:hidden">Tanıtım cümlesi burada olacak.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded xl:hidden">
                        Buton
                    </button>
                    <h1 className="text-2xl font-semibold my-4 hidden xl:block">Başlık</h1>
                    <h2 className="text-xl text-gray-600 hidden xl:block">Alt Başlık</h2>
                    <p className="my-4 hidden xl:block">Tanıtım cümlesi burada olacak.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded hidden xl:block">
                        Buton
                    </button>
                </div>
            </div>*/}



            <section className="background-radial-gradient">

                
                <div className="px-6 py-12 text-center md:px-12 lg:text-left">
                    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <div className="mt-12 lg:mt-0">
                                <h1 className="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                                    Sağlıklı Yaşam İçin <br /><span className="text-[hsl(218,81%,75%)]">Her zaman yanınızdayız.</span>
                                </h1>
                                <a className="mb-2 inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0" data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">
                                    Randevu Oluştur
                                </a>

                            </div>
                            <div className="mb-12 lg:mb-0">
                                <img src={photo} className="rounded-lg shadow-lg dark:shadow-black/20 " alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* Services Section */}
            <div>
                <div className=' bg-slate-800 w-full'>

                    <div className="background-radial-gradient-services p-4 h-1/2">
                        <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
                            <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700" />
                            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600" />
                        </div>
                        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mb-64">
                            <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
                                    <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                                </svg>
                                <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Hizmetlerimiz</h2>
                                <p className="text-gray-300">Hedeflerinize sağlıklı bir şekilde bizimle birlikte ulaşın.</p>
                            </div>
                            <div className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
                                <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
                                    <div className="relative space-y-8 py-12 p-8">
                                        <img src="https://www.svgrepo.com/show/164986/logo.svg" loading="lazy" width={200} height={200} className="w-12 h-12 rounded-full" style={{ color: 'transparent' }} />
                                        <div className="space-y-2">
                                            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Hizmetin ismi</h5>
                                            <p className="text-gray-300">Bilgilendirme ile ilgili bir kaç cümle yazılacak</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                    <div className="relative space-y-8 py-12 p-8">
                                        <img src="https://www.svgrepo.com/show/120853/logo.svg" loading="lazy" width={200} height={200} className="w-12 h-12 rounded-full" style={{ color: 'transparent' }} />
                                        <div className="space-y-2">
                                            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Hizmetin ismi</h5>
                                            <p className="text-gray-300">Bilgilendirme ile ilgili bir kaç cümle yazılacak</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                    <div className="relative space-y-8 py-12 p-8">
                                        <img src="https://www.svgrepo.com/show/120852/logo.svg" loading="lazy" width={200} height={200} className="w-12 h-12 rounded-full" style={{ color: 'transparent' }} />
                                        <div className="space-y-2">
                                            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Hizmetin ismi</h5>
                                            <p className="text-gray-300">Bilgilendirme ile ilgili bir kaç cümle yazılacak</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                    <div className="relative space-y-8 py-12 p-8">
                                        <img src="https://www.svgrepo.com/show/120850/logo.svg" loading="lazy" width={200} height={200} className="w-12 h-12 rounded-full" style={{ color: 'transparent' }} />
                                        <div className="space-y-2">
                                            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Hizmetin ismi</h5>
                                            <p className="text-gray-300">Bilgilendirme ile ilgili bir kaç cümle yazılacak</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            {/*BMI CALCULATE SECTION*/}



            <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="text-center pb-6">
                            <h1 className="text-3xl">Vücut Kitle Endeksini Hesapla</h1>
                            <p className="text-gray-300">
                                Kilonuzu ve Boyunuzu Girin
                            </p>
                        </div>
                        <form onChange={formHandle}>
                            <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Boyunuz(Cm)" name="height" />
                            <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Kilonuz(Kg)" name="weight" />

                            <div className="flex justify-between">
                                <button onClick={calculate}className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'> Hesapla </button>
                                <button onClick={resetHandle} className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sıfırla</button>
                            </div>
                        </form>
                        <div className="text-center pb-6">
                            {
                                result.bmi && result.state && (
                                    <>
                                        <h1 className="text-3xl">Sonuç!</h1>
                                        <p className="text-gray-300 text-xl"> Sonuç : {result.state} </p>
                                        <p className="text-gray-300 text-xl"> Bmi : {result.bmi} </p>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-gray-100">
                <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
                    <div className="p-5 sm:w-2/12 border-r">
                        <div className="text-sm uppercase text-indigo-600 font-bold">Menu</div>
                        <ul>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#">Home</a>
                            </li>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#">Services</a>
                            </li>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#">Products</a>
                            </li>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div className="p-5 sm:w-7/12 border-r text-center">
                        <h3 className="font-bold text-xl text-indigo-600 mb-4">Componentity</h3>
                        <p className="text-gray-500 text-sm mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="p-5 sm:w-3/12">
                        <div className="text-sm uppercase text-indigo-600 font-bold">Contact Us</div>
                        <ul>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#">XXX XXXX, Floor 4 San Francisco, CA</a>
                            </li>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#">contact@company.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlns: serif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                                <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
                  -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
                  0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
                  -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
                  0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
                  -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
                  0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
                  -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
                  -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
                  1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
                  -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
                  6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
                  0.771,-0.67 1.054,-1.093Z" />
                            </svg>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlns: serif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                                <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373
                  12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                  0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                  -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z" />
                            </svg>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlns: serif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                                <g id="Layer_1">
                                    <circle id="Oval" cx={12} cy={12} r={12} />
                                    <path id="Shape" d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562
                     -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0
                     -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375
                     -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938
                     -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125
                     0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0
                     2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0
                     1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125
                     0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813
                     -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068
                     -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204
                     -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068
                     0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204
                     0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z" style={{ fill: 'rgb(255, 255, 255)' }} />
                                </g>
                            </svg>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlns: serif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                                <path id="Shape" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                  3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                  -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                  -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                  -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                  0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                  3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                  -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                  -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                  1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                  -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                  -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                  0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                  0.4,1.5l0,4.5l2.9,0Z" />
                            </svg>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlns: serif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                                <path id="Combined-Shape" d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0
                  -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm6.591,-15.556l-0.722,0c-0.189,0
                  -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323
                  0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0
                  0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385
                  -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z" />
                            </svg>
                        </a>
                    </div>
                    <div className="my-5">© Copyright 2023. All Rights Reserved.</div>
                </div>
            </div>




        </>

    );
}

export default Home
