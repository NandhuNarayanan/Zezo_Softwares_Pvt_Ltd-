import React from 'react';
import { useContext } from 'react';
import { Latest_Movie } from '../..';
import {RiArrowRightSLine} from 'react-icons/ri'
import Poster from '../poster/Poster';

function Popular_Movies() {
  const value = useContext(Latest_Movie)

  return (
    <div>
      <div className='flex justify-between items-center '>
        <h2 className='text-white font-semibold  md:p-10 text-xs md:text-3xl pb-0 ml-8 mt-10'>Latest Movies</h2>
        <span className="text-white p-10 pb-0 text-xl flex items-center ">
            <div className='bg-white md:w-10 w-5 h-2 border-2 border-black hover:scale-95'></div>
            <div className='bg-red-600 md:w-10 w-5 h-2 border-2 border-black hover:scale-95'></div>
            <div className='bg-white md:w-10 w-5 h-2 border-2 border-black hover:scale-95'></div>
            <div className='bg-white md:w-10 w-5 h-2 border-2 border-black hover:scale-95'></div>
          </span>
      </div>
      <div className=" flex justify-center items-center p-7 gap-5 ">
        {value.map((datas) => {
          return (
            <img
              className="md:h-72 md:w-[250px] h-56 object-cover rounded-md cursor-pointer hover:scale-110 hover:shadow-md active:shadow-red-500"
              src={datas.image}
              alt={datas.image}
            />
          )
        })}
      </div>
      <Poster/>
    </div>
  )
}

export default Popular_Movies
