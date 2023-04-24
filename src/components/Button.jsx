import React from 'react'

const Button = ({ style }) => {
  return (
    <button
      type='button'
      className={`${style} py-4 px-6 bg-blue-gradient text-[18px] text-primary outline-none rounded-lg`}
    >
      Get started
    </button>
  )
}

export default Button
