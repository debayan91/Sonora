import { useState } from 'react';
import Hero from './Hero.jsx';
import Stickyhero from './Stickyhero.jsx';
import vid1 from './signvideo.mp4';
import './Home.css';
import Fhero from './Footer';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.email.trim()) {
      alert("Email field must be filled.");
      return;
    }
    
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    if (!formData.password.trim()) {
      alert("Password cannot be empty.");
      return;
    }
    
    navigate('/')
  };

  const EmailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" fill="white"/>
      <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const PasswordIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 7C9.23858 7 7 9.23858 7 12V15H17V12C17 9.23858 14.7614 7 12 7Z"/>
      <rect x="9" y="15" width="6" height="7" rx="1"/>
      <circle cx="12" cy="17" r="1"/>
      <path d="M12 18V20"/>
    </svg>
  );

  const EyeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5C5.63636 5 1 12 1 12C1 12 5.63636 19 12 19C18.3636 19 23 12 23 12C23 12 18.3636 5 12 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
    <div className="min-h-screen flex flex-col items-center relative overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 w-full ">
        <Hero/>
        <Stickyhero/>
        <div className='flex justify-center items-center h-full m-[15vh] '>
        <div className="bg-[rgba(0,0,0,0.62)] h-full w-[26vw] text-white text-sm shadow-2xl animate-[show_1s_ease] py-7 px-10 filter grayscale" id="shado">
          <h1 className="text-4xl mb-2.5 flex justify-center items-center font-thin tracking-wider pb-6">Login</h1>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center p-4 rounded-sm mb-4 border border-current">
                <span className="mr-3"><EmailIcon /></span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="border-none bg-transparent placeholder-white/70 focus:text-white focus:tracking-wider outline-none"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex items-center p-4 rounded-sm mb-4 border border-current">
                <span className="mr-3"><PasswordIcon /></span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="border-none bg-transparent placeholder-white/70 focus:text-white focus:tracking-wider outline-none"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex items-center mb-7">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={showPassword}
                      onChange={toggleShowPassword}
                    />
                    <div className={`w-4 h-4 rounded-full border border-white flex items-center justify-center ${showPassword ? 'bg-white' : ''}`}>
                      {showPassword && (
                        <svg className="w-2 h-2 text-black" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="ml-2 text-xs">Show Password</span>
                </label>
              </div>

              <div className="flex items-center mb-7">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="remember"
                      name="rememberMe"
                      className="sr-only"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                    />
                    <div className={`w-4 h-4 rounded-full border border-white flex items-center justify-center ${formData.rememberMe ? 'bg-white' : ''}`}>
                      {formData.rememberMe && (
                        <svg className="w-2 h-2 text-black" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="ml-2 text-xs">Remember me</span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full overflow-hidden bg-white tracking-wider py-3 text-black border-none rounded-sm cursor-pointer font-roboto text-base transition-all duration-300 hover:tracking-[0.5em] hover:bg-black/40 hover:text-white"
                id="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
    <Fhero/>
    </>
  );
};

export default LoginPage;