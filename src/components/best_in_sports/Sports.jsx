import React from 'react'
import { useContext } from 'react'
import { Best_Sports } from '../..'
import { RiArrowRightSLine } from 'react-icons/ri'
import Sports_Poster from '../sports_poster/Sports_Poster'

function Pupolar_show() {
  const datas = useContext(Best_Sports)

  return (
    <>
      <div className="flex justify-between items-center ">
        <h2 className="text-white font-semibold text-xl p-10 pb-0 mb-8">
          Latest TV Series
        </h2>
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
                  <span className="text-sm">{data.Duration}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Sports_Poster />
    </>
  )
}

export default Pupolar_show
