import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import {  } from 'react-icons/io5';
import { LuRocket } from 'react-icons/lu';
import { PiPaintBrushBroadDuotone } from 'react-icons/pi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import SectionHeading from '../../SectionHeading';
import CategoryCard from './CategoryCard';
import { BiSolidFirstAid } from 'react-icons/bi';
import {FaCarSide} from 'react-icons/fa6';
import {IoMegaphoneOutline} from 'react-icons/io5';

const Category = () => {

const categoryData=[
    {
        id:1,
        categoryName:"Accounting/ Finance",
        openPosition:2,
        icon:(
            <GiTakeMyMoney className="w-10 h-10 text-blue-700 dark:text-white"/>
)
},
{
        id:2,
        categoryName:"Marketing",
        openPosition:86,
        icon: ( <IoMegaphoneOutline className="w-10 h-10 text-blue-700 dark:text-white"/>
        )
    },

{
        id:3,
        categoryName:"Design",
        openPosition:43,
        icon: (
        <PiPaintBrushBroadDuotone className="w-10 h-10 text-blue-700 dark:text-white"/>
    )
},

{
        id:4,
        categoryName:"Development",
        openPosition:12,
        icon: (
        <FaLaptopCode className="w-10 h-10 text-blue-700 dark:text-white"/>
        )
    },
     {
        id:5,
        categoryName:"Project Management",
        openPosition:2,
        icon: (
        <LuRocket className="w-10 h-10 text-blue-700 dark:text-white"/>
        )
    },

     {
        id:6,
        categoryName:"Customer Service",
        openPosition:12,
        icon: (
        <RiCustomerService2Fill className="w-10 h-10 text-blue-700 dark:text-white"/>
        )
    },

 {
        id:7,
        categoryName:"Health and Care",
        openPosition:25,
        icon: (
        <BiSolidFirstAid className="w-10 h-10 text-blue-700 dark:text-white"/>
        )
    },
 {
        id:8,
        categoryName:"Customer Service",
        openPosition:12,
        icon: (
        <FaCarSide className="w-10 h-10 text-blue-700 dark:text-white"/>
        )
    },




];


  return (
    <div className="pt-16 pb-16">
      <SectionHeading heading="Popular Job Categories"
       subheading="2020 jobs live - 203 added today"/>
<div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
    {
        categoryData.map((category, index)=>{
            return (
                <div key={category.id} 
                data-aos="fade-right" 
                data-aos-anchor-placement="top-center"
                data-aos-delay={index * 100}>
                    <CategoryCard category={category}/>
                </div>
            )
        })
    }
</div>
    </div>
  );
}

export default Category;
