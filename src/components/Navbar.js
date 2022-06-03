import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

import Logo from '../assets/AG-logos_transparent.png'

// const navigation = [
//   { name: 'Home', href: '#home', current: true },
//   { name: 'Skills', href: '#skills', current: false },
//   { name: 'Projects', href: '#projects', current: false },
//   // { name: 'Calendar', href: '#', current: false },
// ]



const Navbar = (props) => {
  let navigation = props['navigation']
  let social = props['social']

  const [nav,setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#041C32] text-gray-300'>
      <div>
        <img src={Logo} alt='AG' className='w-[50px]'/>
      </div>
      
      {/* menu */}
      <ul className='hidden md:flex'>
        {navigation.map(
          (item) => (
            <li className='px-4'>{item.name}</li>
          )
        )}
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav? <FaBars/> : <FaTimes/>}
      </div>

      {/* mobile menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen bg-background'}>
          {navigation.map(
            (item) => (
              <li className='py-6 text-4xl'>{item.name}</li>
            )
          )}
        </ul>

        {/* social links */}
      <div className='hidden md:flex flex-col fixed top-[35%] left-0'>
        <ul className=''>
          {social.map(
            (item) => (
              <li className={'flex w-[160px] h-[60px] rounded justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'}
              style={{backgroundColor: item.color}}>
                <a className='flex justify-between items-center w-full text-gray-300'
                href={item.href}>
                  {item.name}<item.icon size={30}></item.icon>
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    
    </div>
  )
}

export default Navbar