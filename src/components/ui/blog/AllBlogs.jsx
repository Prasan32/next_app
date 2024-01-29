'use client'
import Image from "next/image";
import React from "react";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { allBlogsData } from '@/constant/data'
import ReadMore from "@/components/ReadMore";
import CustomImage from "../CustomImage";

const AllBlogs = () => {
   return (
      <div className='bg-white p-4 mt-8'>
         <h1 className="  text-white p-2">All Blogs</h1>

         <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4">
            {allBlogsData?.map((value, i) => {
               return (
                  <div key={i} className="flex flex-col  mt-4 gap-2">
                     <div className="relative group overflow-hidden">
                        {/* <Image
                           quality={50}
                           src={value.img}
                           alt="gallery "
                           className="transition-all duration-300 transform scale-100 group-hover:scale-105 w-full"
                        /> */}
                        <CustomImage
                           src={value.img}
                           alt="gallery "
                           className="transition-all duration-300 transform scale-100 group-hover:scale-105 w-full"
                        />
                        <div className="absolute inset-0 bg-black opacity-50 z-20 hover:opacity-0 ">
                           {" "}
                        </div>

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
               );
            })}
         </div>
         <div className="flex justify-center py-10 join bg-white">
            <button className="join-item btn">1</button>
            <button className="join-item btn">2</button>
            <button className="join-item btn btn-disabled bg-black">...</button>
            <button className="join-item btn">99</button>
            <button className="join-item btn">100</button>
         </div>
      </div>
   )
}

export default AllBlogs