import Hero from './Hero.jsx';
import Stickyhero from './Stickyhero.jsx';
import Footer from './Footer';
import './pro.css';
import {useLocation } from 'react-router-dom';
import Prodata from './Prodata';
import { useCart } from '/src/context/Cartcontext.jsx';
import { useState,useEffect } from 'react';


const Prod = () => {
  
  const location = useLocation();
  const { product } = location.state || {};
  const { addItem } = useCart();
  const [mainImage, setMainImage] = useState(product.image);
  useEffect(() => {
    document.title = `Buy ${product.name}`;
  }, []);
  return (
    <div 
  className={`font-roboto tracking-widest min-h-screen flex flex-col items-center ${
    product.category === 'headphones' 
      ? 'bg-[url(https://mezeaudio.com/cdn/shop/files/Meze-Audio-Empyrean-headphone-04.webp?v=1713431934&width=1200)]' 
      : 'bg-[url(https://www.sennheiser-hearing.com/_next/image/?url=https%3A%2F%2Feu-central-1-akqa.graphassets.com%2FAGz66yvUcQ42Ggm7CrXdgz%2FzhbwLugYSXuAwQMaEN9m&w=1920&q=75)] bg-bottom-right'
  } bg-cover relative overflow-hidden`}
><div className="relative z-10 w-full">
        <Hero/>
        <Stickyhero/>
        <div id="parent" className='flex flex-col justify-center items-center p-[6%]'>
          <div id="to" className=' backdrop-blur-sm z-100 h-[100vh] w-[90vw] rounded-lg flex p-[3%]'>
            <div id="slider" className='h-[90vh] overflow-y-auto w-[10%] rounded-lg flex flex-col gap-4 p-2'>
              {[product.image1, product.image, product.img3, product.img4, product.img5].map((img, index) => (
                <div key={index} onClick={()=>setMainImage(img)} className='w-full aspect-square bg-gray-700 rounded-lg cursor-pointer opacity-90 hover:opacity-100 transition-opacity'>
                  <img 
                    src={img} 
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>

            <div id="image" className='h-[70vh] w-[45%] rounded-lg flex items-center justify-center p-8'>
              <div className='w-full h-auto bg-gray-800 rounded-lg flex items-center justify-center'>
                <img 
                  src={mainImage} 
                  className="h-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div id="det" className='h-full w-[45%] rounded-lg flex flex-col gap-[1%] p-8 text-white'>
              <div id="bname" className='text-2xl tracking-[0.2em] font-light text-gray-300'>
                {product.bname}
              </div>
              <div id="pname" className='text-5xl font-medium mt-2'>
                {product.pname}
              </div>
              <hr className='my-6 border-gray-600'></hr>
              <div id="price" className='text-4xl font-light'>
                INR {product.price.toLocaleString()}
              </div>

              <div className='my-8'>
                <p className='text-gray-300 text-justify'>
                  {product.des}
                </p>
              </div>

              <div id="a/b" className='h-[6%] flex flex-row gap-5 my-6'>
                <div id="x" className='w-[50%] cursor-pointer overflow-hidden bg-white text-black flex justify-center items-center hover:tracking-[0.3em] hover: transition-all duration-500 ease'>
                  BUY NOW
                </div>
                <div onClick={() => addItem(product)} id="x" className='w-[50%] cursor-pointer overflow-hidden bg-white text-black flex justify-center items-center hover:tracking-[0.3em] hover: transition-all duration-500 ease'>
                  ADD TO CART
                </div>
              </div>
              <div className='w-full text-center pt-3 text-white text-sm'>
                <p>2y International Warranty</p>
              </div>
              <div className='w-full text-center pt-3 text-white text-sm'>
                <p>Free shipping on all orders • 30-day return policy</p>
              </div>
            </div>
          </div>

          <div id="bo" className=' backdrop-blur-sm z-10 min-h-[170vh] w-[90vw] rounded-lg flex flex-col p-[3%] mt-8 gap-8'>
            <div id="fr" className={`${product.needblack === "yes" ? 'bg-black' : 'bg-white'} h-[70vh] w-full rounded-lg flex flex-row-reverse justify-center items-center`}>
              <div className='h-full w-[50%] '>
              <img 
                src={product.img5} 
                className="h-full w-full object-cover rounded-tr-lg rounded-br-lg"
                alt="Frequency Response Graph"
              />
              </div>
              <div className='w-[50%] h-full flex justify-center items-center bg-[rgba(255,255,255,0)]'>
              <img 
                src={product.fr} 
                className="h-[70%] object-contain"
                alt="Frequency Response Graph"
              />
              </div>
              
            </div>

            <div id="sp" className='flex flex-col items-center gap-8 text-white mt-[6%] p-8'>
            <h3 className='text-2xl w-[70%] font-medium text-center border-b pb-10 tracking-widest'>Specifications</h3>
              <div className='w-[70%] flex flex-col gap-6 text-center'>
                <div className='flex justify-between'>
                  <p className='text-gray-300'>Driver Type</p>
                  <p>{product.drivers}</p>
                </div>
                {product.impedence && (
                <div className='flex justify-between'>
                  <p className='text-gray-300'>Impedence</p>
                  <p>{product.impedence}</p>
                </div>
                )}
                <div className='flex justify-between'>
                  <p className='text-gray-300'>Frequency Response</p>
                  <p>{product.fres}</p>
                </div>
                <div className='flex justify-between'> 
                  <p className='text-gray-300'>Connectors</p>
                  <p className='whitespace-pre-line'>{product.connectors}</p>
                </div>
                {product.sensi && (
                  <div className='flex justify-between'>
                    <p className='text-gray-300'>Sensitivity</p>
                    <p>{product.sensi}</p>
                  </div>
                )}
                <div className='flex justify-between'> 
                  <p className='text-gray-300'>THD</p>
                  <p className='whitespace-pre-line'>{product.thd}</p>
                </div>
                <div className='flex justify-between'> 
                  <p className='text-gray-300'>Weight</p>
                  <p className='whitespace-pre-line'>{product.weight}</p>
                </div>
                <div className='flex justify-between'> 
                  <p className='text-gray-300'>Included in the Box</p>
                  <p className='whitespace-pre-line'>{product.inTheBox}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Prod;