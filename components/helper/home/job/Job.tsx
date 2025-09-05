import React from 'react';
import SectionHeading from '../../SectionHeading';
import JobCard from './JobCard';


const Job = () => {


const jobs = [
{
id:1,
image:"/images/5969474.png",
title:"Software Engineer",
location:"London, UK",
jobtype:"Full time",
urgency:"Urgent"
},
{
id:2,
image:"/images/5969474.png",
title:"Software Engineer",
location:"Manchester, UK",
jobtype:"Full time",
urgency:"Urgent"
},
{
    id:3,
    image:"/images/productmanager.jpg",
    title:"Product Manager",
    location:"Birmingham, UK",
    jobtype:"Contract",
    urgency:"Urgent"
},
{
    id:4,
    image:"/images/original-37e1be910e14bcfe2cece28b36ad9384.webp",
    title:"Senior Product Designer",
    location:"Bristol, UK",
    jobtype:"Full Time",
    urgency:"Urgent"
},
{
    id:5,
    image:"/images/874-8749898_providing-solutions-solution-architect-icon.jpeg",
    title:"Technical Architect",
    location:"Leeds, UK",
    jobtype:"Full Time",
    urgency:"Urgent"
},
{
    id:6,
    image:"/images/productmanager.jpg",
    title:"Product Manager Risk",
    location:"Edinburg UK",
    jobtype:"Contract",
    urgency:"Private"
},
{
    id:7,
    image:"/images/web-development-icon-png-clipart-website-development-web-dev-icon-11562967383vhxlfmnerz.png",
    title:"Web Developer",
    location:"Brighton UK",
    jobtype:"Part Time",
    urgency:"urgent"
},
{
    id:8,
    image:"/images/original-37e1be910e14bcfe2cece28b36ad9384.webp",
    title:"Senior Product Designer",
    location:"Glasgow UK",
    jobtype:"Contarct",
    urgency:"Private"
},
{
    id:9,
    image:"/images/3271500.png",
    title:"Senior BI Analyst",
    location:"Shefield UK",
    jobtype:"Full Time",
    urgency:"Urgent"
}
];


  return (
    <div className="pt-16 pb-16">
      <SectionHeading heading="Featured Jobs" 
      subheading='Know your Worth and find the job that qualify your life'/>
   <div className="w-[95%] sm:w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10
   items-center">
    {
        jobs.map((job, index)=>{
            return (
                <div
                 data-aos="fade-up" 
                data-aos-anchor-placement="top-center"
                data-aos-delay={index * 100}
                key={job.id}>
                <JobCard
              id={job.id}
                image={job.image} 
                title={job.title} 
                location={job.location}
                 jobtype={job.jobtype} 
                urgency={job.urgency}/>
                </div>
            )
        })
    }
   </div>
   <div className="mt-10 text-center">
    <button className="px-10 py-4 bg-blue-700 text-white cursor-pointer rounded-lg 
    hover:bg-blue-800 transition-all duration-200">Learn More Listing</button>
   </div>
    </div>
  );
}

export default Job;
