import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { collegeInfo } from "@/lib/utils";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(20, "Message is too short")
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Send data to the backend
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you soon.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Message Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#003366] mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Card className="bg-gray-50 shadow-md">
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-xl text-[#003366] mb-6">Contact Information</h3>
              
              <div className="flex items-start mb-6">
                <MapPin className="text-[#800000] text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Address</h4>
                  <p className="text-gray-600">{collegeInfo.name}<br/>{collegeInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Phone className="text-[#800000] text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600">{collegeInfo.phone1}</p>
                  <p className="text-gray-600">{collegeInfo.phone2}</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Mail className="text-[#800000] text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">{collegeInfo.email.admissions}</p>
                  <p className="text-gray-600">{collegeInfo.email.info}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-[#800000] text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Office Hours</h4>
                  <p className="text-gray-600">{collegeInfo.officeHours}</p>
                  <p className="text-gray-600">{collegeInfo.officeHoursSunday}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Form */}
          <Card className="md:col-span-2 bg-gray-50 shadow-md">
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-xl text-[#003366] mb-6">Send us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" type="email" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" type="tel" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter subject" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter your message" 
                            rows={5} 
                            className="resize-none"
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="bg-[#800000] text-white px-6 py-3 rounded font-bold hover:bg-opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        
        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-gray-300 rounded-lg h-96 overflow-hidden">
            {/* Embed Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.7502564416895!2d81.4005933!3d23.6848876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39868f140127c7ab%3A0x17b26cde78fae8bb!2sDevi%20shakuntala%20college%20Jaisinghnagar!5e0!3m2!1sen!2sin!4v1744123924064!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
