import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Laptop, 
  Handshake, 
  Award 
} from "lucide-react";
import { useLocation } from "wouter";

const About = () => {
  const [_, setLocation] = useLocation();
  const features = [
    { icon: <GraduationCap className="text-[#800000] text-xl mr-3" />, text: "Qualified Faculty" },
    { icon: <Laptop className="text-[#800000] text-xl mr-3" />, text: "Modern Facilities" },
    { icon: <Handshake className="text-[#800000] text-xl mr-3" />, text: "Career Support" },
    { icon: <Award className="text-[#800000] text-xl mr-3" />, text: "Quality Education" },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Campus Building" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#003366] mb-6">About Our Institution</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Devi Shakuntala Shikshan Sansthan was established with a vision to provide quality education that nurtures both academic excellence and personal growth. Our institution is committed to creating an environment where students can develop their intellectual, personal, emotional, and social capabilities.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With strong affiliations to prestigious universities like Makhanlal Chaturvedi University and Chitrkoot Gramoday Vishwavidyalaya, we offer a wide range of programs designed to meet the evolving needs of the job market and society.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  {feature.icon}
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <Button 
              className="bg-[#800000] text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90"
              onClick={() => setLocation("/gallery")}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
