import { testimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

const Testimonials = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-[#FFD700] text-[#FFD700]" />);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-[#FFD700] text-[#FFD700]" />);
    }

    return stars;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#003366] mb-4">Student Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear what our students have to say about their experiences at Devi Shakuntala Shikshan Sansthan.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gray-50 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-[#FFD700] flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: testimonial.avatarColor }}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003366]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
