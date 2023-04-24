import React from 'react'
import { features } from '../constants'
import Button from './Button'
import FeatureCard from './FeatureCard'
const Business = () => {
  return (
    <div className='container md:max-w-3xl lg:max-w-7xl mx-auto section p-6'>
      <div className='section-info'>
        <h2 className='heading2'>
          You do the business, <br className='md:block hidden' /> we'll handle
          the money.
        </h2>
        <p className='paragraph max-w-[470px] mt-5'>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button style='mt-10' />
      </div>
      <div className='sectionImg flex-col space-y-6'>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  )
}

export default Business
