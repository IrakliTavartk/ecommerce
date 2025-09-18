import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4  mt-4.5 j items-center  '>
      <div className='ml-15'>
       <Image src="/Logo.svg" alt="logo" width={230} height={24} />
      </div>
      <div className='flex items-center justify-center space-x-2  p-4  mr-20 '>
      <Image src="/user.svg" alt="user" width={30} height={20} />
        <h1 className='text-l font-semibold text-gray-900 cursor-pointer '>Login in</h1>

      </div>

      
    </div>
  )
}

export default Navbar 
