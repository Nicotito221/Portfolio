import { Button } from "@/components/button"
import Link from "next/link"
import { BsArrowLeft, BsCircleFill} from "react-icons/bs"

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 background-blur-xl bg-black/80">
      <Link href="/">
      <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-300 cursor-pointer">Back to home<BsArrowLeft className="ml-2"/></Button>
      </Link>
      <div className="space-y-6">
        <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-zinc-400 to-blue-600 h-14 mt-14 sm:mt-0">About Me</h1>
        <div className="text-pretty tracking-tight text-neutral-300 space-y-4">
          <p>Hello! I'm Nicolás E. Angerossa, a passionate Junior Developer   from Campana, Argentina.</p>
          <p>My journey into web development began with a fascination for creating interactive and user-friendly websites. Over time, I've honed my skills in various programming languages and frameworks, allowing me to build dynamic web applications that cater to diverse needs.</p>
          <p>I'm particularly interested in front-end development, where I enjoy crafting visually appealing interfaces that enhance user experience. However, I'm also eager to expand my knowledge in back-end technologies to become a well-rounded full-stack developer.</p>
          <p>When I'm not coding, I love playing video games and guitar to distract myself.</p>
        </div>


        <h2 className=" text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-zinc-400 to-blue-600">My Education</h2>
        <div className="space-y-4">
          <div>
          <p className="font-medium">Systems Engineering at UTN Facultad Regional Delta</p>
          <p className="text-neutral-500">March 2022 - Present</p>
          </div>
        <h2 className=" text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-zinc-400 to-blue-600">My Experience</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Computing Teacher, Colegio Ritchie</p>
            <p className="text-neutral-500">March 2023- March 2024</p>
          </div>

          <div>
            <p className="font-medium">Python Teacher, Coding Giants Spain</p>
            <p className="text-neutral-500">October 2024 - November 2025</p>
          </div>

          <div>
            <p className="font-medium">Technical Support, Coding Giants Spain</p>
            <p className="text-neutral-500"> January 2025 - Present</p>
          </div>
        </div>
        </div>
      </div>
      </main>
      </div>
  )
}

export default page