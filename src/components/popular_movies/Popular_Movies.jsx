import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../..';
import {RiArrowRightSLine} from 'react-icons/ri'

function Popular_Movies() {
  const value = useContext(UserContext)

  return (
    <div>
      <div className='flex justify-between items-center mt-20'>
        <h2 className='text-white font-semibold text-xl p-10 pb-0'>Popular Movies</h2>
        <span className='text-white p-10 pb-0 text-xl flex items-center'>
            See All
            <RiArrowRightSLine/>
        </span>
      </div>
      <div className=" flex justify-center items-center p-7 gap-5 ">
        {value.map((datas) => {
          return (
            <img
              className="h-72 w-[250px] object-cover rounded-md cursor-pointer "
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
