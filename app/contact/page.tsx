"use client"

import { Button } from "@/components/button"
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"
import { MdMail, MdPhone, MdCheckCircle, MdError } from "react-icons/md"
import { sendEmail } from "@/app/actions"
import { useState } from "react"

const Page = () => {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus('sending');
    
    const result = await sendEmail(formData);
    
    if (result?.error) {
      setStatus('error');
    } else {
      setStatus('success');
      setTimeout(() => {
        setStatus(null);
      }, 4000);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 background-blur-xl bg-black/80">
        <Link href="/">
          <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-300 cursor-pointer">Back to home<BsArrowLeft className="ml-2"/></Button>
        </Link>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Contact Me</h1>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-300">Contact Information</h3>
          
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Send Me a Message</h2>

            <form action={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder:text-neutral-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder:text-neutral-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  placeholder="Your message"
                  className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder:text-neutral-600"
                ></textarea>
              </div>

              
              {status === 'success' && (
                <div className="p-3 rounded-lg border border-green-500/50 bg-green-900/20 text-green-200 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <MdCheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 rounded-lg border border-red-500/50 bg-red-900/20 text-red-200 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <MdError className="w-5 h-5 text-red-400" />
                  <span className="text-sm font-medium">Something went wrong. Please try again later.</span>
                </div>
              )}


              <Button 
                type="submit" 
                disabled={status === 'sending' || status === 'success'}
                className="w-full text-black bg-blue-400 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : status === 'success' ? (
                  'Sent!'
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page