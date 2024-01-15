import { BlogCard, Carousel, MissionObjectives, TeamMembers, TopBlogs, UpcomingBlog, Videos } from "@/components";

export default function Home() {
  return (
    <section className="min-h-screen mt-4">
      <div className="flex flex-col lg:grid lg:grid-cols-3 space-y-10 lg:gap-10  lg:space-y-0 xl:min-h-screen mb-2">
        <div className="lg:col-span-2 max-h-screen">
          <Carousel />
        </div>
        <div className="sm:px-auto sm:items-center lg:col-1 space-y-4 lg:px-10 ">
          <div className="relative flex-1">
            <h1 className="text-3xl text-white font-semibold text-center md:text-left bg-red-500 px-3 py-1 rounded-t-lg relative z-10 w-44">
              Trending
            </h1>
            <div className="absolute w-full inset-x-0 bottom-0 border-4 border-red-500 ">
            </div>
          </div>
          <BlogCard />
          <BlogCard />
        </div>
      </div>

      <MissionObjectives />
      <TopBlogs />
      <UpcomingBlog />
      <Videos />
      <TeamMembers />
    </section>
  )
}
