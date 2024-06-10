import React, { useState } from 'react'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const loginSignupHandler = () =>{
        setIsLogin(!isLogin);
    }
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='flex items-center justify-evenly w-[80%]'>
                <div>
                    <img className='ml-5' width={"620px"} src='https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-jumbo-v4.jpg?quality=75&auto=webp' alt='twitter' />
                </div>
                <div>
                    <div className='my-5'>
                        <h1 className='font-bold text-6xl'>Trending Now !</h1>
                    </div>
                    <h1 className='mt-4 mb-2 text-2xl font-bold'>{isLogin? "Login" : "Sign Up"}</h1>
                    <form className='flex flex-col w-[60%]'>
                        {
                            !isLogin && (<>
                                <input type="text" placeholder='Name' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
                                <input type="text" placeholder='Username' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
                            </>)
                        }

                        <input type="text" placeholder='Email' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
                        <input type="text" placeholder='Password' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
                        <button className='bg-[#1D9BF0] border-none py-1 my-4 rounded-full text-lg text-white'>{isLogin? "Login" : "Create Account"}</button>
                        <h4>{ isLogin ? "Don't have an account?": "Already have an account?"} <span onClick={loginSignupHandler} className='font-bold text-blue-600 cursor-pointer'>{isLogin?"Sign Up" : "Login"}</span></h4>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
