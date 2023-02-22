import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import Store from '../../assets/images/Stores.png';
import Logo from '../../assets/images/logo.png';

function Footer() {
  return (
    <>
      <div className="text-white bg-zinc-900 h-[60vh] flex justify-center items-center ">
        <div className='w-[30%]'>
          <div>
            <img
              className="w-48 object-cover rounded-full pr-5"
              src={Logo}
              alt=""
            />
          </div>
          <div className='w-80'>
            <p className='font-light text-xs leading-6 text-zinc-400'>
              Galaxy Entertainment is where we seek to inform, empower and
              inspire the world! We have a clear vision to redesign the way
              Indian Cinema functions, in all major and minor departments.
            </p>
          </div>
          <div className='w-52 mt-4'>
            <img src={Store} alt={Store} />
          </div>
          <div className='flex justify-evenly w-52 mt-4'>
            <FaFacebookF className='text-2xl'/>
            <FaInstagram className='text-2xl'/>
            <FaTwitter className='text-2xl'/>
            <FaYoutube className='text-2xl'/>
          </div>
        </div>
        <div className='flex gap-32'>
        <div>
            <h1 className='font-semibold leading-6'>COMPANY</h1>
            <ul className='text-xs font-light text-zinc-400 leading-7'>
                <li>About Us </li>
                <li>Our Inspiration</li>
                <li>Investor Relations</li>
                <li>Corporate</li>
                <li>Galaxy Blogs</li>
            </ul>
        </div>
        <div>
        <h1 className='font-semibold'>HELP CENTRE</h1>
            <ul className='text-xs font-light text-zinc-400 leading-7'>
                <li>Submission</li>
                <li>News</li>
                <li>Policies</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div>
        <h1 className='font-semibold'>CONNECT</h1>
            <ul className='text-xs font-light text-zinc-400 leading-7'>
                <li>Contact Us</li>
                <li>Careers</li>
            </ul>
        </div>
        <div>
        <h1 className='font-semibold'>CONTENT</h1>
            <ul className='text-xs font-light text-zinc-400 leading-7'>
                <li>Movies</li>
                <li>Web Series</li>
                <li>Music</li>
                <li>TV Series</li>
                <li>Help Center</li>
            </ul>
        </div>
        </div>
      </div>

      <div className='text-zinc-400 flex justify-center items-center bg-zinc-900'>
        <span>©2023 Galaxy.com All Rights Reserved.</span>
      </div>

    </>
  )
}

export default Footer
