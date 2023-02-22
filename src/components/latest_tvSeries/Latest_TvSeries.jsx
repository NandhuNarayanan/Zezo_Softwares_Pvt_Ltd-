import React from 'react'
import { useContext } from 'react'
import { Latest_TVSeriesContext } from '../..'
import { RiArrowRightSLine } from 'react-icons/ri'

function Latest_TvSeries() {

  const data = useContext(Latest_TVSeriesContext)
  console.log(data);

  return (
    <div >
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-white font-semibold text-xl p-10 pb-0 mb-4">
            Latest TV Series
          </h2>
          <span className="text-white p-10 pb-0 text-xl flex items-center">
            See All
            <RiArrowRightSLine />
          </span>
        </div>
        <div className="flex justify-center items-center  overflow-y-hidden scrollbar-hide ml-5">
          {data.map((datas) => {
            return (
              <div className=' cursor-pointer relative p-2 hover:scale-110'>
              <img
                className="h-48 w-[400px] block  rounded-md"
                src={datas.image}
                alt={datas.image}
              />
              <div className='absolute top-2 left-2 w-full h-full hover:w-[95%]c hover:bg-black/80 opacity-0 hover:opacity-75 text-white'>
                <p>{datas.name}</p>
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
