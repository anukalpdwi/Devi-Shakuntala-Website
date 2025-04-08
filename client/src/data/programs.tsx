export interface Program {
  id: string;
  name: string;
  fullName: string;
  description: string;
  category: 'undergraduate' | 'postgraduate' | 'diploma';
  duration: string;
  type: string;
  details: string;
}

export const programs: Program[] = [
  {
    id: "bba",
    name: "BBA",
    fullName: "Bachelor of Business Administration",
    description: "A comprehensive program focusing on business management principles and practices.",
    category: "undergraduate",
    duration: "3 Years",
    type: "Full-time",
    details: "The Bachelor of Business Administration (BBA) program provides students with a strong foundation in business management principles and practices. The curriculum covers key areas such as accounting, finance, marketing, human resources, operations management, and strategic planning. Students develop critical thinking, problem-solving, and leadership skills essential for success in today's competitive business environment. The program includes case studies, industry projects, and internships to provide practical exposure and enhance employability."
  },
  {
    id: "bca",
    name: "BCA",
    fullName: "Bachelor of Computer Applications",
    description: "Learn computer applications, programming and system development for IT careers.",
    category: "undergraduate",
    duration: "3 Years",
    type: "Full-time",
    details: "The Bachelor of Computer Applications (BCA) program is designed to provide students with comprehensive knowledge of computer applications, programming, and system development. The curriculum includes courses in programming languages, database management, web development, software engineering, computer networks, and system analysis. Students gain hands-on experience through lab sessions, projects, and internships. Graduates are prepared for careers in software development, web design, database administration, and system analysis."
  },
  {
    id: "mba",
    name: "MBA",
    fullName: "Master of Business Administration",
    description: "Advanced business education for leadership roles and entrepreneurial ventures.",
    category: "postgraduate",
    duration: "2 Years",
    type: "Full-time",
    details: "The Master of Business Administration (MBA) program offers advanced education in business management, preparing students for leadership roles and entrepreneurial ventures. The curriculum covers advanced topics in strategic management, organizational behavior, financial management, marketing management, operations research, and business ethics. Students can specialize in areas such as finance, marketing, human resources, or international business. The program emphasizes case studies, business simulations, industry projects, and internships to develop practical skills and strategic thinking abilities."
  },
  {
    id: "mca",
    name: "MCA",
    fullName: "Master of Computer Applications",
    description: "Advanced computer application studies for software development and IT management.",
    category: "postgraduate",
    duration: "2 Years",
    type: "Full-time",
    details: "The Master of Computer Applications (MCA) program provides advanced education in computer applications for software development and IT management. The curriculum includes advanced programming, software engineering, data structures, algorithms, database management systems, artificial intelligence, and computer networks. Students undertake major projects to apply their knowledge and develop practical skills. Graduates are prepared for careers in software development, system analysis, IT project management, and database administration."
  },
  {
    id: "dca",
    name: "DCA",
    fullName: "Diploma in Computer Applications",
    description: "Foundation course in computer applications for entry-level IT positions.",
    category: "diploma",
    duration: "1 Year",
    type: "Full-time",
    details: "The Diploma in Computer Applications (DCA) program provides a foundation in computer applications for entry-level IT positions. The curriculum covers basic programming, office applications, web design, computer fundamentals, and basic database management. Students gain practical skills through lab sessions and projects. This program is ideal for those looking to quickly enter the IT workforce or gain basic computer skills for other professional roles."
  },
  {
    id: "pgdca",
    name: "PGDCA",
    fullName: "Post Graduate Diploma in Computer Applications",
    description: "Advanced diploma course focused on computer applications for graduates.",
    category: "diploma",
    duration: "1 Year",
    type: "Full-time",
    details: "The Post Graduate Diploma in Computer Applications (PGDCA) is an advanced diploma course focused on computer applications for graduates. The curriculum includes advanced programming, database management, web development, software engineering, and computer networks. Students undertake projects to apply their knowledge and develop practical skills. This program is designed for graduates from non-computer backgrounds who want to gain advanced computer skills for career advancement or transition to the IT sector."
  }
];
