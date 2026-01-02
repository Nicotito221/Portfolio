import {Button} from "@/components/button";
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"
import skillsData from "./skills.json"

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 background-blur-xl bg-black/80">
        <Link href="/">
          <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-300 cursor-pointer">Back to home<BsArrowLeft className="ml-2"/></Button>
        </Link>

      <div className="space-y-6">
      <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-zinc-400 to-blue-600 h-14 mt-14 sm:mt-0">Skills</h1>  

      <div className="space-y-8">
        {skillsData.categorias.map((category) => (
          <div key={category.nombre} className="space-y-4">
            <h2 className="text-2xl">{category.nombre}</h2>
            <div className="grid grid-cols-2 gap-4">
              {category.habilidades.map((skill) => (
                <div key={skill.nombre} className="p-4 rounded-lg border border-gray-700/50 bg-black/40">
                  <h3 className="font-medium mb-2"> {skill.nombre}</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-400 h-2.5 rounded-full" style ={{width: `${skill.nivel}%`}}></div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>

      </main>
    </div>
  )
}

export default page