import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';

const lSidebar = () => {
  return (
    <div className='w-[20%]'>
      <div>
        <div>
            <img className='ml-4' width={"45px"} src='https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-jumbo-v4.jpg?quality=75&auto=webp' alt='twitter'></img>
        </div>
        <div className='my-4'>
            <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                <div><IoMdHome size={"25px"}/></div>
                <div><h1 className='font-bold text-lg ml-2'>Home</h1></div>
            </Link>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                <div><FaHashtag size={"25px"}/></div>
                <div><h1 className='font-bold text-lg ml-2'>Explore</h1></div>
            </div>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                <div><IoIosNotifications size={"25px"}/></div>
                <div><h1 className='font-bold text-lg ml-2'>Notification</h1></div>
            </div>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                <div><BiMessage size={"25px"}/></div>
                <div><h1 className='font-bold text-lg ml-2'>Messages</h1></div>
            </div>
            <Link to="/profile" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                <div><CgProfile size={"25px"}/></div>
                <div><h1 className='font-bold text-lg ml-2'>Profile</h1></div>
            </Link>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                <div><CiBookmarkCheck size={"25px"}/></div>
                <div><h1 className='font-bold text-lg ml-2'>Bookmarks</h1></div>
            </div>
            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                <div><CiLogout size={"25px"}/></div>
                <div><h1 className='font-bold text-lg ml-2'>Logout</h1></div>
            </div>
            <button className='px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>
        </div>
      </div>
    </div>
  )
}

export default lSidebar
