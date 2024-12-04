'use client'
import Link from 'next/link';
import "./navbar.css";
import React, { useState } from "react";


const Header = () => {
  <div className='hamburger'>
    <div className='burger burger1' />
    <div className='burger burger2' />
    <div className='burger burger3' />
  </div>

const [hamburgerOpen, setHamburgerOpen] = useState(false);
const toggleHamburger = () => {
  setHamburgerOpen(!hamburgerOpen);
};
  
  return (
    <header>
      <nav>
      <div className={StyleSheet.navbar} onClick={toggleHamburger}>js
        <HamburgerIcon isOpen={hamburgerOpen} />
      </div>
    </nav>
    </header>
  );
};
export default Header;