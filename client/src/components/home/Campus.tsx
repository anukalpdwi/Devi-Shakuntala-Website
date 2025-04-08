import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Headset } from "lucide-react";
import { facilities } from "@/data/facilities";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useLocation } from "wouter";

const Campus = () => {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);
  const [_, setLocation] = useLocation();

  return (
    <section id="campus" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#003366] mb-4">Campus Facilities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our modern campus designed to provide an optimal learning environment with state-of-the-art facilities.
          </p>
        </div>

        {/* Facilities Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div key={facility.id} className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.name} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-[#003366] bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="bg-white text-[#003366] px-4 py-2 rounded-md font-bold"
                        onClick={() => setSelectedFacility(facility.id)}
                      >
                        <Eye className="mr-2 h-4 w-4" /> View More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[720px]">
                      <div className="p-4">
                        <img 
                          src={facility.image} 
                          alt={facility.name} 
                          className="w-full h-80 object-cover rounded-lg mb-4" 
                        />
                        <h3 className="font-heading font-bold text-2xl text-[#003366] mb-2">
                          {facility.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {facility.description}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-heading font-bold text-xl text-[#003366]">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-[#003366] text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90 inline-flex items-center"
            onClick={() => {
              setLocation("/gallery");
              window.scrollTo(0, 0);
            }}
          >
            Take a Virtual Tour <Headset className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Campus;
