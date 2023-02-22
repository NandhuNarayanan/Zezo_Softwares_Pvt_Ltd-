import React from 'react'
import Banner_image from '../../assets/images/stranger_things.jpeg'
import { IoIosSquare } from 'react-icons/io'
import { BsPlayFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiPlay } from 'react-icons/fi'
import Carousel from '../banner_carousel/Carousel'

function Banner() {
  return (
    <>
      <div className="w-full  h-[550px] overflow-hidden">
        <div className="absolute md:w-full w-screen h-[570px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-[570px] object-cover"
          src={Banner_image}
          alt="Banner_image"
        />
        <div className="flex items-center text-left">
          <div className="flex items-center md:w-96 absolute md:top-[150px] top-[300px] w-64   md:left-8 left-16">
            <ul className="flex justify-evenly items-center w-96">
              <li>
                <span className="text-white flex items-center">HORROR</span>
              </li>
              <li>
                <span className="text-white flex items-center gap-4">
                  <IoIosSquare className="text-xs" />
                  SCIFY
                </span>
              </li>
              <li>
                <span className="text-white flex items-center gap-4">
                  <IoIosSquare className="text-xs" />
                  TV SERIES
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white md:text-6xl text-4xl font-bold absolute md:top-[185px] top-[360px] left-16">
              Stranger Things
            </h1>
          </div>
          <div className="w-72 absolute md:top-[275px] top-[450px] left-16">
            <ul className="text-white flex justify-between items-center">
              <li>2019</li>
              <li>
                <div className="border border-white w-10 h-8 flex justify-center items-center rounded-md">
                  12+
                </div>
              </li>
              <li>IMDB 7.1</li>
              <li>1 h 56 min</li>
            </ul>
          </div>
          <div className="absolute top-[350px] left-16 hidden md:block  ">
            <div className="text-white flex items-center top-10 gap-2">
              <h3>PLOT</h3>
              <IoIosSquare className="text-xs" />
            </div>
            <div className="w-[500px] top-24 ">
              <p className="text-zinc-400 leading-8 ">
                This thrilling Netflix original drama stars Golden Globe-winning
                actress Winona Ryder as Joyce Byers, who lives in a small
                Indiana town in 1983 -- inspired by a times{' '}
                <span className="font-medium text-white">Readmore</span>
              </p>
            </div>
          </div>

          <div className="hidden md:block md:absolute justify-center items-center top-[275px] right-[200px] lg:top-[275px] lg:right-[300px] xl:top-[275px] xl:right-[400px]">
            <div className="bg-red-600 rounded-full w-20 h-20 cursor-pointer hover:scale-95">
              <div className="relative flex justify-center text-center">
                <FiPlay className="text-white text-5xl mt-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
        <div className='ml-16'>
          <div className="md:flex items-center ">
            <div className="flex absolute md:bottom-40 md:left-16 bottom-20">
              <button className="bg-red-700 hover:bg-red-600 text-white focus:outline-none focus:ring focus:ring-red-300 p-4 px-8 rounded-md flex items-center gap-2">
                <BsPlayFill />
                Play Now
              </button>
            </div>
            <div className="text-white flex items-center gap-2 absolute md:bottom-44 left-64 bottom-20 ">
              <AiOutlinePlus />
              <span>Add to Watch list</span>
            </div>
          </div>
          <div className="lg:flex hidden">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
