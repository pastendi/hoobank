import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Business from './components/Business'
function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Navbar />
      <Hero />
      <Stats />
      <Business />
    </div>
  )
}

export default App
