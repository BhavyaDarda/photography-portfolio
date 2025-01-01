import { useEffect } from 'react';
import { gsap } from 'gsap';

const useScrollAnimation = (ref) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = ref.current.children;
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          gsap.to(element, { opacity: 1, y: 0, duration: 0.5 });
        } else {
          gsap.to(element, { opacity: 0, y: 50 });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);
};

export default useScrollAnimation;