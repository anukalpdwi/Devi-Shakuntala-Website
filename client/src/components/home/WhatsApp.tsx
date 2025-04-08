import { collegeInfo } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href={`https://wa.me/${collegeInfo.whatsapp}`} 
        className="block bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all" 
        title="Contact via WhatsApp"
        aria-label="Contact via WhatsApp"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default WhatsApp;
