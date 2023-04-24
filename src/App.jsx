import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Business from './components/Business'
import Billing from './components/Billing'
import CardDeal from './components/CardDeal'
import Testimonials from './components/Testimonials'
function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
    </div>
  )
}

export default App
