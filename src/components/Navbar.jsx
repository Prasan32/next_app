'use client'
import { navLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from "../../public/images/logo.jpg"

const Navbar = () => {
   const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)
   const displayHamburgerMenu = () => {
      setShowHamburgerMenu(!showHamburgerMenu)
   }
   const [selectedNavItem, setSelectedItem] = useState('/')

   const renderNavbar = navLinks?.map((link) => {

      return (
         <li key={link.href} className='flex text-lg font-semibold'>
            <Link
               href={link.href}
               className={`block hover:scale-110 hover:text-red-500 text-black  py-2 px-3  rounded md:bg-transparent md:p-0 capitalize`}
            >{link.label}</Link>
         </li>
      )
   })

   return (
      <nav className="navbar fixed bg-white shadow-md sm:px-6 md:px-12 lg:px-16 z-50">
         <div className="flex-1">
            <Link href='/'>
               <Image src={Logo} width={50} height={50} alt='PSM-Nepal logo' className='hover:animate-pulse' /></Link>
         </div>
         <div className='hidden md:block'>
            <ul className='hidden text-black md:flex gap-14'>
               {renderNavbar}
            </ul>
         </div>
         <div className='md:hidden'>
            <HamburgerButton
               showHamburgerMenu={showHamburgerMenu}
               displayHamburgerMenu={displayHamburgerMenu}
            />
         </div>
         {showHamburgerMenu && (
            <DisplayHamburger
               displayHamburgerMenu={displayHamburgerMenu}
            />
         )}
      </nav>
   )
}

export default Navbar


const HamburgerButton = ({ displayHamburgerMenu, showHamburgerMenu }) => {
   return (
      <button
         className='z-40 block hamburger md:hidden focus:outline-none'
         type='button'
         onClick={displayHamburgerMenu}
      >
         <span className={`hamburger-top ${showHamburgerMenu && 'open'}`}></span>
         <span
            className={`hamburger-middle ${showHamburgerMenu && 'hidden-middle'}`}
         ></span>
         <span className={`hamburger-bottom ${showHamburgerMenu && 'open'}`}></span>
      </button>
   )
}

const DisplayHamburger = ({ displayHamburgerMenu }) => {
   return (
      <div
         className='fixed  top-0 bottom-0 left-0 flex-col self-end   w-full h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-blue-600 uppercase bg-white md:hidden'
      >
         {navLinks.map((links) => (
            <div key={links.href} className='hover:text-red-600 text-center'>
               <Link href={links.href} onClick={displayHamburgerMenu}>
                  {links.label}
               </Link>
            </div>
         ))}
      </div>
   )
}