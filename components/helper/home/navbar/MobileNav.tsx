import { navlinks } from '@/app/constants/constant';
import React from 'react';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';


interface Props{
  showNav:boolean,
  closeNav:()=>void
}

const MobileNav = ({showNav, closeNav}:Props) => {

const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]"

  return (
    <div>
      {/** overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen`}></div>
    {/** navlinks */}
<div className={`text- ${navOpen} fixed justify-center flex flex-col h-full transform transition-all
duration-500 delay-300 w-[80%] sm:w-[40%] bg-cyan-800 z-[1000050] right-0`}>
  {
    navlinks.map((link)=>{
      return (
        <Link key={link.id} href={link.url}>
          <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">{link.label}</p>
        </Link>
      )
    })
  }

  {/** Close Icon */}
  <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"/>
</div>
    </div>
  );
}

export default MobileNav;
