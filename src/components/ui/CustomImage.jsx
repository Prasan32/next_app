
'use client'

import Image from 'next/image'
import React from 'react'

const CustomImage = ({ src, alt, className }) => {
   return <Image
      src={src}
      width={500}
      height={500}
      alt={alt}
      className={`${className}`}
      quality={60}
   />

}

export default CustomImage