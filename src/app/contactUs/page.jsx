import React from 'react'
import { FiUser } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdSubject } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-full flex lg:flex-row gap-5 lg:gap-0 flex-col lg:p-20 p-5">
      <div className='lg:w-[50%] w-full text-[#062134]'>
        <p className='text-[20px]'>Contact us</p>
        <h1 className='lg:text-[45px] text-[30px] font-bold lg:leading-[50px] leading-[40px]'>Have any question? Feel free to contact us</h1>
        <p className='mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quam soluta quae quis voluptas, 
          id autem assumenda illo quidem veniam fugiat. Facere dicta doloremque omnis exercitationem delectus 
          alias quo aliquid!
        </p>
      </div>
      <div className='lg:w-[50%] w-full lg:shadow-lg text-[#062134] lg:pl-10 lg:pb-10 lg:pr-10 flex flex-col items-center'>
        <p className='text-[20px] font-bold'>SEND A MESSAGE</p>
        <div className='w-full flex items-center justify-around h-[50px] bg-[#f9f5f2] mt-7'>
          <input 
          className='w-[90%] outline-none border-none bg-transparent pl-2'
          placeholder='Full name'
          type="text" />
          <FiUser />
        </div>
        <div className='w-full flex items-center justify-around h-[50px] bg-[#f9f5f2] mt-7'>
          <input 
          className='w-[90%] outline-none border-none bg-transparent pl-2'
          placeholder='Email'
          type="email" />
          <MdOutlineMailOutline />
        </div>
        <div className='w-full flex items-center justify-around h-[50px] bg-[#f9f5f2] mt-7'>
          <input 
          className='w-[90%] outline-none border-none bg-transparent pl-2'
          placeholder='Subject'
          type="text" />
          <MdSubject />
        </div>
        <div className='w-full flex items-center justify-around bg-[#f9f5f2] mt-7'>
          <textarea name="message" id="message" placeholder='Write your message here' className='w-full h-[150px] outline-none p-3 bg-transparent'></textarea>
        </div>
        <div className='w-full flex items-center mt-4'>
          <button
          className='w-full h-[50px] bg-[#fecd28] text-[#062134] font-bold text-[20px]'
          >SEND</button>
        </div>
      </div>
    </div>
  )
}

export default Contact