import React, { Component } from 'react'

export class Abovenavbar extends Component {
  render() {
    return (
        // <div className='fixed bg-[#49ffb3] h-10 font-semibold inset-x-0 top-0 content-center w-full  '>Find out where Crio grads get placed. <button className='font-bold hover:underline '>Get our Placement Stats </button></div>
    <div className='fixed flex bg-[#49ffb3] h-10 font-semibold w-full px-6 sm:text-base md:h-[40px] items-ms-center inset-x-0 top-0 '>
      <div className='flex-1 text-center'>
      Find out where Crio grads get placed. <button className='font-bold hover:underline '>Get our Placement Stats </button>
      </div>
    </div>
        )
  }
}

export default Abovenavbar