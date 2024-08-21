import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full flex lg:flex-row flex-col gap-[20px] lg:gap-0 bg-[#062134] pt-20 pb-20 pl-10 pr-10'>
      <div className='lg:w-[25%] w-full flex flex-col gap-5 text-white'>
        <p className='font-bold text-[20px]'>Expense Manager</p>
        <div className='p-1 lg:w-[70%] w-full border-[1px] h-[40px] flex items-center justify-between border-white rounded-2xl'>
          <input 
          className='border-none bg-transparent outline-none text-white'
          placeholder='your email'
          type="text" />
          <FaCircleArrowRight color='orangered' size={'30px'} cursor={"pointer"}/>
        </div>
        <p>Stay always in touch!</p>
        <p>subscribe to our news letter</p>
      </div>
      <div className='lg:w-[25%] w-full flex flex-col gap-5 text-white'>
        <p className='font-bold text-[20px]'>Contacts</p>
        <div className='w-full flex items-center gap-4'>
          <IoLocationSharp />
          <p>40 chevron drive, lagos Nigeria</p>
        </div>
        <div className='w-full flex items-center gap-4'>
          <SiMinutemailer />
          <p>info@expensemanager.com</p>
        </div>
        <div className='w-full flex items-center gap-4'>
          <FaPhoneAlt />
          <p>09154382278</p>
        </div>
      </div>
      <div className='lg:w-[25%] w-full flex flex-col gap-5 text-white'>
        <p className='font-bold text-[20px]'>Useful Links</p>
        <div className='w-full flex items-center gap-4 cursor-pointer'>
          {/* <IoLocationSharp /> */}
          <p>Terms and conditions</p>
        </div>
        <div className='w-full flex items-center gap-4 cursor-pointer'>
          {/* <SiMinutemailer /> */}
          <p>Knowledge base</p>
        </div>
        <div className='w-full flex items-center gap-4 cursor-pointer'>
          {/* <FaPhoneAlt /> */}
          <p>Customer care</p>
        </div>
      </div>
    </div>
  )
}

export default Footer