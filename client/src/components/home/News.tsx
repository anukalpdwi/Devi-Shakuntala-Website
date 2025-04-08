import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { newsItems } from "@/data/news";

const News = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#003366] mb-4">News & Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, events, and announcements from our campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-[#003366] mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <Link href="#" className="text-[#800000] font-bold hover:underline">Read More</Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-[#003366] text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90"
          >
            View All News & Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
