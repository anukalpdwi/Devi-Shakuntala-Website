import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed right-5 bottom-24 z-40">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center bg-[#800000] hover:bg-[#600000] text-white rounded-full w-12 h-12 shadow-lg transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
};

export default BackToTop;