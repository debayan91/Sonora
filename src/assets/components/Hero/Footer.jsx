import React from 'react';
import './hero.css';
import { useNavigate } from 'react-router-dom';
const FHero = () => {
    const navigate = useNavigate();
  return (
    <div>
      {/* <div className='h-[200px] mb-[50vh] left-0 bg-gradient-to-t from-black to-[#01000000]'></div> */}
      <div className='h-[50vh] w-screen pt-[150px] bg-black font-roboto text-100'>
      <div id="bottomnav" className='px-10 h-[100%] text-white text-center font-100 bg-transparent ckbadrop-blur-sm flex flex-col justify-center items-center text-[19px] gap-[20px] tracking-[0.25em] font-roboto'>
      <hr className='w-[80%] border-1 mt-5 border-white'></hr>
          <div className='h-[calc(40vh-17vh)] flex flex-row justify-center items-center text-[19px] gap-14 tracking-[0.25em] font-roboto'>
            <a href="/provider" id="a1">Provider</a>
            <a href="/legal" id="a2">Legal</a>
            <a href="/privacy" id="a3">Privacy</a>
            <a href="/products" id="a4">Store</a>
            <a href="#" id="a5">Contact</a>
            </div>
            <br></br>
            <div onClick={() => navigate('/')} className='h-[17vh] cursor-pointer w-screen pt-[10px] text-[50px] tracking-widest text-white bg-black flex flex-col justify-center items-center text-center font-aboreto font-100'>
          SONORA<br></br>
          <span className='text-[12px] flex flex-row gap-2 font-times'>
            <span className='tracking-normal'>by</span> HARMAN
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FHero;
