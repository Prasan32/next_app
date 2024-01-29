'use client'
import React from 'react'
import { blogVideos } from '@/constant/data'


const Videos = () => {

   const renderVideos = blogVideos?.map((video, i) => {
      return (
         <iframe
            key={video.src}
            src={video.src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-72 w-full"
            ></iframe>
      );
   });
   return (
      <div className="space-y-6 mt-8 bg-white p-4  ">

         <h1 className="text-xl text-white font-semibold p-2  md:text-left bg-bgprimary  relative z-10 w-full">
               Blogs Videos
         </h1>

         <div className="w-full px-4 space-y-4 ">{renderVideos}</div>
      </div>
   )
}

export default Videos
