'use client'

import React from 'react'
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import { popularBlogsData } from '@/constant/data';
import Link from 'next/link';
import ReadMore from '@/components/ReadMore';
import CustomImage from '../CustomImage';

const PopularBlogs = () => {

   const renderPopularBlogs = popularBlogsData?.slice(1, 3).map((value, index) => {
      return (
         <div className="flex flex-col  mt-4 gap-2" key={index}>
            <div className="relative group overflow-hidden">
               {/* <Image
                  quality={50}
                  src={value.img}
                  alt="gallery "
                  width={400}
                  height={400}
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
         </div >
      )
   })
   return (
      <div className='bg-white mt-4 p-4'>
         <h1 className=" font-semibold lg:text-xl text-white p-2">
            Popular Blogs
         </h1>
         <TopIndexBlog topBlog={popularBlogsData.slice(0, 1)} />
         <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
            {renderPopularBlogs}
         </div>
      </div>
   )
}

export default PopularBlogs

const TopIndexBlog = ({ topBlog }) => {
   let blog = topBlog[0]
   return (
      <div className=" relative overflow-hidden group mt-4">
         <Image
            src={blog.img}
            width={1000}
            height={700}
            alt="gallery"
            className="transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-105 w-full"
         />
         <div className="absolute inset-0 bg-black opacity-50 z-20 hover:opacity-0 ">
            {" "}
         </div>
         <div className="absolute inset-x-0  left-0 bottom-2 z-30 sm:px-2 lg:p-4 w-fit ">
            <h2 className="xl:text-lg line-clamp-1 hover:text-badge text-white">
               {blog.title}
            </h2>
            <div className={` flex gap-4  text-xs text-gray-500 mt-2`}>
               <p className="icon-flex text-white">
                  <AiOutlineUser className="text-lg font-bold" />
                  {blog.author}
               </p>
               <p className="icon-flex text-white">
                  <AiOutlineCalendar className="text-lg" />
                  {blog.date}
               </p>
               <p className="icon-flex text-white">
                  <BiMessageRounded className="text-lg" />
                  {blog.comments}
               </p>
            </div>
         </div>
      </div>
   )
}