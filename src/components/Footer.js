import React, { Component } from 'react'
import { FaHome, FaEnvelope } from "react-icons/fa";
export class Footer extends Component {
  render() {
    return (
      <section className=' flex  sm:pt-16 bg-[#3affb3] w-full '>
     <div className='ml-[170px] mt-[100px] text-sm'>
        
            <div className='flex'>
              <div className=' mt-[5px] mr-[5px]'>  <FaHome/></div>
           
        175 & 176, Bannerghatta <br />
Main Rd, Dollars Colony,  <br />
Bengaluru, Karnataka <br />
560076, India <br />
</div>
        
        <div className='flex mt-[15px]'> 
        <div className='mr-[5px] mt-[5px]'>
        <FaEnvelope/>
          </div>
          ping@criodo.com 
          </div>
       
       
      
     </div>
     <div className='ml-[210px] mt-[100px]  text-sm' >
       
    <h3> <b> LEARNING PROGRAMS </b>  </h3> 
Backend Developer Program <br />
Full Stack Developer Program <br />
Web Developer Essentials Track <br />
        
        <div className=' mt-[15px]  text-sm'>
  <h3 > <b> CAREER PROGRAMS </b> </h3> 
Fellowship Program in Software Development <br />
Masters Program in QA Automation <br />
FOR BUSINESS <br />
Hire Crio developers <br />
Crio Onboard
     </div>
     </div>
     {/* here */}
     <div className='ml-[75px] mt-[100px]  text-sm' >
   <h3  > <b>  COMMUNITY PROGRAMS </b></h3>
#IBelieveInDoing Challenge <br />
Crio Winter of Doing <br />
Crio Project Hub <br />
<div className=' mt-[15px] text-sm'>
<h3 >  <b> FOR BUSINESS</b>
</h3>
Hire Crio developers <br />
Crio Onboard <br />
</div>
</div>
     <div className=' ml-[75px] mr-[170px] mt-[100px] text-sm'>
   <h3 > <b>   CRIO</b></h3>
Placement Report <br />
Success Stories <br />
About <br />
Blog <br />
Terms of Use <br />
Privacy Policy <br />
     </div>
    
      </section>
    )
  }
}

export default Footer