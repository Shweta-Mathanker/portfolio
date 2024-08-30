import React from 'react'
import girlimage from "../../../assets/GirlImage.png"
const HeroImage = () => {
  return (
    <div className='absolute top-0 h-full w-screen '>
   <img className='heroimage h-full w-full object-cover' src={girlimage} alt="girlimage" />
    </div>
  )
}

export default HeroImage