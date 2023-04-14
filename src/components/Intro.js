import React, { Component } from 'react';
export class Intro extends Component {
  render() {
    return (
      <div className='flex ml-40  flex-col mt-[130px] max-w-lg leading-9 lg-flex' >
        <div >
         <h1 className='font-bold text-5xl '> 
         Learn Like You Would <br />
      At India’s Top Tech <br /> Companies
</h1>
</div>
<div className='mt-[25px]'>
<h1 className='text-xl sm:text-lg'>Work-experience based learning programs for developers</h1>
<div className='font-normal ml-2 opacity-60 mt-[20px] space-y-2 sm:space-y-0 md:text-sm'>
 <p><strong>Build </strong> professional projects like the top 1% developers.</p>
<p><strong>Master</strong> the latest full stack and backend tech with real work-ex. 
</p>
<p><strong>Crack</strong> developer jobs at the best tech companies. 
</p>
 
</div>
</div>

{/* next div */}
<div className='flex flex-auto ml-[7px] mt-[30px] hover:underline'>
{/* <button className='font-bold text-2xl text-green-800'> <img className='w-5 ' src="https://p7.hiclipart.com/preview/100/946/433/brand-angle-font-icon-play-button-drawing.jpg" alt="logo" />Upskill with Crio</button> */}
<div className='flex'>
<button className='w-5'> <img src="https://p7.hiclipart.com/preview/100/946/433/brand-angle-font-icon-play-button-drawing.jpg" alt="play" /></button>
</div>

<div className='flex ml-[10px] text-lg font-bold text-green-700'>
 <p>Upskill with Crio</p>
</div>
</div>
{/* next div */}
<div  className=' grid grid-cols-2 ml-[30px] mt-[25px] '>
  <button className='border-2 border-black rounded-md font-semibold w-48 h-14 hover:bg-green-800 hover:text-green-300'>Explore our programs</button> 
<button className='bg-yellow-300 rounded-md basis-7 font-semibold shadow-lg  hover:shadow-yellow-500/50'>Book Your Free Trial, Now</button>

</div>
{/* here  */}
<div className=' flex-wrap grid grid-cols-5 justify-center sm:p-0 md:flex p-4 md:min-w-[600px] rounded-[20px] sm:flex-nowrap sm:justify-between bg-neutral-200 mt-[25px]' >
  <div className='ml-[10px] my-2 px-2 flex flex-col  text-center md:w-1/5  '>
    <h4 className='font-bold '>93%</h4>
      <p className='font-rubik text-xs leading-tight'>Placed within 8 <br /> months of Graduation</p>
  </div>
  {/* now border div */}
  <div className='hidden h-full min-h-[100px] border-r border-neutral-400 border-opacity-20 sm:block'> </div>
  <div className=' my-2 flex flex-col text-center md:w-1/5 '>
    <h4 className='font-bold '>11LPA</h4>
    <p className='font-rubik text-xs leading-tight'>average dream <br />
        job CTC</p>
  </div>
  {/* now border div */}
  <div className='hidden h-full min-h-[100px] border-r border-neutral-400 border-opacity-20 sm:block'> </div>
  <div className=' my-2 flex flex-col text-center md:w-1/5 '>
    <h4 className='font-bold'>22LPA</h4>
    <p className='font-rubik text-xs leading-tight'>
    average super-dream <br />
        job CTC
    </p>
  </div>
{/* now border div */}
<div className='hidden h-full min-h-[100px] border-r border-neutral-400 border-opacity-20 sm:block'> </div>
  <div className=' my-2 flex flex-col text-center md:w-1/5 '>
    <h4 className='font-bold'>240+</h4>
    <p className='font-rubik text-xs leading-tight'>
      Hiring <br /> Partners
    </p>
  </div>
  {/* now border div */}
  <div className='hidden h-full min-h-[100px] border-r border-neutral-400 border-opacity-20 sm:block'> </div>
  <div className=' my-2 flex flex-col mr-[10px]  text-center md:w-1/5'>
    <h4 className='font-bold'>89%</h4>
    <p className='font-rubik text-xs leading-tight'>
      Average <br /> Salary Hike
    </p>
  </div>
</div>
      </div>
    )
  }
}

export default Intro