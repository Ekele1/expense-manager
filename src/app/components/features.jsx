import React from 'react'
import { CgTrack } from "react-icons/cg";
import { BsTools } from "react-icons/bs";
import { TbReport } from "react-icons/tb";
import Image from 'next/image';

const Features = () => {
  return (
    <div className='w-full pt-10 pb-10 flex lg:flex-row flex-col'>
        <div className='lg:w-[50%] w-full lg:pl-20 pl-2'>
            <div className='w-full text-[#062134] text-[30px] font-bold pb-10'>
                <p>Expense Manager all core features</p>
            </div>
            <div className='w-full flex items-center pb-10'>
                <div className='w-[50px] h-[50px] text-[30px] text-orange-700 flex items-center justify-center'>
                    <CgTrack />
                </div>
                <div className='w-auto pl-5 '>
                    <h1 className='font-bold text-[25px]'>Simplified expense tracking</h1>
                    <p>Easily categorize and monitor your spending with our intuitive interface. Stay on top of your finances without the hassle.</p>
                </div>
            </div>
            <div className='w-full flex items-center pb-10'>
                <div className='w-[50px] h-[50px] text-[30px] text-orange-700 flex items-center justify-center'>
                    <BsTools />
                </div>
                <div className='w-auto pl-5 '>
                    <h1 className='font-bold text-[25px]'>Smart Budgeting Tools</h1>
                    <p>Set budgets for different categories and receive alerts when you're nearing your limit. Expense manager helps you stay within your financial goals.</p>
                </div>
            </div>
            <div className='w-full flex items-center pb-10'>
                <div className='w-[50px] h-[50px] text-[30px] text-orange-700 flex items-center justify-center'>
                    <TbReport />
                </div>
                <div className='w-auto pl-5 '>
                    <h1 className='font-bold text-[25px]'>Comprehensive Reports</h1>
                    <p>Get detailed insights into your spending habits with customizable reports and charts. Make informed financial decisions with ease.</p>
                </div>
            </div>
        </div>
        <div className='lg:w-[50%] w-full'>
            <Image 
                // className='w-full object-contain'
                src='/features.jpg'
                width={700}
                height={700}
                alt=''
            />
        </div>
    </div>
  )
}

export default Features