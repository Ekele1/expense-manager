import React from 'react'

const Heropage = () => {
  return (
    <div className='w-full bg-[url("/shopping.jpg")] lg:bg-cover sm:bg-center lg:h-screen h-[80vh] lg:pt-20 lg:pl-20 p-5 leading-[50px]'>
        <h1 className='font-bold lg:text-[50px] text-[35px] lg:text-white text-[#062134]'>Take control of your finances</h1>
        <h1 className='font-bold lg:text-[50px] text-[35px] text-white'>with expense manager</h1>
        <p className='text-[20px] text-[#062134] typewriter-text font-semibold'>Effortlessly track your expenses, manage budgets, and achieve your financial goals.</p>
        <button className='bg-blue-800 font-bold text-[20px] text-white lg:h-[50px] h-[60px] pl-10 pr-10 rounded-xl'>
            Get started for free
        </button>
    </div>
  )
}

export default Heropage