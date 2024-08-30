import React from 'react'

const Footercenter = () => {
  return (
    <div className=''>
        <h1 className='flex gap-8 leading-tight items-center text-[6vw] px-[20vw] text-white'>
        <img className='w-[5vw] h-[5vw] rounded-full   ' src="https://images.unsplash.com/photo-1614942917889-c1f6a8ad933a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            Let's work </h1>
            <h1 className='flex gap-8 leading-tight items-center text-[6vw] px-[20vw] text-white'>together</h1>
            <i className="text-white absolute top-[160vw] left-[80vw] text-3xl   ri-arrow-left-down-line"></i>
   <hr className='  w-[70vw] mt-10 ml-[20vw]' />
   <div className='w-[12vw] h-[12vw] bg-blue-600 hover:bg-blue-800 hover:cursor-pointer   rounded-full translate-y-[-6vw] translate-x-[65vw]'>
    <h1 className='text-white translate-y-20 translate-x-8 text-xl'>Get In touch</h1>
   </div>
   <div className='text-white text-xl  text-center flex gap-5  pl-[20vw] mt-[-7vw]'>
    <div className='w-[18vw] hover:bg-blue-800 hover:cursor-pointer  h-[4vw] pt-3 border rounded-2xl'> info@shweta.com</div>
    <div className='w-[18vw] hover:bg-blue-800 hover:cursor-pointer h-[4vw] pt-3 border rounded-2xl'>+912345678910</div>
   </div>
   
    </div>
  )
}

export default Footercenter