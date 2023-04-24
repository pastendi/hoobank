import React from 'react'
import { quotes } from '../assests'
const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className='p-8 w-80 h-80 relative space-y-8 rounded-2xl feedback-card'>
      <img src={quotes} alt='quotes' className='w-11 h-7' />
      <p className='mt-5'>{content}</p>
      <div className='absolute bottom-8 flex space-x-4'>
        <img
          src={img}
          alt='profile'
          className='w-12 h-12 rounded-full overflow-hidden'
        />
        <div>
          <p className='text-lg'>{name}</p>
          <p className='paragraph'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
