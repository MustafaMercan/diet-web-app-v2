import React from 'react'
import photo from '../../assets/homePhoto.jpg';
import { useSelector, useDispatch } from 'react-redux';
import UserNavbar from '../../components/Navbar/UserNavbar';
import { NavLink } from 'react-router-dom';
import ProfileDetails from '../../components/User/ProfileDetails';
import AnthropometricDetailts from '../../components/User/AnthropometricDetailts';
import { useState } from 'react';
const UserProfile = () => {

    const user = useSelector((state) => state.user);

    const [detailSection, setDetailSection] = useState("Profile");
    const dispatch = useDispatch();


    return (
        <div>
            <UserNavbar />
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

                <div className="py-4 text-center flex items-center justify-center font-bold">

                    <button className={`uppercase max-w-sm font-heading  text-gray-500 ${detailSection === "Profile" ? ' text-green-950 opacity-90 underline tracking-widest': ''}`} onClick={() => setDetailSection('Profile')}> Profile Detatils </button>
                    <div className="w-px h-16 bg-gray-300 my-6 mx-3"></div>
                    <button className={`uppercase max-w-sm font-heading  text-gray-500 ${detailSection === "Anthropometric" ? ' text-green-950 opacity-90 underline tracking-widest': ''}`} onClick={() => setDetailSection('Anthropometric')}> Anthropometric Data  </button>
                </div>
                <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto" />
                

                {detailSection === "Profile" && <ProfileDetails/>}
                {detailSection === "Anthropometric" && <AnthropometricDetailts/>}


            </div>












        </div>
    )
}

export default UserProfile
