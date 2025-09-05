import React from "react"
import { LuNetwork } from "react-icons/lu"

const Footer = () => {
   return (
    <div className="pt-16 pb-16 bg-gray-200 dark:bg-gray-900">
<div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:grid-cols-6 gap-10 items-start">
{/** 1st part */}
<div className="xl:col-span-2">
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
<p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
</p>
{/** call us */}
<div className="mt-5">
<h1 className="lg:text-xl text-base text-gray-500 dark:text-gray-300 font-medium">Call Us</h1>
<p className="mt-1 text-gray-600 dark:text-gray-300 lg:text-lg text-base font-bold">+91 793 720 578</p>
</div>
{/** addresses */}
<p className="text-sm text-gray-600 dark:text-gray-400 mt-4">Dhaka Tangail</p>
<p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Dhaka Tangail Bangradesh</p>
<p className="text-sm text-gray-600 dark:text-gray-400 mt-2">example@gmail.com</p>
</div>

{/* 2nd part */}
<div className="space-y-6">
    <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">For Candidate</h1>
<p className="footer__link">Browse Jobs</p>
<p className="footer__link">Browse Categories</p>
<p className="footer__link">Candidate Dashboards</p>
<p className="footer__link">Job Alerts</p>
<p className="footer__link">My Bookmarks</p>
</div>

<div className="space-y-6">
    <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">For Employers</h1>
<p className="footer__link">Browse Candidates</p>
<p className="footer__link">Employer Dashboard</p>
<p className="footer__link">Add Job</p>
<p className="footer__link">Job Packages</p>
</div>

<div className="space-y-6">
    <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">About Us</h1>
<p className="footer__link">Job Page</p>
<p className="footer__link">Job Page Altarnative</p>
<p className="footer__link">Resume Page</p>
<p className="footer__link">Blog</p>
<p className="footer__link">Contact</p>
</div>

<div className="space-y-6">
    <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">Helpful Resources</h1>
<p className="footer__link">Site Map</p>
<p className="footer__link">Terms of Use</p>
<p className="footer__link">Privacy Center</p>
<p className="footer__link">Security Center</p>
<p className="footer__link">Accessibilty Center</p>
</div>
  </div>

<div className="pt-6 mt-10 border-t w-[90%]  mx-auto border-gray-300 dark:border-gray-800">
    <p className="text-gray-500">&copy; 2025 webdevwarriors. All Rights Reserved.</p>
</div>
</div>
   )
}
export default Footer