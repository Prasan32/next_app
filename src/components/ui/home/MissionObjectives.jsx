'use client'
import React from 'react'
import Image from 'next/image'
import { MissionObject } from '@/constant/images'
import CustomImage from '../CustomImage'


const MissionObjectives = () => {
   const missionData = [
      {
         title: "Mission",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente!"
      },
      {
         title: "Vision",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente!"
      },
      {
         title: "Objective",
         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolor eveniet dolorum nam molestiae provident modi amet accusamus molestias sapiente!"
      },
   ]

   const renderMissionAndObjective =
      missionData?.map((data, index) => {
         return (
            <div key={index} tabIndex={index} className="collapse collapse-plus">
               <h2 className="collapse-title">
                  {data.title}
               </h2>
               <div className="collapse-content">
                  <p className=''>{data.description}</p>
               </div>
            </div>
         )
      })

   return (
      <div className='mt-4 bg-white text-black p-4 shadow-md'>
         <h1 className=' '>Our Mission & Objectives</h1>
         <div className='grid lg:grid-cols-2 items-center justify-center'>
            <div className='flex justify-center py-2'>
               {/* <Image
                  src={MissionObject}
                  width={400}
                  height={400}
                  alt='mission'
                  quality={50}
                  className=' hover:animate-pulse '
               /> */}
               <CustomImage
                  src={MissionObject}
                  alt='mission'
                  className=' hover:animate-pulse '
               />
            </div>
            <div className='space-y-10'>
               {renderMissionAndObjective}
            </div>
         </div>

      </div>
   )
}

export default MissionObjectives




