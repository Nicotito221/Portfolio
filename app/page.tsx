import Link from 'next/link';
import {Button} from '@/components/button';
import {BiBuilding, 
        BiChevronRight,
        BiLogoGithub,
        BiLogoInstagram,
        BiLogoLinkedin} from 'react-icons/bi';
import {HiArrowDown} from 'react-icons/hi';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="w-full max-w-xl m-3 md:m-8 z-50 space-y-8
      border border-gray-700/50 rounded-xl p-5 sm:p-10 backdrop-blur-xl bg-black/80">

      <div className='flex sm:flex-row sm:justify-between sm:items-center flex-col-reverse items-start gap-3 sm:gap-10'>
        <div className='flex items-center gap-3'>
          <BiBuilding className='w-5 h-5' />
          <h3 className='text-gray-400'>Campana, Argentina</h3>
          </div>

          <Button variant="ghost" className='hover:bg-black/50 duration-300 hover:text-white rounded-full'>
          <div className='relative flex text-sm gap-1 items-center justify-center h-3 w-3 rounded-full'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500'></span>
            <span className='inline-flex rounded-full h-3 w-3 bg-green-500'> </span>
          </div>
          <p> Available for Work</p>
          </Button>
      </div>

      <div>
      <h1 className='text-4xl'> Nicolás E. Angerossa </h1>
      <h3 className='text-xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500'>Junior Developer</h3>
      <p className='text-pretty tracking-tight mt-3 text-neutral-300'>
        I'm a systems engineering student with a passion for web development.
        I'm constantly learning and improving my skills to stay up-to-date with the latest technologies in the field.
        {" "} 
        <Link href="/contact" className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 font-bold opacity-90'> 
        Contact me</Link> for any freelance work.
      </p>
      </div>



      </main>
    </div>
  );
}
