
'use client'
import Link from 'next/link'
import React from 'react'

const ReadMore = ({ description, id }) => {
   return (
      <div>
         <p className='line-clamp-4 md:line-clamp-3 xl:line-clamp-4'>{description}</p><Link href="/blog/blogs" className='text-blue-500 cursor-pointer'>
            Read More
         </Link>
      </div>
   )
}

export default ReadMore