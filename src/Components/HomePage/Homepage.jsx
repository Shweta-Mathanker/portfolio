import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroImage from './heroComponent/HeroImage'
import HeroText from './heroComponent/HeroText'
import Centerflex from './Flexdiv/Centerflex'

const Homepage = () => {
  return (
    <div className=' h-full relative overflow-x-hidden '>
        <Navbar/>
        <HeroImage/>
        <Centerflex/>
        <HeroText/>
    </div>
  )
}

export default Homepage