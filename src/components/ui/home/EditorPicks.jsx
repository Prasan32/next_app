'use client'
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import Image from 'next/image';
import { editorPicks } from '@/constant/data';
import ReadMore from '@/components/ReadMore';
import Link from 'next/link';
import CustomImage from '../CustomImage';

const EditorPicks = () => {

   const renderEditorPicks = editorPicks?.slice(1, 4).map((item, i) => {
      return (
         <div className="mt-4" key={i}>
            <div className="flex mt-4 gap-2 w-full">
               {/* <Image
                  src={item.img}
                  width={700}
                  height={700}
                  alt="gallery"
                  className="w-1/3" /> */}
               <CustomImage
                  src={item.img}
                  alt={`image`}
                  className={`w-1/3`}
               />
               <div className="flex justify-center  flex-col gap-2 ">
                  <h2 className="text-sm font-semibold cursor-pointer text-gray-700 ">
                     {item.title}
                  </h2>
                  <div
                     className={` flex gap-2  text-xs text-gray-500 mt-2`}
                  >
                     <p className="flex items-center gap-1 text-xs ">
                        <AiOutlineCalendar className="text-lg" />
                        <span className="text-xs">{item.date}</span>
                     </p>
                     <p className="flex items-center gap-1 ">
                        <BiMessageRounded className="text-lg" />
                        <span className="text-xs"> {item.comments}</span>
                     </p>
                  </div>
               </div>
            </div>
            <hr />
         </div>
      )
   })
   return (
      <div className='bg-white p-4 mt-4'>
         <h1 className="lg:text-xl font-semibold text-white p-2">Editors Pick</h1>
         <EditorTopPicks value={editorPicks.slice(0, 1)} />
         {renderEditorPicks}
      </div>

   )
}

export default EditorPicks

const EditorTopPicks = ({ value }) => {
   let item = value[0]
   return (
      <div className="flex flex-col  mt-4 gap-2">
         <div className="relative group overflow-hidden ">
            {/* <Image
               src={item.img}
               width={700}
               height={700}
               alt="gallery "
               quality={50}
               className="transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-105 w-full"
            /> */}
            <CustomImage
               src={item.img}
               alt="gallery "
               className="transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-105 w-full"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-20 hover:opacity-0 ">
               {" "}
            </div>
         </div>
         <div className="flex justify-center lg:justify-normal flex-col gap-2 p-2">
            <Link href="/blog/blogs" className="text-lg font-semibold text-gray-700 line-clamp-2">
               {value.title}
            </Link>
            <div className="flex gap-4  text-xs text-gray-500 mt-2">
               <p className="icon-flex">
                  <AiOutlineUser className="text-lg font-bold" />
                  {item.author}
               </p>
               <p className="icon-flex">
                  <AiOutlineCalendar className="text-lg" />
                  {item.date}
               </p>
               <p className="icon-flex">
                  <BiMessageRounded className="text-lg" />
                  {item.comments}
               </p>
            </div>
            <ReadMore description={item.description} />
         </div>
      </div>
   )
}