import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Programs from './components/Programs'

function App() {
  return (
    <div>
      {/* NavBar overlaying the Hero */}
      <NavBar />

      {/* Hero component */}
      <Hero />
      <div>
        <Programs />
      </div>

    </div>
  )
}

export default App
