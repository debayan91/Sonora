import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const AnimatedFeature = ({ children, direction = 'top', delay = 0 }) => {
  const ref = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const threshold = 0; 
        if (rect.top <= threshold) {
          setIsAtTop(true);
        } else {
          setIsAtTop(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variants = {
    top: { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    bottom: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isAtTop ? 'visible' : 'hidden'}
      variants={variants[direction]}
      transition={{ duration: 0.6, delay }}
      className="w-[25%] h-full border-l border-l-white flex flex-col justify-center items-center overflow-hidden"
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedFeature;