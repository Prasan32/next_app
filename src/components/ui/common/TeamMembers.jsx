'use client'

import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';
import { teamData } from "@/constant/data";
import CustomImage from "../CustomImage";

const TeamMembers = () => {
   const scrollRef = useRef(null);
   const [startIndex, setStartIndex] = useState(0);
   const [visibleIndices, setVisibleIndices] = useState([0, 1, 2]);

   const getVisibleIndices = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1200) {
         return [0, 1, 2];
      } else if (screenWidth >= 600) {
         return [0, 1];
      } else {
         return [0];
      }
   };

   const scroll = (direction) => {
      const { current } = scrollRef;
      const cardWidth = current.children[0].clientWidth;

      if (direction === "left") {
         setStartIndex((prevIndex) => (prevIndex - 1 + teamData.length) % teamData.length);
      } else if (direction === "right") {
         setStartIndex((prevIndex) => (prevIndex + 1) % teamData.length);
      }

      current.scrollBy(direction === "left" ? -cardWidth : cardWidth, 0);
   };

   useEffect(() => {
      const handleResize = () => {
         setVisibleIndices(getVisibleIndices());
      };

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []); 

   useEffect(() => {
      setVisibleIndices(getVisibleIndices());
   }, [startIndex]);
   return (
      <div className="bg-white  h-min-auto px-5 mt-4 p-2">
         <h1 className="font-bold text-white text-xl p-2">Our Team Member</h1>
         <div className="relative cursor-pointer pb-4 group mt-2 overflow-hidden">
            <div ref={scrollRef} className={`flex transition-transform  space-x-4 xl:space-x-10`}>
               {visibleIndices?.map((i) => {
                  const index = (startIndex + i) % teamData.length;
                  return (
                     <div
                        key={i}
                        className="w-full  text-gray-700 transition-transform transform hover:scale-105  "
                     >
                        <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-center  items-center h-full">
                           {/* <Image
                              className="object-cover "
                              src={teamData[index].image}
                              alt="team"
                              height={200}
                              width={300}
                              quality={50}
                           /> */}
                           <CustomImage
                              src={teamData[index].image}
                              alt="team"
                              className="object-cover"
                           />
                           <div className="p-4 text-center">
                              <p className="font-bold text-xl mt-4">{teamData[index].name}</p>
                              <p className="font-thin mt-2">{teamData[index].position}</p>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
            <div className="absolute w-full h-full top-0 left-0 flex justify-between items-center">
               <div
                  onClick={() => scroll("left")}
                  className={`w-14 h-full bg-transparent flex items-center justify-center ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
               >
                  <button>
                     <FaChevronLeft className="text-2xl text-gray-600 font-bold" />
                  </button>
               </div>
               <div
                  onClick={() => scroll("right")}
                  className={`w-14 h-full bg-transparent flex items-center justify-center ${startIndex === teamData.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
               >
                  <button>
                     <FaChevronRight className="text-2xl text-gray-600 font-bold" />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TeamMembers;


