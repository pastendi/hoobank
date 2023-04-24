import React from 'react'
import { logo } from '../assests'
import { footerLinks, socialMedia } from '../constants'
const Footer = () => {
  return (
    <div className='container md:max-w-3xl lg:max-w-6xl mx-auto flexCenter flex-col p-6'>
      <div className='flex justify-between w-full flex-col lg:flex-row mb-8 '>
        {/* logo and motto */}
        <div className='flex flex-1 flex-col'>
          <img src={logo} alt='logo' className='w-64 h-16 object-contain' />
          <p className='paragraph mt-4 max-w-xs'>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {/* footer links */}
        <div className='flex flex-[1.5] justify-between flex-wrap mt-10 lg:mt-0'>
          {footerLinks.map((link, index) => {
            return (
              <div key={index} className='flex flex-col my-4 min-w-[150px]'>
                <h4>{link.title}</h4>
                <ul className='list-none space-y-2 mt-4'>
                  {link.links.map((x) => (
                    <li
                      key={x.name}
                      className='text-dimWhite hover:text-secondary cursor-pointer'
                    >
                      {x.name}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      {/* footer copyright and social links */}
      <div className='w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t-2 border-gray-400'>
        <p className='text-lg'>2023 HooBank. All &copy; Rights reserved.</p>
        <div className='flex md:mt-0 mt-6 space-x-6'>
          {socialMedia.map((social, index) => (
            <img
              key={index}
              src={social.icon}
              alt={social.id}
              className='w-5 h-5 object-contain cursor-pointer'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
