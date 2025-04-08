import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, GraduationCap, BookOpen, Users, Calendar, Award } from "lucide-react";
import { programs } from "@/data/programs";
import { Helmet } from "react-helmet";

const ProgramDetails = () => {
  const { id } = useParams();
  const program = programs.find(p => p.id === id);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h1 className="text-2xl font-heading font-bold text-[#003366] mb-4">Program Not Found</h1>
            <p className="text-gray-600 mb-6">The program you're looking for doesn't exist or has been removed.</p>
            <Link href="/">
              <Button className="bg-[#003366]">Return to Homepage</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{program.name} - {program.fullName} | Devi Shakuntala Shikshan Sansthan</title>
        <meta name="description" content={program.description} />
      </Helmet>
      
      <div className="bg-[#003366] text-white py-16">
        <div className="container mx-auto px-6">
          <Link href="/#programs" className="inline-flex items-center text-gray-200 hover:text-[#FFD700] mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Programs
          </Link>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            {program.name} <span className="text-[#FFD700]">Program</span>
          </h1>
          <p className="text-xl text-gray-200 mb-2">{program.fullName}</p>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="flex items-center bg-white bg-opacity-10 px-4 py-2 rounded-full">
              <Clock className="mr-2 h-5 w-5 text-[#FFD700]" />
              <span>Duration: {program.duration}</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-10 px-4 py-2 rounded-full">
              <GraduationCap className="mr-2 h-5 w-5 text-[#FFD700]" />
              <span>Type: {program.type}</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-10 px-4 py-2 rounded-full">
              <BookOpen className="mr-2 h-5 w-5 text-[#FFD700]" />
              <span>Category: {program.category.charAt(0).toUpperCase() + program.category.slice(1)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#003366] mb-6">
              Program Overview
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {program.details}
            </p>
            
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#003366] mb-6 mt-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 flex items-start">
                  <Users className="text-[#800000] h-8 w-8 mr-4 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Experienced Faculty</h3>
                    <p className="text-gray-600">Learn from industry professionals with years of experience.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start">
                  <Calendar className="text-[#800000] h-8 w-8 mr-4 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Flexible Schedule</h3>
                    <p className="text-gray-600">Programs designed to accommodate various learning needs.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start">
                  <Award className="text-[#800000] h-8 w-8 mr-4 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Recognized Certification</h3>
                    <p className="text-gray-600">Earn a degree that's recognized by leading organizations.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start">
                  <BookOpen className="text-[#800000] h-8 w-8 mr-4 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Modern Curriculum</h3>
                    <p className="text-gray-600">Updated regularly to match industry requirements.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <Card className="bg-gray-50 sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-xl text-[#003366] mb-6">Apply Now</h3>
                <p className="text-gray-600 mb-6">
                  Applications for the 2025-26 academic year are now open. Limited seats available.
                </p>
                <Button 
                  className="w-full bg-[#800000] text-white mb-4"
                  onClick={() => {
                    // Scroll to admissions form on homepage
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#admissions";
                    } else {
                      const admissions = document.getElementById("admissions");
                      if (admissions) {
                        const yOffset = -100;
                        const y = admissions.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  Apply for This Program
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
                  onClick={() => {
                    // Scroll to contact form
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#contact";
                    } else {
                      const contact = document.getElementById("contact");
                      if (contact) {
                        const yOffset = -100;
                        const y = contact.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  Request Information
                </Button>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-bold text-[#003366] mb-2">Important Dates</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Application Deadline:</span>
                      <span className="font-semibold">July 31, 2025</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Admission Test:</span>
                      <span className="font-semibold">August 15, 2025</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Classes Begin:</span>
                      <span className="font-semibold">September 1, 2025</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-bold text-[#003366] mb-2">Need Help?</h4>
                  <p className="text-gray-600 mb-2">
                    Contact our admissions office for assistance.
                  </p>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +91 9893767392
                  </p>
                  <p className="text-gray-600">
                    <strong>Email:</strong> admissions@devishakuntala.edu.in
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramDetails;
