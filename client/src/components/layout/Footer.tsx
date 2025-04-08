import { Link } from "wouter";
import { collegeInfo } from "@/lib/utils";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";
import logoPath from "@assets/favicon.jpg";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: "Home", sectionId: "home" },
    { name: "About Us", sectionId: "about" },
    { name: "Academic Programs", sectionId: "programs" },
    { name: "Campus Facilities", sectionId: "campus" },
    { name: "Admissions", sectionId: "admissions" },
    { name: "Contact Us", sectionId: "contact" },
  ];

  const programs = [
    { name: "BBA", path: "bba" },
    { name: "BCA", path: "bca" },
    { name: "MBA", path: "mba" },
    { name: "MCA", path: "mca" },
    { name: "DCA", path: "dca" },
    { name: "PGDCA", path: "pgdca" },
  ];

  return (
    <footer className="bg-[#003366] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Institution Info */}
          <div className="md:col-span-1">
            <img src={logoPath} alt={`${collegeInfo.name} Logo`} className="h-16 w-16 mb-4" />
            <h3 className="text-xl font-heading font-bold mb-4">{collegeInfo.name}</h3>
            <p className="text-gray-300 mb-4">
              Providing quality education and fostering academic excellence since establishment.
            </p>
            <div className="flex space-x-4">
              <a href={collegeInfo.socialMedia.facebook} className="text-white hover:text-[#FFD700] transition-all" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href={collegeInfo.socialMedia.twitter} className="text-white hover:text-[#FFD700] transition-all" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href={collegeInfo.socialMedia.instagram} className="text-white hover:text-[#FFD700] transition-all" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href={collegeInfo.socialMedia.linkedin} className="text-white hover:text-[#FFD700] transition-all" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-gray-300 hover:text-[#FFD700] transition-all"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link 
                    href={`/programs/${program.path}`}
                    className="text-gray-300 hover:text-[#FFD700] transition-all"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="text-[#FFD700] h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-300">{collegeInfo.address}</span>
              </li>
              <li className="flex">
                <Phone className="text-[#FFD700] h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-300">
                  {collegeInfo.phone1}<br/>{collegeInfo.phone2}
                </span>
              </li>
              <li className="flex">
                <Mail className="text-[#FFD700] h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-300">{collegeInfo.email.info}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {collegeInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
