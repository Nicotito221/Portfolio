import { Button } from "@/components/button"
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 background-blur-xl bg-black/80">
      <Link href="/">
      <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-200">Back to home<BsArrowLeft className="ml-2"/></Button>
      </Link>

      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Contact Me</h1>
      </div>

      </main>
      </div>
  )
}

export default page