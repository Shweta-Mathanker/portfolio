import React from 'react'
import Footernav from './Footernav'
import Footercenter from './Footercenter'
import FooterDown from './FooterDown'

const Footer = () => {
  return (
    <div className='h-[50vw]  bg-zinc-900 mt-[-10vw] ' >
<Footernav/>
<Footercenter/>
<FooterDown/>
    </div>
  )
}

export default Footer