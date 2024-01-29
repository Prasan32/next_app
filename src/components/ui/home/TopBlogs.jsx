'use client'

import React from 'react'
import BlogCard from '../blog/BlogCard'
import Link from 'next/link'

const TopBlogs = () => {
   return (
      <div className=" w-full  py-8   ">
         <div className="flex justify-between space-x-4 pb-4">
            <div className="relative flex-1">
               <h1 className="text-3xl text-white font-semibold text-center md:text-left bg-red-500 px-3 py-1 rounded-t-lg relative z-10 w-52">
                  Top Blogs
               </h1>
               <div className="absolute w-full md:w-1/2 inset-x-0 bottom-0 border-4 border-red-500 ">
               </div>
            </div>
            <div className="hidden md:block">
               <button className="px-10 py-2 font-bold border-2 border-black  ">
                  <Link href='/blog'>See All</Link>
               </button>
            </div>
         </div>
         <div className="grid  lg:grid-cols-4  gap-10 ">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
         </div>
         <div className='flex justify-center'>
            <button className=' px-10 py-2 mt-10 font-bold border-2 border-black  md:hidden'>
               <Link href='/blog'>See All</Link>
            </button>
         </div>
      </div>
   )
}

export default TopBlogs