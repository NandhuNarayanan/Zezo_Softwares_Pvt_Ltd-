import React from 'react';
import Arrow from '../../assets/images/Arrow.png';
import Stranger_things from '../../assets/images/stranger_things2.jpeg';
import THE_100 from '../../assets/images/THE_100.png';
import {FiArrowRight} from 'react-icons/fi'

function Carousel() {
    const data = [
        {
            image:Stranger_things
        },
        {
            image:THE_100
        },
        {
            image:Arrow
        },
    ]
  return (
    <>
      <div className='flex justify-end items-center'>
      <div class="text-white grid grid-cols-3 w-[450px] gap-5 absolute right-36 bottom-24">
    {data.map((datas)=>{
        return (<img className='h-44 w-[450px] object-cover cursor-pointer rounded-md hover:scale-110' src={datas.image} alt="image" />)
    })} 
    <div className='absolute left-[480px] bottom-16 cursor-pointer'>
    <FiArrowRight className='text-4xl'/>
    </div>
</div>
      </div>
    </>
  )
}

export default Carousel
