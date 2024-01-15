'use client'

import React from 'react'

const Videos = () => {

   const renderVideos = videosData?.map((video) => {
      return (
         <div key={video.src} className="w-full">
            <iframe
               src={video.src}
               frameborder="0"
               title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
               className="w-full h-[24rem]"
            ></iframe>
         </div>
      )
   })

   return (
      <div className="space-y-6">
         <div className="relative flex-1">
            <h1 className="text-3xl text-white font-semibold text-center md:text-left bg-red-500 px-3 py-1 rounded-t-lg relative z-10 w-64">
               Blogs Videos
            </h1>
            <div className="absolute w-full inset-x-0 bottom-0 border-4 border-red-500 ">
            </div>
         </div>
         <div className='grid  lg:grid-cols-2 xl:grid-cols-3 gap-10'>
            {renderVideos}
         </div>
      </div>
   )
}

export default Videos

const videosData = [
   {
      src: "https://www.youtube.com/embed/5pSll2xIRYI?si=02a1nC0EneRZbtFU",
   },
   {
      src: "https://www.youtube.com/embed/Uq4vF7JdE3c?si=fu2FN_0F3QotFJB_",
   },
   {
      src: "https://www.youtube.com/embed/CzBU46ZIE78?si=MTUEbAyBnT1w9Ix9",
   }
]
