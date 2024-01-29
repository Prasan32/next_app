'use client'

import { CarouselThree } from '@/constant/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = () => {
   return (
      <div className='w-full border-2 shadow-md bg-white rounded-md'>
         <div className='w-full'>
            {/* <Image
               src={CarouselThree}
               width={400}
               height={100}
               alt='vlog'
               className='w-full lg:w-[400px] lg:h-[200px] rounded-t-md'
               quality={50}
            /> */}
         </div>
         <div className='px-4 pb-2'>
            <h1 className='text-xl tracking-tighter font-semibold text-left line-clamp-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, sit.</h1>
            <span className='opacity-60'>Jan 26, 2023</span>
            <p className='line-clamp-6 md:line-clamp-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita fugit unde vitae reprehenderit architecto repudiandae alias suscipit facilis incidunt nulla enim numquam possimus eligendi minima sit ad corrupti velit non, iste obcaecati quibusdam? Quia est aut minima repellendus laudantium! </p>
            <Link className='text-blue-600 font-semibold text-center'>Read More...</Link>

         </div>

      </div>
   )
}

export default BlogCard