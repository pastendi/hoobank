import React from 'react'
import { robot, discount } from '../assests'
import GetStarted from './GetStarted'
const Hero = () => {
  return (
    <div
      id='home'
      className='w-full p-6  md:max-w-3xl lg:max-w-6xl mx-auto flex flex-col lg:flex-row'
    >
      {/* left side */}
      <div className='flex-1 flexStart flex-col lg:px-0'>
        <div className='flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-xl mb-2'>
          <img src={discount} alt='discount' className='w-8 h-8' />
          <p className='paragraph'>
            <span className='text-white'>20%</span> discount for{' '}
            <span className='text-white'>1 month</span>
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-semibold text-[52px] md:text-[72px] '>
            <span>The Next</span>
            <br className='hidden md:block' />
            <span className='text-gradient'>Generation</span>
            <br className='hidden md:block' />
          </h1>
          <GetStarted />
        </div>
        <h1 className=' font-semibold text-[52px] md:text-[72px] '>
          Payment Method.
        </h1>
        <p className='paragraph max-w-md mt-5'>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fess.
        </p>
      </div>
      {/* right side */}
      <div className='flex-1 flexCenter lg:my-0 my-10 relative'>
        <img src={robot} alt='billing' className='w-full h-full  z-50' />
        <div className='absolute z-0 w-[60%] h-[75%] pink__gradient top-0'></div>
        <div className='absolute z-10 w-[80%] h-[80%] white__gradient bottom-40 rounded-full'></div>
        <div className='absolute z-0 w-[50%] h-[50%] blue__gradient '></div>
      </div>
    </div>
  )
}

export default Hero
