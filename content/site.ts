// All page copy lives here so it can be edited without touching layout code.
// Source: "RAOATECH R&D AND INNOVATION POINT — LABS / SMART CAP" executive overview.

export const site = {
  name: 'Raoatech R&D and Innovation Point',
  legalName: 'Raoatech IT-Electromech Limited',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.raoatech.com',
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
    figure: { value: '$219,500', note: '≈ ₦329.25M core lab outfitting' },
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
