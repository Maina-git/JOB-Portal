"use client"
import React from 'react';
import SectionHeading from '../../SectionHeading';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import TopCompanyCard from './TopCompanyCard';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



const TopCompany = () => {


const CompanyData = [
    {
        id:1,
        image:"/images/channels4_profile.jpg",
        name:"Udemy",
        location:"London, Uk",
        position:"20"
    },

    {
        id:2,
        image:"/images/Z-ItNHdAxsiBv2XG_stripe-hero-5ca55c2d.avif",
        name:"Stripe",
        location:"Kolkata, India",
        position:"30"
    },

    {
        id:3,
        image:"/images/how-to-unblock-dropbox.png",
        name:"Dropbox",
        location:"Lahore, Pakistan",
        position:"33"
    },

    {
        id:4,
        image:"/images/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.avif",
        name:"Figma",
        location:"Dhaka, Bangladesh",
        position:"40"
    }
];


  return (
    <div className="pt-16 pb-16">
        <SectionHeading 
        heading="Top Companies Registered" 
        subheading="Some of the companies we've helped recruit excellent applicatoon over the years "/>
      <div className="w-[80%] mx-auto mt-16">
<Carousel
  showDots={false}
  responsive={responsive}// means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}>
 {
    CompanyData.map((data)=>{
        return (
           <TopCompanyCard key={data.id} data={data}/>
        )
    })
 }
</Carousel>
      </div>
    </div>
  );
}

export default TopCompany;





