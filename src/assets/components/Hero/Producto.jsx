import Hero from './Hero.jsx';
import Stickyhero from './Stickyhero.jsx';
import Footer from './Footer';
import './pro.css';
import { useLocation } from 'react-router-dom';

const Prod = () => {
  const location = useLocation();
  const { product } = location.state || {};
  if (!product) return <div>Product not found</div>;

  return (
    <div className="font-roboto tracking-widest min-h-screen flex flex-col items-center bg-[url(https://mezeaudio.com/cdn/shop/files/Meze-Audio-Empyrean-headphone-04.webp?v=1713431934&width=1200)] bg-cover relative overflow-hidden">
      <div className="relative z-10 w-full">
        <Hero/>
        <Stickyhero/>
        <div id="parent" className='flex flex-col justify-center items-center p-[6%]'>
          <div className='bg-gradient-to-br from-[#000000b0] to-[rgba(0,0,0,0.66)] backdrop-blur-sm z-100 h-[100vh] w-[90vw] rounded-md flex p-[3%]'>
            <div id="slider" className='h-[90vh] overflow-y-auto w-[10%] rounded-sm flex flex-col gap-4 p-2'>
              {[product.image, product.image1, product.img3, product.img4, product.img5].map((img, index) => (
                <div key={index} className='w-full aspect-square bg-gray-700 rounded-sm cursor-pointer opacity-90 hover:opacity-100 transition-opacity'>
                  <img 
                    src={img} 
                    className="h-full w-full object-cover"
                    alt={`Product view ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <div id="image" className='h-[70vh] w-[45%] rounded-sm flex items-center justify-center p-8'>
              <div className='w-full h-full bg-gray-800 rounded-lg flex items-center justify-center'>
                <img 
                  src={product.image} 
                  className="h-full object-cover"
                  alt={product.name}
                />
              </div>
            </div>

            <div id="det" className='h-full w-[45%] rounded-sm flex flex-col gap-[1%] p-8 text-white'>
              <div id="bname" className='text-2xl font-light text-gray-300'>
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
                <p className='text-gray-300 mb-4'>
                  {product.des}
                </p>
              </div>

              <div id="a/b" className='h-[6%] flex flex-row gap-5 my-6'>
                <div id="x" className='w-[50%] cursor-pointer overflow-hidden bg-white text-black flex justify-center items-center hover:tracking-[0.3em] hover: transition-all duration-500 ease'>
                  BUY NOW
                </div>
                <div id="x" className='w-[50%] cursor-pointer overflow-hidden bg-white text-black flex justify-center items-center hover:tracking-[0.3em] hover: transition-all duration-500 ease'>
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

          <div className='bg-gradient-to-br from-[#000000b0] to-[rgba(0,0,0,0.66)] backdrop-blur-sm z-100 min-h-[170vh] w-[90vw] rounded-md flex flex-col p-[3%] mt-8 gap-8'>

            <div id="fr" className='bg-white h-[70vh] w-full p-[5%] rounded-lg flex justify-center items-center'>
              <img 
                src={product.fr} 
                className="h-full object-contain"
                alt="Frequency Response Graph"
              />
            </div>

            <div id="sp" className='grid grid-cols-2 gap-8 text-white p-8'>
              <div className='space-y-6'>
                
              </div>
              <div className='space-y-6'>
              <h3 className='text-2xl font-medium border-b pb-2'>Specifications</h3>
                <div>
                  <p className='text-gray-300'>Driver Type</p>
                  <p>{product.drivers}</p>
                </div>
                <div>
                  <p className='text-gray-300'>Impedence</p>
                  <p>{product.impedence}</p>
                </div>
                <div>
                  <p className='text-gray-300'>Frequency Response</p>
                  <p>{product.fres}</p>
                </div>
                <div>
                  <p className='text-gray-300'>Connectors</p>
                  <p className='whitespace-pre-line'>{product.connectors}</p>
                </div>
                {product.sensi && (
                  <div>
                    <p className='text-gray-300'>Sensitivity</p>
                    <p>{product.sensi}</p>
                  </div>
                )}
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