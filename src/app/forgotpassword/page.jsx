"use client"
import React, { useState } from 'react'
import OTP from '../components/otp'
import { toast, ToastContainer } from 'react-toastify'
import Image from 'next/image'

const ForgotPassword = () => {
    const [showOtp, setShowOtp] = useState(false)
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    
    const handleSubmit =(e)=> {
        e.preventDefault()
        // setLoading(true)
        // if(!email){
        //     setLoading(false)
        //     toast.error("pls provide an email")
        // }else {
        //     setLoading(false)
        //     toast.success("verification successfull")
        // }
        setShowOtp(true)
    }
  return (
    <div className='w-full flex items-center justify-center bg-blue-500'>
        <div className='lg:w-[40%] w-full h-screen bg-white'>
        {/* <div className='w-full h-[50px] text-[50px]'>
        <ToastContainer />
        </div> */}
            <div className='w-full text-[40px] flex justify-center pt-5'>
                Forgot password?
            </div>
           {
            showOtp ? 
            <OTP /> :
            <div className='w-full'>
            <div className='w-full flex justify-center'>
                {/* <img src="./loginicon.svg" alt="" /> */}
                <Image 
                 src='./loginicon.svg'
                 width={200}
                 height={300}
                />
            </div>
            <div className='w-full flex flex-col items-center gap-[10px]'>
                <p>For verification</p>
                <p>Please enter your registerd email address</p>
                <input
                className='border-[1px] h-[40px] border-blue-700 outline-none rounded px-[5px]'
                type="email" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder='example@gmail.com'
                />
            </div>
            <div className='w-full flex justify-center mt-[40px]'>
                <button 
                onClick={handleSubmit}
                className='w-[40%] h-[40px] rounded bg-blue-700 text-white'>
                    SEND
                </button>
            </div>
        </div>
           }
        </div>
    </div>
  )
}

export default ForgotPassword