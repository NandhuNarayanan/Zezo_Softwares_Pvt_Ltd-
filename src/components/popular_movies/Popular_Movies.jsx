import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../..';
import {RiArrowRightSLine} from 'react-icons/ri'

function Popular_Movies() {
  const value = useContext(UserContext)

  return (
    <div>
      <div className='flex justify-between items-center mt-6 sm:mt-4'>
        <h2 className='text-white font-semibold md:text-xl text-xs  p-10 pb-0'>Popular Movies</h2>
        <span className='text-white p-10 pb-0 md:text-xl text-sm flex items-center'>
            See All
            <RiArrowRightSLine/>
        </span>
      </div>
      <div className=" flex gap-5 w-screen overflow-x-auto p-5">
        {value.map((datas) => {
          return (
            <img
              className="md:h-72 md:w-[250px] w-[150px] h-56 object-cover rounded-md cursor-pointer hover:scale-110"
              src={datas.image}
              alt="datas.image"
            />
          )
        })}
      </div>
    </div>

  )
}

export default Popular_Movies
