import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import SlickSlider from './component/SlickSlider';
import { useState } from 'react';
import Footer from './component/Footer';
const watchicon = require('./assets/Group 2645.png')
const littleicon = require('./assets/Group 2647.png')
const sidearrow = require('./assets/Group 9275.png')
const show_plus = require('./assets/add_circle_FILL0_wght300_GRAD-25_opsz48.png')
const show_minus = require('./assets/do_not_disturb_on_FILL1_wght100_GRAD200_opsz24.png')
const subscribeimg = require('./assets/Mask Group 72.png')
const sidearrow2 = require('./assets/Polygon 1.png')
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function App() {
  const [showfaq1, setshowfaq1] = useState(false)
  const [showfaq2, setshowfaq2] = useState(false)
  const [showfaq3, setshowfaq3] = useState(false)

  return (
    <div  >
      <Navbar />
      <Slider />
      <section className='mt-16 ml-16 mr-16'>
        <div className='flex gap-3 justify-between'>
          <div className='flex gap-3'>
            <div className='flex-col gap-3 '>
              <h2 className='text-3xl font-bold text-blue-900 max-w-[3rem]'>Upcoming Examinations</h2>
              <p className='mx-w-[14rem] text-[13px] opacity-85'>Enquire about the examination & register for the exam</p>            </div>
            <div className='w-[2px] mx-h-8 bg-slate-500'>

            </div>
          </div>
          <div className='flex gap-4'>
            <div class="relative">
              <img src={littleicon} class="absolute inset-0 bottom-0 z-0 left-[35px] top-[32px]" />
              <img src={watchicon} />
            </div>     <div className='flex-col gap-2'>
              <h2 className='text-lg font-bold text-blue-500'>02th Octobar 2014</h2>
              <p className='opacity-85'>Label 1 Exam</p></div>
          </div>

          <div className='flex gap-4'>
            <div class="relative">
              <img src={littleicon} class="absolute inset-0 bottom-0 z-0 left-[35px] top-[32px]" />
              <img src={watchicon} />
            </div>     <div className='flex-col gap-2'>
              <h2 className='text-lg font-bold text-blue-500'>02th Octobar 2014</h2>
              <p className='opacity-85'>Label 1 Exam</p>
              <p className='opacity-85'>Lorem Ipsum</p>
              <p className='opacity-85'>Lorem Ipsum</p>
            </div>
          </div>
          <div className='flex gap-4'>
            <div class="relative">
              <img src={littleicon} class="absolute inset-0 bottom-0 z-0 left-[35px] top-[32px]" />
              <img src={watchicon} />
            </div>     <div className='flex-col gap-2'>
              <h2 className='text-lg font-bold text-blue-500'>02th Octobar 2014</h2>
              <p className='opacity-85'>Label 1 Exam</p>
              <p className='opacity-85'>Lorem Ipsum</p></div>
          </div>
        </div>
      </section>

      <section className='mt-8 ml-10 mr-10'>

        <SlickSlider />
      </section>
      <section className='mt-8  bg-slate-200 flex gap-8 align-center justify-between p-18'>
        <div className='flex-col gap-3  m-8 text-blue-600'>
          <div className='text-blue-400'>
            lorem Ipsum
          </div>
          <div className='font-bold text-4xl text-blue-600' >
            123+
          </div>
          <div className='text-lg font-bold text-blue-800'>
            Lorem Ipsum
          </div>
          <div className='max-w-[13rem] text-[13px] opacity-3 '>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
          </div>
        </div>
        <div className='flex-col gap-3 text-blue-600 m-8'>
          <div className='text-blue-400'>
            lorem Ipsum
          </div>
          <div className='font-bold text-4xl text-blue-600' >
            12+
          </div>
          <div className='text-lg font-bold text-blue-800'>
            Lorem Ipsum
          </div>
          <div className='max-w-[13rem] text-[13px] opacity-3 '>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          </div>
        </div>
        <div className='flex-col text-blue-600 gap-3 m-8'>
          <div className='text-blue-400'>
            lorem Ipsum
          </div>
          <div className='font-bold text-4xl text-blue-600' >
            123+
          </div>
          <div className='text-lg font-bold text-blue-800'>
            Lorem Ipsum
          </div>
          <div className='max-w-[13rem] text-[13px] opacity-3 '>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          </div>
        </div>
        <div className='flex-col text-blue-600 gap-3 m-8'>
          <div className='text-blue-400'>
            lorem Ipsum
          </div>
          <div className='font-bold text-4xl text-blue-600 text-blue-600' >
            123
          </div>
          <div className='text-lg font-bold text-blue-800'>
            Lorem Ipsum
          </div>
          <div className='max-w-[13rem] text-[13px] opacity-3 '>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          </div>
        </div>
      </section>
      {/* //faq */}
      <section className='mt-16 ml-10 mr-10'>
        <div className='flex justify-center mr-18 text-blue-600 font-bold text-3xl'>FAQ</div>
        <div  >
          <div className='flex flex-col gap-10  mt-8 justify-between'>
            <div className='flex justify-between items-center mr-8'>
              <p>How does an investor gain access to MF Utility?</p>
              <img onClick={() => { setshowfaq1(!showfaq1); }} src={showfaq1 ? show_plus : show_minus} />
            </div>
            <div className="h-px bg-black max-h-4"></div>
            <div style={{ display: showfaq1 ? "block" : "none" }} className='max-w-[65rem]'>Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
          </div>

          <div className='flex flex-col gap-10 mt-8 justify-between'>
            <div className='flex justify-between items-center mr-8'>
              <p>Will investors be able to have multiple Common Account Numbers?</p>
              <img onClick={() => { setshowfaq2(!showfaq2); }} src={showfaq2 ? show_plus : show_minus} />
            </div>
            <div className="h-px bg-black max-h-4"></div>
            <div style={{ display: showfaq2 ? "block" : "none" }} className='max-w-[65rem]'>Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
          </div>

          <div className='flex flex-col gap-10 mt-8 justify-between'>
            <div className='flex justify-between items-center mr-8'>
              <p>How does an investor gain access to MF Utility?</p>
              <img onClick={() => { setshowfaq3(!showfaq3); }} src={showfaq3 ? show_plus : show_minus} />
            </div>
            <div className="h-px bg-black max-h-4"></div>
            <div style={{ display: showfaq3 ? "block" : "none" }} className='max-w-[65rem]'>Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
          </div>

        </div>
      </section>
      <section className='mt-16 ml-10 mr-10'>
        <div className='flex justify-center'>
          <div className='mt-20  '>
            <div className='flex flex-col gap-3  '>
              <div className='text-blue-800 text-4xl font-bold'>Subscribe</div>
              <div >
                <p style={{ maxWidth: "29rem" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>
              </div>


            </div>
            <div className='flex gap-3 align-center mt-8'>
              <div className='border border-black border-solid border-2 rounded-lg shadow-[1px_1px_1px_3px_#cfc5ff] basis-1/2'>
                <input type='text' placeholder='Enter your email address' className='w-full py-2 px-4 rounded-lg focus:outline-none ' />
              </div>
              <button className='bg-blue-800 text-white px-8 py-2 rounded-xl hover:bg-black transition duration-300 flex align-center  gap-2'>Subscribe Now <img src={sidearrow2} className='w-2 relative top-2' /></button>
            </div>

          </div>
          <div><img src={subscribeimg} alt='Subscribe' /></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
