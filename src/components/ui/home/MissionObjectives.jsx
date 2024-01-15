'use client'
import React from 'react'
import Image from 'next/image'
import { MissionObject } from '@/constant/images'

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

   const renderMissionAndObjective = missionData?.map((data, index) => {
      return (
         <div key={data.title} tabIndex={index} className="collapse collapse-plus rounded-md shadow-lg">
            <div className="collapse-title text-2xl font-semibold">
               {data.title}
            </div>
            <div className="collapse-content">
               <p className='text-lg'>{data.description}</p>
            </div>
         </div>
      )
   })
   return (
      <div className='mt-12 bg-white'>
         <h1 className='text-center text-2xl lg:text-4xl font-semibold py-4 bg-red-500 text-white'>Our Mission & Objectives</h1>
         <div className='grid lg:grid-cols-2 items-center justify-center py-10'>
            <div className='flex justify-center py-2'>
               <Image src={MissionObject} width={400} height={400} alt='mission' className=' hover:animate-pulse ' />
            </div>
            <div className='space-y-10'>
               {renderMissionAndObjective}
            </div>
         </div>

      </div>
   )
}

export default MissionObjectives




