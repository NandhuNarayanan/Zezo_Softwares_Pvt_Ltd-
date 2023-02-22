import React from 'react'
import { useContext } from 'react'
import { Popular_Show } from '../..'
import { RiArrowRightSLine } from 'react-icons/ri'

function Pupolar_show() {
  const datas = useContext(Popular_Show)

  return (
    <>
      <div className="flex justify-between items-center ">
        <h2 className="text-white font-semibold text-xl p-10 pb-0 mb-8">
          POPULAR SHOW
        </h2>
        <span className="text-white p-10 pb-0 text-xl flex items-center">
          <div className="bg-white w-10 h-2 border-2 border-black"></div>
          <div className="bg-red-600 w-10 h-2 border-2 border-black"></div>
          <div className="bg-white w-10 h-2 border-2 border-black"></div>
          <div className="bg-white w-10 h-2 border-2 border-black"></div>
        </span>
      </div>
      <div className='flex h-80 w-100 items-center overflow-x-scroll scrollbar-hide'>
      <div className="flex items-center pl-7 gap-5">
        {datas.map((data) => {
          return (
            <div className=" w-[300px] bg-gray-rbg rounded-md ">
              <div>
                <img
                  className="h-48 w-80 object-cover rounded-t-md"
                  src={data.image}
                  alt=""
                />
              </div>
              <div className="pt-4 pl-3 h-20 text-white">
                <p>{data.name}</p>
                <span className="text-sm">{data.category}</span>
              </div>
            </div>
          )
        })}
      </div>
      </div>
    </>
  )
}

export default Pupolar_show
