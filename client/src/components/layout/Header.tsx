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
    if (!sectionId) return;
    
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

  type NavItem = {
    name: string;
    sectionId?: string;
    path?: string;
    hasDropdown?: boolean;
    isPage?: boolean;
  };

  const navItems: NavItem[] = [
    { name: "Home", sectionId: "home", path: "/" },
    { name: "Programs", sectionId: "programs", hasDropdown: true },
    { name: "Campus", sectionId: "campus", path: "/#campus" },
    { name: "Gallery", path: "/gallery", isPage: true },
    { name: "About", sectionId: "about", path: "/#about" },
    { name: "Downloads", path: "/downloads", isPage: true },
    { name: "Contact", sectionId: "contact", path: "/#contact" },
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
              <h1 className="text-xl font-heading font-bold text-[#003366] md:block">
                <span className="hidden md:inline">{collegeInfo.name}</span>
                <span className="md:hidden block text-sm">{collegeInfo.name}</span>
              </h1>
              <p className="text-sm text-gray-600 md:block">{collegeInfo.tagline}</p>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="relative"
            >
              <Menu className={`h-6 w-6 absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative group">
                  <button 
                    className="font-semibold text-[#003366] hover:text-[#800000] transition-all flex items-center"
                    onClick={() => item.sectionId && scrollToSection(item.sectionId)}
                  >
                    {item.name} <span className="ml-1 text-xs">▼</span>
                  </button>
                  <div className="absolute hidden group-hover:block bg-white mt-2 py-2 w-52 shadow-lg rounded-md z-10">
                    <div className="grid grid-cols-1 gap-1">
                      <Link 
                        key="all-programs" 
                        href="/programs"
                        className="px-4 py-2 text-sm hover:bg-gray-100 transition-all font-semibold text-[#800000]"
                        onClick={closeMobileMenu}
                      >
                        View All Programs
                      </Link>
                      <div className="border-t my-1"></div>
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
                item.isPage ? (
                  <Link 
                    key={item.name}
                    href={item.path || "/"}
                    className="font-semibold text-[#003366] hover:text-[#800000] transition-all"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button 
                    key={item.name}
                    className="font-semibold text-[#003366] hover:text-[#800000] transition-all"
                    onClick={() => item.sectionId && scrollToSection(item.sectionId)}
                  >
                    {item.name}
                  </button>
                )
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
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-[500px] opacity-100 mt-3 border-t pt-3' 
              : 'max-h-0 opacity-0 border-t-0'
          }`}
        >
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.name}
                  href={item.path || "/"}
                  className="font-semibold text-[#003366] hover:text-[#800000] transition-all block"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  className="font-semibold text-[#003366] hover:text-[#800000] transition-all text-left"
                  onClick={() => {
                    if (item.sectionId) {
                      scrollToSection(item.sectionId);
                    } else if (item.path) {
                      window.location.href = item.path;
                    }
                    
                    if (item.hasDropdown) {
                      // Don't close menu if dropdown clicked
                    } else {
                      closeMobileMenu();
                    }
                  }}
                >
                  {item.name}
                </button>
              )
            ))}
            
            {/* Mobile Programs submenu */}
            <div className="pl-4 space-y-2">
              <Link 
                key="all-programs-mobile" 
                href="/programs"
                className="block text-sm font-semibold text-[#800000] hover:text-[#003366]"
                onClick={closeMobileMenu}
              >
                View All Programs
              </Link>
              <div className="border-t w-1/2 my-2"></div>
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
      </div>
    </header>
  );
};

export default Header;
