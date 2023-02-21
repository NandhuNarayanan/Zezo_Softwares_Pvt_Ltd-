import React from 'react'
import { useContext } from 'react'
import { Latest_TVSeriesContext } from '../..'
import { RiArrowRightSLine } from 'react-icons/ri'

function Latest_TvSeries() {

  const data = useContext(Latest_TVSeriesContext)
  console.log(data);

  return (
    <div className=''>
      <div>
        <div className="flex justify-between items-center mt-15">
          <h2 className="text-white font-semibold text-xl p-10 pb-0">
            Latest TV Series
          </h2>
          <span className="text-white p-10 pb-0 text-xl flex items-center">
            See All
            <RiArrowRightSLine />
          </span>
        </div>
        <div className=" flex justify-center items-center p-7 gap-5 pl-32  overflow-x-scroll scrollbar-hide ">
          {data.map((datas) => {
            return (
              <img
                className="h-48 w-[300px] object-cover rounded-md cursor-pointer hover:scale-110 "
                src={datas.image}
                alt="datas.image"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Latest_TvSeries
