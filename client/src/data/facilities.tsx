export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const facilities: Facility[] = [
  {
    id: "library",
    name: "Modern Library",
    description: "Extensive collection of books, digital resources, and quiet study spaces.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "computer-labs",
    name: "Computer Laboratories",
    description: "High-performance computers with specialized software for technical programs.",
    image: "https://images.unsplash.com/photo-1581092921461-fd0e5234664b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "classrooms",
    name: "Smart Classrooms",
    description: "Technology-enhanced learning spaces with modern teaching equipment.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "student-center",
    name: "Student Center",
    description: "Recreational and collaborative spaces for student activities and events.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "seminar-hall",
    name: "Seminar Hall",
    description: "Well-equipped venues for seminars, workshops, and academic events.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "sports",
    name: "Sports Facilities",
    description: "Indoor and outdoor sports facilities for physical activities and competitions.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];
