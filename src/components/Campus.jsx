import React from 'react';
import g1 from '../assets/gallery-1.png';
import g2 from '../assets/gallery-2.png';
import g3 from '../assets/gallery-3.png';
import g4 from '../assets/gallery-4.png';

function Campus() {
  return (
    <div className='p-4 flex-col'>
      <div className='text-center mb-6'>
        <h1 className='text-3xl font-bold'>Gallery</h1>
        <p className='text-lg'>Campus Photos</p>
      </div>
      <div className='flex flex-wrap gap-x-10 justify-center mt-10'>
        <img src={g1} alt="Gallery 1" className='w-1/6 h-auto object-cover rounded-2xl' />
        <img src={g2} alt="Gallery 2" className='w-1/6 h-auto object-cover rounded-2xl' />
        <img src={g3} alt="Gallery 3" className='w-1/6 h-auto object-cover rounded-2xl' />
        <img src={g4} alt="Gallery 4" className='w-1/6 h-auto object-cover rounded-2xl' />
      </div>
      <div className='flex justify-center mt-8'>
      <button className='rounded-3xl bg-gray-200 text-black px-5 py-1'>See More Here</button></div>
    </div>
  );
}

export default Campus;