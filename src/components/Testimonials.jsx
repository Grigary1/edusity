import React, { useState } from 'react';
import back from '../assets/back-icon.png';
import next from '../assets/next-icon.png';
import u1 from '../assets/user-1.png';
import u2 from '../assets/user-2.png';
import u3 from '../assets/user-3.png';
import u4 from '../assets/user-4.png';

const imageSets = [
  [u1, u2, u3, u4], // Set 1
  [u1, u2], // Set 2 (example: can be different images)
  [u3, u4], // Set 3 (example: can be different images)
];

function Testimonials() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const handleNext = () => {
    if (currentSetIndex < imageSets.length - 1) {
      setCurrentSetIndex(currentSetIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentSetIndex > 0) {
      setCurrentSetIndex(currentSetIndex - 1);
    }
  };

  return (
    <div>
      <div className='flex justify-center items-center mb-6'>
        <div className='text-center'>
          <p className='text-blue-500 text-lg font-semibold'>Testimonials</p>
          <p className='text-lg'>What Students Say</p>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <img
          src={back}
          alt="Back"
          className='bg-blue-600 rounded-3xl p-2 w-12 h-12 cursor-pointer'
          onClick={handleBack}
        />
        <div className='flex gap-4 mb-10'>
          {imageSets[currentSetIndex].map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`User ${index + 1}`}
              className='object-cover w-16 h-16 '
            />
          ))}
        </div>
        <img
          src={next}
          alt="Next"
          className='bg-blue-600 rounded-3xl p-2 w-12 h-12 cursor-pointer'
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

export default Testimonials;
