import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import photo from '../../assets/homePhoto.jpg';
import homePhotoV1 from '../../assets/homePhotoV1.jpg';
import cardImage from '../../assets/cardsImage.png'
import homePhotoV2 from '../../assets/homePhotoV2.jpg';
import { useState } from 'react';
import services from '../../assets/services.png';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';



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
            <div>

                <div className="relative flex justify-center">
                    <div className="w-full h-1/2 bg-gray-100 absolute inset-0" />
                    <img src={photo} className=" h-128 object-center relative max-w-6xl rounded-full" />
                </div>

                <div className="py-24 text-center">
                    <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">Diyetisten Ayşe Fatma</h1>
                    <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto" />
                    <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</h2>
                </div>

                <div className="md:flex max-md:grid max-md:grid-cols-1 max-md:grid-rows-2 max-md:gap-4">
                    <img src={homePhotoV1} className="md:w-6/12 h-96 object-cover max-md:w-full" />
                    <div className="md:w-5/12 max-md:w-full relative flex flex-col justify-end">
                        <div className="flex justify-center">
                            <svg className="-mb-24 relative z-10 h-48 w-auto" width={177} height={100} viewBox="0 0 177 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M124.575 31.9837C125.397 33.2122 126.186 34.7277 125.798 36.3518C124.459 35.5854 123.382 34.3341 122.528 33.0988C121.668 31.8552 120.775 30.5328 120.469 29C122.158 29.432 123.67 30.6312 124.575 31.9837Z" fill="#394149" />
                                <path d="M51.9806 36.3492C51.5936 34.7248 52.3842 33.2099 53.2077 31.9821C54.1142 30.6304 55.6267 29.4323 57.3159 29.0015C57.009 30.534 56.1146 31.8559 55.2537 33.0987C54.3986 34.3334 53.3201 35.5839 51.9806 36.3492Z" fill="#394149" />
                                <path d="M50.802 39.4652C51.1041 38.1788 51.0974 36.7705 50.8098 35.5639C50.5569 34.5035 50.1889 33.0045 48.9777 32.4987C48.0973 33.9109 47.7434 35.834 48.2565 37.275C48.6275 38.3173 49.2947 39.6954 50.6784 39.9087C51.9481 40.2014 53.232 39.5241 54.246 38.9649C55.3735 38.3432 56.4779 37.3541 57.1489 36.1782C55.918 35.5569 54.5162 36.0611 53.4616 36.5443C52.3248 37.0652 51.2805 38.1828 50.802 39.4652Z" fill="#394149" />
                                <path d="M75.4431 40.701V34.2424H73.2381V36.5955H69.9306V34.2424H67.7256V40.701H69.9306V38.3562H73.2381V40.701H75.4431Z" fill="#394149" />
                                <path d="M82.7547 34.2424H85.19L81.7345 38.5701V40.701H79.5213V38.5783L76.1069 34.2424H78.6162L80.6567 36.8258L82.7547 34.2424Z" fill="#394149" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M92.8694 34.7936C93.3055 35.1392 93.5523 35.7234 93.5523 36.5708C93.5523 37.2619 93.3795 37.7802 93.0504 38.1423C92.6061 38.6524 91.8739 38.8827 90.9195 38.891C90.6233 38.8992 88.0892 38.891 88.0892 38.891V40.701H85.876V34.2424H90.8866C91.7751 34.2424 92.4498 34.4234 92.8694 34.7936ZM91.2321 37.0727C91.298 36.9575 91.3309 36.8094 91.3309 36.6037C91.3309 36.3898 91.2897 36.2088 91.2157 36.1101C91.0758 35.9044 90.8125 35.8056 90.3847 35.8056H88.0728V37.3853H90.3682C90.829 37.3853 91.1005 37.2784 91.2321 37.0727Z" fill="#394149" />
                                <path d="M101.237 39.0966V40.701H94.4331V34.2424H101.18V35.855H96.6051V36.686H101.048V38.2574H96.6051V39.0966H101.237Z" fill="#394149" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M109.498 34.9006C109.795 35.205 109.934 35.6246 109.934 36.2088C109.934 36.7107 109.811 37.1385 109.605 37.4265C109.375 37.7391 109.021 38.0024 108.585 38.0682L110.535 40.701H108.083L106.479 38.422H104.48V40.701H102.283V34.2424H107.425C108.445 34.2424 109.112 34.4892 109.498 34.9006ZM107.721 36.7518C107.779 36.6531 107.795 36.5214 107.795 36.4145C107.795 36.2911 107.779 36.1594 107.721 36.0771C107.606 35.8632 107.376 35.8056 107.03 35.8056H104.488V36.9822H107.071C107.425 36.9822 107.639 36.9164 107.721 36.7518Z" fill="#394149" />
                                <path d="M100.059 48.8017C100.059 47.3254 99.1211 46.5495 96.9335 46.3124C96.5779 46.2693 95.5326 46.1615 94.8752 46.1076C93.1833 45.9244 92.6769 45.8275 92.6769 45.3964C92.6769 45.0085 93.0756 44.8253 94.595 44.8253C95.6727 44.8253 96.2762 45.03 96.5132 45.3425C96.6318 45.4934 96.6749 45.6119 96.6857 45.7305H99.7893C99.7569 45.4718 99.6492 45.1054 99.4767 44.7822C98.9164 43.7045 97.5693 42.8424 94.6705 42.8424C91.4052 42.8424 89.6164 43.9955 89.6164 45.5042C89.6164 46.959 90.6293 47.8103 93.3665 48.0582C93.676 48.0847 94.3407 48.1475 94.8849 48.1989L94.9185 48.2021L94.9246 48.2027L94.927 48.2029L95.2201 48.2306C96.6533 48.3815 97.0413 48.4784 97.0413 48.9311C97.0413 49.3513 96.6641 49.5776 95.08 49.5776C93.8515 49.5776 93.1295 49.3944 92.8708 49.0819C92.7631 48.9526 92.6876 48.7586 92.6661 48.6293H89.5625C89.5948 48.8448 89.6487 49.1897 89.7672 49.4699C90.2953 50.6553 91.6747 51.5605 94.8752 51.5605C98.3129 51.5605 100.059 50.5906 100.059 48.8017Z" fill="#394149" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M78.057 50.5691C78.3803 50.1919 78.5419 49.6207 78.5419 49.0388C78.5419 48.5431 78.4126 48.0689 78.1432 47.7564C77.8199 47.3361 77.2487 47.0344 76.6453 46.959C77.0548 46.9051 77.4427 46.6896 77.669 46.4094C77.9492 46.0753 78.0785 45.6227 78.0785 45.0731C78.0785 44.5235 77.9169 44.0386 77.5505 43.6722C77.141 43.2519 76.3974 42.9717 75.2336 42.9717H67.9272V51.4312H75.4383C76.6345 51.4312 77.5613 51.1725 78.057 50.5691ZM75.0827 45.5796C75.0827 45.7844 75.018 45.9568 74.9103 46.0753C74.7594 46.2154 74.4792 46.2693 74.1128 46.2693H70.7506V44.8899H74.0374C74.4469 44.8899 74.7271 44.9438 74.8779 45.0839C75.018 45.2024 75.0827 45.3748 75.0827 45.5796ZM75.406 49.2867C75.2336 49.4483 74.9318 49.513 74.4253 49.513H70.7506V48.1013H74.4577C74.9318 48.1013 75.212 48.1659 75.3736 48.306C75.503 48.4353 75.5568 48.597 75.5568 48.8125C75.5568 49.0173 75.5137 49.1789 75.406 49.2867Z" fill="#394149" />
                                <path d="M88.6889 49.3298V51.4312H79.7769V42.9717H88.6135V45.0839H82.6218V46.1723H88.4411V48.2306H82.6218V49.3298H88.6889Z" fill="#394149" />
                                <path d="M110.545 45.0947V42.9717H100.448V45.0947H104.015V51.4312H106.967V45.0947H110.545Z" fill="#394149" />
                                <path d="M110.289 58.9168H109.814L109.78 58.4594C109.635 58.6909 109.328 58.9688 108.68 58.9688C107.585 58.9688 107.076 58.3088 107.076 56.6237C107.076 55.3209 107.4 54.2729 108.737 54.2729C109.896 54.2729 110.249 55.0315 110.266 55.8479H109.687C109.67 55.3152 109.432 54.823 108.749 54.823C107.927 54.823 107.689 55.3152 107.689 56.6412C107.689 58.0251 107.985 58.4594 108.761 58.4594C109.305 58.4594 109.623 58.1583 109.728 57.7993V56.9365H108.558V56.4095H110.283V57.7414C110.283 58.1393 110.287 58.564 110.288 58.7775L110.289 58.8791V58.9168Z" fill="#394149" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M68.0366 57.7645H69.6579L69.9937 58.9168H70.6075L69.2641 54.3309H68.5172L67.0811 58.9168H67.6891L68.0366 57.7645ZM69.5131 57.2492H68.1929C68.1929 57.2492 68.7661 55.3963 68.7777 55.3558C68.7835 55.3268 68.8762 54.9157 68.8762 54.9157L68.9403 55.2198L68.9688 55.3558C68.9746 55.3847 69.5131 57.2492 69.5131 57.2492Z" fill="#394149" />
                                <path d="M75.0024 54.3309H75.5583L74.4755 58.9168H73.7864C73.7864 58.9168 73.0163 55.35 73.0163 55.1994C73.0105 55.35 72.223 58.9168 72.223 58.9168H71.534L70.4512 54.3309H71.0765C71.0765 54.3309 71.9161 57.9614 71.9161 58.1062C71.9161 57.9614 72.6863 54.3309 72.6863 54.3309H73.3753C73.3753 54.3309 74.1454 57.9672 74.1454 58.1062C74.1454 57.9672 75.0024 54.3309 75.0024 54.3309Z" fill="#394149" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M77.9361 57.7645H76.3148L75.9674 58.9168H75.3594L76.7954 54.3309H77.5424L78.8858 58.9168H78.272L77.9361 57.7645ZM76.4712 57.2492H77.7914C77.7914 57.2492 77.2529 55.3847 77.2471 55.3558L77.2033 55.1471L77.1544 54.9157C77.1544 54.9157 77.0618 55.3268 77.056 55.3558C77.0444 55.3963 76.4712 57.2492 76.4712 57.2492Z" fill="#394149" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M81.1172 54.3309C81.8236 54.3309 82.2058 54.6609 82.2058 55.6221C82.2058 56.4386 81.8989 56.7107 81.5804 56.8033L82.4606 58.9168H81.8236L81.0072 56.9192H79.8955V58.9168H79.3164V54.3309H81.1172ZM81.0304 56.398C81.4878 56.398 81.5978 56.1606 81.5978 55.6395C81.5978 55.0489 81.4241 54.8694 81.0014 54.8694H79.9012V56.398H81.0304Z" fill="#394149" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M86.0609 56.5486C86.0609 57.6314 85.9799 58.0714 85.7483 58.4015C85.5167 58.72 85.1519 58.9168 84.5612 58.9168H82.9863V54.3309H84.5207C85.0998 54.3309 85.5514 54.5046 85.7599 54.8173C85.9915 55.1531 86.0609 55.57 86.0609 56.5486ZM84.4397 58.3725C84.7929 58.3725 85.0882 58.2799 85.2387 58.0772C85.4009 57.8572 85.4472 57.4113 85.4472 56.5486C85.4472 55.8248 85.4066 55.4368 85.2387 55.1878C85.0824 54.9736 84.7813 54.8809 84.4281 54.8809H83.5711V58.3725H84.4397Z" fill="#394149" />
                                <path d="M92.1699 54.3309H92.7258L91.643 58.9168H90.9539C90.9539 58.9168 90.1838 55.35 90.1838 55.1994C90.178 55.35 89.3905 58.9168 89.3905 58.9168H88.7015L87.6187 54.3309H88.244C88.244 54.3309 89.0836 57.9614 89.0836 58.1062C89.0836 57.9614 89.8537 54.3309 89.8537 54.3309H90.5428C90.5428 54.3309 91.3129 57.9672 91.3129 58.1062C91.3129 57.9672 92.1699 54.3309 92.1699 54.3309Z" fill="#394149" />
                                <path d="M93.7497 54.3309V58.9168H93.1475V54.3309H93.7497Z" fill="#394149" />
                                <path d="M97.5193 54.3309V58.9168H96.8534L95.1452 55.3615V58.9168H94.5835V54.3309H95.2842L96.9518 57.834V54.3309H97.5193Z" fill="#394149" />
                                <path d="M101.274 54.3309V58.9168H100.608L98.9001 55.3615V58.9168H98.3384V54.3309H99.0391L100.707 57.834V54.3309H101.274Z" fill="#394149" />
                                <path d="M102.695 54.3309V58.9168H102.093V54.3309H102.695Z" fill="#394149" />
                                <path d="M106.465 54.3309V58.9168H105.799L104.091 55.3615V58.9168H103.529V54.3309H104.23L105.898 57.834V54.3309H106.465Z" fill="#394149" />
                                <path d="M74.5554 67.9554L73.8919 65.9132L73.2283 67.9554H71.0811L72.8182 69.2176L72.1547 71.2598L73.8919 69.9976L75.6291 71.2598L74.9655 69.2176L76.7027 67.9554H74.5554Z" fill="#394149" />
                                <path d="M82.2289 67.9557L81.5518 65.9135L80.8747 67.9557H78.6836L80.4563 69.2178L79.7792 71.26L81.5518 69.9979L83.3245 71.26L82.6474 69.2178L84.42 67.9557H82.2289Z" fill="#394149" />
                                <path d="M89.829 67.9557L89.1519 65.9135L88.4748 67.9557H86.2837L88.0563 69.2178L87.3792 71.26L89.1519 69.9979L90.9245 71.26L90.2474 69.2178L92.0201 67.9557H89.829Z" fill="#394149" />
                                <path d="M97.4286 67.9557L96.7515 65.9135L96.0744 67.9557H93.8833L95.6559 69.2178L94.9788 71.26L96.7515 69.9979L98.5241 71.26L97.847 69.2178L99.6197 67.9557H97.4286Z" fill="#394149" />
                                <path d="M105.075 67.9557L104.412 65.9135L103.748 67.9557H101.601L103.338 69.2178L102.675 71.26L104.412 69.9979L106.149 71.26L105.485 69.2178L107.223 67.9557H105.075Z" fill="#394149" />
                                <path d="M46.8923 42.9365C47.5167 43.8891 48.4829 45.0823 49.8917 45.0483C51.1728 45.1123 52.2796 44.238 53.1512 43.5083C54.0899 42.7224 54.9372 41.5731 55.2949 40.3306C53.9846 39.9494 52.7301 40.6556 51.7946 41.3217C50.8177 42.0174 50.0664 43.2906 49.905 44.5979C49.8929 43.2882 49.5384 41.9355 48.9669 40.8458C48.4444 39.8496 47.7163 38.503 46.4173 38.2338C45.9055 39.7839 46.0688 41.6805 46.8923 42.9365Z" fill="#394149" />
                                <path d="M50.3084 50.1789C49.0009 50.398 47.7255 49.5969 46.8972 48.6546C45.8308 47.4414 45.1963 45.8139 45.3257 44.1846C46.6689 44.2187 47.6862 45.3798 48.4381 46.2578C49.2479 47.2034 49.9114 48.4475 50.2297 49.7309C50.0897 48.4519 50.5191 47.0708 51.3162 46.2174C52.0856 45.3936 53.1634 44.4958 54.5044 44.6399C54.4755 45.9368 53.8254 47.1724 53.1549 48.0978C52.5299 48.9602 51.5671 50.0269 50.3084 50.1789Z" fill="#394149" />
                                <path d="M47.8931 54.4883C49.0973 55.2723 50.5578 56.0483 52.0927 55.461C53.3519 55.0155 54.1525 53.748 54.6449 52.5846C55.1665 51.3519 55.5149 49.9305 55.2737 48.5813C53.89 48.7041 52.7426 49.6941 52.1332 50.9026C51.4961 52.166 51.3739 53.6698 51.8633 54.9944C51.1402 53.6317 50.0827 52.5291 48.9625 51.5103C47.9442 50.5842 46.4774 49.6086 45 49.7921C45.2811 51.6186 46.3957 53.5135 47.8931 54.4883Z" fill="#394149" />
                                <path d="M55.1945 60.3988C56.3795 59.6904 56.8564 58.1998 57.0513 56.9225C57.2614 55.545 57.2524 54.0258 56.6803 52.719C55.3055 53.103 54.3618 54.3404 54.0502 55.6957C53.721 57.1276 53.9988 58.6537 54.7996 59.8729C53.7351 58.6516 52.3196 57.6432 50.9631 56.9361C49.6528 56.2531 48.0453 55.4293 46.4717 55.9268C47.2305 57.7787 48.8537 59.5029 50.6527 60.2161C52.0459 60.7683 53.7408 61.3144 55.1945 60.3988Z" fill="#394149" />
                                <path d="M60.8123 60.8782C60.9862 62.2078 60.9813 63.8942 59.949 64.9176C58.659 66.238 56.6626 65.9832 55.1228 65.6927C53.0556 65.3024 50.7286 63.8925 49.4814 62.0152C51.0046 61.1765 52.8675 61.713 54.3755 62.1473L54.4616 62.172C56.1449 62.6563 57.9387 63.4363 59.4389 64.5021C58.2417 63.4203 57.3694 61.8325 57.3267 60.2321C57.2883 58.8007 57.9096 57.2693 59.2466 56.587C60.18 57.8121 60.6171 59.385 60.8123 60.8782Z" fill="#394149" />
                                <path d="M66.8034 68.6824C67.5636 67.2353 66.8104 65.5369 66.2102 64.2816C65.5006 62.7976 64.5311 61.2852 63.1436 60.199C61.8113 61.3472 61.938 62.9901 62.3341 64.4179C62.8051 66.1156 64.438 67.5628 66.1289 68.3875C64.1706 67.6572 62.0319 67.2189 59.9971 67.0895L59.791 67.0762C58.1563 66.9697 56.0282 66.8311 54.7256 68.0274C56.6951 69.7017 59.4926 70.6677 61.9582 70.6175C63.6105 70.5839 65.8775 70.3884 66.8034 68.6824Z" fill="#394149" />
                                <path d="M126.974 39.4698C126.497 38.1865 125.453 37.0675 124.317 36.5456C123.262 36.0616 121.861 35.5565 120.63 36.1767C121.3 37.3531 122.403 38.343 123.53 38.9656C124.543 39.5254 125.826 40.2036 127.096 39.9121C128.48 39.7001 129.149 38.3223 129.521 37.28C130.036 35.8397 129.684 33.9162 128.805 32.5031C127.593 33.0082 127.223 34.5068 126.97 35.5671C126.681 36.774 126.673 38.1828 126.974 39.4698Z" fill="#394149" />
                                <path d="M125.979 41.3244C126.955 42.0204 127.704 43.2929 127.865 44.5993C127.879 43.2903 128.235 41.9389 128.807 40.8503C129.33 39.8544 130.06 38.5084 131.359 38.2401C131.869 39.7907 131.704 41.6872 130.879 42.9425C130.255 43.8934 129.289 45.0841 127.883 45.0522C126.6 45.1177 125.492 44.2413 124.62 43.5101C123.682 42.7234 122.836 41.5735 122.48 40.3308C123.79 39.9504 125.044 40.6576 125.979 41.3244Z" fill="#394149" />
                                <path d="M127.535 49.7394C127.678 48.4593 127.25 47.0753 126.452 46.2202C125.684 45.3958 124.607 44.4972 123.266 44.6403C123.293 45.9372 123.942 47.1734 124.612 48.0993C125.236 48.9618 126.197 50.0285 127.455 50.1822C128.763 50.4037 130.04 49.603 130.87 48.6608C131.937 47.4485 132.573 45.8215 132.446 44.192C131.102 44.2252 130.084 45.3854 129.331 46.2628C128.519 47.209 127.854 48.4545 127.535 49.7394Z" fill="#394149" />
                                <path d="M125.631 50.905C126.267 52.1691 126.388 53.6732 125.897 54.9974C126.621 53.6349 127.68 52.533 128.801 51.5149C129.82 50.5895 131.288 49.6152 132.765 49.7997C132.483 51.6261 131.366 53.5202 129.868 54.4938C128.664 55.2758 127.205 56.0502 125.672 55.4653C124.411 55.0206 123.61 53.7505 123.118 52.5851C122.597 51.352 122.25 49.9304 122.493 48.5813C123.876 48.7052 125.023 49.6961 125.631 50.905Z" fill="#394149" />
                                <path d="M122.958 59.8706C123.758 58.6526 124.037 57.128 123.71 55.6968C123.4 54.3412 122.457 53.1031 121.082 52.7181C120.509 54.0243 120.499 55.5434 120.707 56.9212C120.901 58.196 121.375 59.6836 122.553 60.3946C124.008 61.3174 125.707 60.7716 127.102 60.2196C128.902 59.5077 130.527 57.7847 131.287 55.9332C129.714 55.4347 128.106 56.2573 126.795 56.9393C125.439 57.645 124.023 58.6513 122.958 59.8706Z" fill="#394149" />
                                <path d="M116.942 60.8743C116.767 62.2036 116.77 63.8899 117.802 64.9142C119.09 66.2356 121.087 65.9822 122.627 65.6927C124.695 65.304 127.023 63.8956 128.272 62.0194C126.75 61.1797 124.886 61.7146 123.378 62.1477L123.291 62.1725C121.608 62.6553 119.814 63.4337 118.313 64.4979C119.511 63.417 120.384 61.8305 120.428 60.2307C120.468 58.7994 119.848 57.2675 118.512 56.5841C117.577 57.8085 117.139 59.3812 116.942 60.8743Z" fill="#394149" />
                                <path d="M115.787 70.6126C114.135 70.5777 111.868 70.3806 110.944 68.6738L110.931 68.6504C110.193 67.2077 110.943 65.5215 111.541 64.2736C112.252 62.7901 113.223 61.2784 114.611 60.1934C115.943 61.3425 115.814 62.9853 115.417 64.4127C114.944 66.1101 113.31 67.5563 111.618 68.3796C113.577 67.6508 115.716 67.2141 117.751 67.0861L117.958 67.0729C119.593 66.9677 121.721 66.8309 123.022 68.0279C121.051 69.7005 118.253 70.6646 115.787 70.6126Z" fill="#394149" />
                            </svg>
                        </div>
                        <div className="bg-gray-100 px-12 pt-24">
                            <p className="text-sm leading-loose text-gray-400 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <NavLink to="/register" className="inline-block bg-gray-400 uppercase text-xs tracking-widest text-center text-green-900 m-4 p-3 px-12 hover:opacity-75 hover:text-black hover:bg-green-900 ">Let's work together</NavLink>

                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 pt-24">
                    <div className="py-12 text-center">
                        <h2 className="text-3xl font-display text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
                    </div>
                    <div className="mb-12 container mx-auto flex">
                        <div className="bg-green-700 bg-opacity-40 text-white text-center w-1/2 py-64">
                            <h4 className="text-xs uppercase font-light tracking-widest mb-1">Featured Destination</h4>
                            <h3 className="font-display text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
                        </div>
                        <div className="w-1/2 relative">
                            <img src={homePhotoV2} className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                    </div>




                    <div className=" mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl my-24 text-center">
                        <h1 className={`text-4xl text-green-800 font-display uppercase tracking-widest`}>Hedefinize Uygun Çözümler</h1>
                        <div className=' my-11 flex flex-wrap justify-center relative'>
                            <div className='bg-cardColor rounded-xl flex items-center justify-center flex-col m-8 px-10 py-5 shadow-2xl'>
                                <img src={cardImage} />
                                <h1 className={`my-10 font-primaryStyle`}>Sağlıklı Beslenme</h1>
                                <p className='mb-10 mt-5 text-lg font-primaryStyle' >Sağlıklı bir şekilde yaşamaya,<br />
                                    hemen bugün bizimle birlikte başlayın.</p>
                            </div>
                            <div className='bg-cardColor rounded-xl flex items-center justify-center flex-col m-8 px-10 py-5 shadow-2xl'>
                                <img src={cardImage} />
                                <h1 className={`my-10 font-primaryStyle`}>Sağlıklı Beslenme</h1>
                                <p className='mb-10 mt-5 text-lg font-primaryStyle' >Sağlıklı bir şekilde yaşamaya,<br />
                                    hemen bugün bizimle birlikte başlayın.</p>
                            </div>
                            <div className='bg-cardColor rounded-xl flex items-center justify-center flex-col m-8 px-10 py-5 shadow-2xl'>
                                <img src={cardImage} />
                                <h1 className={`my-10 font-primaryStyle`}>Sağlıklı Beslenme</h1>
                                <p className='mb-10 mt-5 text-lg font-primaryStyle' >Sağlıklı bir şekilde yaşamaya,<br />
                                    hemen bugün bizimle birlikte başlayın.</p>
                            </div>
                            <div className='bg-cardColor rounded-xl flex items-center justify-center flex-col m-8 px-10 py-5 shadow-2xl'>
                                <img src={cardImage} />
                                <h1 className={`my-10 font-primaryStyle`}>Sağlıklı Beslenme</h1>
                                <p className='mb-10 mt-5 text-lg font-primaryStyle' >Sağlıklı bir şekilde yaşamaya,<br />
                                    hemen bugün bizimle birlikte başlayın.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative py-3 sm:max-w-xl sm:mx-auto my-20">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="text-center pb-6">
                                <h1 className="text-3xl">Vücut Kitle Endeksininizi Hesaplayın</h1>
                                <p className="text-gray-300">
                                    Kilonuzu ve Boyunuzu Girin
                                </p>
                            </div>
                            <form onChange={formHandle}>
                                <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Boyunuz(Cm)" name="height" />
                                <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Kilonuz(Kg)" name="weight" />

                                <div className="flex justify-between">
                                    <button onClick={calculate} className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'> Hesapla </button>
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
                <div className="bg-green-700 bg-opacity-40 px-12 py-24 flex flex-col items-center justify-center">
                    <p className="tracking-widest text-lg text-white text-center uppercase font-heading font-light mb-6">Chat with us today</p>
                    <NavLink to="/register" className="inline-block uppercase text-xs tracking-widest text-center bg-white text-green-900 p-3 px-12 hover:opacity-75">Let's work together</NavLink>
                </div>
               
            </div>



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



            {/* 

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
                                <img src={photo} className="rounded-lg shadow-lg dark:shadow-black/20" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*Mini informations section 

            <div className='bg-secondaryGreen flex justify-between p-10'>
                <div className='flex gap-10 '>
                    <p>mailadersi@gmail.com</p>
                    <p>05394268614</p>
                </div>

                <div className='flex gap-10'>
                    <button
                        type="button"
                        className="inline-block rounded bg-green-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Randevu Oluştur
                    </button>

                    <button
                        type="button"
                        className="inline-block rounded bg-green-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        İletişim
                    </button>

                </div>


            </div>





            {/* Services Section
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
                                <div className="group relative bg-servicesBackground transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
                                    <div className="relative space-y-8 py-12 p-8">
                                        <img src="https://www.svgrepo.com/show/164986/logo.svg" loading="lazy" width={200} height={200} className="w-12 h-12 rounded-full" style={{ color: 'transparent' }} />
                                        <div className="space-y-2">
                                            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Hizmetin ismi</h5>
                                            <p className="text-gray-300">Bilgilendirme ile ilgili bir kaç cümle yazılacak</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative bg-servicesBackground transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                    <div className="relative space-y-8 py-12 p-8">
                                        <img src="https://www.svgrepo.com/show/120853/logo.svg" loading="lazy" width={200} height={200} className="w-12 h-12 rounded-full" style={{ color: 'transparent' }} />
                                        <div className="space-y-2">
                                            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Hizmetin ismi</h5>
                                            <p className="text-gray-300">Bilgilendirme ile ilgili bir kaç cümle yazılacak</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative bg-servicesBackground transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                                    <div className="relative space-y-8 py-12 p-8">
                                        <img src="https://www.svgrepo.com/show/120852/logo.svg" loading="lazy" width={200} height={200} className="w-12 h-12 rounded-full" style={{ color: 'transparent' }} />
                                        <div className="space-y-2">
                                            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Hizmetin ismi</h5>
                                            <p className="text-gray-300">Bilgilendirme ile ilgili bir kaç cümle yazılacak</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative bg-servicesBackground transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
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

                        {/*BMI CALCULATE SECTION

                        <div className="relative py-3 sm:max-w-xl sm:mx-auto mb-12">
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
                                        <button onClick={calculate} className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'> Hesapla </button>
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
                </div>

            </div>*/}














        </>

    );
}

export default Home
