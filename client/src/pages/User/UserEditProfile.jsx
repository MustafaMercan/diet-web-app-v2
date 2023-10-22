import React from 'react'
import UserNavbar from '../../components/Navbar/UserNavbar'
import photo from '../../assets/homePhoto.jpg'
import ProfileDetailsForm from '../../components/User/ProfileDetailsForm'
const UserEditProfile = () => {



    return (
        <div>
            <UserNavbar />

            <div className="m-10 text-center ">
                <h1 className='text-center'>Account Settings</h1>
                <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto" />



                <div className='flex flex-col py-10  rounded-3xl  bg-green-800 text-white text-opacity-50 font-display uppercase bg-opacity-80'>
                    <div className=' flex items-center justify-evenly'>
                        <img src={photo} className='w-48 h-48 rounded-full mx-9' />
                        <div>
                            <h1 className='text-2xl'>Mustafa Mercan</h1>
                            <ul className='flex gap-10 my-8'>
                                <li><button>Change Photo</button></li>
                                <li><button>Delete Photo</button></li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-2/3  h-px bg-gray-300 my-10 mx-auto" />

                <div className='flex justify-center flex-col items-center'>
                    <h1 className='my-10'>Informations Section</h1>
                <ProfileDetailsForm />

                </div>



            </div>
        </div>
    )
}

export default UserEditProfile

