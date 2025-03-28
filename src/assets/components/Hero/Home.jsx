import React, { useState , useEffect } from 'react';
import Hero from './Hero.jsx';
import Stickyhero from './Stickyhero.jsx';
import sampleVideo from './Sample-video.mp4';
import sampleVideo1 from './hd620S.mp4';
import sampleVideo2 from './hd660s2.mp4';
import sampleVideo3 from './stellia.mp4';
import './Home.css';
import FramerEmbed from './Framerfile';
import Fhero from './Footer';
import b1 from './stelliaimg.webp';
import b2 from './hd660s2img.webp';
import b3 from './azurysimg.webp';
import b4 from './hd800simg.webp';


const carouselItems = [
  {
    title: "Focal",
    topic: "BATHYS",
    video: sampleVideo,
  },
  {
    title: "Sennheiser",
    topic: "HD 620S",
    video: sampleVideo1,
  },
  {
    title: "Focal",
    topic: "Stellia",
    video: sampleVideo3,
  },
  
  {
    title: "Sennheiser",
    topic: "HD 660S2",
    video: sampleVideo2,
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 11000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=''>
      <Hero />
      <Stickyhero/>
      <div id="video" className="absolute top-[17vh] h-[83vh] w-screen">
        <div id="carousel" className="h-[calc(100vh-16.5vh)] w-full overflow-hidden relative">
          <div id="list" className="absolute inset-0">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                id="item"
                className={`w-full h-full absolute inset-0 transition-opacity duration-1000 ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                <source src={item.video} type="video/mp4" />
                </video>
                <div id="content" className="absolute inset-0 flex flex-col justify-center text-white text-center ">
                  <div id="title" key={`title-${current}`} className="absolute bottom-80 left-20 text-6xl font-[100] text-white drop-shadow-md tracking-[0.3em]">
                    {item.title}
                  </div>
                  <div id="topic" key={`topic-${current}`} className="absolute bottom-60 left-20 text-6xl font-extrabold drop-shadow-md">
                    {item.topic}
                  </div>
                  <div id="des" key={`des-${current}`} className="absolute bottom-40 left-20 pt-8 flex gap-5">
                    <button
                      id="register"
                      key={`register-${current}`}
                      className="bg-white w-[14em] z-[9999] text-black px-8 py-3 text-[15px] tracking-[0.2em] hover:bg-[#000000a7] hover:text-white hover:tracking-[0.25em] transition-all duration-[500ms]"
                    >
                      SHOP
                    </button>
                    <button
                      id="register1"
                      key={`register1-${current}`}
                      className="bg-white w-[14em] overflow-hidden z-[9999] text-black px-8 py-3 text-[15px] tracking-[0.2em] hover:bg-[#000000a7] hover:text-white hover:tracking-[0.25em] 	transition-all duration-[500ms]"
                    >
                      BOOK A DEMO
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="mov" className="absolute bottom-8 right-8 flex gap-4">
            <button
              id="pr"
              className="h-8 w-16 bg-black bg-opacity-50 text-white  hover:bg-white hover:text-black transition-colors"
              aria-label="Previous Slide"
              onClick={handlePrevious}
            >
              &lt;
            </button>
            <button
              id="nx"
              className="h-8 w-16 bg-black bg-opacity-50 text-white  hover:bg-white  hover:text-black transition-colors"
              aria-label="Next Slide"
              onClick={handleNext}
            >
              &gt;
            </button>
            <div className="absolute bottom-6 left-[-60em] transform -translate-x-1/2 flex gap-2">
            {carouselItems.map((_, index) => (
              <div 
              key={`progress-${index}`}
              className="h-1 bg-white bg-opacity-30 rounded-full overflow-hidden"
              style={{ width: '70px' }}
              >
                {index === current && (
                  <div 
                  className="h-full bg-white rounded-sm"
          style={{ 
            animation: `progress ${11000}ms linear forwards`,
            animationPlayState: current === index ? 'running' : 'paused'
          }}
        />
      )}
    </div>
  ))}
</div>
          </div>
        </div>
      </div>






      <div className='h-[76.3vh] w-screen bg-black'></div>
      <div id="Why" class="relative h-[45vh] w-screen flex justify-center items-center">
  <div class="absolute inset-0 bg-[url(https://mezeaudio.com/cdn/shop/files/Meze-Audio-Empyrean-headphone-04.webp?v=1713431934&width=1200)] bg-cover bg-no-repeat bg-[center_top_-19em] filter grayscale brightness-[.2]"></div>
  <div class="relative z-10 text-white flex flex-col justify-center items-center">
    <p className='font-roboto text-4xl font-'>Why buy from Sonora</p>
    <div className='font-roboto w-[90vw] px-[10px] py-[10px] mt-[50px] h-[100px] flex flex-row justify-center items-center'>
    <div className='w-[25%] h-full flex flex-col justify-center items-center '>
    <svg id="logon" viewBox="0 0 36 36" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" aria-label="shipping">
  <path d="m33.75 18-4.5-4.5H22.5v9h-2.25V9h-18v15.75h5.816a3.645 3.645 0 0 0-.191 1.125 3.375 3.375 0 1 0 6.75 0c0-.382-.061-.762-.18-1.125h10.508a3.61 3.61 0 0 0-.203 1.125 3.375 3.375 0 0 0 6.75 0c0-.385-.073-.767-.214-1.125h2.464V18Zm-3.634 1.125H24.75V15.75h3.375l2.363 2.363a.584.584 0 0 1-.394 1.012h.022Z"></path>
</svg>
Free delivery
</div>
<div className='w-[25%] h-full border-l border-l-white flex flex-col justify-center items-center'>
<svg id="logon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#ffffff" aria-label="audiophile">
  <path d="M16 2a11 11 0 0 0-7 19.47v8.93l7-2.34 7 2.34v-8.93A11 11 0 0 0 16 2zm.31 20h-.61a9 9 0 1 1 .61 0z"></path>
  <path d="M21.73 10.85h-3.97L16.54 7.2h-1.02l-1.22 3.65h-3.96l-.36.96 3.24 2.37-1.25 3.74.8.67 3.29-2.4 3.27 2.37.77-.64-1.25-3.74 3.23-2.37-.35-.96z"></path>
</svg>
2 year manufacturer guarantee
</div>
<div className='w-[25%] h-full border-l border-l-white flex flex-col justify-center items-center'>
<svg id="logon1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 34" fill="#ffffff" aria-label="logo">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0v34h46V0H0Zm25.316 2.882c-2.735 1.036-5.306 3.513-7.392 8.095l-2.358 5.1C11.27 25.297 8.88 27.281 2.464 27.281V2.299h22.754c.072 0 .141.025.196.071a.298.298 0 0 1-.098.512Zm18.22 3.837v24.982H20.799a.307.307 0 0 1-.2-.067.299.299 0 0 1-.071-.384.303.303 0 0 1 .164-.132c2.735-1.036 5.306-3.513 7.393-8.095l2.357-5.1C34.73 8.703 37.12 6.719 43.536 6.719Z"></path>
</svg>
Authentic products
</div>
<div className='w-[25%] h-full border-l border-l-white flex flex-col justify-center items-center'>
<svg id="logon" viewBox="0 0 40 40" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" aria-label="returns">
  <path clip-rule="evenodd" d="M19.454 5v3.6a13.2 13.2 0 1 1-9.336 3.864l1.704 1.692A10.8 10.8 0 1 0 19.454 11v3.6h-1.2l-4.8-4.8 4.8-4.8h1.2ZM18.25 20.504c0 .804-.42 1.428-1.068 1.752-.048.024-.084.06-.084.108s.036.084.084.108c.6.288 1.308.876 1.308 1.944 0 1.344-.948 2.496-2.784 2.496-1.668 0-2.784-.9-2.856-2.352h1.404c.06.672.564 1.236 1.428 1.236.792 0 1.38-.552 1.38-1.428 0-.924-.564-1.392-1.572-1.392h-.48v-1.08h.432c1.032 0 1.416-.624 1.416-1.344 0-.768-.468-1.236-1.2-1.236-.756 0-1.236.468-1.308 1.26h-1.392c.072-1.464 1.056-2.376 2.736-2.376 1.656 0 2.556 1.092 2.556 2.304Zm6.359 2.052c0-2.376-.636-3.24-1.644-3.24s-1.632.864-1.632 3.24c0 2.376.624 3.24 1.632 3.24s1.644-.864 1.644-3.24Zm1.416 0c0 3.216-1.344 4.356-3.06 4.356s-3.048-1.14-3.048-4.356 1.332-4.356 3.048-4.356 3.06 1.14 3.06 4.356Z"></path>
</svg>
30 days free return policy
</div>
    </div>
  </div>
</div>





      <div id="Why" className='h-[100vh] filter  w-screen !flex  justify-center items-center overflow-hidden'>
      <FramerEmbed />
      </div>





      <div id='best' className='p-10 flex flex-col items-center justify-center h-[60vh] w-screen bg-[url(https://mezeaudio.com/cdn/shop/files/Meze-105-AER-headphone-02.webp?v=1731062702&width=2000)]'>
  <p className='pb-5 font-aboreto text-4xl text-white tracking-widest'>Bestsellers</p>
  <div className='h-full w-full flex gap-3'>
    <div className="w-[25%] h-full border border-white flex flex-col justify-center items-center overflow-hidden group relative">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${b1})` }}
      ></div>
      <div id="shadow" className="relative z-10 text-white text-center p-4 transition-all duration-500 group-hover:tracking-widest">
        <h3 className="text-2xl font-bold">STELLIA</h3>
        <p className="text-lg">by Focal</p>
      </div>
    </div>
    <div className="w-[25%] h-full border border-white flex flex-col justify-center items-center overflow-hidden group relative">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${b2})` }}
      ></div>
      <div id="shadow" className="relative z-10 text-white text-center p-4 transition-all duration-500 group-hover:tracking-widest">
        <h3 className="text-2xl font-bold">HD 660S2</h3>
        <p className="text-lg">by Sennheiser</p>
      </div>
    </div>
    <div  className="w-[25%] h-full border border-white flex flex-col justify-center items-center overflow-hidden group relative">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${b3})` }}
      ></div>
      <div id="shadow" className="relative z-10 text-white text-center p-4 transition-all duration-500 group-hover:tracking-widest">
        <h3 className="text-2xl font-bold">AZURYS</h3>
        <p className="text-lg">by Focal</p>
      </div>
    </div>
    <div className="w-[25%] h-full border border-white flex flex-col justify-center items-center overflow-hidden group relative">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${b4})` }}
      ></div>
      <div id="shadow" className="relative z-10 text-white text-center p-4 transition-all duration-500 group-hover:tracking-widest">
        <h3 className="text-2xl font-bold">HD 800S</h3>
        <p className="text-lg">by Sennheiser</p>
      </div>
    </div>
  </div>
</div>   
      <Fhero/>
      </div>
  );
};

export default Home;