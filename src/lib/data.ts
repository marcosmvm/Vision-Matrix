export const siteConfig = {
  name: "Vision Matrix",
  tagline: "Building Your Dream Event",
  subtitle: "Event Production Services Worldwide",
  description:
    "We know that putting on an event can be challenging without the right team behind you. At Vision Matrix, we don't just plan events – we craft unforgettable experiences. For nearly two decades, we've been the creative force behind countless successful gatherings, each one uniquely tailored to our clients' inspirations. Together, we can build your best event.",
  contact: {
    email: "info@vm-events.com",
    phone: "(310) 555-0192",
    address: "Los Angeles, California",
  },
  social: {
    instagram: "https://instagram.com/visionmatrix",
    linkedin: "https://linkedin.com/company/visionmatrix",
    facebook: "https://facebook.com/visionmatrix",
  },
};

export const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Event Gallery", href: "/event-gallery" },
  { name: "Contact", href: "/contact", isButton: true },
];

export const services = [
  {
    id: "event-planning",
    title: "Event Planning & Coordination",
    shortTitle: "Event Planning & Coordination",
    shortDescription: "Full event management and logistics from concept to execution",
    description:
      "From intimate gatherings to large-scale conferences, our expert team handles every detail of your event. We specialize in comprehensive planning, vendor coordination, timeline management, and on-site execution to ensure your vision comes to life seamlessly.",
    icon: "Calendar",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
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
    shortTitle: "Audio-Visual Services",
    shortDescription: "State-of-the-art technical production and equipment",
    description:
      "Transform your event with cutting-edge audio-visual technology. Our team provides professional sound systems, lighting design, LED walls, projection mapping, and live streaming services that create immersive experiences for your audience.",
    icon: "Speaker",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
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
    shortTitle: "Branding & Graphics",
    shortDescription: "Visual identity creation and event branding",
    description:
      "Make a lasting impression with cohesive visual branding. We create everything from event logos and signage to digital assets and printed materials, ensuring your brand message resonates throughout every touchpoint of your event.",
    icon: "Palette",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
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
    title: "Event Videography & Photography",
    shortTitle: "Event Videography & Photography",
    shortDescription: "Professional media capture and documentation",
    description:
      "Capture every moment with our professional videography and photography services. From highlight reels to full event documentation, we deliver stunning visual content that tells your event's story and extends its impact long after it ends.",
    icon: "Video",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
    features: [
      "Event videography",
      "Professional photography",
      "Highlight reels",
      "Live event coverage",
      "Post-production editing",
    ],
  },
];

// Client logos for the marquee - using text placeholders
export const clientLogos = [
  { name: "Dim Mak", id: "dimmak" },
  { name: "Homeboy Industries", id: "homeboy" },
  { name: "FasterCures", id: "fastercures" },
  { name: "Fortune", id: "fortune" },
  { name: "Conrad N. Hilton Foundation", id: "hilton" },
  { name: "GEN", id: "gen" },
  { name: "Wahlburgers", id: "wahlburgers" },
  { name: "UFC", id: "ufc" },
  { name: "The Healing Company", id: "healing" },
  { name: "SVB", id: "svb" },
  { name: "Stem for Life", id: "stemforlife" },
];

export const portfolioItems = [
  {
    id: 1,
    title: "SCALE Global Summit",
    category: "conference",
    client: "SCALE",
    location: "Los Angeles, CA",
    description: "A premier global technology summit bringing together industry leaders, innovators, and entrepreneurs for transformative discussions and networking opportunities.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    stats: { attendees: "5,000+", days: "3", speakers: "100+" },
  },
  {
    id: 2,
    title: "Milken Future of Health Summit",
    category: "summit",
    client: "Milken Institute",
    location: "Washington, DC",
    description: "An influential health policy summit featuring world-renowned experts discussing the future of healthcare, biotechnology, and public health initiatives.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
    stats: { attendees: "2,500+", days: "2", speakers: "50+" },
  },
  {
    id: 3,
    title: "Annual Charity Gala",
    category: "gala",
    client: "Conrad N. Hilton Foundation",
    location: "Beverly Hills, CA",
    description: "An elegant black-tie fundraising gala with live entertainment, silent auction, and immersive multimedia presentations.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
    stats: { attendees: "800+", raised: "$2M+", performances: "5" },
  },
  {
    id: 4,
    title: "Product Launch Event",
    category: "corporate",
    client: "Tech Innovation Labs",
    location: "San Francisco, CA",
    description: "A high-energy product reveal featuring LED displays, live demonstrations, and interactive brand experiences.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
    stats: { attendees: "1,200+", demos: "15", press: "50+" },
  },
  {
    id: 5,
    title: "Corporate Awards Ceremony",
    category: "gala",
    client: "Fortune 500 Company",
    location: "New York, NY",
    description: "A glamorous awards night celebrating excellence with stunning stage design, live music, and seamless production.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    stats: { attendees: "1,500+", awards: "25", entertainment: "3" },
  },
  {
    id: 6,
    title: "Brand Experience Activation",
    category: "activation",
    client: "Global Brand",
    location: "Miami, FL",
    description: "An immersive brand activation featuring interactive installations, photo opportunities, and live social media integration.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
    stats: { interactions: "10,000+", days: "4", impressions: "5M+" },
  },
];

export const portfolioCategories = [
  { id: "all", name: "All Events" },
  { id: "conference", name: "Conferences" },
  { id: "summit", name: "Summits" },
  { id: "gala", name: "Galas" },
  { id: "corporate", name: "Corporate" },
  { id: "activation", name: "Activations" },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Thanks to Vision Matrix, our annual global conference was a massive success. We had about 10,000 attendees, and the production quality was flawless. From the sound to the lighting, to the LED walls, everything was on point. Our attendees and speakers were blown away.",
    author: "SALT",
    title: "Conference Producer",
    company: "SALT Conference",
  },
  {
    id: 2,
    quote:
      "Vision Matrix exceeded our expectations in every way. Their attention to detail and ability to handle complex, last-minute requests made our summit a tremendous success. We look forward to working with them again.",
    author: "Sarah Chen",
    title: "Event Director",
    company: "Milken Institute",
  },
  {
    id: 3,
    quote:
      "The team's technical expertise and creative vision transformed our gala into an unforgettable experience. They truly understand how to create magic while maintaining complete professionalism.",
    author: "Michael Roberts",
    title: "Executive Director",
    company: "Conrad N. Hilton Foundation",
  },
];

export const featuredEvents = [
  {
    id: 1,
    title: "SCALE Global Summit",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    category: "Conference",
  },
  {
    id: 2,
    title: "Milken Future of Health Summit",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
    category: "Summit",
  },
];

export const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Events Produced" },
  { value: "50+", label: "Fortune 500 Clients" },
  { value: "100%", label: "Client Satisfaction" },
];
