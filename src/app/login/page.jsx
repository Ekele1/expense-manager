"use client"

import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa6";
import { IoIosEye } from "react-icons/io";
import Link from 'next/link';

const LoginPae = () => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <div className='w-full lg:px-14 lg:py-10 flex px-[20px] py-5'>
        <div className='lg:w-[50%] w-full'>
            <div className='w-full text-blue-700 font-bold lg:text-[30px] text-[20px]'>
                <p>Digital</p>
            </div>
            <div className='w-full lg:mt-10 mt-5 text-blue-700 font-bold lg:text-[36px] text-[25px]'>
                <p>Expense management solution</p>
            </div>
            <div className='w-full mb-10'>
                <p>Welcome back! please login to your account</p>
            </div>
            <div className='w-full mb-3'>
                <p>Email Address</p>
                <input 
                className='lg:w-[70%] w-[90%] border-[1px] px-[5px] border-gray-700 outline-none h-[40px]'
                 type="email" />
            </div>
            <div className='w-full'>
                <p>Password</p>
                <div className='lg:w-[70%] w-[90%] flex items-center justify-between border-[1px] px-[5px] border-gray-700 outline-none h-[40px]'>
                    <input 
                    className='w-[90%] outline-none h-[100%] bg-transparent'
                    type={showPassword ? "text": "password" } />
                    {
                        showPassword ? <div className='cursor-pointer' onClick={()=> setShowPassword(!showPassword)}><IoIosEye /></div> : 
                        <div className='cursor-pointer' onClick={()=> setShowPassword(!showPassword)}><FaEyeSlash/></div> 
                    }
                </div>
            </div>
            <div className='w-[70%] mt-3 flex justify-end text-blue-500'>
                <Link href='/forgotpassword' className='cursor-pointer'>Forgot Password?</Link>
            </div>
            <div className='w-full mt-3 flex bg:gap-[30px] gap-[10px]'>
                <button className='lg:w-[20%] w-[45%] bg-blue-800 text-white h-[40px]'>
                    Login
                </button>
                <div className='lg:w-[20%] w-[45%] cursor-pointer flex items-center justify-center bg-white text-blue-800 border-[1px] border-blue-800 h-[40px]'>
                    <Link href='signUp'>
                    Sign Up
                    </Link>
                </div>
            </div>
            <div className='w-full mt-5 flex gap-[30px]'>
                <p>Or login with</p>
                <div className='flex gap-[20px] text-blue-800'>
                    <p>Google</p>
                    <p>Facebook</p>
                </div>
            </div>
        </div>
        <div className='w-[50%] hidden lg:flex items-center justify-center bg-gray-300'>
            {/* <div className='w-full h-screen'> */}
                <img className='w-full h-full object-contain' src="./loginillustration.svg" alt="illustration" />
            {/* </div> */}
        </div>
    </div>
  )
}

export default LoginPae