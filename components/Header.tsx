import React from 'react'

// icons
import { PiBookOpenTextFill } from "react-icons/pi";
import { RiUser4Line } from "react-icons/ri";

const Header = () => {
  return (
    <div className='flex items-center justify-between px-3 py-2 bg-green-600 text-white'>
        {/* left */}
        <div className='text-2xl text-neutral-200 cursor-pointer'>
            <PiBookOpenTextFill />
        </div>
        {/* right */}
        <div className='flex items-center gap-x-2 text-neutral-100 cursor-pointer transition-colors ease-in-out duration-150 hover:text-neutral-50'>
            <span className='text-sm'>Haddis</span>
            <RiUser4Line className='text-xl'/>
        </div>
    </div>
  )
}

export default Header