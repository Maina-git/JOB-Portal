"use client"
import React from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import { useState } from 'react';
import { FaLessThanEqual } from 'react-icons/fa';

const ResponsiveNavbar = () => {
  const [showNav, setShoNav] = useState(false);

  const openNavHandler = () => setShoNav(true);
  const closeNavHandler = () => setShoNav(false)
  return (
    <div>
      <Navbar openNav = { openNavHandler }/>
      <MobileNav   showNav={showNav} closeNav={ closeNavHandler} />
    </div>
  );
}

export default ResponsiveNavbar;
 