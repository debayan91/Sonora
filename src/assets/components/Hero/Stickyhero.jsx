import React, { useEffect } from 'react';
import './hero.css';
import { useNavigate } from 'react-router-dom';
const Stickyhero = () => {
    const navigate = useNavigate();
  useEffect(() => {
    const links = document.querySelectorAll('#a1, #a2, #a3, #a4');
    links.forEach(link => {
    link.style.transition = 'color 0.4s ease-in-out';
      link.addEventListener('mouseenter', () => {
        links.forEach(l => {
          if (l === link) {
            l.style.color = 'white';
          } else {
            l.style.color = 'rgba(255, 255, 255, 0.579)';
          }
        });
      });
      link.addEventListener('mouseleave', () => {
        links.forEach(l => {
          l.style.color = 'white'; 
        });
      });
    });
  }, []);
  return (
<div id="bottomnav" className=' w-screen bg-transparent flex z-[9999999] flex-col justify-center text-white text-center font-100'>
        <div id="bottomnav" className='px-10 text-white text-center font-100 bg-gradient-to-br from-[rgba(0,0,0,0.88)] to-[rgba(0,0,0,0.62)] backdrop-blur-sm flex flex-row justify-between items-center text-[19px] gap-14 tracking-[0.25em] font-roboto'>
          <div className='flex flex-row justify-between items-center text-[19px] gap-14 tracking-[0.25em] font-roboto'>
            <a href="/products" id="a1">Headphones</a>
            <a href="" id="a2">In-Ears</a>
            <a href="" id="a3">About</a>
            <a href="/products" id="a4">Store</a>
            </div>
            <div className='flex justify-center items-center gap-5'>
            <div className='h-[1.5em] rounded-sm w-[10em] relative'>
        <input 
            type="text" 
            placeholder="Search" 
            className='w-full h-[30px] pl-4 pr-10 text-[15px] rounded-sm tracking-wider bg-[rgba(0,0,0,0.15)] text-white placeholder-[rgba(255,255,255,0.7)] focus:outline-none focus:ring-0 focus:bg-[rgba(0,0,0,0.3)] transition-all duration-[500ms]'
        />
        <svg 
            className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[rgba(255,255,255,0.7)]' 
            
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
    <div className='h-[80%] aspect-square flex items-center justify-center cursor-pointer hover:bg-[rgba(255,255,255,0.1)] rounded-full hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all duration-200'>
        <svg 
            className='h-6 w-6 text-[rgba(255,255,255,0.8)]' 
            fill="none" 
            onClick={() => navigate('/signin')}
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    </div>
    <div className='h-[80%] aspect-square flex items-center justify-center cursor-pointer hover:bg-[rgba(255,255,255,0.1)] rounded-full hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]'>
        <svg 
            className='h-6 w-6 text-[rgba(255,255,255,0.8)]' 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    </div>
   
    </div>
        </div>
        </div>
  );
};

export default Stickyhero;
