import React from 'react'
import { arrowUp } from '../assests'
const GetStarted = () => {
  return (
    <div className='flexCenter w-36 h-36 rounded-full bg-blue-gradient p-[2px] cursor-pointer'>
      <div className='flexCenter flex-col bg-primary w-full h-full rounded-full'>
        <div className='flex flex-row'>
          <p className='text-lg text-gradient'>Get</p>
          <img src={arrowUp} alt='arrow' className='w-6 h-6 object-contain' />
        </div>
        <p className='text-lg text-gradient'>Started</p>
      </div>
    </div>
  )
}

export default GetStarted
