import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div>
      {/* NavBar overlaying the Hero */}
      <NavBar />

      {/* Hero component */}
      <Hero />
      <div className='flex justify-center mt-6'>
      <Title/></div>
      <Programs/>
      <About/>
      <Campus/>
      <Testimonials/>
    </div>
  )
}

export default App
