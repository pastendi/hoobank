import React, { useState } from 'react'
import { navLinks } from '../constants'
import { close, logo, menu } from '../assests/index'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    // big nav
    <nav className='w-full p-6 flex md:max-w-3xl lg:max-w-7xl mx-auto justify-between items-center navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px] ' />
      <ul className='list-none md:flex hidden md:space-x-8 lg:space-x-16 justify-end items-center'>
        {navLinks.map((nav, index) => {
          return (
            <li key={index}>
              <a href={`#${nav.title}`} className='nav-link'>
                {nav.title}
              </a>
            </li>
          )
        })}
      </ul>
      <div className='md:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='icon'
          onClick={() => setToggle((prev) => !prev)}
          className='w-[28px] h-[28px] object-contain'
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl mobile-nav-animation`}
        >
          <ul className='list-none flex flex-col space-y-4 justify-end items-start'>
            {navLinks.map((nav, index) => {
              return (
                <li key={index}>
                  <a href={`#${nav.title}`} className='nav-link'>
                    {nav.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
