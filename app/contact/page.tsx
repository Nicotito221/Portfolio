import { Button } from "@/components/button"
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"
import { MdMail, MdPhone } from "react-icons/md"

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 background-blur-xl bg-black/80">
      <Link href="/">
      <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-200">Back to home<BsArrowLeft className="ml-2"/></Button>
      </Link>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Contact Me</h1>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-blue-300">Contact Information</h3>

        <p className="text-pretty tracking-tight mt-3 text-neutral-300">
          I'm open to discussing freelance opportunities, collaborations, or any projects you have in mind.
          Feel free to reach out to me through any of the following methods:
        </p>
        <div className="space-y-4">
  <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
    <MdMail className="w-5 h-5 text-blue-400" />
    <div>
      <h3 className="font-medium">Email</h3>
      <a
        href=""
        className="text-neutral-500 hover:text-blue-400 transition-colors"
      >
        nicolasemilioangerossa@gmail.com
      </a>
    </div>
  </div>

  <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
    <MdPhone className="w-5 h-5 text-blue-400" />
    <div>
      <h3 className="font-medium">Phone</h3>
      <a
        href=""
        className="text-neutral-500 hover:text-blue-400 transition-colors"
      >
        +54 3489 516355
      </a>
    </div>
  </div>
      <div className="space-y-4">
  <h2 className="text-2xl font-semibold">Send Me a Message</h2>

  <form action="" className="space-y-4">
    <div className="space-y-2">
      <label htmlFor="" className="text-sm font-medium">
        Name
      </label>
      <input
        type="text"
        id="name"
        placeholder="Your name"
        className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="" className="text-sm font-medium">
        Email
      </label>
      <input
        type="text"
        id="name"
        placeholder="Your email"
        className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="" className="text-sm font-medium">
        Message
      </label>
      <textarea name="" id="message" rows={4} placeholder="Your message" className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"></textarea>
    </div>

      <Button className="w-full text-black bg-blue-400 hover:bg-blue-500">Send Message</Button>
    </form>
  </div>


    </div>
  </div>
  </main>
  </div>
  )
}

export default page