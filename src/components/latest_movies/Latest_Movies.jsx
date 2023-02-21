import React from 'react';
import { useContext } from 'react';
import { Latest_Movie } from '../..';
import {RiArrowRightSLine} from 'react-icons/ri'
import Poster from '../poster/Poster';

function Popular_Movies() {
  const value = useContext(Latest_Movie)

  return (
    <div>
      <div className='flex justify-between items-center mt-6'>
        <h2 className='text-white font-semibold text-xl p-10 pb-0'>Latest Movies</h2>
        <span className="text-white p-10 pb-0 text-xl flex items-center">
            <div className='bg-white w-10 h-2 border-2 border-black'></div>
            <div className='bg-red-600 w-10 h-2 border-2 border-black'></div>
            <div className='bg-white w-10 h-2 border-2 border-black'></div>
            <div className='bg-white w-10 h-2 border-2 border-black'></div>
          </span>
      </div>
      <div className=" flex justify-center items-center p-7 gap-5 ">
        {value.map((datas) => {
          return (
            <img
              className="h-72 w-[250px] object-cover rounded-md cursor-pointer "
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
