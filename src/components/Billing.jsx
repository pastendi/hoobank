import React from 'react'
import { apple, bill, google } from '../assests'
const Billing = () => {
  return (
    <div
      id='product'
      className='container md:max-w-3xl lg:max-w-7xl mx-auto p-6 sectionReverse'
    >
      <div className='sectionImgReverse relative'>
        <img src={bill} alt='billing' className='w-full h-full z-50' />
        <div className='absolute top-0 left-1/2 z-20 w-1/2 h-1/2 rounded-full white__gradient' />
        <div className='absolute bottom-0 left-1/2 z-10 w-1/2 h-1/2 rounded-full pinl__gradient' />
      </div>
      <div className='sectionInfo'>
        <h2 className='heading2'>
          Easily control your <br className='md:block hidden' /> billing &
          invoicing.
        </h2>
        <p className='paragraph max-w-md mt-5'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          minus eaque nemo facilis et soluta delectus praesentium laboriosam non
          corrupti?
        </p>
        <div className='flex flex-wrap md:top-10 mt-6 space-x-6'>
          <img
            src={apple}
            alt='apple pay'
            className='w-32 h-11 object-contain cursor-pointer'
          />
          <img
            src={google}
            alt='google pay'
            className='w-32 h-11 object-contain cursor-pointer'
          />
        </div>
      </div>
    </div>
  )
}

export default Billing
