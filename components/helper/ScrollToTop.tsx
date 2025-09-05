"use client"
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {

const [viscible, setViscible] = useState(false);

useEffect(()=>{
    const toggleVisciblilty = () => {
    if (window.scrollY > 300) setViscible(true);
   else setViscible(false);
}

window.addEventListener("scroll", toggleVisciblilty);

return () => window.removeEventListener("scroll", toggleVisciblilty);
    
}, []);

//scroll funtionality

const scrollToTop = () =>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}


return (
        <div>
            {
                viscible && (
                        <button className="absolute bg-blue-700 cursor-pointer text-white rounded-full w-12 flex items-center
                        justify-center focus:outline-none" onClick={scrollToTop} >
                          <FaArrowUp/>
                        </button>
                )
            }
        </div>
    )
}
export default ScrollToTop;