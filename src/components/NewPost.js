import React from 'react'
import Avatar from 'react-avatar'
import { CiImageOn } from "react-icons/ci";

const NewPost = () => {
    return (
        <div className='w-[100%]'>
            <div>
                <div className='flex items-center justify-evenly border-b border-gray-200'>
                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                        <h1 className='font-semibold text-gray-600 text-lg' >For You</h1>
                    </div>
                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                        <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
                    </div>
                </div>
                <div>
                    <div className='flex items-center p-4'>
                        <div>
                            <Avatar src="https://pbs.twimg.com/profile_images/440014572355739648/cifS-Mwi_400x400.jpeg" size="40" round={true} />
                        </div>
                        <input className='w-full outline-none border-none text-xl ml-3' type="text" placeholder='What is happening today ?' />
                    </div>
                    <div className='flex items-center justify-between px-3 py-2 border-b border-gray-300'>
                        <div>
                            <CiImageOn size={"24px"}/>
                        </div>
                        <button className='bg-[#1D9BF0] px-3 py-1 text-md font-bold text-white text-right border-none rounded-full'>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPost
