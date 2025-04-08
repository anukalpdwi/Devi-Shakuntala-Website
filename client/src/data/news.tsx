export interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "tech-fest",
    title: "Annual Tech Fest 2025 Announced",
    date: "May 15, 2025",
    description: "The most awaited technical festival of the year is back with exciting competitions, workshops, and prizes.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "placement-drive",
    title: "Campus Placement Drive Starting Next Month",
    date: "April 10, 2025",
    description: "Top companies will be visiting our campus for recruitment. Preparation sessions scheduled for students.",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "cyber-security",
    title: "New Courses in Cyber Security Announced",
    date: "March 28, 2025",
    description: "In response to industry demand, we're introducing specialized courses in cyber security from the upcoming session.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];
