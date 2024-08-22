import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="w-full">
      <div className='w-full bg-[url(/about.jpg)] bg-cover h-screen flex justify-center pt-[100px]'>
        <div className='lg:w-[50%] w-full h-max bg-white/10 backdrop-blur-md p-5 lg:p-10 rounded-md'>
          <p className='lg:text-[25px] text[20px] font-bold text-orange-800'>
          We believe that financial freedom starts with smart money management. Our mission is to
           empower individuals and businesses to take control of their finances, simplify their 
           budgeting, and achieve their financial goals with confidence.
          </p>
        </div>
      </div>
      <div className='w-full pt-20 pl-4 pr-4'>
        <div className='text-[30px] font-bold text-[#062134]'>
          <p>Our vision is to create a world where everyone has the tools and knowledge they need to manage their finances effectively.</p>
        </div>
        <div className='w-full flex lg:flex-row flex-col gap-10 pt-10'>
          <div className='lg:w-[50%] w-full text-[18px] text-[#062134] font-semibold'>
            <p>
            Whether you're looking to track daily expenses, set up monthly budgets, or monitor your financial progress over time, our tool 
            offers the features you need to stay on top of your finances.
            </p>
          </div>
          <div className='lg:w-[50%] w-full text-[18px] text-[#062134] font-semibold'>
            <p>
              Join thousands of satisfied users who have taken control of their finances with Expense Manager. Let us help you on your 
              journey to financial wellness.
            </p>
          </div>
        </div>
        <div className='w-full pt-20 flex'>
          <div className='w-[50%] flex items-center justify-center'>
            <Image 
            src=''
            width={300}
            height={300}
            alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About