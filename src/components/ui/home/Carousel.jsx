'use client'
import React, { useState } from 'react'
// import { CarouselOne, CarouselTwo, CarouselThree } from '@/constant/images'
import CarouselOne from "../../../../public/images/nepal-slide-1.jpg"
import CarouselTwo from "../../../../public/images/caroseal-2.jpg"
import CarouselThree from "../../../../public/images/caroseal-3.jpg"
import Image from 'next/image'

const carouselData = [
   {
      id: 1,
      image: CarouselOne,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima deleniti earum.",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quaerat ut porro cupiditate suscipit blanditiis est harum natus facere aliquam."
   },
   {
      id: 2,
      image: CarouselTwo,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima deleniti earum.",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quaerat ut porro cupiditate suscipit blanditiis est harum natus facere aliquam."
   },
   {
      id: 3,
      image: CarouselThree,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quaerat ut porro cupiditate suscipit blanditiis est harum natus facere aliquam."
   },
   {
      id: 4,
      image: CarouselOne,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quaerat ut porro cupiditate suscipit blanditiis est harum natus facere aliquam."
   },
   {
      id: 5,
      image: CarouselTwo,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quaerat ut porro cupiditate suscipit blanditiis est harum natus facere aliquam."
   },
   {
      id: 6,
      image: CarouselThree,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quaerat ut porro cupiditate suscipit blanditiis est harum natus facere aliquam."
   },
]



const Carousel = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [sliderData, setSliderData] = useState(carouselData);

   const prevSlide = () => {
      const isFirstSlide = currentSlide === 0;
      const newIndex = isFirstSlide ? sliderData.length - 1 : currentSlide - 1;
      setCurrentSlide(newIndex);
   };

   const nextSlide = () => {
      const isLastSlide = currentSlide === sliderData.length - 1;
      const newIndex = isLastSlide ? 0 : currentSlide + 1;
      setCurrentSlide(newIndex);
   };

   const selectSlide = (index) => {
      setCurrentSlide(index);
   };

   return (
      <div className="w-full bg-white">
         {sliderData?.map((slide, index) => (
            <div key={slide.id} className={`${index === currentSlide ? 'block' : 'hidden'} relative`}>
               <Image
                  src={slide.image}
                  width={1000}
                  height={700}
                  className='rounded-md shadow-md max-h-[35rem] overflow-hidden'
                  alt='carousel'
               />
               <div className='absolute bottom-0 bg-opacity-20 bg-black w-full '>
                  <button className='text-sm md:text-lg lg:text-2xl px-2 font-semibold text-white text-center opacity-75 '>
                     {slide.title}
                  </button>
                  {/* <p className=' text-white text-center'>{slide.des}</p> */}
               </div>
               <div className='absolute flex justify-between transform -translate-y-1/2  left-0 right-0  top-1/2 z-10'>
                  <button onClick={prevSlide} className="btn border-0 bg-transparent bg-opacity-20">❮</button>
                  <button onClick={nextSlide} className="btn border-0 bg-transparent bg-opacity-20 ">❯</button>
               </div>
            </div>
         ))}
         <div className='hidden lg:flex overflow-x-auto lg:px-2 lg:flex-row space-x-10 py-2'>
            {sliderData?.map((slide, index) => (
               <div key={slide.id} className='flex-shrink-0'>
                  <Image
                     src={slide.image}
                     width={180}
                     height={100}
                     alt='slider image'
                     onClick={() => selectSlide(index)}
                     className={`cursor-pointer ${index === currentSlide ? 'border-2 border-blue-500' : ''} max-w-[150px]`}
                  />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Carousel;


