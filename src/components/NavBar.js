import React from 'react'
import logo from '../assets/logo.png'

function NavBar() {
  return (
    <nav className='absolute top-0 w-full bg-transparent text-white flex justify-around items-center h-fit z-10'>
      <img className='w-fit h-16 p-2' src={logo} alt="Not found" />
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
  )
}

export default NavBar
