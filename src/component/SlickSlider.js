import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const cardbg = require('../assets/Group 9195.png')
const sidearrow = require('../assets/Group 9275.png')


const SlickSlider = () => {
    const arr = [, 3, 4, 5, 5, 34, 3, 3, 3]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {
                arr.map((_, id) => {
                    return (
                        <div key={id} className={`flex-col cardclass relative  `} style={{ backgroundImage: `url(${cardbg})` }}>
                            <img className='w-[23rem] h-[13rem]' src={cardbg} />
                            <div className='font-bold text-lg text-white absolute z-2 top-3 left-3' >loremipsum</div>
                            <div className='absolute z-2 text-white top-14 left-3 mx-w-[21rem] ' style={{ maxWidth: "21rem" }}>lorem ipsum dolar sit ament consetuter sadipsing , new device found</div>
                            <div className='absolute z-2 text-white bottom-3 left-3 flex gap-3'>Know more <img src={sidearrow} /></div>
                        </div>
                    )
                })
            }
            {/*            
            <div className={`flex-col cardclass relative `} style={{ backgroundImage: `url(${cardbg})` }}>
                <img className='w-[23rem] h-[13rem]' src={cardbg} />
                <div className='font-bold text-lg text-white absolute z-2 top-3 left-3' >loremipsum</div>
                <div className='absolute z-2 text-white top-14 left-3 mx-w-[21rem] ' style={{ maxWidth: "21rem" }}>lorem ipsum dolar sit ament consetuter sadipsing , new device found</div>
                <div className='absolute z-2 text-white bottom-3 left-3 flex gap-3'>Know more <img src={sidearrow} /></div>
            </div>
            <div className={`flex-col cardclass relative `} style={{ backgroundImage: `url(${cardbg})` }}>
                <img className='w-[23rem] h-[13rem]' src={cardbg} />
                <div className='font-bold text-lg text-white absolute z-2 top-3 left-3' >loremipsum</div>
                <div className='absolute z-2 text-white top-14 left-3 mx-w-[21rem] ' style={{ maxWidth: "21rem" }}>lorem ipsum dolar sit ament consetuter sadipsing , new device found</div>
                <div className='absolute z-2 text-white bottom-3 left-3 flex gap-3'>Know more <img src={sidearrow} /></div>
            </div> */}
            {/* Add more slides as needed */}
        </Slider>
    );
};

export default SlickSlider;
