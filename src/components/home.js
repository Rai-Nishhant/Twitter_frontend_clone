import React from 'react'
import LSidebar from './lSidebar'
import RSidebar from './rSidebar'
import MainFeed from './mainFeed'
import { Outlet } from 'react-router-dom'
const home = () => {
  return (
    <div className='flex justify-between w-[90%] mx-auto'>
      <LSidebar/>
      <Outlet/> 
      <RSidebar/>
    </div>
  )
}

export default home
