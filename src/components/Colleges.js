import React, { Component } from 'react'

export class Colleges extends Component {
  render() {
    return (
      <div>
        {/* heading for the component */}
      <div className='mt-10 font-semibold font-sans text-4xl'>Students from Top Colleges, <br />
      Cracked their Dream Jobs
      </div>
      {/* now multiple cols in a single row= different colleges */}
<div className=' flex-wrap grid grid-cols-5 justify-center sm:p-0 md:flex p-4 md:min-w-[600px]  sm:flex-nowrap sm:justify-between'>
<div className='ml-10 mt-2 flex flex-col h-[150px]'>
  <img className='h-[90px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlty9SU5MJ6ULHwy91NuNbiB-wCsOIvdtLuP6DP8G39w&s" alt="nsut" />
<h4> <b>NSUT</b></h4>
</div>
<div className='ml-10 mt-2 flex flex-col h-[150px]'>
  <img className='h-[90px] rounded-full' src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/330px-Indian_Institute_of_Technology_Delhi_Logo.svg.png" alt="nsut" />
<h4> <b>IITD</b></h4>
</div>
<div className='ml-10 mt-2 flex flex-col h-[150px]'>
  <img className='h-[90px] rounded-full' src="https://upload.wikimedia.org/wikipedia/en/b/b5/DTU%2C_Delhi_official_logo.png" alt="nsut" />
<h4> <b>DTU</b></h4>
</div>
<div className='ml-10 mt-2 flex flex-col h-[150px]'>
  <img className='h-[90px] rounded-full' src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/IIT_Kanpur_Logo.svg/300px-IIT_Kanpur_Logo.svg.png" alt="nsut" />
<h4> <b>IITK</b></h4>
</div>
<div className='ml-10 mt-2 flex flex-col h-[150px]'>
  <img className=' mr-10 h-[90px] rounded-full' src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Indian_Institute_of_Science_2019_logo.svg/330px-Indian_Institute_of_Science_2019_logo.svg.png" alt="nsut" />
<h4> <b>IISC</b></h4>
</div>
</div>

      </div>
    )
  }
}

export default Colleges