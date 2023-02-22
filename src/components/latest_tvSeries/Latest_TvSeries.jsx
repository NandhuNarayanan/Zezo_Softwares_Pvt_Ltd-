import React from 'react'
import { useContext } from 'react'
import { Latest_TVSeriesContext } from '../..'
import { RiArrowRightSLine } from 'react-icons/ri'
import { BsFillPlayFill } from 'react-icons/bs'
import { FiPlay } from 'react-icons/fi'
import {BsPlus} from 'react-icons/bs'


function Latest_TvSeries() {
  const data = useContext(Latest_TVSeriesContext)
  console.log(data)

  return (
    <div className='w-screen'>
      <div>
        <div className="flex justify-between items-center  ">
          <h2 className="text-white font-semibold md:text-xl p-10 pb-0 mb-4">
            Latest TV Series
          </h2>
          <span className="text-white md:p-10 p-6 pb-0 md:text-xl flex items-center">
            See All
            <RiArrowRightSLine />
          </span>
        </div>
        <div className="flex  justify-center items-center overflow-y-hidden scrollbar-hide  w-screen">
          {data.map((datas) => {
            return (
              <div className=" cursor-pointer relative  pl-2 hover:scale-110  ">
                <img
                  className="md:h-48 md:w-[400px]  h-32  block rounded-md object-cover w-56"
                  src={datas.image}
                  alt={datas.image}
                />
                <div className=" absolute md:block top-[5px] left-2 w-full h-full hover:w-[95%]c hover:bg-black/80 opacity-0 hover:opacity-75 text-white p-4">
                  <div className="outline-none  outline-white outline-4 rounded-full md:w-10 w-5 h-5 md:h-10 cursor-pointer mt-8 ml-2">
                    <div className="relative flex justify-center text-center">
                      <BsFillPlayFill className="text-white md:text-5xl  pb-2 ml-1 sm:mt-4 text-2xl mt-[.1rem] md:mt-0" />
                    </div>
                  </div>
                  <div className='md:flex justify-between items-center mt-4  hidden'>
                  <div className="absolute">
                    <ul className="text-white flex justify-between items-center text-xs gap-2">
                      <li className="text-xs font-extralight">{datas.year}</li>
                      <li className="text-xs font-extralight">
                        <div className="border border-white w-6 h-5 flex justify-center text-xs items-center rounded-md">
                          12+
                        </div>
                      </li>
                      <li className="text-xs font-extralight">{datas.hour}</li>
                    </ul>
                  </div>
                  <div className='flex pl-56'>
                  <FiPlay/>
                  <BsPlus/>
                  </div>
                  </div>
                  <p className="md:text-xs mt-2 text-[8px]">{datas.name}</p>
                  <p className="text-[10px] font-extralight hidden md:block">{datas.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Latest_TvSeries
