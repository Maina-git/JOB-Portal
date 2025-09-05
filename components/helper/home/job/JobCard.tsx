import React from 'react';
import { BsBookmark } from 'react-icons/bs';
import Image from 'next/image';
import { BiBriefcase } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';

interface Props{
    id:number;
    image:any;
    title:string;
    location:string;
    jobtype:string;
    urgency:string;
}

const JobCard = ({image, title, location, jobtype, urgency, id}:Props) => {
  return (
    <div key={id} className="border-[1.5px] border-gray-300 dark:border-gray-700 p-6 rounded-lg relative">
      {/** bookmark icon */}
      <div className="w-7 h-7 cursor-pointer hover:bg-gray-300
       dark:hover:bg-gray-800 items-center transition-all duration-200
        justify-center rounded-full flex flex-col absolute top-4 right-4 ">
        <BsBookmark className="w-3 h-3"/>    
        </div>  
        <div className="flex items-center space-x-4">
        {/** job image */}
            <Image src={image} alt={title} width={50} height={50}/>
        <div>
            <h1 className="text-base font-medium">{title}</h1>
        <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 mt-2 text-gray-300">
                    <BiBriefcase className="w-5 h-5"/>
                    <p className="text-gray-500 text-sm">Segment</p>
            </div>
            <div className="flex items-center space-x-1 mt-2 text-gray-300">
                    <GrLocation className="w-5 h-5"/>
                    <p className="text-gray-500 text-sm">{location}</p>
            </div>
        </div>
        </div>
    </div>
<div className="flex items-center space-x-4 mt-3">
<div className="px-4 py-1 bg-blue-600/30 dark:blue-950/30 rounded-full 
text-xs text-blue-700 dark:text-blue-300">
{jobtype}
</div>
<div className={`px-4 py-1 rounded-full text-xs ${urgency === "urgent" ? "bg-red-600/30 dark:bg-red-300/30 text-red-700" : "bg-green-600/30 text-green-700 dark:text-green-300"}`}>
{urgency}</div>
</div>
    </div>
  );
}

export default JobCard;
