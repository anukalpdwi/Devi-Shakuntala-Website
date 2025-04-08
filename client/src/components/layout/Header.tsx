import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { collegeInfo } from "@/lib/utils";
import logoPath from "@assets/favicon.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    closeMobileMenu();
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100; // header height offset
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else if (location !== "/") {
      // If not on home page, navigate to home then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  const navItems = [
    { name: "Home", sectionId: "home" },
    { name: "Programs", sectionId: "programs", hasDropdown: true },
    { name: "Campus", sectionId: "campus" },
    { name: "About", sectionId: "about" },
    { name: "Contact", sectionId: "contact" },
  ];

  const programDropdownItems = [
    { name: "DCA", path: "dca" },
    { name: "PGDCA", path: "pgdca" },
    { name: "BBA", path: "bba" },
    { name: "BCA", path: "bca" },
    { name: "MBA", path: "mba" },
    { name: "MCA", path: "mca" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : ''} transition-all duration-300`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center">
            <img src={logoPath} alt={`${collegeInfo.name} Logo`} className="h-16 w-16 mr-3" />
            <div>
              <h1 className="text-xl font-heading font-bold text-[#003366] hidden md:block">{collegeInfo.name}</h1>
              <p className="text-sm text-gray-600 hidden md:block">{collegeInfo.tagline}</p>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative group">
                  <button 
                    className="font-semibold text-[#003366] hover:text-[#800000] transition-all flex items-center"
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    {item.name} <span className="ml-1 text-xs">▼</span>
                  </button>
                  <div className="absolute hidden group-hover:block bg-white mt-2 py-2 w-52 shadow-lg rounded-md z-10">
                    <div className="grid grid-cols-1 gap-1">
                      {programDropdownItems.map((program) => (
                        <Link 
                          key={program.name} 
                          href={`/programs/${program.path}`}
                          className="px-4 py-2 text-sm hover:bg-gray-100 transition-all"
                          onClick={closeMobileMenu}
                        >
                          {program.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button 
                  key={item.name}
                  className="font-semibold text-[#003366] hover:text-[#800000] transition-all"
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  {item.name}
                </button>
              )
            ))}
            <Button 
              className="bg-[#800000] text-white hover:bg-opacity-90"
              onClick={() => scrollToSection("admissions")}
            >
              Apply Now
            </Button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 border-t pt-3">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="font-semibold text-[#003366] hover:text-[#800000] transition-all text-left"
                  onClick={() => {
                    scrollToSection(item.sectionId);
                    if (item.hasDropdown) {
                      // Don't close menu if dropdown clicked
                    } else {
                      closeMobileMenu();
                    }
                  }}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Programs submenu */}
              <div className="pl-4 space-y-2">
                {programDropdownItems.map((program) => (
                  <Link 
                    key={program.name} 
                    href={`/programs/${program.path}`}
                    className="block text-sm text-[#003366] hover:text-[#800000]"
                    onClick={closeMobileMenu}
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
              
              <Button 
                className="bg-[#800000] text-white hover:bg-opacity-90 w-full"
                onClick={() => {
                  scrollToSection("admissions");
                  closeMobileMenu();
                }}
              >
                Apply Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
