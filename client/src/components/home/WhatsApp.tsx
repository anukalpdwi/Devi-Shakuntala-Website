import { FaWhatsapp } from 'react-icons/fa';
import { collegeInfo } from '@/lib/utils';

const WhatsApp = () => {
  const whatsappNumber = collegeInfo.whatsapp;
  
  return (
    <div className="fixed left-5 bottom-24 z-40">
      <a 
        href={`https://wa.me/${whatsappNumber}?text=Hello,%20I'm%20interested%20in%20knowing%20more%20about%20Devi%20Shakuntala%20Shikshan%20Sansthan.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg transition-all hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </div>
  );
};

export default WhatsApp;