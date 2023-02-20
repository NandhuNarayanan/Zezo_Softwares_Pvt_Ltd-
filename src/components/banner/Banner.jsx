import React from 'react'
import Banner_image from '../../assets/images/stranger_things.jpeg'

function Banner() {
  return (
    <>
    <div className='w-full h-[550px]'>
    <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'>
    </div>
        <img className='w-full h-[550px] object-cover' src={Banner_image} alt="" />
        </div>
    </>
  )
}

export default Banner