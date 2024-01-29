import Image from "next/image"
import { CarouselOne, CarouselThree, CarouselTwo, Logo } from "@/constant/images"
import { RecentStories } from "@/components"

const BlogsPage = () => {
   return (
      <div className='bg-white mt-10'>
         <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 ">
            <div className="flex justify-between px-4  max-w-full ">
               <article className=" w-full format format-sm sm:format-base lg:format-lg format-blue lg:px-20 ">
                  <header className="mb-4 lg:mb-6 not-format">
                     <address className="flex items-center mb-6 not-italic">
                        <div className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                           <Image width={100} height={100} className="mr-4 w-16 h-16 rounded-full" src={Logo} alt="Jese Leos" />
                           <div>
                              <a href="#" rel="author" className="text-xl font-bold text-gray-900 ">John Doe</a>
                              <p className="text-base text-gray-500 "> CEO PSM Nepal</p>
                              <p className="text-base text-gray-500 "><time title="February 8th, 2022">Feb. 8, 2022</time></p>
                           </div>
                        </div>
                     </address>
                     <h1 className="mb-4 text-3xl font-extrabold leading-tight  lg:mb-6 lg:text-4xl ">Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                  </header>
                  <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsum iure soluta praesentium doloribus commodi eveniet. Voluptatem nostrum animi voluptates? Vero voluptates accusamus, pariatur hic minus ex odio, maiores laboriosam repellendus sapiente amet maxime! Et possimus tempore rerum dignissimos obcaecati alias similique, voluptatum laboriosam. Sequi iusto, provident beatae necessitatibus vero incidunt excepturi exercitationem quidem, illo eius cupiditate vel laboriosam tempora?</p>
                  <figure className='lg:py-10 py-4 flex justify-center'><Image width={1000} height={1000} src={CarouselOne} alt="" className='lg:w-2/3' />

                  </figure>
                  <h2 className=' font-semibold text-2xl'>Lorem ipsum dolor sit amet.</h2>
                  <p className="text-justify">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos soluta modi, officia debitis fugiat ab tempore et deleniti aliquid accusantium voluptatibus laboriosam impedit culpa mollitia facere omnis sapiente libero itaque aperiam aliquam quo. Aliquam porro, nemo sit et asperiores odit itaque? Itaque repellat soluta nihil, quisquam commodi veritatis odit placeat dolores unde vitae fugiat. Voluptates aliquam molestias amet eius repellendus facere praesentium rerum vero velit nihil totam architecto accusantium quidem sed qui nemo ducimus rem, ipsam id inventore illo excepturi? Suscipit error in debitis laboriosam laborum culpa commodi incidunt itaque tenetur hic! Nemo, quam quia corrupti autem odit nobis, incidunt inventore beatae cum corporis veniam. Numquam incidunt autem excepturi rem consectetur modi, animi fuga laboriosam quaerat! Alias labore dolorum inventore in dicta rem omnis animi mollitia sunt ut. Tenetur vitae ullam consectetur excepturi. Obcaecati maxime voluptas explicabo doloremque possimus alias non, quasi deserunt nihil dicta labore fugiat, ex repudiandae voluptates voluptatibus corporis repellat, nesciunt voluptatem in. Perferendis vel, similique, aperiam pariatur facere iusto natus culpa non ipsa ad ex voluptas labore numquam fugit sunt soluta molestiae laudantium! Libero eligendi neque non? Commodi, quasi! Quibusdam tempora dolor, eligendi eveniet provident ipsam dolorum suscipit unde quis in doloremque perspiciatis beatae asperiores.
                  </p>

                  <h3 className='font-semibold text-2xl py-4'>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus ut tenetur, facilis soluta odio alias, ducimus mollitia iusto totam quam fugit. Minus expedita alias sequi officiis veniam nihil quo. Sint ea placeat, praesentium ad molestias beatae accusamus officiis nobis cum similique amet voluptates rem eum a dolorem iste. Voluptatibus aliquam sequi molestiae esse ducimus error minus corporis sunt numquam? Labore corporis, cum dolores voluptas laudantium ratione quibusdam nemo harum possimus explicabo pariatur libero quaerat aliquid officiis, voluptatem eos, architecto cumque provident. Ab sunt non mollitia magni minima! Iusto recusandae quo, beatae tempora rerum facere ipsa quod voluptatem est consectetur. Autem maiores quae nobis eos asperiores vitae, facere perferendis exercitationem, rerum officia id saepe explicabo quo assumenda impedit. Quasi, quibusdam? Ut omnis ratione eius eligendi commodi? Earum, harum? Consequuntur autem, exercitationem voluptates dolore non dignissimos quam nam veniam doloribus modi cupiditate ipsa alias saepe, maiores illo maxime molestiae. Tempora vero incidunt dignissimos est fugiat possimus assumenda dolorum ipsam corporis facilis qui enim cumque officia, neque doloremque, repudiandae ut. Libero modi asperiores quasi iure quae fugit ut aliquid porro quidem? Assumenda!</p>


               </article>
            </div>
         </main>
         <RecentStories />
      </div>
   )
}

export default BlogsPage


const relatedBlogs = [
   {
      id: 1,
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, veniam?',
      image: CarouselOne,
      time: 'Read in 2 minutes'
   },
   {
      id: 2,
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, veniam?',
      image: CarouselTwo,
      time: 'Read in 5 minutes'
   },
   {
      id: 3,
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, veniam?',
      image: CarouselThree,
      time: 'Read in 10 minutes'
   },
   {
      id: 4,
      title: 'Lorem, ipsum dolor.',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, veniam?',
      image: Logo,
      time: 'Read in 10 minutes'
   },
]