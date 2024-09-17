import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

function NavBar() {
  // State to track if the user has scrolled
  const[isScrolled,setIsScrolled]=useState(false)
  
  useEffect(()=>{
    const handleScroll=()=>{
      const position=window.scrollY;
      if(position>1000){
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll',handleScroll);

    return()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[])

  return (
    <nav
      className={`fixed top-0 w-full text-white flex justify-around items-center h-fit z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? 'backdrop-blur-lg text-gray-950' : 'bg-transparent'
      }`}
    >
      <img className='w-fit h-16 p-2 text-gray-950' src={logo} alt="Not found" />
      <ul className='flex gap-x-10 justify-center items-center'>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <button className='border border-white rounded-full bg-white text-black p-2'>
          Contact Us
        </button>
      </ul>
    </nav>
  );
}

export default NavBar;
