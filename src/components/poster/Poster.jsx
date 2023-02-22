import React from 'react'
import Pathan from '../../assets/images/pathaan.png'
import { IoIosSquare } from 'react-icons/io'
import { BsFillPlayFill } from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiRss} from 'react-icons/bi'
import {CgShare} from 'react-icons/cg'

function Poster() {
  return (
    <>
      <div className="md:w-full md:h-[550px] relative w-screen">
        <div className="absolute w-full md:h-[570px] h-[199px] bg-gradient-to-r from-black"></div>
        <img
          className="md:w-full md:h-[570px] object-cover"
          src={Pathan}
          alt={Pathan}
        />
        <div className="flex items-center md:text-left">
          <div className="absolute md:text-left md:top-56 md:w-48 top-16 left-16 w-20 border-r-2">
            <ul className="text-white md:text-2xl text-xs md:leading-[50px] leading-5">
              <li className='hover:border-b-2 active:border-red-500 w-16 mt-1'>
                <h1 className=''>OVERVIEW</h1>
              </li>
              <li className='hover:border-b-2 active:border-red-500 w-16 mt-1'>
                <h1>EPISODES</h1>
              </li>
              <li className='hover:border-b-2 active:border-red-500 w-16 mt-1'>
                <h1>SIMILAR</h1>
              </li>
              <li className='hover:border-b-2 active:border-red-500 w-16 mt-1'>
                <h1>DETAILS</h1>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h1 className="text-white md:text-4xl font-medium absolute md:top-[220px] top-[60px] md:left-[400px] left-[160px]">
                Pathan
              </h1>
            </div>
            <div className="w-72 absolute md:top-[270px]  md:left-[400px] top-[80px] left-[160px]">
              <ul className="text-zinc-300 flex justify-between items-center text-sm">
                <li>Actiom | S1 | E2</li>
              </ul>
            </div>
            <div className="absolute md:top-[300px] md:left-[400px] top-[100px] left-[160px]">
              <div className="w-[400px] md:top-24">
                <p className="text-zinc-200 md:leading-8 text-xs">
                  Sample the first episode of Girls -- and other unforgettable
                  series like Vinyl, Game of Thrones and Togetherness -- before
                  you sub-scribe to HBO NOW.
                </p>
              </div>
            </div>
            <div className='flex absolute text-white md:top-[420px] md:left-[400px] gap-5 items-center top-[160px] left-[160px] w-24  md:w-32'>
            <AiOutlinePlus className='outline-none  outline-white outline-2 md:text-md rounded-full md:text-3xl hover:scale-110 cursor-pointer'/>
            <BiRss className='outline-none  outline-white outline-2 md:text-md rounded-full md:text-3xl hover:scale-110 cursor-pointer'/>
            <CgShare className='outline-none  outline-white outline-2 text-md rounded-full md:text-3xl hover:scale-110 cursor-pointer'/>
            </div>
          </div>
        </div>
        <div className="absolute justify-center items-center md:top-[275px] md:right-[350px] hidden md:block">
          <div className="outline-none  outline-white outline-8 rounded-full w-20 h-20 cursor-pointer hover:scale-95">
            <div className="relative flex justify-center text-center">
              <BsFillPlayFill className="text-white text-5xl mt-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Poster
