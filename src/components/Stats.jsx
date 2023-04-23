import React from 'react'
import { stats } from '../constants'
const Stats = () => {
  return (
    <div className='w-full max-w-3xl mx-auto p-6 lg:max-w-7xl flex justify-center items-center flex-wrap flex-row md:mb-20 gap-4'>
      {stats.map((stat, index) => {
        return (
          <div
            key={index}
            className='flex flex-1 flex-row  justify-start items-center space-x-3'
          >
            <h4 className='font-semibold text-5xl '>{stat.value}</h4>
            <p className=' text-xl text-gradient uppercase '>{stat.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Stats
