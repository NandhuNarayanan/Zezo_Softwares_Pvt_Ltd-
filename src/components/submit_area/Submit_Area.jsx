import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

function Submit_Area() {
  return (
    <>
      <div className="bg-black h-64 flex justify-center items-center">
        <div className='text-white text-center mt-2'>
          <h1 className='text-4xl font-semibold text-red-700 '>Millions of Movies and Web Series on Your Finger Tips</h1>

          <h2 className='font-semibold text-lg ml-32  mt-8 w-[690px]'>
            Stay in tune with us and you won't miss a thing! Don't worry, we
            don't spam. You can opt out any time.
          </h2>
          <div className='flex justify-center items-center mt-8'>
            <input className='h-10 w-72 text-sm pl-4' placeholder='example@gmail.com' type="text" />
            <button className='bg-red-600 w-40 h-10 flex justify-center items-center'>
            SUBMIT NOW
            <BsFillPlayFill/>
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Submit_Area
