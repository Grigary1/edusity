import React from 'react'
import MainImage from '../assets/hero.png'
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
    return (
        <div className='relative'>
            {/* Image with gradient overlay */}
            <img className='w-full h-auto object-cover' src={MainImage} alt="Hero" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08003ab3] to-[#08003ab3] opacity-60"></div>

            {/* Container for text and button */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1 className='text-white text-6xl font-bold mb-4'>
                    We Ensure better education for a better world
                </h1>
                <p className='text-white max-w-lg mx-auto mb-4'>
                    Our cutting edge curriculum is designed to empower students with the knowledge, skills, and experience needed to excel in the dynamic field of education
                </p>
                {/* Flex container for button and icon */}
                <div className='flex items-center justify-center'>
                    <button className='bg-white text-black px-4 py-2 rounded-full flex items-center'>
                        Explore More
                        <FaArrowRightLong className='ml-2 text-black' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero