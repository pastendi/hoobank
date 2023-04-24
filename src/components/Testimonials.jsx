import React from 'react'
import { clients, feedbacks } from '../constants'
import FeedbackCard from './FeedbackCard'
const Testimonials = () => {
  return (
    <div
      id='clients'
      className='container mx-auto md:max-w-3xl lg:max-w-6xl p-6 flex flex-col relative'
    >
      <div className='absolute z-0 w-[90%] h-[90%] -right-[50%] rounded-full blue__gradient' />
      <div className='flex flex-col justify-start lg:flex-row lg:items-center'>
        <h2 className='heading2 lg:w-1/2'>
          What people are <br className='md:block hidden' /> saying about us
        </h2>
        <p className='paragraph max-w-md mt-5 lg:w-1/2'>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 mt-10'>
        {clients.map((client) => (
          <div key={client.id} className='flexCenter'>
            <img
              src={client.logo}
              alt='logo'
              className='md:w-48 w-36 object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
