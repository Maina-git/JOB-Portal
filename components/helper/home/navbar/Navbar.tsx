"use client"
import { navlinks } from '@/app/constants/constant';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { useState } from 'react';
import { LuNetwork } from 'react-icons/lu';
import ThemeToggler from '../../ThemeToggler';

interface Props{
  openNav: () => void;
}


const Navbar = ({openNav}:Props) => {
  
  const [navBg, setNavBg] = useState(false);

  useEffect(()=>{

    const handler = ()  => {
      if(window.scrollY >= 90) setNavBg(true);
      if(window.scrollY < 90) setNavBg(false);
    }
   window.addEventListener("scroll", handler);

   return ()=> window.removeEventListener("scroll", handler);
  },[])

  return(
    <div className={`transition-all ${navBg ? "bg-white shadow-md dark:bg-gray-900" : "fixed"} duration-200 h-[12vh] z-[10000] fixed w-full`}>
    <div className="flex items-center h-full justify-between w-[92%] mx-auto">
       <div className="flex items-center sm:space-x-20">
        {/** logo */}
<div className="flex items-center space-x-2">
    <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center
    flex-col">
        <LuNetwork className="w-5 h-5 text-white dark:text-black"/>
    </div>
    <h1 className="text-xl hidden sm:block md:text-2xl text-cyan-800 dark:text-white fobt-bold">
        DevHire
    </h1>
    </div>
        {/** nav links */}
        <div className="hidden lg:flex items-center space-x-10">
          {
            navlinks.map((link)=>{
              return (
                <Link key={link.id} href={link.url}
                className="text-base hover:text-cyan-700 transition-all duration-200">
                 <p>{link.label}</p>
                </Link>
              )
            })
          }
        </div>
       </div>
       {/** buttons */}
       <div className="flex items-center space-x-4">
        {/** login / register buttons */}
        <button className="px-8 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-900 text-xs rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-300 transition-all duration-300">
          Login / Register
        </button>
        { /** job post buttons */}
        <button className="px-8 py-2.5 text-sm hidden sm:block cursor-pointer rounded-lg bg-cyan-700 hover:bg-cyan-900 transition-all duration-300 text-white">
          Job Post
        </button>
        {/** theme toggler */}
        <ThemeToggler/>
        {/** burgler menu */}
        <HiBars3BottomRight onClick={openNav} className="lg:hidden w-8 h-8 cursor-pointer text-black dark:text-white"/>
       </div>
        </div>    
    </div>
  );
}

export default Navbar;













