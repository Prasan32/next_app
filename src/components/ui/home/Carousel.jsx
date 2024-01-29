'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { carouselData } from '@/constant/data';
import Link from 'next/link';
import CustomImage from '../CustomImage';

const Carousel = () => {
   const [index, setIndex] = useState(0);

   const nextSlide = () => {
      if (index === carouselData.length - 1) {
         setIndex(0);
      } else {
         setIndex((pre) => pre + 1);
      }
   };
   const prevSlide = () => {
      if (index === 0) {
         setIndex(carouselData.length - 1);
      } else {
         setIndex((pre) => pre - 1);
      }
   };

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((pre) => (pre + 1) % carouselData.length);
      }, 5000);

      return () => {
         clearInterval(interval);
      };
   }, [carouselData.length]);


   const renderImageSlider = carouselData?.map((item, i) => {
      return (
         <div key={item.id}>
            {/* <Image
               src={item.img}
               alt="Banner"
               width={700}
               height={700}
               quality={50}
               className={` transition-transform absolute duration-500 delay-200 w-full  h-full ${i === index ? "translate-x-0" : "translate-x-full"} hover:scale-125`}
            /> */}
            <CustomImage
               src={item.img}
               alt={`image`}
               className={` transition-transform absolute duration-500 delay-200 w-full  h-full ${i === index ? "translate-x-0" : "translate-x-full"} hover:scale-125`}
            />
            <SliderImagesData
               title={item.title}
               author={item.author}
               date={item.date}
               comments={item.comments}
               isActive={i === index}
            />
         </div >
      );
   })

   return (
      <div className="relative w-full xl:py-0">
         <div className="relative min-h-[14rem] sm:min-h-[20rem] md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem] 2xl:min-h-[32rem] overflow-hidden ">
            {renderImageSlider}
            <SliderButton
               prevSlide={prevSlide}
               nextSlide={nextSlide}
            />
         </div>

      </div>
   );
};

export default Carousel;

const SliderImagesData = ({ title, author, comments, date, isActive }) => {

   return (
      <div className={` absolute inset-x-0  bottom-0  left-0 p-2 bg-black bg-opacity-30 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
         <h2 className=" text-white line-clamp-1 cursor-pointer z-30">
            {title}
         </h2>
         <div className={` flex gap-4 mt-2 text-xs text-white`}>
            <p className="icon-flex text-white">
               <AiOutlineUser className="text-lg font-bold" />
               {author}
            </p>
            <p className="icon-flex text-white">
               <AiOutlineCalendar className="text-lg" />
               {date}
            </p>
            <p className="icon-flex text-white">
               <BiMessageRounded className="text-lg" />
               {comments}
            </p>
         </div>
      </div>
   )
}


const SliderButton = ({ prevSlide, nextSlide }) => {

   const carouselButton = 'bg-white  bg-opacity-10 w-6 h-6  xl:w-10 xl:h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-opacity-100'

   return (
      <div className="w-full h-full  absolute top-0 left-0 flex justify-between items-center px-1 ">
         <button
            className={`${carouselButton}`}
            onClick={() => {
               prevSlide();
            }}
         >
            <TfiAngleLeft className="text-md xl:text-xl  font-bold " />
         </button>
         <button
            className={`${carouselButton}`}
            onClick={() => {
               nextSlide();
            }}
         >
            <TfiAngleRight className="text-md md:text-xl  font-bold " />
         </button>
      </div>
   )
}



