import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, GraduationCap, ChevronRight } from "lucide-react";
import { programs } from "@/data/programs";

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filterPrograms = (category: string) => {
    setActiveCategory(category);
  };

  const filteredPrograms = activeCategory === "all" 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#003366] mb-4">Our Academic Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our diverse range of undergraduate and postgraduate programs designed to prepare you for success in your chosen field.
          </p>
        </div>

        {/* Program Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button 
            variant={activeCategory === "all" ? "default" : "outline"}
            className={`rounded-full ${activeCategory === "all" ? "bg-[#003366] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            onClick={() => filterPrograms("all")}
          >
            All Programs
          </Button>
          <Button 
            variant={activeCategory === "undergraduate" ? "default" : "outline"}
            className={`rounded-full ${activeCategory === "undergraduate" ? "bg-[#003366] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            onClick={() => filterPrograms("undergraduate")}
          >
            Undergraduate
          </Button>
          <Button 
            variant={activeCategory === "postgraduate" ? "default" : "outline"}
            className={`rounded-full ${activeCategory === "postgraduate" ? "bg-[#003366] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            onClick={() => filterPrograms("postgraduate")}
          >
            Postgraduate
          </Button>
          <Button 
            variant={activeCategory === "diploma" ? "default" : "outline"}
            className={`rounded-full ${activeCategory === "diploma" ? "bg-[#003366] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            onClick={() => filterPrograms("diploma")}
          >
            Diploma
          </Button>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <Card 
              key={program.id}
              className="overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <CardHeader className="bg-[#003366] text-white p-4">
                <h3 className="font-heading font-bold text-xl">{program.name}</h3>
                <p className="text-sm text-gray-200">{program.fullName}</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-3 flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> {program.duration}
                  </span>
                  <span className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-1" /> {program.type}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-0">
                <Link href={`/programs/${program.id}`} className="block w-full">
                  <Button 
                    className="w-full bg-[#800000] text-white rounded-none hover:bg-opacity-90"
                    variant="default"
                  >
                    Program Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-[#003366] text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90 inline-flex items-center"
          >
            View All Programs <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
