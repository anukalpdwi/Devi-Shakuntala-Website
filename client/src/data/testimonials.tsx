export interface Testimonial {
  id: string;
  name: string;
  title: string;
  content: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Kumar",
    title: "DCA Graduate, 2024",
    content: "The MCA program at DSSS has been transformative for my career. The faculty's industry experience and the hands-on learning approach helped me secure a great job even before graduation.",
    rating: 5,
    initials: "RK",
    avatarColor: "#003366" // primary color
  },
  {
    id: "2",
    name: "Sunita Patel",
    title: "BBA Graduate, 2023",
    content: "The BBA program provided me with a solid foundation in business administration. The practical approach to learning and excellent mentorship have been invaluable for my professional growth.",
    rating: 5,
    initials: "SP",
    avatarColor: "#800000" // secondary color
  },
  {
    id: "3",
    name: "Ankit Mishra",
    title: "PGDCA Graduate, 2024",
    content: "The PGDCA program at DSSS is well-structured and comprehensive. The campus environment and facilities make learning enjoyable and effective. I'm grateful for the skills I've gained.",
    rating: 4.5,
    initials: "AM",
    avatarColor: "#003366" // primary color
  }
];
