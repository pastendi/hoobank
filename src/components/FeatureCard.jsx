import React from 'react'

const FeatureCard = ({ icon, title, content }) => {
  return (
    <div className='flex p-6 rounded-3xl feature-card'>
      <div className='flexCenter w-16 h-16 rounded-full bg-dimBlue '>
        <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex-1 flex flex-col  ml-3'>
        <h4 className='font-semibold text-lg'>{title}</h4>
        <p className='paragraph'>{content}</p>
      </div>
    </div>
  )
}

export default FeatureCard
