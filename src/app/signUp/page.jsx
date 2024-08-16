"use client"
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import Image from 'next/image';

const SignUpPage = () => {
  return (
    <div className='w-full flex'>
        <div className='w-[50%] hidden lg:flex lg:flex-col bg-blue-800 py-10'>
            <div className='w-full py-8 flex justify-center font-semibold text-[20px] text-white'>
                <p>Get reminders on all your planned expenses</p>
            </div>
            <div className='w-full flex items-center justify-center'>
                {/* <img className='w-full h-full object-contain' src="./imgsign.svg" alt="" /> */}
                <Image 
                src='./imgsign.svg'
                width={300}
                height={300}
                alt=''
                />
            </div>
        </div>
        <div className='lg:w-[50%] w-full lg:px-8 px-4 py-3'>
            <div className='w-full flex font-bold text-[20px]'>
                <p>Epense Manager</p>
            </div>
            <div className='w-full py-3'>
                <p className='font-bold text-[20px]'>Create account</p>
                <p>For business, brand or celebrity.</p>
            </div>
            <div className='w-full flex lg:flex-row flex-col lg:gap-10 gap-5'>
                <div className='lg:w-[40%] w-[97%]'>
                    <p>First Name</p>
                    <input className='w-full lg:h-[40px] h-[50px] outline-none border-[1px] px-[5px] border-gray-700 rounded' 
                    type="text" />
                </div>
                <div className='lg:w-[40%] w-[97%]'>
                    <p>Last Name</p>
                    <input className='w-full lg:h-[40px] h-[50px] outline-none border-[1px] px-[5px] border-gray-700 rounded' 
                    type="text" />
                </div>
            </div>
            <div className='w-full flex lg:flex-row flex-col lg:gap-10 py-3 gap-5'>
                <div className='lg:w-[40%] w-[97%]'>
                    <p>Email</p>
                    <input className='w-full lg:h-[40px] h-[50px] outline-none border-[1px] px-[5px] border-gray-700 rounded' 
                    type="text" />
                </div>
                <div className='lg:w-[40%] w-[97%]'>
                    <p>Password</p>
                    <input className='w-full lg:h-[40px] h-[50px] outline-none border-[1px] px-[5px] border-gray-700 rounded' 
                    type="text" />
                </div>
            </div>
            <div className='w-full flex gap-10'>
                <div className='lg:w-[40%] w-[97%]'>
                    <p>Confirm Password</p>
                    <input className='w-full lg:h-[40px] h-[50px] outline-none border-[1px] px-[5px] border-gray-700 rounded' 
                    type="text" />
                </div>
            </div>
            <div className='w-full py-10 flex items-center lg:gap-10 gap-5'>
                <input type='checkbox' />
                <p>I agree to all the <span className='text-blue-700'>Terms</span> and <span className='text-blue-700'>privacy policy</span></p>
            </div>
            <div className='w-full flex lg:flex-row flex-col gap-2'>
                <button className='lg:w-[40%] w-[95%] h-[50px] bg-blue-800 text-white border-[1px] border-none rounded'>
                    Create Account
                </button>
                <div className='flex items-center justify-center gap-2 cursor-pointer lg:w-[40%] w-[95%] h-[50px] rounded bg-black text-white'>
                    <FcGoogle />
                    <p>Sign-in with google</p>
                </div>
            </div>
            <div className='w-full py-10 flex items-center justify-center'>
                <p>Already have an account? <Link href='/login' className='text-blue-800 cursor-pointer'>Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage