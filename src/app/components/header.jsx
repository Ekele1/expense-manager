"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { RiLoginBoxFill } from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full flex items-center justify-center bg-white fixed mb-20">
    <div className="w-full h-[70px] border-b-2 border-b-slate-200 flex items-center justify-between">
      <div className="w-max h-[80%] px-1">
        <img className='w-full h-full object-contain' src="./vercel.svg" alt="" />
      </div>
      <div className="w-[50%] h-[80%] hidden lg:flex items-center justify-around ">
        <Link href='/' className="cursor-pointer">Home</Link>
        <Link href='/aboutUs' className="cursor-pointer">About us</Link>
        <Link href='/contactUs' className="cursor-pointer">Contact</Link>
        <Link href='login' className="p-2 rounded w-[100px] text-white bg-blue-800 flex items-center justify-center">
            Login
        </Link>
      </div>
      <div className="hidden max-[1024px]:flex text-[40px] px-4" onClick={()=>setShowMenu(!showMenu)}>
          {
            showMenu ? <MdOutlineCancelPresentation />: <RxHamburgerMenu />
          }
      </div>
      {
        showMenu ? 
        <div className='w-[80%] h-full flex flex-col gap-[20px] bg-blue-900 absolute z-10 top-[70px] px-4 py-4'>
          <div className='w-full flex items-center gap-[10px] text-white text-[20px] font-bold' onClick={()=>setShowMenu(false)}>
            <FaHome />
            <Link href='/'>Home</Link>
          </div>
          <div className='w-full flex items-center gap-[10px] text-white text-[20px] font-bold' onClick={()=>setShowMenu(false)}>
            <FcAbout />
            <Link href='/aboutUs'>About us</Link>
            {/* About */}
          </div>
          <div className='w-full flex items-center gap-[10px] text-white text-[20px] font-bold' onClick={()=>setShowMenu(false)}>
            <FcBusinessContact />
            <Link href='/contactUs'>Contact us</Link>
            {/* Contact */}
          </div>
          <div className='w-full flex items-center gap-[10px] text-white text-[20px] font-bold' onClick={()=>setShowMenu(false)}>
            <RiLoginBoxFill />
            <Link href='/login'>Login</Link>
            {/* Login */}
          </div>
        </div>
        : null
      }
    </div>
  </div>
  )
}

export default Header