import { useRef } from 'react';

const FramerEmbed = () => {
  const iframeRef = useRef(null);

  const handleMouseEnter = () => {
    if (iframeRef.current) {
        iframeRef.current.contentWindow.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  return (
    <div 
      className="inset-0 w-[100vw] h-[100vh] overflow-hidden"
      onMouseEnter={handleMouseEnter}
    >
      <iframe
        ref={iframeRef}
        src="https://enlightened-friday-833001.framer.app/"
        className="w-[100vw] h-[100vh] border-0 overflow-hidden"
        allowFullScreen
        style={{
          width: '100vw',
          height: '100dvh',
          border: 'none',
          overflowX: 'scroll',
          overflowY: 'hidden'
        }}
      />
    </div>
  );
};

export default FramerEmbed;