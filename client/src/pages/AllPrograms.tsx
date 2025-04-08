import { useState } from "react";
import { Link } from "wouter";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { programs } from "@/data/programs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock } from "lucide-react";

const AllPrograms = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const filteredPrograms = filter === "all" 
    ? programs 
    : programs.filter(program => program.category === filter);

  const undergraduateCount = programs.filter(p => p.category === "undergraduate").length;
  const postgraduateCount = programs.filter(p => p.category === "postgraduate").length;
  const diplomaCount = programs.filter(p => p.category === "diploma").length;

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#003366] mb-4">
            Our Academic Programs
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Devi Shakuntala Shikshan Sansthan offers a wide range of academic programs 
            designed to equip students with knowledge, skills, and values for success in their chosen fields.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger 
                value="all" 
                onClick={() => setFilter("all")}
                className="data-[state=active]:bg-[#003366] data-[state=active]:text-white"
              >
                All Programs ({programs.length})
              </TabsTrigger>
              <TabsTrigger 
                value="undergraduate" 
                onClick={() => setFilter("undergraduate")}
                className="data-[state=active]:bg-[#003366] data-[state=active]:text-white"
              >
                Undergraduate ({undergraduateCount})
              </TabsTrigger>
              <TabsTrigger 
                value="postgraduate" 
                onClick={() => setFilter("postgraduate")}
                className="data-[state=active]:bg-[#003366] data-[state=active]:text-white"
              >
                Postgraduate ({postgraduateCount})
              </TabsTrigger>
              <TabsTrigger 
                value="diploma" 
                onClick={() => setFilter("diploma")}
                className="data-[state=active]:bg-[#003366] data-[state=active]:text-white"
              >
                Diploma ({diplomaCount})
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <ProgramsGrid programs={filteredPrograms} />
          </TabsContent>
          <TabsContent value="undergraduate" className="mt-0">
            <ProgramsGrid programs={filteredPrograms} />
          </TabsContent>
          <TabsContent value="postgraduate" className="mt-0">
            <ProgramsGrid programs={filteredPrograms} />
          </TabsContent>
          <TabsContent value="diploma" className="mt-0">
            <ProgramsGrid programs={filteredPrograms} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const ProgramsGrid = ({ programs }: { programs: typeof import("@/data/programs").programs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((program) => (
        <Card key={program.id} className="h-full flex flex-col overflow-hidden border-2 hover:border-[#003366] transition-all duration-300">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-[#003366]">{program.name}</CardTitle>
            <CardDescription className="text-gray-600 font-medium">
              {program.fullName}
            </CardDescription>
          </CardHeader>
          <CardContent className="py-4 flex-grow">
            <p className="text-gray-700 mb-4">
              {program.description}
            </p>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <Clock className="h-4 w-4 mr-2 text-[#800000]" />
              <span>Duration: {program.duration}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <GraduationCap className="h-4 w-4 mr-2 text-[#800000]" />
              <span>Type: {program.type}</span>
            </div>
            {program.category === "diploma" && (
              <div className="mt-4 text-sm font-medium text-[#800000]">
                Affiliated from: Makhanlal Chaturvedi University, Bhopal
              </div>
            )}
          </CardContent>
          <CardFooter className="pt-0 pb-4">
            <Link href={`/programs/${program.id}`}>
              <Button 
                className="w-full bg-[#003366] hover:bg-[#002244] text-white"
                onClick={() => window.scrollTo(0, 0)}
              >
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AllPrograms;