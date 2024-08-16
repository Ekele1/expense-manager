"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const OTP = () => {
    const [otp, setOtp] = useState("")
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push("/changepassword")
    }
  return (
    <div className='w-full '>
        <div className='w-full flex flex-col items-center'>
            <p className='text-[30px] text-blue-600'>Verify</p>
            Pls enter the code we sent to your email
        </div>
        <div className='w-full flex flex-col items-center mt-5'>
            <input 
            className='border-2 border-blue-600 outline-none h-[40px] rounded px-1'
            value={otp}
            onChange={(e)=> setOtp(e.target.value)}
            type="text" />
            <button 
            onClick={handleSubmit}
            className='bg-blue-700 rounded text-white w-[30%] h-[40px] mt-4'>
                SEND
            </button>
            <div className='w-full mt-2 flex flex-col items-center'>
                <p>Didn't receive the code?</p>
                <p className='text-blue-600 font-bold cursor-pointer'>Resend code</p>
            </div>
        </div>
    </div>
  )
}

export default OTP