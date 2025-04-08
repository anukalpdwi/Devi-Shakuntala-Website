import SportsImage from '@assets/Sports.jpg'; // Import the local image

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
    image: "https://www.hillshigh.com/wp-content/uploads/2021/02/lab21-1.jpg"
  },
  {
    id: "classrooms",
    name: "Smart Classrooms",
    description: "Technology-enhanced learning spaces with modern teaching equipment.",
    image: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWM2ZmM2NTEwLTRlNzMtMTFlZi1hOWM2LTU3MzgwY2VmMTg5Yy5qcGc="
  },
  {
    id: "student-center",
    name: "Student Center",
    description: "Recreational and collaborative spaces for student activities and events.",
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-12/03/full/1638506038-4213.jpg?im=FeatureCrop,size=(826,465)"
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
    image: SportsImage // Use the imported local image
  }
];
