'use client'

import React from 'react'

const LoadingSpinner = () => {
   return (
      <div className="relative ">
         <div className='fixed top-[40%] left-[50%] transform translate-x-[-50%] -translate-y-[-50%] z-[10000]'>
            <span className="loading loading-spinner loading-lg md:w-12  lg:w-14 xl:w-16 text-primary animate-spin "></span>
         </div>
         <div className="fixed inset-0 backdrop-blur-sm"></div>
      </div>
   )
}

export default LoadingSpinner