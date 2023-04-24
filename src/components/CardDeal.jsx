import React from 'react'
import { card } from '../assests'
import Button from './Button'
const CardDeal = () => {
  return (
    <div className='section container md:max-w-3xl lg:max-w-7xl mx-auto p-6'>
      <div className='sectionInfo'>
        <h2 className='heading2'>
          Find a better card deal <br className='md:block hidden' /> in few easy
          steps.
        </h2>
        <p className='paragraph max-w-md mt-5'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad saepe,
          voluptatibus illo delectus modi in sapiente beatae deserunt
          perferendis cumque ipsa doloribus quibusdam eos veniam dolorum
          similique placeat quasi nisi.
        </p>
        <Button style='mt-10' />
      </div>
      <div className='sectionImg'>
        <img src={card} alt='card deals' className='w-full h-full' />
      </div>
    </div>
  )
}

export default CardDeal
