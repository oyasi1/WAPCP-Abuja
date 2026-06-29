import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'; 
//import adenijiBusayo from "./adenijiBusayo.jpg";
//import drtijani from "./drtijani.jpg";
//import drSundayOlatunde from "./drSundayOlatunde.jpg";
//import obuteNgozi from "./obuteNgozi.jpg";
//import zainabGaladima from "./zainabGaladima.jpg";
//import valentineO from "./valentineO.jpg";
//import isaHayatuGaladinma from "./isaHayatuGaladinma.jpg";
//import emaEunice from "./emaEunice.jpg";
//import drAbubakarDanraka from "./drAbubakarDanraka.jpg"


export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
  },
  {
    id: 3,
    url: '/journals',
    text: 'Journals',
  },
  {
    id: 4,
    url: '/contact',
    text: 'Contacts',
  },
  {
    id: 5,
    url: '/logIn',
    text: 'LogIn',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
];

/*const images = {
  adenijiBusayo,
  drtijani,
  drSundayOlatunde,
  obuteNgozi,
  zainabGaladima,
  valentineO,
  isaHayatuGaladinma,
  emaEunice,
  drAbubakarDanraka
};



export const teamMembers = [
  {
    id: "member-1",
    name: "Dr. Tijani Mufutau Oyedele",
    role: "FPCPharm, DSA, MAW, MCPAN ASCONIAN",
    message: "Zonal Cordinator WAPCP FCT Zone",
    avatar: images.drtijani,
    coverImage: "https://picsum.photos/id/20/320/140",
    badge: "⭐ Executive Member"
  },
  {
    id: "member-2",
    name: "Pharm. Dr. Sunday Olatunde",
    role: "FPCPharm",
    message: "The specialized training programs elevated our practice standards.",
    avatar: images.drSundayOlatunde,
    coverImage: "https://picsum.photos/id/20/320/140",
    badge: null
  },
  {
    id: "member-3",
    name: "Pharm. Obute Ngozi Uzoamaka",
    role: "B.Pharm, FPCPharm, MPH",
    message: "Secretary (WAPCP) FCT Zone.",
    avatar: images.obuteNgozi,
    coverImage: "https://picsum.photos/id/20/320/140",
    badge: null
  },
  {
    id: "member-4",
    name: "Pharm. Zainab Galadima Abubakar",
    role: "B.Pharm, MSc Public Health, FPCPharm",
    message: " Editor-in-Chief Abuja Journal of Pharmaceutical and Health Sciences (AJPHS)",
    avatar: images.zainabGaladima,
    coverImage: "https://picsum.photos/id/20/320/140",
    badge: null
  },
  {
    id: "member-5",
    name: "Pharm. Valentine Omololu Adegoke",
    role: "Consultant Pharmacist",
    message: "phone: +2347038930984 Email: valadegoke@gmail.com",
    avatar: images.valentineO,
    coverImage: "https://picsum.photos/id/20/320/140",
    badge: null
  },
  {
    id: "member-6",
    name: "Pharm. Adeniji Busayo Monsurat",
    role: "Clinical Pharmacist",
    message: " Editor-in-Chief: Association of Hospital and Administrative Pharmacist of Nigeria (AHAPN)",
    avatar: images.adenijiBusayo,
    coverImage: "https://picsum.photos/id/20/320/140",
    badge: null
  },
  {
    id: "member-7",
    name: "Pharm. Isa Hayatu Galadima",
    role: "Research Fellow / Consultant Clinical Pharmacist",
    message: "Isa Hayatu Galadima (FPCPharm) is a Senior Research Fellow and Consultant Clinical Pharmacist in the Department of Medicinal Chemistry & Quality Control (MC&QC) National Institute for Pharmaceutical Research and Development (NIPRD)",
    avatar: images.isaHayatuGaladinma,
    coverImage: "https://picsum.photos/id/20/320/140",
    badge: null
  },
  {
    id: "member-8",
    name: "Pharm. Ema Eunice Gado",
    role: "Chief Pharmacist",
    message: "Ema is Currently a Chief Pharmacist at National Hospital Abuja, where she oversees Pharmaceutical operations and contributes to strengthening medication safety, inventory accountability and efficient health commodity management.",
    avatar: images.emaEunice,
    coverImage: "https://picsum.photos/id/20/320/140",
    badge: null
  },
  {
    id: "member-9",
    name: "Pharm. Dr. Abubakar Danraka",
    role: "Clinical Pharmacy Specialist",
    message: "Dr. Danraka is a passionate Nigerian Pharmacist with specialization in Drug Production and Pharmaceutical Quality Systems. Dr. Danraka was the pioneer Editor of AJPHS and immediate past Zonal Coordinator WAPCP Abuja Zone.",
    avatar: images.drAbubakarDanraka,
    coverImage: "https://picsum.photos/id/20/320/140",
    badge: null
  },
  // Add more team members as needed...
];

export const getTeamMembers = (count) => {
  const members = [...teamMembers];
  const roles = [
    "Chief Pharmacist", "Clinical Pharmacy Specialist", "Pharmacy Manager", 
    "Regulatory Affairs Lead", "Pharmaceutical Consultant", "Research Pharmacist"
  ];
  const feedback = [
    "WAPCP has transformed pharmaceutical services delivery in FCT.",
    "The specialized training programs elevated our practice standards.",
    "Exceptional network of pharmaceutical professionals.",
    "The advocacy and support from WAPCP is unparalleled.",
    "Best decision to join this professional community.",
    "The collaboration opportunities are invaluable.",
  ];
  const names = [
    "Dr. Adebayo Ogunlesi", "Pharm. Ngozi Okonkwo", "Dr. Ibrahim Suleiman", 
    "Pharm. Fatima Bello", "Dr. Chukwuma Eze", "Pharm. Grace Emmanuel"
  ];
  
  /*while (members.length < count) {
    const i = members.length;
    members.push({
      id: `member-${members.length + 1}`,
      name: names[i % names.length] + (i >= names.length ? ` ${Math.floor(i / names.length) + 1}` : ""),
      role: roles[i % roles.length],
      message: feedback[i % feedback.length],
      avatar: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${(i % 70) + 1}.jpg`,
      coverImage: `https://picsum.photos/id/${(i * 13) % 300 + 20}/320/140`,
      badge: i % 5 === 0 ? "⭐ Executive Member" : null,
    });
  }
  */


  // app/team/data.js
export const teamMembers = [
  {
    id: 1,
    name: 'Pharm. Dr. Tijani M. Oyedele',
    role: 'Zonal Coordinator, WAPCP FCT Zone',
    slug: 'tijani-oyedele',
    imageUrl: '/images/drtijani.jpg',
    bio: 'Dr. Tijani M. Oyedele is a renowned pharmaceutical professional with over 15 years of experience in pharmacy practice. He has been instrumental in advancing pharmaceutical care in the FCT and has served in various leadership capacities within the West African Postgraduate College of Pharmacists. A Consultant Specialist GD 1, Pharmacist who subspecialized in critical care and Specialized Nutrition. A seasoned and appionted preceptor and supervisor of the College who has carried out and still playing these roles successfully on several students of the College and some Postgraduate students from other institutions, always in the forefront in activities of the college.',
    email: 'tijani.oyedele@wapcp.org',
    phone: '+234 803 456 7890',
    linkedin: 'https://linkedin.com/in/tijani-oyedele',
    twitter: 'https://twitter.com/tijani_oyedele',
    education: [
      'PhD in Clinical Pharmacy, University of Ibadan',
      'MSc in Pharmacy Administration, University of Lagos',
      'BPharm, Ahmadu Bello University'
    ],
    certifications: [
      'Fellow, West African Postgraduate College of Pharmacists (FWAPCP)',
      'Certified Clinical Pharmacist (CCP)'
    ],
    achievements: [
      'Led the development of pharmacy practice standards for the FCT',
      'Published over 20 research papers in peer-reviewed journals',
      'Received the Excellence in Pharmacy Practice Award (2022)'
    ]
  },
  {
    id: 2,
    name: 'Pharm. Zainab Galadima Abubakar',
    role: 'Deputy Zonal Coordinator, WAPCP FCT Zone',
    slug: 'zainab-galadima',
    imageUrl: '/images/zainabGaladima.jpg',
    bio: 'Pharm. Zainab Galadima Abubakar is a dedicated pharmacy professional with expertise in public health pharmacy. She is a Clinical and Public Health Pharmacist with a passion for advancing pharmaceutical care practice, patiant outcomes, and the next generation of pharmacy professionals. she is an Assistant Director of Pharmaceutical Services at the University of Abuja Teaching Hospital (UATH), Gwagwalada FCT, One of Nigerias foremost tertiary health institutions. she has been actively involved in advancing pharmaceutical education and practice across the FCT.',
    email: 'zaynabgaladima2009@gmail.com',
    phone: '+234 803 691 6215',
    linkedin: 'https://linkedin.com/in/zainab-abubakar-9b4aa097',
    twitter: 'https://twitter.com/zainab_abubakar',
    education: [
      'MSc in Public Health Pharmacy, University of Nigeria',
      'BPharm, University of Jos'
    ],
    certifications: [
      'Member, Pharmaceutical Society of Nigeria (PSN)',
      'Fellow, West African Postgraduate College of Pharmacists (FWAPCP)',
      'Permaceutical Society of Nigeria (PSN)',
      'Association of Hospital and Administrative Pharmacist of Nigeria (AHAPN)',
      'Clinical Pharmacist Association of Nigeria (CPAN)- Infectious Disease Specialty IDPan'
    ],
    achievements: [
      'Research Design & Methodology',
      'Public Health & Epidemiology',
      'Clinical Pharmacy & Infectious Disease Pharmacotherapy',
      'Quantitative & Qualitative Data Analysis',
      'Systematic & Scoping Review (JBI / PRISMA-ScR)',
      'Research to Publication Mentoring with a strong track record of guiding pharmacy interns and junior pharmacists from research conception through to published work.'
    ]
  },
  {
    id: 3,
    name: 'Pharm. Obute Ngozi Uzoamaka',
    role: 'Secretary, WAPCP FCT Zone',
    slug: 'obute-ngozi',
    imageUrl: '/images/obuteNgozi.jpg',
    bio: 'Pharm. Obute Ngozi Uzoamaka is a dedicated and result oriented pharmacist with strong experience in clinical pharmacy practice, public health and patient centered care. She is skilled in public speaking, health advocacy, communication and professional engagement. Ngozi has served in several leadership capacity within the pharmacy profession, including chairman of Association of Hospital and Administrative Pharmacists of Nigeria (AHAPN), FMC chapter. she is passionate about professional development, healthcare advocacy, and community impact. outside her professional activities she enjoys reading, dancing and singing.',
    email: 'ngozi.obute@wapcp.org',
    phone: '+234 803 456 7892',
    linkedin: 'https://linkedin.com/in/ngozi-obute',
    twitter: 'https://twitter.com/ngozi_obute',
    education: [
      'Master of Public Health',
      'Fellowship of West African Postgraduate College of Pharmacists (FPCPharm)',
      'Bachelor of Pharmacy (B.Pharm),'
    ],
    certifications: [
      'Fellow, West African Postgraduate College of Pharmacists (FWAPCP)',
      'Association of Hospital and Administrative Pharmacists of Nigeria (AHAPN)'
    ],
    achievements: [
      'Implemented standardized documentation systems in 5 hospitals',
      'Secretary of FCT Pharmacy Ethics Committee (2021-2023)'
    ]
  },
  {
    id: 4,
    name: 'Dr. Abubakar Danraka',
    role: 'Immediate Past Zonal Coordinator, WAPCP FCT Zone',
    slug: 'abubakar-danraka',
    imageUrl: '/images/drabubakarDanraka.jpg',
    bio: 'Dr. Abubakar Danraka is a distinguished pharmaceutical scientist and academic. He served as the immediate past Zonal Coordinator and has been a mentor to countless pharmacists in the FCT. Mr Danraka is a passionate Nigerian Pharmacist wth specialization in Drug production and Pharmaceutical Quality Systems, spanning over two decades of experience in Hospital and Administrative Pharmacy Practice and Public Health. He is also a Health Sociologist with interest in Social Epidemiology and Social Pharmacy Research with over 50 peer reviewed publications and a score of scientific seminars & public presentations as contributions to knowledge and practice to his credit. Dr. Danrakawas the pioneer Editor of AJPHS.   ',
    email: 'abubakar.danraka@wapcp.org',
    phone: '+234 803 456 7893',
    linkedin: 'https://linkedin.com/in/abubakar-danraka',
    twitter: 'https://twitter.com/danraka_abubakar',
    education: [
      'PhD in Pharmaceutics, University of Ibadan',
      'MPharm, Ahmadu Bello University',
      'BPharm, University of Maiduguri'
    ],
    certifications: [
      'Fellow, West African Postgraduate College of Pharmacists (FWAPCP)',
      'Fellow, Nigerian Academy of Pharmacy (FNAPharm)'
    ],
    achievements: [
      'Established 3 new residency training programs',
      'Recipient of the Lifetime Achievement Award in Pharmacy (2023)'
    ]
  },
  {
    id: 5,
    name: 'Dr. Olatunde Simeon',
    role: 'Publicity Secretary, WAPCP FCT Zone',
    slug: 'olatunde-simeon',
    imageUrl: '/images/drSundayOlatunde.jpg',
    bio: 'Dr. Olatunde Simeon is a passionate pharmacy professional with expertise in pharmaceutical marketing and public health communications. He currently serves as the Publicity Secretary of the WAPCP FCT Zone.',
    email: 'olatunde.simeon@wapcp.org',
    phone: '+234 803 456 7894',
    linkedin: 'https://linkedin.com/in/olatunde-simeon',
    twitter: 'https://twitter.com/olatunde_simeon',
    education: [
      'Doctor of Pharmacy',
      'Bachelor of Pharmacy (BPharm)'
    ],
    certifications: [
      'Fellow, West African Postgraduate College of Pharmacists (FWAPCP)'
    ],
    achievements: [
      'Cardiovascular Pharmacy Specialist',
      'Media Health Advocate',
      'Public Health Analyst'
    ]
  },
  {
    id: 6,
    name: 'Pharm. Isa Hayatu Galadima',
    role: 'Treasurer, WAPCP FCT Zone',
    slug: 'isa-hayatu-galadima',
    imageUrl: '/images/isaHayatuGaladinma.jpg',
    bio: 'Pharm. Isa Hayatu Galadima is a meticulous pharmacy administrator with expertise in financial management and pharmaceutical procurement. He serves as the Treasurer of the WAPCP FCT Zone.',
    email: 'isa.galadima@wapcp.org',
    phone: '+234 803 456 7895',
    linkedin: 'https://linkedin.com/in/isa-galadima',
    twitter: 'https://twitter.com/isa_galadima',
    education: [
      'MBA, University of Abuja',
      'BPharm, University of Ilorin'
    ],
    certifications: [
      'Fellow, West African Postgraduate College of Pharmacists (FWAPCP)',
      'Certified Pharmacy Financial Manager (CPFM)'
    ],
    achievements: [
      'Implemented transparent financial reporting system',
      'Managed annual budgets exceeding ₦50 million with 98% accountability'
    ]
  }
];

// Add Mission & Vision Data
export const missionData = {
  mission: {
    title: 'Our Mission',
    description: 'To advance pharmaceutical care and professional development in the FCT through excellence in education, practice standards, and collaborative leadership.',
    pillars: [
      { icon: '⚕️', label: 'Patient Care' },
      { icon: '👥', label: 'Community Impact' },
      { icon: '💡', label: 'Innovation' },
      { icon: '📈', label: 'Professional Growth' }
    ]
  },
  vision: {
    title: 'Our Vision',
    description: 'To be the leading pharmaceutical organization in West Africa, setting the standard for professional excellence, innovation, and patient-centered care.',
    goals: [
      'Excellence in pharmaceutical education and practice',
      'Innovative healthcare solutions for communities',
      'Collaborative leadership in pharmacy advancement'
    ]
  },
  values: [
    { icon: '⚕️', label: 'Professionalism', color: 'blue' },
    { icon: '🤝', label: 'Collaboration', color: 'green' },
    { icon: '💡', label: 'Innovation', color: 'purple' },
    { icon: '❤️', label: 'Integrity', color: 'red' },
    { icon: '🌟', label: 'Excellence', color: 'yellow' },
    { icon: '🌍', label: 'Community', color: 'teal' }
  ],
  stats: [
    { number: '15+', label: 'Years of Excellence' },
    { number: '50+', label: 'Active Members' },
    { number: '100+', label: 'Communities Served' },
    { number: '20+', label: 'Research Publications' }
  ]
};

export const mission = missionData.mission;
export const vision = missionData.vision;
export const values = missionData.values;




// components/data.js

// Add this to your existing data file
export const blogPosts = [
  {
    id: 1,
    title: 'WAPCP FCT Zone Inauguration Ceremony',
    slug: 'wapcp-fct-zone-inauguration',
    excerpt: 'The West African Postgraduate College of Pharmacists FCT Zone officially launched with a grand ceremony attended by dignitaries and pharmacy professionals.',
    content: 'Full article content here...',
    category: 'Events',
    author: 'Dr. Olatunde Simeon',
    authorRole: 'Publicity Secretary',
    date: '2024-01-15',
    readTime: '5 min read',
    imageUrl: '/images/blog/inauguration.jpg', // Add your image
    featured: true,
    tags: ['Inauguration', 'Events', 'Leadership']
  },
  {
    id: 2,
    title: 'Advancing Pharmaceutical Care in the FCT',
    slug: 'advancing-pharmaceutical-care-fct',
    excerpt: 'A comprehensive look at how the WAPCP FCT Zone is working to improve pharmaceutical care standards across the Federal Capital Territory.',
    content: 'Full article content here...',
    category: 'Pharmacy Practice',
    author: 'Pharm. Dr. Tijani M. Oyedele',
    authorRole: 'Zonal Coordinator',
    date: '2024-02-01',
    readTime: '7 min read',
    imageUrl: '/images/blog/pharmacy-care.jpg',
    featured: false,
    tags: ['Pharmacy Practice', 'Healthcare', 'FCT']
  },
  {
    id: 3,
    title: 'Capacity Building Workshop for Pharmacists',
    slug: 'capacity-building-workshop-pharmacists',
    excerpt: 'Over 100 pharmacists attended the recent capacity building workshop focused on modern pharmacy practices and patient-centered care.',
    content: 'Full article content here...',
    category: 'Training',
    author: 'Pharm. Zainab Galadima Abubakar',
    authorRole: 'Deputy Zonal Coordinator',
    date: '2024-02-20',
    readTime: '4 min read',
    imageUrl: '/images/blog/workshop.jpg',
    featured: false,
    tags: ['Training', 'Workshop', 'Professional Development']
  },
  {
    id: 4,
    title: 'Collaborative Healthcare Solutions for the FCT',
    slug: 'collaborative-healthcare-solutions-fct',
    excerpt: 'WAPCP FCT Zone partners with healthcare organizations to develop innovative solutions for better patient outcomes.',
    content: 'Full article content here...',
    category: 'Collaboration',
    author: 'Pharm. Isa Hayatu Galadima',
    authorRole: 'Treasurer',
    date: '2024-03-05',
    readTime: '6 min read',
    imageUrl: '/images/blog/collaboration.jpg',
    featured: false,
    tags: ['Collaboration', 'Healthcare', 'Partnership']
  },
  {
    id: 5,
    title: 'Research Excellence in Pharmacy Practice',
    slug: 'research-excellence-pharmacy-practice',
    excerpt: 'WAPCP FCT Zone researchers publish groundbreaking studies on pharmaceutical interventions and healthcare outcomes.',
    content: 'Full article content here...',
    category: 'Research',
    author: 'Dr. Abubakar Danraka',
    authorRole: 'Immediate Past Zonal Coordinator',
    date: '2024-03-18',
    readTime: '8 min read',
    imageUrl: '/images/blog/research.jpg',
    featured: false,
    tags: ['Research', 'Innovation', 'Publications']
  },
  {
    id: 6,
    title: 'Community Outreach Program 2024',
    slug: 'community-outreach-program-2024',
    excerpt: 'WAPCP FCT Zone launches community health initiative to provide free health screenings and medication counseling.',
    content: 'Full article content here...',
    category: 'Community',
    author: 'Pharm. Obute Ngozi Uzoamaka',
    authorRole: 'Secretary',
    date: '2024-04-02',
    readTime: '5 min read',
    imageUrl: '/images/blog/community-outreach.jpg',
    featured: false,
    tags: ['Community', 'Outreach', 'Healthcare']
  }
];

// Helper function to get unique categories
export const getCategories = () => {
  const categories = blogPosts.map(post => post.category);
  return ['All', ...new Set(categories)];
};

// Helper function to get unique tags
export const getTags = () => {
  const tags = blogPosts.flatMap(post => post.tags);
  return [...new Set(tags)];
};


// components/data.js

// Add this to your existing data file
export const journals = [
  {
    id: 1,
    title: 'Journal of West African Pharmacy Practice',
    slug: 'journal-west-african-pharmacy-practice',
    description: 'A comprehensive peer-reviewed journal covering pharmaceutical research, clinical practices, and healthcare innovations in West Africa.',
    category: 'Research',
    authors: ['Dr. Tijani M. Oyedele', 'Pharm. Zainab Galadima'],
    publishDate: '2024-03-15',
    volume: '12',
    issue: '2',
    pages: '45-67',
    pdfUrl: '/journals/jwap-practice.pdf', // Add your PDF files
    coverImage: '/images/journals/jwap-cover.jpg', // Add your images
    abstract: 'This study examines the current state of pharmaceutical practice in West Africa, highlighting key challenges and opportunities for improvement. The research draws on data from 500 pharmacists across the region.',
    keywords: ['Pharmacy Practice', 'West Africa', 'Healthcare', 'Clinical Research'],
    citations: 15
  },
  {
    id: 2,
    title: 'Advances in Clinical Pharmacy Research',
    slug: 'advances-clinical-pharmacy-research',
    description: 'Cutting-edge research on clinical pharmacy interventions, patient outcomes, and evidence-based practice in the African context.',
    category: 'Clinical',
    authors: ['Pharm. Obute Ngozi Uzoamaka', 'Dr. Abubakar Danraka'],
    publishDate: '2024-02-10',
    volume: '11',
    issue: '4',
    pages: '78-92',
    pdfUrl: '/journals/clinical-pharmacy-advances.pdf',
    coverImage: '/images/journals/clinical-cover.jpg',
    abstract: 'This paper presents findings from a multicenter study on the impact of clinical pharmacy services on patient outcomes in Nigerian hospitals. Results show significant improvements in medication adherence and patient satisfaction.',
    keywords: ['Clinical Pharmacy', 'Patient Outcomes', 'Evidence-Based Practice', 'Nigeria'],
    citations: 8
  },
  {
    id: 3,
    title: 'Pharmaceutical Education and Professional Development',
    slug: 'pharmaceutical-education-development',
    description: 'An in-depth analysis of pharmaceutical education curricula, continuing professional development, and training methodologies.',
    category: 'Education',
    authors: ['Pharm. Isa Hayatu Galadima', 'Dr. Olatunde Simeon'],
    publishDate: '2024-01-20',
    volume: '10',
    issue: '3',
    pages: '112-125',
    pdfUrl: '/journals/pharm-education.pdf',
    coverImage: '/images/journals/education-cover.jpg',
    abstract: 'This research explores the evolution of pharmaceutical education in West Africa, identifying gaps and proposing innovative approaches to enhance professional training and development.',
    keywords: ['Pharmaceutical Education', 'Professional Development', 'Training', 'Curriculum'],
    citations: 12
  },
  {
    id: 4,
    title: 'Public Health Pharmacy and Community Engagement',
    slug: 'public-health-pharmacy-community',
    description: 'Exploring the role of pharmacists in public health initiatives, community engagement, and health promotion across West Africa.',
    category: 'Public Health',
    authors: ['Pharm. Zainab Galadima Abubakar', 'Pharm. Dr. Tijani M. Oyedele'],
    publishDate: '2023-12-05',
    volume: '9',
    issue: '1',
    pages: '34-50',
    pdfUrl: '/journals/public-health-pharmacy.pdf',
    coverImage: '/images/journals/public-health-cover.jpg',
    abstract: 'This study examines community pharmacy interventions in public health, focusing on vaccination campaigns, health education, and disease prevention programs across urban and rural communities.',
    keywords: ['Public Health', 'Community Pharmacy', 'Health Promotion', 'Prevention'],
    citations: 20
  },
  {
    id: 5,
    title: 'Innovations in Pharmaceutical Technology',
    slug: 'innovations-pharmaceutical-technology',
    description: 'Exploring emerging technologies in pharmaceutical manufacturing, drug delivery systems, and quality assurance.',
    category: 'Technology',
    authors: ['Dr. Abubakar Danraka', 'Pharm. Isa Hayatu Galadima'],
    publishDate: '2023-11-15',
    volume: '8',
    issue: '2',
    pages: '156-170',
    pdfUrl: '/journals/pharma-technology.pdf',
    coverImage: '/images/journals/tech-cover.jpg',
    abstract: 'This review article covers recent innovations in pharmaceutical technology, including nanotechnology, 3D printing, and AI applications in drug development and quality control.',
    keywords: ['Pharmaceutical Technology', 'Innovation', 'Drug Delivery', 'Nanotechnology'],
    citations: 25
  },
  {
    id: 6,
    title: 'Regulatory Affairs and Pharmacy Practice',
    slug: 'regulatory-affairs-pharmacy-practice',
    description: 'Examining regulatory frameworks, policy developments, and their impact on pharmacy practice in the West African region.',
    category: 'Regulatory',
    authors: ['Dr. Olatunde Simeon', 'Pharm. Obute Ngozi Uzoamaka'],
    publishDate: '2023-10-22',
    volume: '7',
    issue: '4',
    pages: '201-218',
    pdfUrl: '/journals/regulatory-affairs.pdf',
    coverImage: '/images/journals/regulatory-cover.jpg',
    abstract: 'This paper analyzes the regulatory landscape for pharmaceutical practice in West Africa, highlighting challenges and proposing harmonization strategies to improve healthcare outcomes.',
    keywords: ['Regulatory Affairs', 'Pharmacy Regulation', 'Policy', 'Compliance'],
    citations: 10
  },

  {
    id: 7,
    title: 'Abuja Journal of Pharmaceutical and Health Sciences',
    slug: 'abuja-journal-of-pharmaceutical-and-health-sciences',
    description: 'A comprehensive peer-reviewed journal covering pharmaceutical research, clinical practices, and healthcare innovations in West Africa.',
    category: 'Research',
    authors: ['Dr. Tijani M. Oyedele', 'Pharm. Zainab Galadima'],
    publishDate: '2025-10-15',
    volume: '1',
    issue: '1',
    pages: '45-67',
    pdfUrl: 'https://wapcpharmabuja.com.ng', // Add your PDF files
    coverImage: '/images/danra.jpg', // Add your images
    abstract: 'This study examines the current state of pharmaceutical practice in West Africa, highlighting key challenges and opportunities for improvement. The research draws on data from 500 pharmacists across the region.',
    keywords: ['Pharmacy Practice', 'West Africa', 'Healthcare', 'Clinical Research'],
    citations: 15
  },
];

// Helper function to get unique journal categories
export const getJournalCategories = () => {
  const categories = journals.map(journal => journal.category);
  return ['All', ...new Set(categories)];
};

// Helper function to get unique years
export const getJournalYears = () => {
  const years = journals.map(journal => new Date(journal.publishDate).getFullYear());
  return ['All', ...new Set(years)];
};