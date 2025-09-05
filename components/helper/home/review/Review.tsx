"use client"
import React from "react"
import SectionHeading from "../../SectionHeading"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ReviewCard from "./ReviewCard"

const Review = () => {



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

    return (
        <div className="pt-16 pb-16">
            <SectionHeading heading="Testimonials from customers" subheading="Lorem ipsum dolor sit amet elit, send to"/>
<div className="w-[80%] mx-auto mt-16">
    <Carousel   
     showDots={false}
  responsive={responsive}
   // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}>

<ReviewCard
 image="/images/close-up-confident-corporate-woman-professional-entrepreneur-smiling-cross-arms-chest-smiling-enthusiastic-standing-white-background_1258-85600.avif" 
 title="Great Quality"  
 username="Jesica Doe" 
 userRole="App Developer"/>

<ReviewCard 
image="/images/istockphoto-1364917563-612x612.jpg" 
title="Awesome Work"  
username="Jason Doe" 
userRole="Web Developer"/>

<ReviewCard 
image="/images/portrait-young-african-american-business-woman-black-peop-people-51712509.webp" 
title="Best Work"  
username="Janny Doe" 
userRole="Game Developer"/>

</Carousel>
</div>
        </div>
    )
}

export default Review