import React from 'react';
import './hero.css';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className='relative top-0 left-0 z-50 h-[17vh] w-screen bg-transparent flex flex-col justify-center text-white text-center font-100'>
        <div onClick={() => navigate('/')} className='cursor-pointer top-0 left-0 h-[17vh] w-screen text-[50px] tracking-widest text-white bg-black flex flex-col justify-center items-center text-center font-aboreto font-100'>
          SONORA<br></br>
          <span className='text-[12px] flex flex-row gap-2 font-times'>
            <span className='tracking-normal'>by</span> HARMAN
          </span>
          </div>
          </div>
    </main>
  );
};
export default Hero;
