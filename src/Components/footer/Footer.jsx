import React from 'react'
import Footernav from './Footernav'
import Footercenter from './Footercenter'

const Footer = () => {
  return (
    <div className='h-[100vw] w-full bg-zinc-800 mt-[-10vw]' >
<Footernav/>
<Footercenter/>
    </div>
  )
}

export default Footer