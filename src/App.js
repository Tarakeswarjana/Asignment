import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Navbar from './component/Navbar';
import Slider from './component/Slider';

function App() {
  return (
    <div >
      <Navbar />
      <Slider />

    </div>
  );
}

export default App;
