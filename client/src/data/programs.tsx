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
  // Undergraduate Programs
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
  },
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
    id: "ba",
    name: "B.A.",
    fullName: "Bachelor of Arts",
    description: "Liberal arts program offering diverse subjects in humanities and social sciences.",
    category: "undergraduate",
    duration: "3 Years",
    type: "Full-time",
    details: "The Bachelor of Arts (B.A.) program offers a comprehensive education in humanities and social sciences. Students can choose from various subjects including Hindi, English, Sanskrit, History, Political Science, and more. The program develops critical thinking, communication, and analytical skills while providing cultural awareness and a broad understanding of society. Graduates are prepared for various career paths including education, civil services, journalism, and more."
  },
  {
    id: "bcom",
    name: "B.Com.",
    fullName: "Bachelor of Commerce",
    description: "Program focused on commerce, accounting, economics, and business management.",
    category: "undergraduate",
    duration: "3 Years",
    type: "Full-time",
    details: "The Bachelor of Commerce (B.Com.) program provides comprehensive knowledge of commerce, accounting, economics, and business management. Students learn financial accounting, business law, taxation, auditing, and economics. The program develops analytical and quantitative skills required for careers in accounting, banking, finance, and corporate management."
  },
  {
    id: "bsw",
    name: "B.S.W.",
    fullName: "Bachelor of Social Work",
    description: "Program focused on social welfare, community development, and social services.",
    category: "undergraduate",
    duration: "3 Years",
    type: "Full-time",
    details: "The Bachelor of Social Work (B.S.W.) program prepares students for careers in social welfare, community development, and social services. The curriculum covers social policy, human behavior, community organization, and intervention strategies. Students gain practical experience through field placements and community projects, developing skills to address social issues and support vulnerable populations."
  },
  
  // Postgraduate Programs
  {
    id: "ma-hindi",
    name: "M.A. Hindi",
    fullName: "Master of Arts in Hindi",
    description: "Advanced study of Hindi literature, language, and cultural contexts.",
    category: "postgraduate",
    duration: "2 Years",
    type: "Full-time",
    details: "The Master of Arts in Hindi program offers advanced study of Hindi literature, language, and cultural contexts. Students explore classical and contemporary Hindi works, literary theory, and linguistic analysis. The program prepares graduates for careers in teaching, research, translation, and cultural institutions."
  },
  {
    id: "ma-english",
    name: "M.A. English",
    fullName: "Master of Arts in English",
    description: "Advanced study of English literature, language, and critical theory.",
    category: "postgraduate",
    duration: "2 Years",
    type: "Full-time",
    details: "The Master of Arts in English program offers advanced study of English literature, language, and critical theory. Students analyze works from various periods and traditions, developing advanced research and writing skills. Graduates are prepared for careers in education, publishing, content creation, and further academic research."
  },
  {
    id: "ma-sanskrit",
    name: "M.A. Sanskrit",
    fullName: "Master of Arts in Sanskrit",
    description: "Advanced study of Sanskrit literature, grammar, and classical texts.",
    category: "postgraduate",
    duration: "2 Years",
    type: "Full-time",
    details: "The Master of Arts in Sanskrit program offers in-depth study of classical Sanskrit literature, grammar, and ancient texts. Students explore Vedic literature, classical poetry, drama, and philosophical works. The program preserves traditional knowledge while preparing students for careers in education, research, and cultural preservation."
  },
  {
    id: "ma-education",
    name: "M.A. Education",
    fullName: "Master of Arts in Education",
    description: "Advanced study of educational theory, curriculum development, and teaching methodologies.",
    category: "postgraduate",
    duration: "2 Years",
    type: "Full-time",
    details: "The Master of Arts in Education program offers advanced study of educational theory, curriculum development, and teaching methodologies. Students explore learning psychology, educational policy, assessment techniques, and instructional design. The program prepares educators for leadership roles in schools, educational administration, and curriculum development."
  },
  {
    id: "ma-history",
    name: "M.A. History",
    fullName: "Master of Arts in History",
    description: "Advanced study of historical events, historiography, and research methods.",
    category: "postgraduate",
    duration: "2 Years",
    type: "Full-time",
    details: "The Master of Arts in History program offers advanced study of historical events, historiography, and research methods. Students analyze Indian and world history, examining cultural, political, and social developments. The program develops critical thinking and research skills for careers in education, archives, museums, and historical research."
  },
  {
    id: "ma-political-science",
    name: "M.A. Political Science",
    fullName: "Master of Arts in Political Science",
    description: "Advanced study of political theory, governance, and international relations.",
    category: "postgraduate",
    duration: "2 Years",
    type: "Full-time",
    details: "The Master of Arts in Political Science program offers advanced study of political theory, governance, and international relations. Students analyze political systems, public policy, and global politics. The program prepares graduates for careers in government, policy analysis, civil services, and political consulting."
  },
  {
    id: "ma-rural-development",
    name: "M.A. Rural Development",
    fullName: "Master of Arts in Rural Development",
    description: "Advanced study of rural society, development strategies, and policy implementation.",
    category: "postgraduate",
    duration: "2 Years",
    type: "Full-time",
    details: "The Master of Arts in Rural Development program focuses on rural society, development strategies, and policy implementation. Students learn about agricultural economics, rural sociology, natural resource management, and community development. The program prepares graduates for careers in rural development agencies, NGOs, government departments, and research institutions."
  },
  {
    id: "msw",
    name: "M.S.W.",
    fullName: "Master of Social Work",
    description: "Advanced professional degree for social welfare and community development practitioners.",
    category: "postgraduate",
    duration: "2 Years",
    type: "Full-time",
    details: "The Master of Social Work (M.S.W.) program is an advanced professional degree for social welfare and community development practitioners. Students develop specialized skills in case management, community organization, policy analysis, and program evaluation. The program includes extensive field work and prepares graduates for leadership roles in social service agencies, healthcare, education, and advocacy organizations."
  },
  {
    id: "mcom",
    name: "M.Com.",
    fullName: "Master of Commerce",
    description: "Advanced study of commerce, accounting, finance, and business management.",
    category: "postgraduate",
    duration: "2 Years",
    type: "Full-time",
    details: "The Master of Commerce (M.Com.) program provides advanced knowledge in commerce, accounting, finance, and business management. Students develop expertise in financial analysis, advanced accounting, corporate law, and business strategy. The program prepares graduates for careers in accounting, financial management, corporate planning, and academic research."
  },
  
  // Diploma Programs
  
  {
    id: "djmc",
    name: "DJMC",
    fullName: "Diploma in Journalism and Mass Communication",
    description: "Professional program focused on journalism, media studies, and communication.",
    category: "diploma",
    duration: "1 Year",
    type: "Full-time",
    details: "The Diploma in Journalism and Mass Communication (DJMC) program prepares students for careers in media, journalism, and communication. Students learn news reporting, editing, media laws, photography, and digital media production. The program develops practical skills through media projects and internships, preparing graduates for roles in print, broadcast, and digital media organizations. Affiliated from: Makhanlal Chaturvedi University, Bhopal"
  },
  {
    id: "dcs",
    name: "DCS",
    fullName: "Diploma in Cyber Security",
    description: "Specialized program focusing on cyber security, ethical hacking, and digital forensics.",
    category: "diploma",
    duration: "1 Year",
    type: "Full-time",
    details: "The Diploma in Cyber Security program covers network security, ethical hacking, digital forensics, and information security management. Students learn to identify vulnerabilities, implement security measures, and respond to cyber threats. The program prepares graduates for careers in cyber security, IT security consulting, and digital forensics. Affiliated from: Makhanlal Chaturvedi University, Bhopal"
  },
  {
    id: "dyoga",
    name: "DY",
    fullName: "Diploma in Yoga",
    description: "Program focused on yoga philosophy, practices, and therapeutic applications.",
    category: "diploma",
    duration: "1 Year",
    type: "Full-time",
    details: "The Diploma in Yoga program provides comprehensive knowledge of yoga philosophy, postures (asanas), breathing techniques (pranayama), and meditation. Students learn the therapeutic applications of yoga and how to design yoga programs for different populations. The program prepares graduates for careers as yoga instructors, wellness coaches, and yoga therapists. Affiliated from: Makhanlal Chaturvedi University, Bhopal"
  },
  {
    id: "dhre",
    name: "DHRE",
    fullName: "Diploma in Human Rights Education",
    description: "Program focused on human rights principles, advocacy, and implementation.",
    category: "diploma",
    duration: "1 Year",
    type: "Full-time",
    details: "The Diploma in Human Rights Education (DHRE) program covers human rights principles, international conventions, advocacy strategies, and implementation mechanisms. Students develop skills to promote and protect human rights through education, policy analysis, and community engagement. The program prepares graduates for careers in human rights organizations, legal aid, social justice advocacy, and education. Affiliated from: Makhanlal Chaturvedi University, Bhopal"
  },
  {
    id: "ddm",
    name: "DDM",
    fullName: "Diploma in Disaster Management",
    description: "Program focused on disaster preparedness, response, recovery, and mitigation strategies.",
    category: "diploma",
    duration: "1 Year",
    type: "Full-time",
    details: "The Diploma in Disaster Management (DDM) program covers disaster preparedness, emergency response, recovery planning, and mitigation strategies. Students learn about natural and man-made disasters, risk assessment, community resilience, and crisis management. The program prepares graduates for careers in emergency management agencies, humanitarian organizations, and disaster relief operations. Affiliated from: Makhanlal Chaturvedi University, Bhopal"
  },
  {
    id: "diprm",
    name: "DIPRM",
    fullName: "Diploma in Industrial Relations & Personal Management",
    description: "Program focused on labor relations, human resource management, and workplace regulations.",
    category: "diploma",
    duration: "1 Year",
    type: "Full-time",
    details: "The Diploma in Industrial Relations & Personal Management (DIPRM) program covers labor laws, collective bargaining, conflict resolution, and human resource management. Students develop skills in employee relations, performance management, and organizational development. The program prepares graduates for careers in HR departments, labor relations, and personnel management across various industries. Affiliated from: Makhanlal Chaturvedi University, Bhopal"
  },
  {
    id: "dngom",
    name: "DNGOM",
    fullName: "Diploma in Management of NGOs",
    description: "Program focused on non-profit management, fundraising, and social impact strategies.",
    category: "diploma",
    duration: "1 Year",
    type: "Full-time",
    details: "The Diploma in Management of NGOs (DNGOM) program covers non-profit governance, project management, fundraising, and social impact assessment. Students learn strategic planning, stakeholder engagement, and sustainable development principles. The program prepares graduates for leadership and management roles in non-governmental organizations, social enterprises, and community development programs. Affiliated from: Makhanlal Chaturvedi University, Bhopal"
  }
];
