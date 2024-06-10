import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';

const rSidebar = () => {
  return (
    <div className=' py-2 w-[25%]'>
      <div className='flex items-center py-2 px-1 bg-gray-100 rounded-full outline-none'>
        <CiSearch size="24px" />
        <input type="text" className='bg-transparent outline-none pl-1' placeholder='Search' />
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg'>People You May Know !</h1>
        <div className='flex items-center justify-between my-3'>
          <div className='flex'>
            <div>
              <Avatar src="https://pbs.twimg.com/profile_images/440014572355739648/cifS-Mwi_400x400.jpeg" size="40" round={true} />

            </div>
            <div className='ml-2'>
              <h1 className='font-bold'>Vigi</h1>
              <p className='text-sm'>@vigi007</p>
            </div>
          </div>
          <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
        </div>
        <div className='flex items-center justify-between my-3'>
          <div className='flex'>
            <div>
              <Avatar src="https://pbs.twimg.com/profile_images/440014572355739648/cifS-Mwi_400x400.jpeg" size="40" round={true} />

            </div>
            <div className='ml-2'>
              <h1 className='font-bold'>Vigi</h1>
              <p className='text-sm'>@vigi007</p>
            </div>
          </div>
          <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
        </div>
        <div className='flex items-center justify-between my-3'>
          <div className='flex'>
            <div>
              <Avatar src="https://pbs.twimg.com/profile_images/440014572355739648/cifS-Mwi_400x400.jpeg" size="40" round={true} />

            </div>
            <div className='ml-2'>
              <h1 className='font-bold'>Vigi</h1>
              <p className='text-sm'>@vigi007</p>
            </div>
          </div>
          <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default rSidebar
