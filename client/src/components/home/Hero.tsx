import { Button } from "@/components/ui/button";
import { collegeInfo } from "@/lib/utils";
import { useState, useEffect } from "react";
import admissionFlyer from "@assets/WhatsApp Image 2025-04-08 at 12.37.55_3ee325cb_1744096799954.jpg";
import collegeLogo from "@assets/favicon.jpg";

// Define slideshow images
const slideshowImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  admissionFlyer
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-r from-[#003366] to-blue-900 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-4">
              Shape Your Future at<br/>
              <span className="text-[#FFD700]">{collegeInfo.name}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Building careers and transforming lives through quality education since establishment.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="bg-[#FFD700] text-[#003366] px-6 py-3 rounded-md font-bold hover:bg-opacity-90"
                onClick={() => scrollToSection("admissions")}
              >
                Apply for 2025-26
              </Button>
              <Button 
                variant="outline"
                className="bg-white text-[#003366] px-6 py-3 rounded-md font-bold hover:bg-gray-100 border-0"
                onClick={() => scrollToSection("programs")}
              >
                Explore Programs
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            {/* Slideshow */}
            <div className="overflow-hidden rounded-lg shadow-xl" style={{ aspectRatio: "16/9" }}>
              <div 
                className="flex transition-transform duration-1000 ease-in-out h-full"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {slideshowImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`College Campus Slideshow ${index + 1}`} 
                    className="min-w-full h-full object-cover"
                  />
                ))}
              </div>
            </div>
            
            {/* Slideshow Navigation Dots */}
            <div className="flex justify-center mt-4">
              {slideshowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full ${
                    currentImageIndex === index ? 'bg-[#FFD700]' : 'bg-white bg-opacity-50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Affiliations */}
        <div className="mt-16 bg-white bg-opacity-10 p-6 rounded-lg">
          <h3 className="text-xl font-heading font-semibold mb-4 text-center">Our Affiliations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {collegeInfo.affiliations.map((affiliation, index) => (
              <div key={index} className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg">
                <div className="text-center">
                  <h4 className="font-heading font-bold">{affiliation.name}</h4>
                  <p className="text-sm text-gray-200">{affiliation.fullName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="text-white fill-current">
          <path d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
