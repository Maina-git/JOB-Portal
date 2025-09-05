import React from 'react';
import Image from 'next/image';

interface Props{
image:string,
username:string,
title:string,
userRole:string
}

const ReviewCard = ({image, username, title, userRole}:Props) => {
    return (
<div className="w-full lg:w-[60%] mx-auto">
<Image 
src={image} 
alt={title} 
width={80}
height={80}
className="object-cover mx-auto rounded-full"/>
<h1 className="mt-4 text-lg font-bold text-blue-600 text-white text-center">
{title}</h1>
<p className="pt-4 text-center text-gray-600 dark:text-gray-400"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
     non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
<div className="mt-8 text-center">
    <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
    {username}
    </h1>
    <p className="text-gray-600 text-sm mt-2 dark:text-gray-400">{userRole}</p>
</div>
</div>
)
}
export default ReviewCard;