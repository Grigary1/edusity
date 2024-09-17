import React from 'react'
import p1 from '../assets/program-1.png'
import p2 from '../assets/program-2.png'
import p3 from '../assets/program-3.png'
import g1 from '../assets/program-icon-1.png'
import g2 from '../assets/program-icon-2.png'
import g3 from '../assets/program-icon-3.png'

function Programs() {

  return (
    <div className='flex justify-between overflow-hidden p-10 mt-10'>
      {/* First Image with overlay */}
      <div className='relative w-1/3 mx-36 rounded-3xl overflow-hidden'>
        <img className='h-96 object-contain' src={p1} alt="Program Image" />
        {/* Gradient overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#08003ab3] to-transparent'></div>
        <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16' src={g1} alt="Program Icon" />
      </div>

      {/* Second Image with overlay */}
      <div className='relative w-1/3 mx-2 rounded-3xl overflow-hidden'>
        <img className='h-96 object-contain' src={p2} alt="Program Image" />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#08003ab3] to-transparent cursor-pointer'></div>
        <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16' src={g2} alt="Program Icon" />
      </div>

      {/* Third Image with overlay */}
      <div className='relative w-1/3 mx-36 rounded-3xl overflow-hidden'>
        <img className='h-96 object-contain' src={p3} alt="Program Image" />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#08003ab3] to-transparent'></div>
        <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16' src={g3} alt="Program Icon" />
      </div>
    </div>
  )
}

export default Programs
