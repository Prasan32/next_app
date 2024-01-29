
"use client";
import { navLinks } from "@/constant";
import { PngLog } from "@/constant/images";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomImage from "./ui/CustomImage";

const Navbar = () => {
   const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
   const [scrollNavbar, setScrollNavbar] = useState(false);

   const displayHamburgerMenu = () => {
      setShowHamburgerMenu(!showHamburgerMenu);
   };

   useEffect(() => {
      window.addEventListener("scroll", scrollfixed);
      return () => {
         window.removeEventListener("scroll", scrollfixed);
      };
   }, []);

   const scrollfixed = () => {
      if (window.scrollY > 10) {
         //   console.log(scrollY);
         setScrollNavbar(true);
      } else {
         setScrollNavbar(false);
      }
   };

   const renderNavbar = navLinks?.map((link) => {
      return (
         <li key={link.href} className="flex text-lg font-semibold">
            <Link
               href={link.href}
               className={`block hover:scale-110 hover:text-[#2994a3] ${scrollNavbar ? "text-gray-800  " : "text-color-background "
                  }  py-2 px-3  capitalize`}
            >
               {link.label}
            </Link>
         </li>
      );
   });

   return (
      <nav
         className={`${scrollNavbar ? "bg-white shadow-lg  " : "bg-transparent "
            } fixed top-0 left-0 right-0 z-50 transition-all duration-600 delay-200 origin-top w-full  `}
      >
         <div className=" w-10/12 mx-auto py-2  flex items-center justify-between">
            <Link href="/" className="inline-block">
               {/* <Image
                  src={PngLog}
                  width={80}
                  height={80}
                  quality={50}
                  alt="PSM-Nepal logo"
                  className="hover:animate-pulse"
               /> */}
               <CustomImage
                  src={PngLog}
                  alt="PSM-Nepal logo"
                  className=" w-20 hover:animate-pulse"
               />
            </Link>

            <div className="hidden md:block">
               <ul className="hidden text-black md:flex gap-8">{renderNavbar}</ul>
            </div>

            <div className="md:hidden">
               <HamburgerButton
                  showHamburgerMenu={showHamburgerMenu}
                  displayHamburgerMenu={displayHamburgerMenu}
               />
            </div>

            {showHamburgerMenu && (
               <DisplayHamburger displayHamburgerMenu={displayHamburgerMenu} />
            )}
         </div>
      </nav>
   );
};

export default Navbar;

const HamburgerButton = ({ displayHamburgerMenu, showHamburgerMenu }) => {
   return (
      <button
         className="z-40 block hamburger md:hidden focus:outline-none"
         type="button"
         onClick={displayHamburgerMenu}
      >
         <span className={`hamburger-top ${showHamburgerMenu && "open"}`}></span>
         <span
            className={`hamburger-middle ${showHamburgerMenu && "hidden-middle"}`}
         ></span>
         <span
            className={`hamburger-bottom ${showHamburgerMenu && "open"}`}
         ></span>
      </button>
   );
};

const DisplayHamburger = ({ displayHamburgerMenu }) => {
   return (
      <div className="fixed  top-0 bottom-0 left-0 flex-col self-end   w-full h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-blue-600 uppercase bg-white md:hidden">
         {navLinks.map((links) => (
            <div key={links.href} className="hover:text-red-600 text-center">
               <Link href={links.href} onClick={displayHamburgerMenu}>
                  {links.label}
               </Link>
            </div>
         ))}
      </div>
   );
};
