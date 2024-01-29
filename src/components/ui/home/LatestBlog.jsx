'use client'
import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { latestBlogsData } from "@/constant/data";
import ReadMore from "@/components/ReadMore";
import CustomImage from "../CustomImage";

const LatestBlog = () => {

   const renderLatestBlog = latestBlogsData?.map((value, i) => {
      return (

         <div
            key={i}
            className="grid sm:grid-cols-1  lg:grid-cols-2 mt-4 gap-2 shadow-sm"
         >
            <div className="relative group overflow-hidden w-full">
               {/* <Image
                  src={value.img}
                  alt="gallery "
                  width={300}
                  height={200}
                  quality={50}
                  className="transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-105 w-full"
               /> */}
               <CustomImage
                  src={value.img}
                  alt="gallery "
                  className="transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-105 w-full"
               />
               {/* <p className=" absolute bottom-2 flex justify-center left-4 z-30 w-24 p-1 bg-badge text-white bg-red-600 rounded-sm">
                     {value.category}
                  </p> */}
            </div>

            <div className="flex justify-center lg:justify-normal flex-col gap-2 p-2">
               <h2 className="text-lg font-semibold text-gray-700 line-clamp-2">
                  {value.title}
               </h2>
               <div className="flex gap-4  text-xs text-gray-500 mt-2">
                  <p className="icon-flex">
                     <AiOutlineUser className="text-lg font-bold" />
                     {value.author}
                  </p>
                  <p className="icon-flex">
                     <AiOutlineCalendar className="text-lg" />
                     {value.date}
                  </p>
                  <p className="icon-flex">
                     <BiMessageRounded className="text-lg" />
                     {value.comments}
                  </p>
               </div>
               <ReadMore description={value.description} />
            </div>
         </div>
      )
   })

   return (
      <div className="bg-white mt-4 p-4 w-full shadow-md">
         <h1 className="2xl:text-2xl">
            Latest Blogs
         </h1>
         {renderLatestBlog}
      </div>
   )
}

export default LatestBlog