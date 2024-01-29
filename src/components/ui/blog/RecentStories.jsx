'use client'
import React from 'react'
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { recentStories } from '@/constant/data'
import ReadMore from '@/components/ReadMore';
import CustomImage from '../CustomImage';


const RecentStories = () => {
   return (
      <div className="mt-4 bg-white p-4">
         <h1 className=" font-semibold text-white lg:text-xl p-2">
            Recent Stories
         </h1>

         <div className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {recentStories.map((value, i) => {
               return (
                  <div key={i}>
                     <div className="grid  mt-4 gap-2 shadow-lg p-2">
                        <div className="relative group overflow-hidden  w-full ">
                           {/* <Image
                              quality={50}
                              src={value.img}
                              width={300}
                              height={200}
                              alt="gallery "
                              className="transition-all duration-700  ease-in-out transform scale-100 group-hover:scale-105 w-full"
                           /> */}
                           <CustomImage
                              src={value.img}
                              alt="gallery "
                              className="transition-all duration-700  ease-in-out transform scale-100 group-hover:scale-105 w-full"
                           />
                           <div className="absolute inset-0 bg-black opacity-50 z-20 hover:opacity-0 ">
                              {" "}
                           </div>
                        </div>
                        <div className="flex justify-center  flex-col gap-2 p-2">
                           <h2 className=" text-lg xl:text-xl  line-clamp-1 md:line-clamp-1 2xl:line-clamp-2 hover:text-badge">
                              {value.title}
                           </h2>
                           <div className={` flex gap-4  text-xs text-gray-500 mt-2`}>
                              <p className="icon-flex text-sm">
                                 <AiOutlineUser className="text-lg font-bold" />
                                 {value.author}
                              </p>
                              <p className="icon-flex text-sm">
                                 <AiOutlineCalendar className="text-lg" />
                                 {value.date}
                              </p>
                              <p className="icon-flex text-sm ">
                                 <BiMessageRounded className="text-lg" />
                                 {value.comments}
                              </p>
                           </div>
                           <ReadMore description={value.description} id={value.id} />
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   )
}

export default RecentStories