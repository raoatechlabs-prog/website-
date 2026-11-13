// All page copy lives here so it can be edited without touching layout code.
// Source: "RAOATECH R&D AND INNOVATION POINT — LABS / SMART CAP" executive overview.

export const site = {
  name: 'Raoatech R&D and Innovation Point',
  legalName: 'Raoatech IT-Electromech Limited',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.raoatechlabs.com',
  description:
    "West Africa's deep-tech incubator and venture studio in Yaba, Lagos. 12 specialized labs, the Smart Cap data engine, and partnership tracks for talent, grants and investment.",
  address: '1A Hughes Avenue, Alagomeji, Yaba, Lagos, Nigeria',
  email: 'hello@raoatechlabs.com',
  phone: { display: '+234 (0) 809 722 7051', tel: '+2348097227051' },
}

export const nav = [
  { href: '#mission', label: 'Mission' },
  { href: '#labs', label: 'Labs' },
  { href: '#smart-cap', label: 'Smart Cap' },
  { href: '#studio', label: 'Venture Studio' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#donate', label: 'Donate' },
]

export const stats = [
  { value: '12', label: 'Specialized lab nodes' },
  { value: '3', label: 'Functional tiers' },
]

export const pillars = [
  {
    title: 'Human capital development',
    body: 'With academic partners like Yabatech, we recruit, train and deploy elite engineering talent on real-world software and hardware projects.',
  },
  {
    title: 'Solving global data bottlenecks',
    body: 'Proprietary hardware-software systems, such as our egocentric robotics data engines, supply high-value data to global AI and robotics markets.',
  },
  {
    title: 'Enforcing national software standards',
    body: 'An independent testing and quality assurance body for software reliability under national regulatory frameworks.',
  },
]

export type Lab = { name: string; focus: string }
export type Tier = { tier: string; name: string; labs: Lab[] }

export const tiers: Tier[] = [
  {
    tier: 'Tier 1',
    name: 'Emerging Frontiers & Spatial Intelligence',
    labs: [
      { name: 'AI & High-Performance Computing', focus: 'Vision-Language-Action models, edge-AI acceleration, localized NLP.' },
      { name: 'Robotics & Embedded Systems', focus: 'Spatial AI research, industrial actuators, egocentric data capture.' },
      { name: 'IoT & Sensor Networks', focus: 'Low-power, long-range LoRaWAN telemetry for industry and environment.' },
      { name: 'Unmanned Autonomous Systems', focus: 'Drone telemetry, flight controller optimization, LiDAR mapping.' },
    ],
  },
  {
    tier: 'Tier 2',
    name: 'High-Impact Sector Verticals',
    labs: [
      { name: 'Clean Energy & Smart Grid', focus: 'Battery management, solar microgrid control, power electronics.' },
      { name: 'Biomedical & Healthcare Technology', focus: 'Non-invasive telemetry, sEMG/EEG acquisition, diagnostic electronics.' },
      { name: 'Industrial Automation & Process Engineering', focus: 'PLCs, SCADA integration, factory automation.' },
      { name: 'Agri-Tech & Environmental Monitoring', focus: 'Precision agriculture hardware, irrigation control, soil diagnostics.' },
    ],
  },
  {
    tier: 'Tier 3',
    name: 'Systemic Validation & Quality Infrastructure',
    labs: [
      { name: 'Software Quality Assurance & Testing', focus: 'Independent testing and compliance clearance under the National Software QA Framework.' },
      { name: 'Cybersecurity & Threat Intelligence', focus: 'Penetration testing, vulnerability research, air-gapped validation.' },
      { name: 'Enterprise Architecture & Cloud Systems', focus: 'Scalable backends, microservice orchestration, fault tolerance.' },
      { name: 'Additive Manufacturing & Rapid Prototyping', focus: 'SLA/FDM 3D printing, CAD modeling, enclosure fabrication.' },
    ],
  },
]

export const studioSteps = [
  { stage: 'Stage 1', title: 'Applied R&D', body: 'Research across the 12 lab nodes.' },
  { stage: 'Stage 2', title: 'Venture Studio', body: 'Sandbox validation of products and markets.' },
  { stage: 'Stage 3', title: 'Commercial spin-off', body: 'An equity startup ready for institutional capital.' },
]

export const revenue = [
  { title: 'Commercial IP licensing', body: 'Recurring revenue from proprietary algorithms, spatial datasets and hardware designs.' },
  { title: 'Regulatory software QA retainers', body: 'Enterprise B2B and B2G retainers for third-party software testing and certification.' },
  { title: 'Venture equity', body: 'Equity stakes in deep-tech startups incubated in the studio as they attract capital.' },
]

export type Person = { name: string; role: string; org?: string; photo: string }

export const leadership: Person[] = [
  { name: 'Oludare Olarewaju', role: 'Founder, CEO & Chief Product Architect', photo: 'oludare' },
  { name: 'Temitope Oladele-Olarewaju', role: 'Director, QA & Operations', photo: 'temitope' },
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

// Hero slideshow, in the order Mr Oludare chose (Drive folder "BANNER'S PICTURES": 1, 2, 3, 4, 6, 5).
export const bannerSlides = [
  {
    src: '/images/banner/banner-1.jpg',
    width: 500,
    height: 412,
    caption: "Mr Oludare Olarewaju, guest speaker at the Faculty of Engineering's maiden AI seminar, University of Lagos.",
  },
  {
    src: '/images/banner/banner-2.jpg',
    width: 887,
    height: 576,
    caption:
      'With Florida State University’s Prof. Sastry Pamidi and Prof. Moses Anubi, meeting the Dean of Engineering, Prof. Adeosun, and colleagues at UNILAG (November 2025).',
  },
  {
    src: '/images/banner/banner-3.jpg',
    width: 750,
    height: 548,
    caption:
      'MoU and MoA signing with Yaba College of Technology on human capital development and an AI, robotics and innovation hub.',
  },
  {
    src: '/images/banner/banner-4.jpg',
    width: 1200,
    height: 675,
    caption:
      'Mrs Temitope Oladele-Olarewaju training Yaba College of Technology students and staff on quality assurance and software testing.',
  },
  {
    src: '/images/banner/banner-6.jpg',
    width: 717,
    height: 531,
    caption: "Mr Oludare Olarewaju meeting NIPOST's ICT team in Lagos.",
  },
  {
    src: '/images/banner/banner-5.jpg',
    width: 769,
    height: 583,
    caption:
      'Mr Oludare Olarewaju speaking as President of the Association of Nigeria Software Testers (ANST) at its annual quality assurance event.',
  },
]

export const donateUrl = 'https://flutterwave.com/donate/wxxpcuuc9kvy'

// STEM, robotics and drone videos (YouTube IDs). Shorts are vertical.
export const videos = ['7vOsGg8nbDU', 'MKKxHSv2hw4', 'CiFGRZbfELI', 'd6s4lxVJ0BI', '2c8eWCinvGY', 'WES2H0xHKcg']
export const shorts = ['P82vZo104Kc', 'nPUwX9xZ9Vo', 'Cm3fa4gQ3x0', 'Rd46lk12OTs']
