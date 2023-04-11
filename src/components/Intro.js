import React, { Component } from 'react';
export class Intro extends Component {
  render() {
    return (
      <div className='flex ml-40  flex-col space-y-5 max-w-lg leading-9' >
        <div >
         <h1 className='font-bold text-5xl '> 
         Learn Like You Would <br />
      At India’s Top Tech <br /> Companies
</h1>
<div className='font-normal'>Work-experience based learning programs for developers <br />
 <b>Build </b> professional projects like the top 1% developers. <br />

<b>Master</b> the latest full stack and backend tech with real work-ex. <br />

<b>Crack</b> developer jobs at the best tech companies. <br />
</div>
</div>

{/* next div */}
<div>
 <img className='w-5 ' src="https://p7.hiclipart.com/preview/100/946/433/brand-angle-font-icon-play-button-drawing.jpg" alt="logo" />
<button className='font-bold text-2xl text-green-800'>Upskill with Crio</button>
</div>
{/* next div */}
<div  className=' grid grid-cols-2 '>
  <button className='border-2 border-black rounded-md font-semibold w-48 h-14 hover:bg-green-800 hover:text-green-300'>Explore our programs</button> 
<button className='bg-yellow-300 rounded-md basis-7 font-semibold shadow-lg  hover:shadow-yellow-500/50'>Book Your Free Trial, Now</button>

</div>
{/* here  */}
<div className=' flex-wrap grid grid-cols-5 justify-center sm:p-0 md:flex p-4 md:min-w-[600px] rounded-[20px] sm:flex-nowrap sm:justify-between bg-neutral-200' >
  <div className='ml-[10px] my-2 px-2 flex flex-col '>
    <h4 className='font-bold '>93%</h4>
      <p className='font-rubik text-xs leading-tight'>Placed within 8 <br /> months of Graduation</p>
  </div>
  {/* now border div */}
  <div className='hidden h-full min-h-[100px] border-r border-neutral-400 border-opacity-20 sm:block'> </div>
  <div className=' my-2 flex flex-col '>
    <h4 className='font-bold '>11LPA</h4>
    <p className='font-rubik text-xs leading-tight'>average dream <br />
        job CTC</p>
  </div>
  {/* now border div */}
  <div className='hidden h-full min-h-[100px] border-r border-neutral-400 border-opacity-20 sm:block'> </div>
  <div className=' my-2 flex flex-col '>
    <h4 className='font-bold'>22LPA</h4>
    <p className='font-rubik text-xs leading-tight'>
    average super-dream <br />
        job CTC
    </p>
  </div>
{/* now border div */}
<div className='hidden h-full min-h-[100px] border-r border-neutral-400 border-opacity-20 sm:block'> </div>
  <div className=' my-2 flex flex-col '>
    <h4 className='font-bold'>240+</h4>
    <p className='font-rubik text-xs leading-tight'>
      Hiring <br /> Partners
    </p>
  </div>
  {/* now border div */}
  <div className='hidden h-full min-h-[100px] border-r border-neutral-400 border-opacity-20 sm:block'> </div>
  <div className=' my-2 flex flex-col mr-[10px] '>
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