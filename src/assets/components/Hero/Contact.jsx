import Hero from './Hero.jsx';
import Stickyhero from './Stickyhero.jsx';
import './Home.css';
import Fhero from './Footer';

const ContactPage = () => {
  return (
    <>
      <div className="min-h-screen bg-[url(https://mezeaudio.com/cdn/shop/files/Meze-Audio-Empyrean-headphone-04.webp?v=1713431934&width=1200)] bg-cover  flex flex-col items-center relative overflow-hidden">
        <div className="relative z-10 w-full">
          <Hero/>
          <Stickyhero/>
          <div className='flex justify-center items-center h-full m-[15vh]'>
            <div className='w-full h-auto rounded-lg bg-[rgba(0,0,0,0.89)] py-12 px-8 text-gray-300'>
              <div className="max-w-4xl mx-auto font-roboto tracking-wider text-md">
                <div className="mb-12 text-left">
                  <h1 className="text-5xl text-white mb-6 tracking-widest font-roboto">Contact Sonora</h1>
                  <p className="text-gray-400 text-xl">
                    We're here to help with all your audio needs
                  </p>
                </div>
                <hr className='border border-b-white/20 mb-[6%]'></hr>
                
                <div className="flex flex-col justify-center  gap-10 mb-12 tracking-widest">
                  <div>
                    <h2 className="text-2xl w-full text-white mb-4">Get in Touch</h2>
                    <div className="space-y-4 w-full text-gray-400">
                      <p>
                        <strong>Customer Service:</strong><br/>
                        <a href="tel:+18005551234" >1-800-555-1234</a><br/>
                        Mon-Fri: 8am-8pm EST<br/>
                        Sat-Sun: 10am-6pm EST
                      </p>
                      <p>
                        <strong>Sales Inquiries:</strong><br/>
                        <a href="mailto:sales@sonora.com" >sales@sonora.com</a>
                      </p>
                      <p>
                        <strong>Technical Support:</strong><br/>
                        <a href="mailto:support@sonora.com" >support@sonora.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl w-full text-white mb-4">Visit Our Stores</h2>
                    <div className="space-y-4 text-gray-400">
                      <p>
                        <strong>New York Flagship</strong><br/>
                        123 Audio Avenue<br/>
                        New York, NY 10001<br/>
                        (212) 555-6789
                      </p>
                      <p>
                        <strong>Los Angeles Showroom</strong><br/>
                        456 Sound Street<br/>
                        Los Angeles, CA 90015<br/>
                        (310) 555-4321
                      </p>
                    </div>
                  </div>
                </div>
                <hr className='border border-b-white/20 mb-[6%]'></hr>
                <div className="mb-12pt-8">
                  <h2 className="text-2xl text-white mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full bg-transparent border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full bg-transparent border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full bg-transparent border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                      <textarea 
                        id="message" 
                        rows="5" 
                        className="w-full bg-transparent border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                      ></textarea>
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        className="bg-transparent border border-white hover:border-blue-700 hover:text-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-200"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fhero/>
    </>
  );
};

export default ContactPage;