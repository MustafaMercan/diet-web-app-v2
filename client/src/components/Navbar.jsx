import React from 'react'
import { useState } from 'react';

import { NavLink } from 'react-router-dom';



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div>
                      <div className="bg-yellow-600 bg-opacity-50 text-white text-xs text-center uppercase tracking-widest py-2">
                    Sağlıklı Yaşamaya
                    <NavLink to="/register" className="underline">
                        Bugün
                    </NavLink>
                    Bizimle Birlikte Başlayın
                </div>

                <div className="bg-white flex justify-center">
                    <svg className="h-24 w-auto text-green-800 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.78 100">
                        <title>logo-5</title>
                        <path d="M63.87,44.07h3V56.2h-3Zm4.19,7.55c0-3,1.84-4.79,4.68-4.79s4.68,1.79,4.68,4.79-1.8,4.8-4.68,4.8S68.06,54.67,68.06,51.62Zm6.35,0c0-1.65-.65-2.62-1.67-2.62s-1.66,1-1.66,2.62.63,2.6,1.66,2.6S74.41,53.3,74.41,51.63Zm4.14,5.17h2.88a1.55,1.55,0,0,0,1.62.9c1.14,0,1.74-.62,1.74-1.52V54.49h-.06A2.84,2.84,0,0,1,82,56.13c-2.19,0-3.64-1.67-3.64-4.54s1.38-4.68,3.68-4.68a2.87,2.87,0,0,1,2.76,1.76h0V47h3V56.1c0,2.19-1.93,3.55-4.78,3.55C80.37,59.65,78.72,58.46,78.55,56.8Zm6.25-5.18c0-1.46-.67-2.38-1.73-2.38s-1.71.91-1.71,2.38.64,2.3,1.71,2.3S84.8,53.1,84.8,51.62Zm4.13,0c0-3,1.84-4.79,4.68-4.79s4.69,1.79,4.69,4.79-1.8,4.8-4.69,4.8S88.93,54.67,88.93,51.62Zm6.35,0c0-1.65-.65-2.62-1.67-2.62S92,50,92,51.63s.63,2.6,1.65,2.6S95.28,53.3,95.28,51.63Zm4.16-6.79A1.53,1.53,0,1,1,101,46.31,1.46,1.46,0,0,1,99.44,44.84Zm0,2.2h3V56.2h-3Zm13.89,4.59c0,3-1.33,4.71-3.61,4.71a2.86,2.86,0,0,1-2.8-1.7h-.06v4.52h-3V47h3v1.64h.06a2.87,2.87,0,0,1,2.78-1.77C112,46.91,113.37,48.63,113.37,51.63Zm-3,0c0-1.46-.67-2.39-1.72-2.39s-1.72.94-1.73,2.39.68,2.38,1.73,2.38S110.33,53.08,110.33,51.63Zm8.15-4.8c2.49,0,4,1.18,4.07,3.07h-2.73c0-.65-.54-1.06-1.37-1.06s-1.2.32-1.2.79.33.62,1,.76l1.92.39c1.83.39,2.61,1.13,2.61,2.52,0,1.9-1.73,3.12-4.28,3.12s-4.22-1.22-4.35-3.09h2.89c.09.68.63,1.08,1.51,1.08s1.28-.29,1.28-.77-.28-.58-1-.73l-1.73-.37c-1.79-.37-2.73-1.32-2.73-2.72C114.39,48,116,46.83,118.48,46.83Zm14.31,9.37H129.9V54.47h-.06a2.61,2.61,0,0,1-2.66,1.91,3.19,3.19,0,0,1-3.36-3.45V47h3v5.24c0,1.09.56,1.67,1.49,1.67a1.53,1.53,0,0,0,1.52-1.73V47h3ZM134.24,47h2.9v1.77h.06a2.66,2.66,0,0,1,2.61-1.94,2.39,2.39,0,0,1,2.55,2h.06a2.82,2.82,0,0,1,2.82-2,2.91,2.91,0,0,1,3,3.12V56.2h-3V50.75c0-1-.45-1.46-1.29-1.46a1.31,1.31,0,0,0-1.31,1.48V56.2h-2.85V50.71c0-.92-.45-1.42-1.27-1.42a1.34,1.34,0,0,0-1.33,1.5V56.2h-3Z" />
                        <path d="M55.48,44.62a13.25,13.25,0,0,0-2-3.22A13.53,13.53,0,1,0,34.8,60.72,13.09,13.09,0,0,0,38,62.55a13.39,13.39,0,0,0,5.07,1A13.56,13.56,0,0,0,56.6,50,13.39,13.39,0,0,0,55.48,44.62ZM43.06,39.19a10.71,10.71,0,0,1,4.52,1h0a4.39,4.39,0,0,1-1.08.31,5.73,5.73,0,0,0-4.85,4.85A3,3,0,0,1,38.94,48a5.73,5.73,0,0,0-4.85,4.85,2.91,2.91,0,0,1-.79,1.74h0a10.8,10.8,0,0,1,9.77-15.42ZM34.79,57c.12-.11.24-.21.36-.33a5.48,5.48,0,0,0,1.62-3.23,2.92,2.92,0,0,1,.87-1.82,2.83,2.83,0,0,1,1.81-.86,5.73,5.73,0,0,0,4.85-4.85A2.92,2.92,0,0,1,45.17,44,2.87,2.87,0,0,1,47,43.17a5.48,5.48,0,0,0,3-1.43,10.51,10.51,0,0,1,2.36,2.78.86.86,0,0,1-.13.14,2.87,2.87,0,0,1-1.81.88,5.71,5.71,0,0,0-4.85,4.85,3,3,0,0,1-2.69,2.68A5.76,5.76,0,0,0,38,57.92a3.14,3.14,0,0,1-.49,1.37A10.89,10.89,0,0,1,34.79,57Zm8.27,3.86a10.84,10.84,0,0,1-3-.42,5.78,5.78,0,0,0,.64-2,3,3,0,0,1,2.68-2.68,5.73,5.73,0,0,0,4.86-4.85,3,3,0,0,1,2.68-2.68,5.71,5.71,0,0,0,2.56-1A10.82,10.82,0,0,1,43.06,60.81Z" />
                    </svg>
                </div>

                <div className="bg-gray-100 py-12 flex items-center justify-center uppercase tracking-widest text-xs text-gray-500">
                    <NavLink to="/" className="mx-4">Home</NavLink>
                    <NavLink to="/about" className="mx-4">About</NavLink>
                    <NavLink to="/services" className="mx-4">Services</NavLink>
                    <NavLink to="/contact" className="mx-4">Contact</NavLink>
                </div>
    </div>


  );
}

    {/*
    <nav className="bg-primaryGreen p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="#" className="text-black text-2xl font-bold">
          Logo
        </NavLink>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className="text-black">
            Ana Sayfa
          </NavLink>
          <NavLink to="/about" className="text-black">
            Hakkımızda
          </NavLink>
          <NavLink to="/services" className="text-black">
            Hizmetler
          </NavLink>
          <NavLink to="/contact" className="text-black">
            İletişim
          </NavLink>

          <NavLink to="/login" className="text-black">
            Giriş Yap
          </NavLink>

          <NavLink to="/register" className="text-black">
            Kayıt Ol
          </NavLink>

        </div>
        <div className="md:hidden">
          <button className="text-black" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 2.5a.5.5 0 0 1 .5.5V3h10a.5.5 0 0 1 0 1H3v9.5a.5.5 0 0 1-1 0V3.5a.5.5 0 0 1 .5-.5zM1 1.5A1.5 1.5 0 0 1 2.5 0h10A1.5 1.5 0 0 1 14 1.5V15a1.5 1.5 0 0 1-1.5-1.5H2.5A1.5 1.5 0 0 1 1 13.5V1.5z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobil menü 
      {isOpen && (
        <div className="md:hidden absolute right-0 top-0 w-2/3 bg-primaryGreen p-4">
          <button
            className="text-black absolute top-4 right-4"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.293 3.293a1 1 0 011.414 0L8 6.586l3.293-3.293a1 1 0 111.414 1.414L9.414 8l3.293 3.293a1 1 0 01-1.414 1.414L8 9.414l-3.293 3.293a1 1 0 01-1.414-1.414L6.586 8 3.293 4.707a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <ul className="mt-12">
            <li className="mb-2">
              <NavLink to="/" className="text-black">
                Ana Sayfa
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/about" className="text-black">
                Hakkımızda
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/services" className="text-black">
                Hizmetler
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/contact" className="text-black">
                İletişim
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/login" className="text-black">
                Giriş Yap
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/register" className="text-black">
                Kayıt Ol
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
    */}
export default Navbar
