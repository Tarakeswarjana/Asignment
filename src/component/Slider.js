import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const img1 = require("../assets/Mask Group 99.jpg")
const sidearrow2 = require('../assets/Polygon 1.png')


function Slider() {
    const arr2 = [9, 5, 2, 8, 4, 5]

    return (
        // <div className='w-screen'>

        <div className="swiperowndiv container mx-auto px-4 ">
            <Swiper
                className='relative'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 3000 }}
                transition={{ duration: 1000 }}// Set autoplay to true or provide an object with options
                pagination={{
                    clickable: true,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {arr2.map((ele, id) =>
                    <SwiperSlide>

                        <div className='flex gap-3 justify-center items-center'>
                            <div className='flex-col sm:gap-[4rem] items-center'>
                                <p className='text-2xl font-bold text-blue-700 pb-8'>Lorem Ipsum</p>
                                <p className='text-[#525252]' style={{ maxWidth: "28rem mt-8 " }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
                                <button className='bg-blue-800 text-white px-8 py-2 rounded-xl mt-8 hover:bg-black transition duration-300 flex items-center gap-2'>Know more <img src={sidearrow2} className='w-2 relative top-2' /></button>
                            </div>
                            <img src={img1} className='bg-[#bab8b8]' />
                        </div>

                    </SwiperSlide>
                )}

                {/* <SwiperSlide>  <div className='flex gap-3 justify-between '><p>jhfjyrekfhkjhewuywiuykejhgejhgiyeiuwrhgkheguyugyerkhgkerjhkj</p><img src={img1} /> </div>        </SwiperSlide>
                <SwiperSlide>  <div className='flex gap-3 justify-between'><p>jhfjyrekfhkjhewuywiuykejhgejhgiyeiuwrhgkheguyugyerkhgkerjhkj</p><img src={img1} /> </div>        </SwiperSlide>
                <SwiperSlide>  <div className='flex gap-3 justify-between'><p>jhfjyrekfhkjhewuywiuykejhgejhgiyeiuwrhgkheguyugyerkhgkerjhkj</p><img src={img1} /> </div>        </SwiperSlide>
                <SwiperSlide>  <div className='flex gap-3 justify-between'><p>jhfjyrekfhkjhewuywiuykejhgejhgiyeiuwrhgkheguyugyerkhgkerjhkj</p><img src={img1} /> </div>        </SwiperSlide>
                <SwiperSlide>  <div className='flex gap-3 justify-between'><p>jhfjyrekfhkjhewuywiuykejhgejhgiyeiuwrhgkheguyugyerkhgkerjhkj</p><img src={img1} /> </div>        </SwiperSlide> */}

            </Swiper>
        </div>
    )
}

export default Slider