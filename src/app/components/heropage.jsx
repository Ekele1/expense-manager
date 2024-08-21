import React from 'react'

const Heropage = () => {
  return (
    <div className='w-full bg-[url("/homepage.jpg")] lg:bg-auto bg-cover bg-center h-screen lg:pt-20 lg:pl-20 p-5 leading-[50px] mt-10'>
        <h1 className='font-bold lg:text-[50px] text-[35px] text-white'>Take control of your finances</h1>
        <h1 className='font-bold lg:text-[50px] text-[35px] text-white'>with expense manager</h1>
        <p className='text-[20px] text-white typewriter-text'>Effortlessly track your expenses, manage budgets, and achieve your financial goals.</p>
        <button className='bg-blue-800 font-bold text-[20px] text-white lg:h-[50px] h-[60px] pl-10 pr-10 rounded-xl'>
            Get started for free
        </button>
    </div>
  )
}

export default Heropage