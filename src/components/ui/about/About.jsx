'use client'

import React from 'react'
import TeamMembers from '../common/TeamMembers'
import { CarouselOne, Logo } from '@/constant/images'
import Image from 'next/image'
import MissionObjectives from '../home/MissionObjectives'
import CustomImage from '../CustomImage'

const About = () => {
   return (
      <div className=''>
         <AboutCompany />
         <MissionObjectives />
         <ContactForm />
         <TeamMembers />
      </div>
   )
}

export default About


const AboutCompany = () => {
   return (
      <div className="mt-10 bg-white p-4">
         <h1 className="">
            About PSM-Nepal
         </h1>
         <div className='flex flex-col lg:grid lg:grid-cols-2 gap-10 py-8'>
            <p className="lg:col-span-1  pt-4 text-justify  sm:text-lg lg:text-lg text-gray-700 ">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, atque
               placeat neque deleniti eos ipsam eaque itaque vero tempore autem,
               tenetur eveniet suscipit perferendis eligendi ut nam sint pariatur
               nesciunt. Repudiandae error debitis ducimus odit. Ducimus animi,
               facilis dolore corporis, laboriosam deleniti tempore ea et dolorum
               soluta culpa, fuga aliquam Lorem ipsum dolor, sit amet consectetur
               adipisicing elit. Eligendi non asperiores dignissimos harum corporis
               cupiditate repellat saepe delectus aliquam facilis exercitationem,
               animi dicta corrupti fugiat sed quia! Dolorem atque commodi ut
               repellat debitis eius eum quod cumque. Est voluptatibus inventore ut
               architecto, fugiat aliquid sapiente itaque. Nesciunt sapiente omnis
               quibusdam laborum magnam. Dolores eveniet veniam, laborum assumenda
               blanditiis in vero!
            </p>

            <div className="lg:col-span-1">
               {/* <Image
                  width={300}
                  height={200}
                  src={CarouselOne}
                  alt="about"
                  className="w-full "
                  quality={50}
               /> */}
               <CustomImage
                  src={CarouselOne}
                  alt="about"
                  className="w-full "
               />
            </div>
         </div>
      </div>
   )
}


const ContactForm = () => {
   return (

      <div className=" w-full p-8  shadow-lg bg-white mb-10 my-10">
         <h1 className="">Get in Touch</h1>
         <div className='flex justify-center flex-col-reverse lg:grid lg:grid-cols-2 gap-10 mt-10'>
            <form action="#" className="space-y-6 px-10">
               <div>
                  <label htmlFor="email" className="block mb-2 text-lg font-medium text-black ">Your Email</label>
                  <input
                     type="email"
                     id="email"
                     className="input-field bg-white border-2  w-full  py-2 px-2 rounded-md"
                     placeholder="example@gmail.com"
                     required
                  />
               </div>
               <div>
                  <label htmlFor="subject" className="block mb-2  font-medium text-black text-lg">Subject</label>
                  <input
                     type="text"
                     id="subject"
                     className="input-field w-full bg-white border-2 py-2 px-2 rounded-md"
                     placeholder="Let us know how we can help you"
                     required
                  />
               </div>
               <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2  font-medium text-black text-lg">Your Message</label>
                  <textarea
                     id="message"
                     rows="2"
                     className="input-field w-full py-2 px-2 rounded-md bg-white border-2"
                     placeholder="Leave a comment..."
                  ></textarea>
               </div>
               <button
                  type="submit"
                  className="w-full py-3 text-sm font-semibold text-center rounded-md bg-color-background text-white hover:bg- focus:ring-4 focus:outline-none focus:ring-blue-300"
               >
                  Send Message
               </button>
            </form>
            <div className='flex  flex-col space-y-10 justify-center'>
               <div className='flex justify-center'>
                  {/* <Image
                     src={Logo}
                     width={200}
                     height={200}
                     alt='logo'
                     className=''
                  /> */}
                  <CustomImage
                     src={Logo}
                     alt='logo'
                     className=''
                  />
               </div>
               <div className='text-justify'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, nisi quam atque sunt odit ullam voluptate sit consectetur minus aliquam quis dolor, nam deserunt accusantium pariatur, sapiente ex cumque perferendis illum possimus. Deleniti omnis sequi aliquam illo molestiae, voluptatum commodi!</p>
               </div>
            </div>
         </div>
      </div>

   )
}