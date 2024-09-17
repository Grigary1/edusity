import React from 'react'
import about from '../assets/about.png'
import play from '../assets/play-icon.png'

function About() {
  return (
    <div className='flex gap-x-9 justify-center'>
      {/* Container for about image with play icon centered */}
      <div className='relative inline-block'>
        {/* About Image */}
        <img src={about} alt="About University" className='object-contain h-96 w-96' />
        
        {/* Play Icon centered on About Image */}
        <img src={play} alt="Play Icon" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16' />
      </div>

      {/* Text Section */}
      <div>
        <h3 className='text-2xl text-blue-400'>About University</h3>
        <h2 className='text-3xl font-bold max-w-96'>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias...</p>
      </div>
    </div>
  )
}

export default About