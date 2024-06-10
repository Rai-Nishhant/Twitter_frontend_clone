import React from 'react'
import Avatar from 'react-avatar'
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";

const tweet = () => {
    return (
        <div>
            <div>
                <div className='flex p-4'>
                    <Avatar src="https://pbs.twimg.com/profile_images/440014572355739648/cifS-Mwi_400x400.jpeg" size="40" round={true} />
                    <div className='ml-2'>
                        <div className='flex item-center'>
                            <h1 className='font-bold'>
                                Vigi
                            </h1>
                            <p className='text-gray-500 text-sm ml-1'>
                                @vigi007  . 1m
                            </p>
                        </div>
                        <div>
                            <p>
                                Hello MERN developers. Let's connect and build some awesome stuff.
                            </p>
                        </div>
                        <div className='flex justify-between my-3'>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                                    <FaRegComment size="18px" />
                                </div>
                                <p>0</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-red-300 rounded-full cursor-pointer'>
                                    <AiOutlineLike size="20px" />
                                </div>
                                <p> 0</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-blue-300 rounded-full cursor-pointer'>
                                    <CiSaveDown2 size="20px" />
                                </div>
                                <p>0</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-yellow-200 rounded-full cursor-pointer'>
                                    <CiBookmark size="20px" />
                                </div>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default tweet
