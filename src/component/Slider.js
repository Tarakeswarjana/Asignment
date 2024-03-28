import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const img1 = require("../assets/Mask Group 99.jpg")

function Slider() {

    return (
        // <div className='w-screen'>

        <Swiper
            className='relative'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{
                clickable: true, renderBullet: function (index, className) {
                    return (
                        `<span class="DotClass">
                    <span class="custom-dot">hhh</span> 
                  </span>`
                    )
                }
            }}

            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>  <div className='flex gap-3 justify-between bg-[#bab8b8]'><p>jhfjyrekfhkjhewuywiuykejhgejhgiyeiuwrhgkheguyugyerkhgkerjhkj</p><img src={img1} className='bg-[#bab8b8]' /> </div>        </SwiperSlide>
            <SwiperSlide>  <div className='flex gap-3 justify-between '><p>jhfjyrekfhkjhewuywiuykejhgejhgiyeiuwrhgkheguyugyerkhgkerjhkj</p><img src={img1} /> </div>        </SwiperSlide>
            <SwiperSlide>  <div className='flex gap-3 justify-between'><p>jhfjyrekfhkjhewuywiuykejhgejhgiyeiuwrhgkheguyugyerkhgkerjhkj</p><img src={img1} /> </div>        </SwiperSlide>
            <SwiperSlide>  <div className='flex gap-3 justify-between'><p>jhfjyrekfhkjhewuywiuykejhgejhgiyeiuwrhgkheguyugyerkhgkerjhkj</p><img src={img1} /> </div>        </SwiperSlide>
            <SwiperSlide>  <div className='flex gap-3 justify-between'><p>jhfjyrekfhkjhewuywiuykejhgejhgiyeiuwrhgkheguyugyerkhgkerjhkj</p><img src={img1} /> </div>        </SwiperSlide>
            <SwiperSlide>  <div className='flex gap-3 justify-between'><p>jhfjyrekfhkjhewuywiuykejhgejhgiyeiuwrhgkheguyugyerkhgkerjhkj</p><img src={img1} /> </div>        </SwiperSlide>

        </Swiper>
        // </div>
    )
}

export default Slider