import Link from "next/link";
import {Button} from "@/components/button";
import { BiLogoGithub } from "react-icons/bi";
import { CgExternal } from "react-icons/cg";
import { BsArrowLeft } from "react-icons/bs";
import projects from "./projects.json";

export default function Projects() {
  const {projectsdata} = projects; 
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-4xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 background-blur-xl bg-black/80">

      <div className="relative flex justify-center">
        <Link href="/">
          <Button variant="ghost" className=" hover:bg-black absolute left-0 hover:text-white rounded-full duration-300 mb-5 cursor-pointer">Back to home<BsArrowLeft className="ml-2"/></Button>
        </Link>
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-sky-300 h-14  mt-14 sm:mt-0">Projects</h1>
      </div>  

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsdata.map((projectsdata) => ( 
            <div key={projectsdata.id} className="group overflow-hidden border border-gray-700/40 rounded-lg hover:scale-105 border-neutral-800/70 bg-black/50 transition-all duration-300">
              <div>
                <Image src= {projectsdata.image} alt={projectsdata.title} 
                fill 
                className="object-cover h-48 w-full group-hover:scale-110 transition-transform transition-all duration-300">
                </Image>
              </div>
              <div>

              </div>
            </div>
        ))}
      </div>
      
      </main>

    </div>
  )
}
