import React, { Component } from 'react'
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);
export class Crioresults extends Component {
  render() {
    return (
      <div >
        <div className='mt-10  font-semibold font-sans ml-[100px] text-4xl grid  place-items-center'> Developers From Crio <br />
Have Cracked Careers In</div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        className="mySwiper rounded-full h-[50px] w-[50px]"
      >

        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="logo" />
        </SwiperSlide>
      </Swiper>
      
    </div>
    )
  }
}

export default Crioresults