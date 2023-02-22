import React from 'react'
import { useContext } from 'react'
import { Popular_Show } from '../..'
import { RiArrowRightSLine } from 'react-icons/ri'

function Pupolar_show() {
  const datas = useContext(Popular_Show)

  return (
    <>
  <div className='flex justify-between items-center '>
        <h2 className='text-white font-semibold md:text-2xl md:p-10 text-xs pb-0 ml-8 mt-10'>Popular Shows</h2>
        <span className="text-white p-10 pb-0 text-xl flex items-center ">
            <div className='bg-white md:w-10 w-5 h-2 border-2 border-black hover:scale-95'></div>
            <div className='bg-red-600 md:w-10 w-5 h-2 border-2 border-black hover:scale-95'></div>
            <div className='bg-white md:w-10 w-5 h-2 border-2 border-black hover:scale-95'></div>
            <div className='bg-white md:w-10 w-5 h-2 border-2 border-black hover:scale-95'></div>
          </span>
      </div>
      <div className='flex h-80 w-100 items-center overflow-x-scroll scrollbar-hide'>
      <div className="flex items-center pl-7 gap-5">
        {datas.map((data) => {
          return (
            <div className=" w-[300px] bg-gray-rbg rounded-md hover:shadow-md active:shadow-red-500">
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
