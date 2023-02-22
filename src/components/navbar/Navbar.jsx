import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import { BiSearchAlt } from 'react-icons/bi'
import Profile_Picture from '../../assets/images/profile_pic.jpeg'
import { FiChevronDown } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { GoThreeBars } from 'react-icons/go'

function Navbar() {
  const [sideBar, setSideBar ] = useState(false)
  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      /> */}

      <div className="flex justify-between">
        <div className="flex ">
          <div className='pr-10 pt-2'>
            <GoThreeBars className='h-16 w-18 text-2xl ml-4 block md:hidden text-white cursor-pointer' onClick={()=>setSideBar(!sideBar)}/>
            <img
              className="h-16 w-18 object-cover rounded-full pl-10  hidden md:block"
              src={Logo}
              alt=""
            />
          </div>
          <div className="items-center hidden lg:flex">
            <ul className="text-white flex  items-center gap-8 cursor-pointer">
              <li className='hover:border-t-2 pt-3  active:border-red-500'>Home</li>
              <li className='hover:border-t-2 pt-3  active:border-red-500' >Movie</li>
              <li className='hover:border-t-2 pt-3  active:border-red-500' >Web Series</li>
              <li className='hover:border-t-2 pt-3  active:border-red-500' >Up Coming</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 pr-5">
          <label class="relative w-[200px] hidden md:block">
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

      {
        sideBar && 
        <div className="flex flex-col w-56 bg-black fixed top-0 rounded-r-3xl overflow-hidden z-50 min-h-[100vh]">
          <div className="flex items-center justify-center h-20 shadow-md gap-6">
          <img
              className="h-16 w-18 object-cover rounded-full"
              src={Logo}
              alt=""
            />
          <AiOutlineClose className='text-white w-6 h-6 cursor-pointer' onClick={()=>setSideBar(!sideBar)}/>
          </div>
          <ul className="flex flex-col py-4">
          <li>
            <label class="relative w-[80px] md:block">
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
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home"></i>
                </span>
                <span className="text-sm font-medium">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-music"></i>
                </span>
                <span className="text-sm font-medium">Movie</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-drink"></i>
                </span>
                <span className="text-sm font-medium">Web Series</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-shopping-bag"></i>
                </span>
                <span className="text-sm font-medium">Up Coming</span>
              </a>
            </li>
           
          </ul>
        </div>
      }
    </>
  )
}

export default Navbar
