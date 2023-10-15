import React from 'react'
import photo from '../assets/homePhoto.jpg';
import { useSelector, useDispatch } from 'react-redux';
import UserNavbar from '../components/Navbar/UserNavbar';
import { NavLink } from 'react-router-dom';

const UserProfile = () => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();


    return (
        <div>
            <UserNavbar/>
            <div className="relative flex justify-center">
                <div className="w-full h-1/2 bg-gray-100 absolute inset-0" />
                <img src={photo} className=" h-64 object-center relative max-w-6xl rounded-full w-64" />
            </div>


            <div className="py-4 text-center">
                <NavLink to='edit' className="pb-12">Edit Profile</NavLink>
                <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">{user?.firstName} {user?.lastName}</h1>
                <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto" />
                <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</h2>
                <a href="#" className="inline-block bg-green-800 opacity-75 text-black uppercase text-xs tracking-widest text-center  m-4 p-3 px-12 hover:opacity-100 hover:text-white">Booking</a>
            </div>

            <div className=" w-3/5 mx-auto h-px bg-gray-300" />


            <div className="py-24 text-center">
                <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest m-12">Profile Details</h1>

                <div className="bg-green-700 bg-opacity-40 px-12 py-12 flex flex-col mx-32">
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Cinsiyet: <span>{user?.features?.gender}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Yaş: <span>{user?.features?.age}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Kilo(kg): <span>{user?.features?.weight}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Boy(cm): <span>{user?.features?.height}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Tanı Konulan Hastalıklar: <span>{user?.features?.diseases}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Birinci Derece Akrabalarda Bulunan Kronik Rahatsızlıklar: <span>{user?.features?.chronicRelative}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Düzenli Kullanılan İlaçlar: <span>{user?.features?.usedMedications}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Geçirilen İşlemler / Ameliyatlar:  <span>{user?.features?.operations}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Besin Alerjileri: <span>{user?.features?.allergies}</span></p>


                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Fiziksel Aktiviteler: <span>{user?.features?.physicalActivity}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Uyku Düzeni: <span>{user?.features?.sleepPattern}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Sindirim Sistemi Problemleri: <span>{user?.features?.digestiveSystem}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Mideye Rahatsızlık Veren Yiyecek ya da İçecekler: <span>{user?.features?.stomachDamaging}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Öğün Düzeni: <span>{user?.features?.mealPlanning}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Genellikle Atlanan Öğün: <span>{user?.features?.skippedMeal}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Atıştırma Alışkanlıkları: <span>{user?.features?.snacks}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Vazgeçilmez Besin ya da Besinler:  <span>{user?.features?.essentialFood}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Tüketilmeyen Besin ya da Besinler: <span>{user?.features?.notConsumedFood}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Gece Yemek Yeme Alışkanlığı: <span>{user?.features?.nightEatingHabits}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Psiklojik Durumun Beslenme Üzerindeki Etkisi: <span>{user?.features?.psychologicalState}</span></p>



                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Su Tüketim Miktarı: <span>{user?.features?.waterAmount}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Çay ve Kahve Tüketim Miktarı: <span>{user?.features?.teaCoffeAmount}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Maden Suyu Tüketim Miktarı: <span>{user?.features?.mineralWaterAmount}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Asitli İçecek Tüketim Miktarı: <span>{user?.features?.sodaAmount}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Şeker Tüketim Miktarı: <span>{user?.features?.sugarAmount}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Alkol Tüketim Miktarı: <span>{user?.features?.alcoholAmount}</span></p>

                    
                </div>

            </div>



            


            

            



        </div>
    )
}

export default UserProfile
