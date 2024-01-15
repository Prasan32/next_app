'use client'

import React from 'react'
import { TeamOne, TeamTwo, TeamThree, TeamFour, TeamFive, TeamSix } from "../../../constant/images"
import Image from 'next/image'

const TeamMembers = () => {

   const renderTeamMember = teamData?.map((team, index) => {
      return (
         <div key={team.id} className="carousel-item flex-col hover:scale-105 ">
            <div className='max-h-[22rem] overflow-hidden bg-black mx-10'>
               <Image src={team.image} width={400} height={352} alt="team member" />
            </div>
            <div className='text-black bg-white text-center py-4 text-2xl font-semibold mx-10'>
               <p>{team.name}</p>
               <p className='text-xl font-normal'>{team.post}</p>
            </div>
         </div>
      )
   })

   return (
      <div className='my-20 space-y-8'>
         <div className="relative flex-1">
            <h1 className="text-3xl text-white font-semibold text-center md:text-left bg-red-500 px-3 py-1 rounded-t-lg relative z-10 w-[21rem]">
               Our Team Members
            </h1>
            <div className="absolute w-full inset-x-0 bottom-0 border-4 border-red-500 ">
            </div>
         </div>
         <div className="w-96 lg:w-full carousel rounded-box ">
            {renderTeamMember}
         </div>
      </div>
   )
}

export default TeamMembers

const teamData = [
   {
      id: 1,
      name: "Ram Krishna Dhakal",
      image: TeamOne,
      post: "CEO"
   },
   {
      id: 2,
      name: "Shyamlal Bhatia",
      image: TeamTwo,
      post: "Founder"
   },
   {
      id: 3,
      name: "Sisan Kumar Baniya",
      image: TeamThree,
      post: "Managing Director"
   },
   {
      id: 4,
      name: "Yama Buddha",
      image: TeamFour,
      post: "Staff"
   },
   {
      id: 5,
      name: "Prachanda KC",
      image: TeamFive,
      post: "Staff"
   },
   {
      id: 6,
      name: "Bhajanlal Bogati",
      image: TeamSix,
      post: "Tech Support"
   },
]