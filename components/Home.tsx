"use client"
import React from 'react';
import { useEffect } from 'react';
import Hero from './helper/home/hero/Hero';
import Category from './helper/home/category/Category';
import Job from './helper/home/job/Job';
import TopCompany from './helper/home/topCompany/TopCompany';
import Info from './helper/home/info/Info';
import Price from './helper/home/Price/Price';
import Review from './helper/home/review/Review';
import Footer from './helper/home/footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {


useEffect(() => {
const initAOS =async()=>{
  await import("aos");
  AOS.init({
    duration:1000,
    easing:"ease",
    once:true,
    anchorPlacement:"top-bottom"
  });
};
initAOS();
}, [])


  return (
    <div className="">
     <Hero/> 
     <Category/> 
     <Job/>
     <TopCompany/>
      <Info/>
      <Price/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default Home;
