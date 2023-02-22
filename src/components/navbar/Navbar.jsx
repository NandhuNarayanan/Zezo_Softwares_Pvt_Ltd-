import React from 'react'
import Logo from '../../assets/images/logo.png'
import { BiSearchAlt } from 'react-icons/bi'
import Profile_Picture from '../../assets/images/profile_pic.jpeg'
import { FiChevronDown } from 'react-icons/fi'


function Navbar() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex ">
          <div className='pr-10'>
            <img
              className="h-16 w-18 object-cover rounded-full pl-10"
              src={Logo}
              alt=""
            />
          </div>
          <div className="flex items-center">
            <ul className="text-white flex - items-center gap-8 cursor-pointer">
              <li>Home</li>
              <li>Movie</li>
              <li>Web Series</li>
              <li>Up Coming</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 pr-5">
          <label class="relative block w-[200px]">
            <span class="absolute inset-y-0 left-0 flex justify-center items-center pl-2 pt-1">
              <svg class="h-5 w-5 fill-slate-300 " viewBox="0 0 20 20">
                <BiSearchAlt className="text-white" />
              </svg>
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-zinc-700 w-full h-8  rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xs"
              placeholder="I’m searching for..."
              type="text"
              name="search"
            />
          </label>
          <div className="flex ">
            <button className="bg-red-700 hover:bg-red-600 text-white focus:outline-none outline-none focus:ring focus:ring-red-300 p-2 px-4 rounded-sm">
              Subscribe Now
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img className="h-10 w-10 rounded-full border-4 border-red-600 " src={Profile_Picture} alt="" />
            <FiChevronDown className="text-white" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
