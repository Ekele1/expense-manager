"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
// import { Toast } from 'react-toastify/dist/components'

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [confirmPasword, setConfirmPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("password changed successfully")
    setTimeout(()=>{
      router.push("/login")
    },3000)
  }
  return (
    <div className='w-full flex justify-center h-screen'>
      <ToastContainer />
      <div className='lg:w-[40%] w-full'>
        <div className='w-full lg:text-[40px] text-[25px] flex justify-center'>
          Create new password
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-1'>
          <p>New password</p>
          <input 
          className='border-[1px] border-blue-700 outline-none h-[40px] px-1 rounded'
          value={newPassword}
          onChange={(e)=>setNewPassword(e.target.value)}
          type={showPassword ? "text": "password"} />
        </div>
        <div className='w-full flex flex-col items-center justify-center mt-4 gap-1'>
          <p>Confirm New password</p>
          <input 
          className='border-[1px] border-blue-700 outline-none h-[40px] px-1 rounded'
          value={confirmPasword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          type={showPassword ? "text" : "password"} />
        </div>
        <div className='w-full flex items-center justify-center mt-2 gap-2'>
          <input 
          value={showPassword}
          onChange={(e)=> setShowPassword(e.target.value)}
          type="checkbox" />
          <p>show password</p>
        </div>
        <div className='w-full flex items-center justify-center'>
          <button
          className='w-[40%] h-[40px] bg-blue-700 text-white mt-5 rounded'
          onClick={handleSubmit}
          >Done</button>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword