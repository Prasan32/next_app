import Image from 'next/image'
import React from 'react'
import Logo from "../../public/images/logo.jpg"
import { footerLinks } from '@/constant'
import Link from 'next/link'

const Footer = () => {

   const renderFooterLinks = footerLinks?.map((link) => {
      return (
         <li key={link.href}>
            <Link href={link.href} className='mr-4 hover:underline md:mr-6 capitalize'>{link.label}</Link>
         </li>
      )
   })

   return (
      <footer className="w-full p-4 bg-white md:p-8 lg:p-10 mt-20">
         <hr className='' />
         <div className="mx-auto max-w-screen-xl text-center mt-2">
            <a href="/" className="flex justify-center items-center text-2xl font-semibold text-gray-900 ">
               <Image src={Logo} width={100} height={100} alt='footer' />

            </a>
            <p className="my-6 text-gray-500 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, suscipit! Sed porro mollitia quidem enim doloribus qui? Quos, quisquam obcaecati!</p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 ">
               {renderFooterLinks}
            </ul>
            <span className="text-sm text-black sm:text-center">© 2024 <Link href="#" className="hover:underline">PSM Nepal</Link>. All Rights Reserved.</span>
         </div>
      </footer>
   )
}

export default Footer