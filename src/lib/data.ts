export const siteConfig = {
  name: "Vision Matrix Productions",
  tagline: "Where Your Vision Becomes Reality",
  description:
    "Premium event production services including planning, audio-visual, branding, and videography. Nearly two decades of experience delivering world-class events.",
  contact: {
    email: "info@vm-events.com",
    phone: "(310) 555-0192",
    address: "Los Angeles, CA",
  },
  social: {
    instagram: "https://instagram.com/visionmatrix",
    linkedin: "https://linkedin.com/company/visionmatrix",
    youtube: "https://youtube.com/@visionmatrix",
  },
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "event-planning",
    title: "Event Planning & Coordination",
    shortDescription: "Full event management and logistics from concept to execution",
    description:
      "From intimate gatherings to large-scale conferences, our expert team handles every detail of your event. We specialize in comprehensive planning, vendor coordination, timeline management, and on-site execution to ensure your vision comes to life seamlessly.",
    icon: "Calendar",
    features: [
      "Comprehensive event strategy",
      "Vendor management",
      "Timeline & logistics",
      "On-site coordination",
      "Budget management",
    ],
  },
  {
    id: "audio-visual",
    title: "Audio-Visual Services",
    shortDescription: "State-of-the-art technical production and equipment",
    description:
      "Transform your event with cutting-edge audio-visual technology. Our team provides professional sound systems, lighting design, LED walls, projection mapping, and live streaming services that create immersive experiences for your audience.",
    icon: "Speaker",
    features: [
      "Professional sound systems",
      "Lighting design",
      "LED video walls",
      "Projection mapping",
      "Live streaming",
    ],
  },
  {
    id: "branding-graphics",
    title: "Branding & Graphics",
    shortDescription: "Visual identity creation and event branding",
    description:
      "Make a lasting impression with cohesive visual branding. We create everything from event logos and signage to digital assets and printed materials, ensuring your brand message resonates throughout every touchpoint of your event.",
    icon: "Palette",
    features: [
      "Event branding",
      "Logo design",
      "Signage & banners",
      "Digital assets",
      "Print materials",
    ],
  },
  {
    id: "videography-photography",
    title: "Videography & Photography",
    shortDescription: "Professional media capture and documentation",
    description:
      "Capture every moment with our professional videography and photography services. From highlight reels to full event documentation, we deliver stunning visual content that tells your event's story and extends its impact long after it ends.",
    icon: "Video",
    features: [
      "Event videography",
      "Professional photography",
      "Highlight reels",
      "Live event coverage",
      "Post-production editing",
    ],
  },
];

export const portfolioItems = [
  {
    id: 1,
    title: "Global Tech Summit 2024",
    category: "conference",
    client: "Tech Innovations Inc.",
    description: "A three-day international technology conference featuring keynote speakers, breakout sessions, and networking events for 5,000 attendees.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    video: null,
  },
  {
    id: 2,
    title: "Annual Charity Gala",
    category: "gala",
    client: "Hilton Foundation",
    description: "An elegant black-tie fundraising gala with live entertainment, silent auction, and immersive multimedia presentations.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
    video: null,
  },
  {
    id: 3,
    title: "Product Launch Event",
    category: "corporate",
    client: "Innovate Labs",
    description: "A high-energy product reveal featuring LED displays, live demonstrations, and interactive brand experiences.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
    video: null,
  },
  {
    id: 4,
    title: "Medical Research Symposium",
    category: "conference",
    client: "Prostate Cancer Foundation",
    description: "A prestigious medical symposium bringing together researchers, clinicians, and industry leaders for knowledge exchange.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
    video: null,
  },
  {
    id: 5,
    title: "Corporate Awards Ceremony",
    category: "gala",
    client: "Fortune 500 Company",
    description: "A glamorous awards night celebrating excellence with stunning stage design, live music, and seamless production.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    video: null,
  },
  {
    id: 6,
    title: "Brand Experience Activation",
    category: "corporate",
    client: "Global Brand",
    description: "An immersive brand activation featuring interactive installations, photo opportunities, and live social media integration.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
    video: null,
  },
];

export const portfolioCategories = [
  { id: "all", name: "All Events" },
  { id: "conference", name: "Conferences" },
  { id: "gala", name: "Galas" },
  { id: "corporate", name: "Corporate" },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Vision Matrix exceeded our expectations in every way. Their attention to detail and ability to handle complex, last-minute requests made our conference a tremendous success.",
    author: "Sarah Chen",
    title: "Event Director",
    company: "Tech Innovations Inc.",
  },
  {
    id: 2,
    quote:
      "The team's technical expertise and creative vision transformed our gala into an unforgettable experience. They truly understand how to create magic.",
    author: "Michael Roberts",
    title: "Executive Director",
    company: "Hilton Foundation",
  },
  {
    id: 3,
    quote:
      "Working with Vision Matrix was seamless from start to finish. Their professionalism and responsiveness set them apart in the industry.",
    author: "Jennifer Martinez",
    title: "VP of Marketing",
    company: "Innovate Labs",
  },
];

export const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Events Produced" },
  { value: "50+", label: "Fortune 500 Clients" },
  { value: "100%", label: "Client Satisfaction" },
];
