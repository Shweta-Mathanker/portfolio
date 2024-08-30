import React from 'react'

const FooterDown = () => {
  return (
    <div className=' flex justify-between w-full h-[4vw]  mt-[10vw]'> 
    <div className='w-[20vw] text-[1vw] p-3 flex justify-between'>
      <div >
        <h2 className='text-zinc-600'>VERSION</h2>
        <h1 className='font-bold mt-1 text-zinc-200'>2024 © Edition</h1>
      </div>
      <div>
<h2 className='text-zinc-600'>LOCAL TIME</h2>
<h1 className='font-bold mt-1 text-zinc-200'> 11:56 AM GMT+2</h1>
      </div>
    </div>
    <div className='w-[30vw] flex gap-5 p-3' >
      <div>
 <h2 className='text-zinc-600'>Socials</h2>
 <h1 className='font-bold mt-1 text-zinc-200'>Awwwards</h1>
      </div>
      <div>
        <h1 className='font-bold mt-7 text-zinc-200'>Instagram</h1>
      </div>
      <div>
        <h1 className='font-bold mt-7 text-zinc-200'>Twitter</h1>
      </div>

      <div>
        <h1 className='font-bold mt-7 text-zinc-200'>LinkedIn</h1>
      </div>
    </div>
    </div>
  )
}

export default FooterDown