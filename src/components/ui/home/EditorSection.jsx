'use client'
import React from 'react'
import LatestBlog from './LatestBlog'
import PopularBlogs from './PopularBlogs'
import EditorPicks from './EditorPicks'
import Videos from './Videos'

const EditorSection = () => {
   return (
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4  mt-4'>
         <div className='lg:col-span-8'>
            <LatestBlog />
            <PopularBlogs />
         </div>
         <div className='lg:col-span-4'>
            <EditorPicks />
            <Videos />
         </div>
      </div>
   )
}

export default EditorSection