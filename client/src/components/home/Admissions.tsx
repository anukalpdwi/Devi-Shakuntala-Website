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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import { programs } from "@/data/programs";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  program: z.string().min(1, "Please select a program")
});

type FormValues = z.infer<typeof formSchema>;

const Admissions = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const features = [
    "Online Application",
    "Career Counseling",
    "Scholarship Options",
    "Easy Fee Payment",
    "EMI Facilities",
    "Placement Assistance"
  ];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      program: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Send data to the backend
      await apiRequest("POST", "/api/admission-request", data);
      
      toast({
        title: "Information Request Submitted",
        description: "We'll contact you shortly with more details.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="admissions" className="py-16 bg-[#003366] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Apply for Admission 2025-26</h2>
            <p className="text-xl text-gray-200">
              Take the first step towards a bright future. Applications are now open for all programs.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-[#FFD700] mr-2 h-5 w-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Card className="bg-white p-6 rounded-lg shadow-md text-[#333333] w-full">
              <CardContent className="p-0">
                <h3 className="text-xl font-heading font-bold text-[#003366] mb-4 text-center">Request Information</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                      name="program"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Program of Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a program" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {programs.map((program) => (
                                <SelectItem key={program.id} value={program.id}>
                                  {program.name} - {program.fullName}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-[#800000] text-white py-3 rounded font-bold hover:bg-opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
