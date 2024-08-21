"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { RiLoginBoxFill } from "react-icons/ri";
import Image from 'next/image';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full flex items-center justify-center bg-black fixed mb-20">
      <div className="w-full h-[70px] border-2 rounded-lg border-transparent flex items-center justify-between">
      {/* <div className="absolute p-1 border-light border-[1px] rounded-lg"></div> */}
        <div className="w-max h-[80%] bg-white px-1 flex items-center">
          <Image 
            src='/vercel.svg'
            width={100}
            height={100}
            alt='Vercel logo'
          />
        </div>
        <div className="w-[50%] h-[80%] hidden text-white lg:flex items-center justify-around">
          <Link href='/' className="cursor-pointer">Home</Link>
          <Link href='/aboutUs' className="cursor-pointer">About us</Link>
          <Link href='/contactUs' className="cursor-pointer">Contact</Link>
          <Link href='/login' className="p-2 rounded w-[100px] text-white bg-blue-800 flex items-center justify-center">
            Login
          </Link>
        </div>
        <div className="lg:hidden text-[40px] px-4" onClick={() => setShowMenu(!showMenu)}>
          { showMenu ? <MdOutlineCancelPresentation color='white'/> : <RxHamburgerMenu color='white'/> }
        </div>
        <div className={`w-[80%] h-[500px] rounded flex flex-col gap-[20px] bg-blue-800 absolute top-[70px] right-0 px-4 py-4 transform ${
            showMenu ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className='w-full flex items-center gap-[10px] text-white text-[20px] font-bold' onClick={() => setShowMenu(false)}>
            <FaHome />
            <Link href='/'>Home</Link>
          </div>
          <div className='w-full flex items-center gap-[10px] text-white text-[20px] font-bold' onClick={() => setShowMenu(false)}>
            <FcAbout />
            <Link href='/aboutUs'>About us</Link>
          </div>
          <div className='w-full flex items-center gap-[10px] text-white text-[20px] font-bold' onClick={() => setShowMenu(false)}>
            <FcBusinessContact />
            <Link href='/contactUs'>Contact us</Link>
          </div>
          <div className='w-full flex items-center gap-[10px] text-white text-[20px] font-bold' onClick={() => setShowMenu(false)}>
            <RiLoginBoxFill />
            <Link href='/login'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
