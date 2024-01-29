'use client'
import { AiOutlineUser, AiOutlineCalendar } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import { CarouselOne, CarouselTwo } from "@/constant/images";
import CustomImage from "../CustomImage";

const Banner = () => {

   const renderSidebar = data.map((value, i) => {
      return (
         <div key={i} className="relative overflow-hidden group ">
            {/* <Image
               src={value.image}
               width={700}
               height={700}
               alt="gallery"
               quality={50}
               className="transition-all duration-700 ease-in-out  group-hover:scale-105 w-full"
            /> */}
            <CustomImage
               src={value.image}
               alt={'image'}
               className={`transition-all duration-700 ease-in-out  group-hover:scale-105 w-full`}
            />
            <Link
               href={"/blog/blogs"}
               className=" absolute inset-x-0 bottom-2  left-0 p-2 "
            >
               <p className=" text-white line-clamp-1">
                  {value.title}
               </p>
               <div className={`flex gap-4 mt-2 text-xs text-white`}>
                  <p className="flex icon-flex text-white">
                     <AiOutlineUser className="text-lg font-bold" />
                     {value.author}
                  </p>
                  <p className="icon-flex text-white">
                     <AiOutlineCalendar className="text-lg" />
                     {value.date}
                  </p>
                  <p className="icon-flex text-white">
                     <BiMessageRounded className="text-lg" />
                     {value.comments}
                  </p>
               </div>
            </Link>
         </div>
      );
   })


   return (
      <div className="flex flex-col space-y-4 xl:space-x-4 xl:space-y-0 xl:grid xl:grid-cols-12 py-8 ">
         <div className="w-full xl:col-span-8">
            <Carousel />
         </div>
         <div className="w-full xl:space-y-2 xl:col-span-4 px-4">
            {renderSidebar}
         </div>
      </div>
   )
}

export default Banner

const data = [
   {
      id: 1,
      image: CarouselOne,
      category: "Food Habit",
      title: "A Discount Toner Cartridge is Better Than Ever.",
      author: "Mark",
      date: "03,April 2022",
      comments: "06",
   },
   {
      id: 2,
      image: CarouselTwo,
      category: "Food Habit",
      title: "A Discount Toner Cartridge is Better Than Ever.",
      author: "Mark",
      date: "03,April 2022",
      comments: "06",
   },
];