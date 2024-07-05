import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Centerflex = () => {
  return (
    <div className=' mt-[8%] text-white  relative z-10 flex justify-between items-end w-[91%]'>
        <div className='flex bg-black items-center gap-8 px-4 py-4 pl-10 rounded-e-full'>
        <h2 className='text-xl leading-none '>Located <br /> in the <br /> India </h2>
         <div className='bg-gray-500 flex items-center justify-center h-20 w-20 rounded-full '>
         <i className="ri-global-line text-4xl rotate-12 font-thin"></i>
         </div>
        </div>

        <div className='flex flex-col gap-20'>
        <i className="ri-arrow-right-down-line text-2xl"></i>
        <h2 className='text-3xl leading-normal font-normal'>FreeLance <br /> Designer and Developer</h2>
        </div>
    </div>
  )
}

export default Centerflex