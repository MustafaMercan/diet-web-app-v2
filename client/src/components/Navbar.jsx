import React from 'react'
import { useState } from 'react';

import { NavLink } from 'react-router-dom';



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
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
      {/* Mobil menü */}
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
  );
}

export default Navbar
