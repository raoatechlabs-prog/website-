// All page copy lives here so it can be edited without touching layout code.
// Source: "RAOATECH R&D AND INNOVATION POINT — LABS / SMART CAP" executive overview.

export const site = {
  name: 'Raoatech R&D and Innovation Point',
  legalName: 'Raoatech IT-Electromech Limited',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.raoatechlabs.com',
  description:
    "West Africa's deep-tech incubator and venture studio in Yaba, Lagos. 12 specialized labs, the Smart Cap data engine, and partnership tracks for talent, grants and investment.",
  address: '1A Hughes Avenue, Alagomeji, Yaba, Lagos, Nigeria',
  /** Where website enquiries are delivered (Resend). */
  email: 'hello@raoatechlabs.com',
  /** The address shown to visitors, from the Gemini content. */
  publicEmail: 'info@raoatech.com',
  phone: { display: '+234 809 722 7051', tel: '+2348097227051', whatsapp: 'https://wa.me/2348097227051' },
  district: 'Sabo–Yaba Innovation District, Lagos',
  portals: ['www.raoatechlabs.com', 'www.raoatech.com'],
}

export const nav = [
  { href: '#top', label: 'Showcase' },
  { href: '#labs', label: 'Labs & Services' },
  { href: '#academic', label: 'Academic Alliances' },
  { href: '#industry', label: 'Industry Impact' },
  { href: '#talent', label: 'Talent Pipeline' },
  { href: '#donate', label: 'Donate' },
]

export type Person = { name: string; role: string; org?: string; photo: string }

export type Profile = { name: string; role: string; photo: string; bio: string[] }

// Full profiles. More executives' profiles will be added in the next version.
export const profiles: Profile[] = [
  {
    name: 'Oludare Olarewaju',
    role: 'Founder, Chief Executive Officer & Chief Product Architect',
    photo: 'oludare-profile',
    bio: [
      'Oludare Olarewaju is a serial technology entrepreneur, innovation ecosystem builder, product strategist, and software quality assurance leader with over 15 years of experience across enterprise solutions architecture, software engineering, edtech, fintech, artificial intelligence, and venture development.',
      'As the Founder, CEO, and Chief Product Architect of Raoatech IT-Electromech Limited, Oludare drives the strategic direction, technical architecture, and operational scale of the company’s enterprise platforms and commercialization programs. He is also the visionary behind the Raoatech R&D and Innovation Point, a commercialization-driven ecosystem designed to bridge academic research, advanced technology prototyping, and venture creation. His professional trajectory includes founding Techxia Communications & Automation and early hands-on technical experience in telecoms engineering, specializing in VSAT installation, networking, and GSM operations.',
      'Oludare holds a Bachelor of Science (B.Sc.) in Systems Engineering from the University of Lagos and a Postgraduate Advanced Certificate in Oil and Gas Downstream Operations Management from UNILAG Consult. He also completed formal project management training through The American PM Programme at the Project Management College UK.',
    ],
  },
  {
    name: 'Temitope Oladele-Olarewaju',
    role: 'Director, Quality Assurance and Operations',
    photo: 'temitope-profile',
    bio: [
      'Temitope Oladele-Olarewaju is an accomplished technology professional and software quality assurance specialist with approximately 14 years of experience across telecommunications, financial services, digital transformation, and technology operations.',
      'As Director of Quality Assurance and Operations at Raoatech IT-Electromech Limited, Temitope provides strategic and operational leadership across the company’s tech platforms, commercialization programs, innovation initiatives, and ecosystem development. Her extensive background includes work with leading enterprise organizations, such as MTN Nigeria and key banking institutions, equipping her with expertise in enterprise systems, QA frameworks, business process optimization, and large-scale tech deployment.',
      'Temitope holds a B.Sc. in Computer Science from Olabisi Onabanjo University (OOU) and is an ISTQB Certified Software Tester, reflecting international competence in software delivery best practices and quality engineering.',
    ],
  },
]

export const leadership: Person[] = [
  { name: 'Prof. T.A. Ibidapo', role: 'Non-Executive Director; Lead Partner, International Standards & QMS Compliance Lab', org: 'United States', photo: 'ibidapo' },
  { name: 'Prof. Moses Anubi', role: 'Non-Executive Director, Resilient & Autonomous Systems', org: 'United States', photo: 'anubi' },
  { name: 'Dr. Elizabeth Oludadepo', role: 'Director, Smart Diagnostics & Therapeutic Logistics Lab', photo: 'oludadepo' },
  { name: 'Dr. Ayobami Olajube', role: 'Director, Smart Grid & Hybrid Power Lab', photo: 'olajube' },
]

export const advisors: Person[] = [
  { name: 'Dr. Ayodeji Akiwowo', role: 'Data Science & AI', org: 'Fujitsu', photo: 'akiwowo' },
  { name: 'Adeyinka Oladepo, CAMS, FCA', role: 'Finance & Audit', org: 'Optimus Bank', photo: 'oladepo' },
  { name: 'Adedayo Dayo-Dunmoye', role: 'Energy, Policy & Strategic Partnerships', org: 'Africa Private Sector Summit', photo: 'dayo' },
]

export const tracks = [
  {
    id: 'talent',
    label: 'Track A',
    title: 'Executive & technical talent',
    body: 'Join as a lab lead, research fellow, embedded engineer or venture founder-in-residence, with access to high-performance computing, advanced prototyping and direct equity in spin-offs.',
    cta: 'Join the team',
  },
  {
    id: 'grants',
    label: 'Track B',
    title: 'Institutional & corporate grants',
    body: 'Funds GPU clusters, robotic actuators, power analyzers and prototyping machinery. Partners receive prominent branding, first-look rights to research and strategic advisory access.',
    cta: 'Fund a lab',
  },
  {
    id: 'investment',
    label: 'Track C',
    title: 'Strategic investment & co-development',
    body: 'Seed the Venture Studio Sandbox or co-invest in spin-offs, with exposure to software QA retainers, IP licensing and equity upside in emerging African ventures.',
    cta: 'Talk to us',
  },
] as const

export type TrackId = (typeof tracks)[number]['id']

// Source: "Institutional Sponsorship & Laboratory Infrastructure Outfitting Brief".
export const givingTiers = [
  {
    naira: '₦15,000',
    usd: '$10',
    title: 'STEM Excursion Sponsor',
    body: 'Sponsors one K-12 student for an immersive hands-on excursion in AI, VR, Robotics, and Space Technology.',
  },
  {
    naira: '₦75,000',
    usd: '$50',
    title: 'Prototyping Kit Supporter',
    body: 'Funds microcontroller development kits (ESP32/STM32), environmental sensor arrays, and prototyping components for student and graduate builders.',
  },
  {
    naira: '₦300,000',
    usd: '$200',
    title: 'Hardware R&D Backer',
    body: 'Supports brushless propulsion sets, 3D spatial depth cameras, and edge-compute modules for autonomous drone and robotics research.',
  },
  {
    naira: '₦1,500,000+',
    usd: '$1,000+',
    title: 'Lab Infrastructure Patron',
    body: 'Co-sponsors core laboratory equipment and workstation infrastructure across our 9 specialized R&D labs.',
  },
]

/** Naira figures are shown at this fixed rate, as in the sponsorship brief. */
export const nairaPerDollar = 1500

export const adoptLabs = [
  {
    name: 'Drone Technology & Autonomous Surveillance Lab',
    focus: 'Carbon-fiber UAV airframes, Pixhawk flight controllers, LiDAR, thermal imaging & edge AI telemetry',
    usd: 17630,
  },
  {
    name: 'Robotics & Embedded Systems Innovation Lab',
    focus: '6-DOF robotic arms, autonomous rovers, 3D depth vision, enclosed FDM 3D printing & CNC PCB milling',
    usd: 12960,
  },
  {
    name: 'Internet of Things (IoT) & Embedded Systems Lab',
    focus: 'STM32/ESP32 kits, LoRaWAN/NB-IoT gateways, agricultural & gas sensors, RF & logic analyzers',
    usd: 5010,
  },
  {
    name: 'Smart Diagnostics & Therapeutic Logistics Lab',
    focus: 'Microfluidic readers, portable medical ultrasound, cold-chain GPS carriers & Raman drug spectrometers',
    usd: 28050,
  },
  {
    name: 'Smart Grid & Hybrid Power Lab',
    focus: 'Microgrid controllers, bidirectional hybrid inverters, real-time power simulators & LiFePO4 storage',
    usd: 39200,
  },
  {
    name: 'Artificial Intelligence (AI) & HPC Lab',
    focus: 'Multi-GPU deep learning servers, dual-GPU AI workstations, NVMe storage arrays & 4K telemetry displays',
    usd: 65000,
  },
  {
    name: 'Quality Assurance & Software Testing Lab',
    focus: 'High-concurrency load servers, 20-device iOS/Android test matrix & hardware pen-testing suites',
    usd: 18600,
  },
  {
    name: 'Software Design & Development Lab',
    focus: 'Full-stack engineering workstations, dual-4K monitor setups, staging servers & RAID NAS storage',
    usd: 16450,
  },
  {
    name: 'International Standards & QMS Compliance Lab',
    focus: 'Enterprise audit servers, ISO/IEC 17025 electrical calibrators & remote audit systems',
    usd: 16600,
  },
]

// Hero slideshow, following the Gemini page (Drive folder "BANNER'S PICTURES" plus the building render).
export const bannerSlides = [
  {
    src: '/images/building-1200.jpg',
    width: 1200,
    height: 666,
    alt: 'Raoatech R&D and Innovation Point building in Sabo-Yaba, Lagos',
    tag: 'Flagship infrastructure · Sabo–Yaba Innovation District',
    title: 'Raoatech R&D and Innovation Point, Sabo–Yaba Innovation District, Lagos',
    caption:
      'Flagship 3,000–5,000 sqm deep-tech research, laboratory prototyping, and enterprise commercialization center housing 12 specialized labs and the Venture Studio Sandbox.',
  },
  {
    src: '/images/banner/banner-1.jpg',
    width: 500,
    height: 412,
    alt: 'Mr. Oludare Olarewaju with faculty at the Rahamon Adisa Bello Auditorium, University of Lagos',
    tag: 'Academic R&D leadership · University of Lagos',
    title: 'UNILAG Faculty of Engineering Maiden AI Seminar',
    caption:
      'Mr. Oludare Olarewaju serving as Guest Speaker at the Rahamon Adisa Bello Auditorium, University of Lagos, advancing applied AI and engineering commercialization.',
  },
  {
    src: '/images/banner/banner-2.jpg',
    width: 887,
    height: 576,
    alt: 'Mr. Oludare Olarewaju with Florida State University and UNILAG Faculty of Engineering leaders',
    tag: 'Global research alliance · FSU & UNILAG (Nov. 2025)',
    title: 'International Academic R&D Collaboration (FSU & UNILAG)',
    caption:
      'Mr. Oludare Olarewaju joining Florida State University delegates Prof. Sastry Pamidi & Prof. Moses Anubi with Prof. Adeosun (Dean, Faculty of Engineering, UNILAG), Prof. Balogun, and Prof. Ogunwolu.',
  },
  {
    src: '/images/banner/banner-3.jpg',
    width: 750,
    height: 548,
    alt: 'YABATECH and Raoatech MoU and MoA signing ceremony',
    tag: 'Institutional partnership · Yaba College of Technology',
    title: 'YABATECH & Raoatech Ecosystem Alliance Signing',
    caption:
      'Formalizing human capital development and technical innovation initiatives between Yaba College of Technology and Raoatech to establish the YABATECH–Raoatech AI, Robotics & Innovation Hub.',
  },
  {
    src: '/images/banner/banner-6.jpg',
    width: 717,
    height: 531,
    alt: 'Mr. Oludare Olarewaju consulting with the NIPOST ICT team in Lagos',
    tag: 'Enterprise & public sector consultancy',
    title: 'Enterprise & Public Sector ICT Consultancy (NIPOST)',
    caption:
      'Mr. Oludare Olarewaju consulting with NIPOST’s ICT leadership team in Lagos on digital infrastructure, enterprise software, and systems modernization.',
  },
  {
    src: '/images/banner/banner-5.jpg',
    width: 769,
    height: 583,
    alt: 'Mr. Oludare Olarewaju speaking as President of the Association of Nigeria Software Testers',
    tag: 'Quality engineering & industry governance',
    title: 'National Software Quality Assurance Leadership (ANST)',
    caption:
      'Mr. Oludare Olarewaju delivering a keynote address as President of the Association of Nigeria Software Testers (ANST) on software testing’s impact on Nigeria’s economy, security, and youth empowerment.',
  },
]

export const donateUrl = 'https://flutterwave.com/donate/wxxpcuuc9kvy'

// STEM, robotics and drone videos (YouTube IDs). Titles come from the Gemini content.
export type Clip = { id: string; title?: string; body?: string; vertical?: boolean }

export const featuredVideos: Clip[] = [
  {
    id: '2T9wmtCMOu4',
    title: 'Visitor Management System for Lagos State Lotteries Board',
    body: 'Raoatech’s deployment of a Visitor Management System for the Lagos State Lotteries Board (now the Lagos State Lotteries and Gaming Authority).',
  },
  {
    id: 'G8y_m8QE-Xw',
    title: 'Access Control System for The Nest Innovation Park',
    body: 'Raoatech’s installation of an Access Control System at The Nest Innovation Park, Yaba, Lagos.',
  },
  {
    id: '7vOsGg8nbDU',
    title: 'Drone Piloting for Learners',
    body: 'Hands-on drone piloting sessions for young learners at Raoatech R&D and Innovation Point.',
  },
  {
    id: '3Vnp8ZFCQ7I',
    title: 'Robotics & STEM Training at St. Gregory College, Lagos',
    body: 'A Raoatech-organised tech event, in partnership with the management of St. Gregory College, introducing over 400 students to robotics and STEM.',
  },
  {
    id: 'MKKxHSv2hw4',
    title: 'Drone Technology, Robotics & Engineering Immersion',
    body: 'A closer look at how Raoatech equips emerging innovators, university researchers, and engineers with practical deep-tech capabilities.',
  },
]

export const sessionVideos: Clip[] = [
  {
    id: 'CiFGRZbfELI',
    title: 'Robotics & Autonomous Systems Workshop',
    body: 'Practical training and live hardware demonstrations with emerging student engineers.',
  },
  {
    id: 'd6s4lxVJ0BI',
    title: 'Drone Flight & Embedded Tech Immersion',
    body: 'Hands-on UAV operation and embedded hardware learning modules at Raoatech Labs.',
  },
  {
    id: '2c8eWCinvGY',
    title: 'Next-Gen Tech Immersion & Prototype Showcases',
    body: 'Highlights from our interactive AI, robotics, and engineering lab sessions.',
  },
  { id: 'WES2H0xHKcg' },
  {
    id: 'P82vZo104Kc',
    vertical: true,
    title: 'Live Lab Moment: Robotics & Automation',
    body: 'Quick look inside our interactive engineering build sessions.',
  },
  {
    id: 'nPUwX9xZ9Vo',
    vertical: true,
    title: 'Live Lab Moment: Drone & STEM Innovation',
    body: 'Testing real-world aerial and hardware prototypes in Yaba, Lagos.',
  },
  { id: 'Cm3fa4gQ3x0', vertical: true },
  { id: 'Rd46lk12OTs', vertical: true },
]

// ---------------------------------------------------------------------------
// Content from the Gemini page (Nov 2026).

export const heroCopy = {
  eyebrow: 'Africa’s deep-tech R&D & venture-building ecosystem',
  title: 'Transforming Applied Research & Talent into Commercial Deep-Tech Ventures',
  lede: 'Anchored in the Sabo–Yaba Innovation District of Lagos, Raoatech R&D and Innovation Point unites 12 specialized engineering laboratories, a Venture Studio Sandbox, academic R&D alliances, and enterprise consulting to bridge the prototype-to-market gap.',
}

export type ImpactStat = {
  value: string
  label: string
  body: string
  links?: { name: string; url: string }[]
}

export const impactStats: ImpactStat[] = [
  {
    value: '16+ Years',
    label: 'Proven Engineering Track Record',
    body: 'Evolving from Techxkia Communications & Automation (2008) to Raoatech IT-Electromech Limited (2014).',
  },
  {
    value: '12+ Labs',
    label: '& Venture Studio Sandbox',
    body: 'Specialized R&D, hardware prototyping, QA testing, compliance, and startup commercialization infrastructure.',
  },
  {
    value: '20,000+',
    label: 'Talents & Engineers Trained',
    body: 'Over 20,000 youths and technical professionals trained, with 50,000+ lives impacted across Africa.',
  },
  {
    value: 'End-to-End',
    label: 'Lab-to-Market Execution',
    body: 'Backed by proprietary revenue-generating platforms:',
    links: [
      { name: 'Gamai', url: 'https://www.gamai.com.ng' },
      { name: 'Finkia', url: 'https://www.finkia.com.ng' },
      { name: 'Schoolkia', url: 'https://www.schoolkia.com.ng' },
      { name: 'Vestradat', url: 'https://www.vestradat.com' },
    ],
  },
]

export type Cluster = 'software' | 'hardware' | 'industrial' | 'studio'

export const clusters: { id: Cluster | 'all'; label: string }[] = [
  { id: 'all', label: 'All Labs & Studio' },
  { id: 'software', label: 'Foundational Software & Governance' },
  { id: 'hardware', label: 'Hardware & Automation' },
  { id: 'industrial', label: 'Industrial, Health & Creative' },
  { id: 'studio', label: 'Venture Studio Sandbox' },
]

export type LabService = {
  id: string
  no: string
  cluster: Exclude<Cluster, 'studio'>
  clusterLabel: string
  name: string
  badge?: string
  body: string
  services: string[]
}

export const labServices: LabService[] = [
  {
    id: 'software-design',
    no: '01',
    cluster: 'software',
    clusterLabel: 'Software Cluster',
    name: 'Software Design & Development Lab',
    body: 'The primary software engineering engine of the Innovation Point, building scalable digital products and mission-critical enterprise systems.',
    services: [
      'Enterprise software architecture & product engineering',
      'Cloud-native applications & multi-tenant SaaS platforms',
      'API integration & public/private digital transformation',
    ],
  },
  {
    id: 'qa-testing',
    no: '02',
    cluster: 'software',
    clusterLabel: 'Software Cluster',
    name: 'Quality Assurance & Software Testing Lab',
    badge: 'US$130K+ Track Record',
    body: 'Ensures zero-downtime reliability, speed, and security, backed by proven enterprise QA delivery across banking, telecom, and healthcare.',
    services: [
      'Functional testing, UAT & test strategy development',
      'Automated QA pipelines & high-concurrency performance testing',
      'Security testing & independent software quality audits',
    ],
  },
  {
    id: 'ai',
    no: '03',
    cluster: 'software',
    clusterLabel: 'Software Cluster',
    name: 'Artificial Intelligence (AI) Lab',
    body: 'Develops proprietary AI assets and deploys applied machine intelligence across commercial enterprises and emerging ventures.',
    services: [
      'Machine learning, computer vision & NLP model engineering',
      'AI strategy consulting & predictive data analytics',
      'Domain-specific AI integration for enterprise workflows',
    ],
  },
  {
    id: 'standards-qms',
    no: '04',
    cluster: 'software',
    clusterLabel: 'Governance Cluster',
    name: 'International Standards & QMS Compliance Lab',
    body: 'Prepares enterprises, laboratories, and startups for regulatory compliance, operational governance, and global investment readiness.',
    services: [
      'ISO management systems implementation & consulting',
      'Quality Management System (QMS) audits & governance',
      'Specialized regulatory & quality compliance training',
    ],
  },
  {
    id: 'robotics',
    no: '05',
    cluster: 'hardware',
    clusterLabel: 'Hardware Cluster',
    name: 'Robotics Lab',
    body: 'Bridges mechanical, electrical, and control engineering to prototype intelligent automation systems for industrial and commercial use.',
    services: [
      'Custom robotics systems & industrial automation engineering',
      'Rapid hardware prototyping & electromechanical integration',
      'Applied robotics training & technical capacity building',
    ],
  },
  {
    id: 'drone',
    no: '06',
    cluster: 'hardware',
    clusterLabel: 'Hardware Cluster',
    name: 'Drone Technology Lab',
    body: 'Specializes in Unmanned Aerial Vehicle (UAV) engineering, aerial data acquisition, and geospatial intelligence for enterprise operations.',
    services: [
      'Custom UAV systems integration & remote sensing',
      'Geospatial analytics, aerial mapping & site inspection',
      'Certified drone pilot training & flight safety programs',
    ],
  },
  {
    id: 'iot',
    no: '07',
    cluster: 'hardware',
    clusterLabel: 'Hardware Cluster',
    name: 'Internet of Things (IoT) Lab',
    body: 'Connects physical infrastructure to real-time digital intelligence through low-power embedded hardware and industrial telemetry.',
    services: [
      'Smart device engineering & custom embedded firmware',
      'Industrial telemetry, sensor networks & connected assets',
      'Facility monitoring, access control & safety automation',
    ],
  },
  {
    id: 'smart-grid',
    no: '08',
    cluster: 'industrial',
    clusterLabel: 'Industrial Cluster',
    name: 'Smart Grid & Hybrid Power Lab',
    body: 'Focuses on resilient energy systems, clean power integration, and intelligent grid optimization for commercial and off-grid sites.',
    services: [
      'Renewable energy systems & hybrid power architecture',
      'Smart grid modeling, energy audits & load optimization',
      'Smart metering & resilient power storage validation',
    ],
  },
  {
    id: 'oil-gas-blue',
    no: '09',
    cluster: 'industrial',
    clusterLabel: 'Industrial Cluster',
    name: 'Oil, Gas & Blue Economy Innovation Lab',
    body: 'Delivers specialized digital optimization, industrial analytics, and logistics technologies for energy and maritime sectors.',
    services: [
      'Downstream oil & gas process optimization & analytics',
      'Maritime innovation & coastal/blue-economy technology',
      'Supply chain & industrial fleet logistics systems',
    ],
  },
  {
    id: 'smart-construction',
    no: '10',
    cluster: 'industrial',
    clusterLabel: 'Industrial Cluster',
    name: 'Smart Construction & Robotic Architecture Lab',
    body: 'Modernizes the built environment through automated construction technologies, modular engineering, and intelligent building systems.',
    services: [
      'Modular construction & robotic construction workflows',
      'Smart building automation & structural telemetry',
      'Construction technology advisory & digital optimization',
    ],
  },
  {
    id: 'smart-diagnostics',
    no: '11',
    cluster: 'industrial',
    clusterLabel: 'Health-Tech Cluster',
    name: 'Smart Diagnostics & Therapeutic Logistics Lab',
    body: 'Addresses healthcare bottlenecks across Africa: decentralized diagnostics, anti-counterfeit verification, and predictive drug logistics.',
    services: [
      'Point-of-care diagnostic device prototyping & integration',
      'Counterfeit medication mitigation & quality verification',
      'Predictive cold-chain & pharmaceutical supply logistics',
    ],
  },
  {
    id: 'creative-tech',
    no: '12',
    cluster: 'industrial',
    clusterLabel: 'Creative Cluster',
    name: 'Creative Technology & Media-Tech Lab',
    body: 'Blends artificial intelligence with digital media engineering to power next-generation content creation and creative commercialization.',
    services: [
      'AI-powered media production & interactive experiences',
      'Content technology platforms & digital distribution',
      'Creative IP commercialization & immersive media systems',
    ],
  },
]

export const ventureStudio = {
  id: 'venture-studio',
  tag: 'Unit 13 · Commercialization Engine',
  badge: '25 Startups/Yr Target · US$10K–US$25K Seed Ticket',
  name: 'Venture Studio Sandbox',
  body: 'The central startup-creation and investment engine connecting all 12 laboratories, systematically turning validated research, prototypes, and market opportunities into scalable, investment-ready companies.',
  pillars: [
    {
      title: 'Startup Incubation & Building',
      body: 'Opportunity validation, product engineering, company formation & scaling.',
    },
    {
      title: 'Seed Capital & Shared Labs',
      body: 'US$10K–US$25K seed investments plus shared QA, AI & QMS infrastructure.',
    },
    {
      title: 'Research-to-Market Pathway',
      body: 'Commercialization track for university researchers & deep-tech founders.',
    },
  ],
}

export type GalleryItem = { img: string; width: number; height: number; title: string; body: string }

export const academicGallery: GalleryItem[] = [
  { img: 'academia-01', width: 865, height: 536, title: 'YABATECH & Raoatech Ecosystem Alliance Signing', body: 'Formalizing human capital development and technical innovation initiatives between Yaba College of Technology and Raoatech.' },
  { img: 'academia-02', width: 960, height: 548, title: 'Quality Assurance & Software Testing Capacity Building (YABATECH)', body: 'Mrs. Temitope Oladele-Olarewaju training academic staff, non-academic staff, and students at YCT Digital Technology Academy.' },
  { img: 'academia-03', width: 359, height: 485, title: 'Health-Tech & Engineering Innovation Judging (UNILAG)', body: 'Mr. Oludare Olarewaju serving as a judge at the tech innovation competition organized by the University of Lagos Association of Medical Students.' },
  { img: 'academia-04', width: 522, height: 430, title: 'UNILAG Faculty of Engineering Maiden AI Seminar', body: 'Mr. Oludare Olarewaju as Guest Speaker at the Rahamon Adisa Bello Auditorium, University of Lagos.' },
  { img: 'academia-05', width: 462, height: 309, title: 'UNILAG Faculty of Engineering International Week (2025)', body: 'Mr. Oludare Olarewaju representing Raoatech alongside engineering faculty and international speakers.' },
  { img: 'academia-06', width: 401, height: 561, title: 'AI in Engineering Education & Industry Panel (2025)', body: 'Official UNILAG Faculty of Engineering International Week panel featuring Engr. Oludare Olarewaju.' },
  { img: 'academia-07', width: 587, height: 713, title: 'UNILAG Faculty of Engineering International Week (2026)', body: 'Engr. Oludare Olarewaju featured alongside UNILAG leadership and engineering professors on digital learning and technology integration.' },
  { img: 'academia-08', width: 517, height: 364, title: 'Raoatech-Sponsored UNILAG 6-Day Tech & Leadership Program', body: 'Entrepreneurship Enablement and Leadership Week (EELW) featuring Prof. Folasade Ogunsola (then DVC, Development Services, UNILAG), Mrs. Adenike, Mr. Oludare Olarewaju, and student trainees.' },
  { img: 'academia-09', width: 937, height: 564, title: 'International R&D Delegation (Florida State University & UNILAG)', body: 'Mr. Oludare Olarewaju joining FSU representatives (Prof. Sastry Pamidi & Prof. Moses Anubi) with Prof. Adeosun (Dean, Faculty of Engineering, UNILAG), Prof. Balogun, and Prof. Ogunwolu (Nov. 2025).' },
  { img: 'academia-10', width: 960, height: 535, title: 'International Research Visit to Raoatech Yaba Hub (2026)', body: 'Prof. Moses Anubi (Florida State University) visiting Raoatech’s Yaba facility for collaborative engineering and R&D discussions.' },
  { img: 'academia-11', width: 884, height: 667, title: 'Raoatech’s Free 6-Day Training for 50 UNILAG Undergraduates (2018)', body: 'Mr. Oludare Olarewaju (Founder & CEO, Raoatech) at Raoatech’s free 6-day training for 50 University of Lagos undergraduates from all faculties, including the College of Medicine.' },
  { img: 'academia-12', width: 859, height: 675, title: 'Prof. Sunday Adebisi at Raoatech’s 6-Day UNILAG Training (2018)', body: 'Professor Sunday Adebisi addressing participants at Raoatech’s free 6-day training for 50 University of Lagos undergraduates from all faculties, including the College of Medicine.' },
  { img: 'academia-13', width: 832, height: 577, title: 'IoT in Healthcare Training for UNILAG Medical Students (2019)', body: 'Raoatech training 27 University of Lagos medical students on the applications of IoT devices in the healthcare sector.' },
  { img: 'academia-14', width: 833, height: 673, title: 'Judging the UNILAG Medical Students’ Tech Competition', body: 'Mr. Oludare Olarewaju serving as a judge at the tech competition organized by the University of Lagos Association of Medical Students.' },
  { img: 'academia-15', width: 610, height: 491, title: 'AMSUL Health Week (University of Lagos)', body: 'Mr. Oludare Olarewaju at the Health Week organized by the University of Lagos Association of Medical Students (AMSUL).' },
]

export const industryGallery: GalleryItem[] = [
  { img: 'industry-01', width: 742, height: 556, title: 'Enterprise ICT Capacity Building (NIPOST Lagos)', body: 'Mr. Oludare Olarewaju training over 50 members of the Nigeria Postal Service’s ICT team at the Lagos Regional Office.' },
  { img: 'industry-02', width: 900, height: 680, title: 'Public Sector Digital Transformation (NIPOST FCT)', body: 'Mr. Oludare Olarewaju leading technical training for NIPOST’s ICT team in Abuja (FCT).' },
  { img: 'industry-03', width: 763, height: 542, title: 'NIPOST FCT ICT Engineering Cohort', body: 'Mr. Oludare Olarewaju with NIPOST’s ICT leadership and technical officers in Abuja.' },
  { img: 'industry-04', width: 914, height: 675, title: 'National Postal Digital Infrastructure Engagement', body: 'Group session with NIPOST’s FCT ICT team following systems and digital capacity training.' },
  { img: 'industry-05', width: 960, height: 445, title: 'Global Tech Africa Conference 2024', body: 'Mr. Oludare Olarewaju presenting on Digital Soft Skills, AI, and Robotics at The Landmark Event Centre, Victoria Island, Lagos.' },
  { img: 'industry-06', width: 712, height: 711, title: 'Global Tech Africa Masterclass', body: 'Official conference banner featuring Olarewaju Oludare speaking on Introduction to Digital Literacy-Driven Soft Skills and Robotics.' },
  { img: 'industry-07', width: 786, height: 361, title: 'Ecosystem Talent-Sourcing Forum (American Corner, Ikeja)', body: 'Mr. Oludare Olarewaju with participants at the Tech Hire-a-thon & Employability Conference in Ikeja, Lagos.' },
  { img: 'industry-08', width: 574, height: 571, title: 'Tech Hire-a-thon & Employability Conference 1.0', body: 'Official flyer featuring Mr. Oludare Olarewaju as Facilitator at American Corner, Ikeja.' },
  { img: 'industry-09', width: 960, height: 532, title: 'Nigeria AfCFTA Hackathon 2025 Winners (₦10,000,000 Prize)', body: 'Mr. Oludare Olarewaju celebrating with the mentored UNILAG undergraduate team that won the NITDA / Science of Trade E-Commerce Regulatory Sandbox challenge.' },
  { img: 'industry-10', width: 350, height: 576, title: '2025 Africa Creative Market (ACM) Hackathon Winners (₦10,000,000 Prize)', body: 'Mr. Oludare Olarewaju with the mentored engineering team sponsored by AWS and Creative Economy Practice.' },
  { img: 'industry-11', width: 684, height: 476, title: 'Judge at Africa’s Biggest Creative-Economy Event', body: 'Mr. Oludare Olarewaju serving as a judge at Africa’s biggest creative-economy-focused event.' },
  { img: 'industry-12', width: 439, height: 440, title: 'AWS Cloud Clubs Speaker for African Youths (2024)', body: 'Mr. Oludare Olarewaju speaking on “Cloud, AI and IoTs: Strategic Preparations for the Big Opportunities” at an AWS event for African youths, University of Ilorin.' },
  { img: 'industry-13', width: 960, height: 414, title: 'Virtual Speaker, Kwara State AI Summit 2025', body: 'Mr. Oludare Olarewaju addressing the Kwara State 2025 AI Summit virtually at the Ilorin Innovation Hub.' },
  { img: 'industry-14', width: 448, height: 550, title: 'Kwara AI Summit 2025 Speaker', body: 'Official Kwara AI Summit 2025 flyer featuring Mr. Oludare Olarewaju, Founder and CEO of Raoatech, as a speaker.' },
  { img: 'industry-15', width: 942, height: 776, title: 'Raoatech Team with YABATECH’s Director of Industrial Partnership', body: 'Raoatech’s team with Dr. Ajala, Director of Industrial Partnership at Yaba College of Technology, and his colleague.' },
  { img: 'industry-16', width: 554, height: 745, title: 'National TVET Exhibition, Lagos (June 2026)', body: 'Raoatech’s team, led by Mr. Oludare Olarewaju, at the National Technical Vocational Education Training (TVET) event held on 9 June 2026 in Lagos.' },
]

export const industryClips: Clip[] = [
  {
    id: '8Zb4jA7yHI8',
    title: 'AI-Driven Literacy Assessment with the Office of Education Quality Assurance',
    body: 'Raoatech’s partnership with the Office of Education Quality Assurance, the regulator of K-12 education quality in Lagos State, on applying an AI-driven literacy assessment platform.',
  },
]

export const talentStages = [
  { stage: 'Stage 01 · Kids & Pre-Teens', title: 'Foundational STEM & Drone Flight', body: 'Hands-on drone piloting, visual coding, and basic electronics curiosity.' },
  { stage: 'Stage 02 · Teens & Youth', title: 'Robotics, IoT & Space Tech', body: 'Home automation, embedded systems, hardware diagnostics, and R&D lab immersions.' },
  { stage: 'Stage 03 · University Researchers', title: 'Applied R&D & Hackathons', body: 'University engineering labs, national hackathons, and prototype commercialization.' },
  { stage: 'Stage 04 · Adult Industry Engineers', title: 'Enterprise Systems Engineers', body: 'Production AI, QA automation, and mission-critical infrastructure delivery.' },
]

export const talentGallery: GalleryItem[] = [
  { img: 'talent-01', width: 903, height: 675, title: 'Space Technology & AI Immersion (Raoatech Yaba Hub)', body: 'Mr. Oludare Olarewaju leading Raoatech’s engineering team to train over 40 visiting learners on space systems and artificial intelligence.' },
  { img: 'talent-02', width: 880, height: 498, title: 'Applied R&D Exposure for Secondary Students', body: 'Visiting secondary school learners exploring real-world AI software and space-technology workflows inside Raoatech’s innovation facility.' },
  { img: 'talent-03', width: 960, height: 531, title: 'Hands-On Drone Piloting & Aerodynamics', body: 'Mr. Oludare Olarewaju guiding young learners through live outdoor UAV flight control and safety practicals.' },
  { img: 'talent-04', width: 516, height: 575, title: 'Home Automation & IoT Prototyping (Ogudu JSS)', body: 'Raoatech’s engineering team mentoring junior secondary school learners on building functional smart-home circuits (2020).' },
  { img: 'talent-05', width: 960, height: 565, title: 'Robotics & Automation Curriculum (MBHS Lagos)', body: 'Mr. Oludare Olarewaju delivering structured robotics and applied engineering sessions to students at Methodist Boys’ High School.' },
  { img: 'talent-06', width: 500, height: 864, title: 'Microcontrollers & Embedded Systems (MBHS)', body: 'Hands-on hardware architecture and sensor integration training led by Mr. Oludare Olarewaju for senior secondary students.' },
  { img: 'talent-07', width: 330, height: 552, title: 'GSM Telecommunications & Hardware Diagnostics', body: 'Practical circuit-board troubleshooting and mobile hardware repair lab for final-year students at Methodist Boys’ High School.' },
  { img: 'talent-08', width: 960, height: 533, title: 'Software Coding & Debugging Methodologies', body: 'Teaching structured programming logic and systematic code debugging to secondary school learners at Methodist Boys’ High School.' },
  { img: 'talent-09', width: 659, height: 484, title: 'Youth Robotics, AI & Coding Competition Winners (2023)', body: 'Raoatech’s engineering instructors celebrating student prize winners at the competition sponsored by Mr. Segun Idowu in partnership with Foster Prime Schools.' },
]

export const talentClips: Clip[] = [
  {
    id: 'M-m7Q8J5O7I',
    title: 'Raoatech’s Female Learners Building Scribbling Robots',
    body: 'Young female learners at Raoatech designing and building scribbling robots.',
  },
  {
    id: 'qIvrdfgQ3Wg',
    title: 'Raoatech’s Trained Learners Showing an IoT System in a Ludo Game',
    body: 'Learners trained by Raoatech demonstrating how an IoT system can be applied to a game of Ludo.',
  },
]
