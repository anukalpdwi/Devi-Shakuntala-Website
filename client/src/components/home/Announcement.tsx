import { Button } from "@/components/ui/button";

const Announcement = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#FFD700] py-3 text-[#003366]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center text-center">
          <span className="font-bold mr-2">ADMISSIONS OPEN FOR 2025-26</span>
          <span>Limited seats available for all programs. Apply before deadline!</span>
          <Button 
            variant="link" 
            className="ml-4 font-bold underline hover:text-[#800000] p-0 h-auto"
            onClick={() => scrollToSection("contact")}
          >
            Contact for details
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
