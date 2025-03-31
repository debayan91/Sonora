import React from 'react';

import { useEffect} from 'react';
import { useAuth } from '/src/hooks/useAuth.js';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero.jsx';
import Stickyhero from './Stickyhero.jsx';
import vid1 from './signvideo.mp4';
import './Home.css';
import Fhero from './Footer';
const AccountPage = () => {
  useEffect(() => {
    document.title = "Sonora - Account";
  }, []);
  const { currentUser, logout, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (!currentUser) {
    navigate('/login');
    return null;
  }

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch{
      alert("Logout failed. Please try again.");
    }
  };
  
  return (
    <>
      <div className="min-h-screen flex flex-col items-center relative overflow-hidden font-roboto">
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src={vid1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-8 w-screen">
          <Hero />
          <Stickyhero />
          <div className='flex justify-center items-center h-full mt-[5vh]'>
            <div className="bg-[rgba(0,0,0,0.62)] h-full text-white text-sm shadow-2xl animate-[show_1s_ease] py-7 px-10 w-[40vw]" id="shado">
              <h1 className="text-4xl mb-6 flex justify-center items-center font-thin tracking-wider">
                Account
              </h1>
              <div className="space-y-6 ">
                <div className="p-6 border border-white/20 rounded-sm">
                  <h2 className="text-xl mb-4 font-medium">Profile Information</h2>
                  <div className="space-y-3">
                    <p className='flex justify-between'><span className="text-white/70">Name:</span> {currentUser.displayName || 'Not set'}</p>
                    <p className='flex justify-between'><span className="text-white/70">Email:</span> {currentUser.email}</p>
                  </div>
                </div>
                <div className="p-6 border border-white/20 rounded-sm">
                  <h2 className="text-xl mb-4 font-medium">Order History</h2>
                  <p className="text-white/70 "></p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-[20vw] py-3 ml-[calc(10vw-2.5rem)] bg-red-600/10 tracking-[0.3em] font-sans border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                    SIGN OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fhero />
    </>
  );
};

export default AccountPage;