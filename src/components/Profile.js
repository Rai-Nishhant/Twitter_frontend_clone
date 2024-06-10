import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

const Profile = () => {
    return (
        <div className='w-[50%] border-l border-r border-gray-200'>
            <diV>
                <div className='flex items-center py-2'>
                    <Link to="/" className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <IoMdArrowBack size={"24px"} />
                    </Link>
                    <div className='ml-2'>
                        <h1 className='font-bold text-lg'>Vigi</h1>
                        <p className='text-gray-500 text-sm'>9 posts</p>
                    </div>

                </div>
                <img src='https://static.vecteezy.com/system/resources/previews/002/216/686/non_2x/engineering-banner-vector.jpg' alt='banner' />
                <div className='absolute top-60 ml-4 border border-white rounded-full'>
                    <Avatar src="https://pbs.twimg.com/profile_images/440014572355739648/cifS-Mwi_400x400.jpeg" size="120" round={true} />
                </div>
                <div className='text-right mx-2' >
                    <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400'>Edit Profile</button>
                </div>
                <div className='mx-6 my-4'>
                    <h1 className='font-bold text-xl'>Vigi</h1>
                    <p>@vigi007</p>
                </div>
                <div className='mx-6 my-4 text-sm'>
                    <p>Software Engineer | 500+ DSA @ Leetcode + GFG || Full Stack Developer | (HTML+CSS+JS) + React+Node | Engineering Grad'25</p>
                </div>
            </diV>
        </div>
    )
}

export default Profile
