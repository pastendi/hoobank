import React from 'react'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Navbar />
      {/* hero */}
      <div className='bg-primary flexStart'>
        <div className='boxWith'>Hero</div>
      </div>
      {/* others */}
      <div className='bg-primary paddingX flexStart'>
        <div className='boxWith'>Others</div>
      </div>
    </div>
  )
}

export default App
