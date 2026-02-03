import type {
  NavLink,
  ServiceCategoryGroup,
  CaseStudy,
  GalleryImage,
  InsightArticle,
  TeamMember,
  Testimonial,
  Stat,
  ClientLogo,
  Value,
} from "./types";

export const siteConfig = {
  name: "Vision Matrix",
  tagline: "Strategic Event Production for Brands That Demand Excellence",
  subtitle: "The scale of a global agency. The attention of a dedicated partner.",
  description:
    "For nearly two decades, Vision Matrix has partnered with Fortune 500 companies, leading foundations, and global brands to produce events that move audiences, deliver measurable outcomes, and elevate brands. From strategy through execution, we are your dedicated production partner.",
  contact: {
    email: "info@vm-events.com",
    phone: "(310) 555-0192", // TODO: Replace with real phone number
    address: "Los Angeles, California",
  },
  social: {
    instagram: "https://instagram.com/visionmatrix",
    linkedin: "https://linkedin.com/company/visionmatrix",
    facebook: "https://facebook.com/visionmatrix",
  },
};

export const navLinks: NavLink[] = [
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Strategy & Planning", href: "/services/strategy-planning" },
      { name: "Creative & Design", href: "/services/creative-design" },
      { name: "Production & Technical", href: "/services/production-technical" },
      { name: "Event Logistics", href: "/services/event-logistics" },
    ],
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact", isButton: true },
];

export const serviceCategories: ServiceCategoryGroup[] = [
  {
    id: "strategy",
    title: "Strategy & Planning",
    subtitle: "From Vision to Blueprint",
    description:
      "Every extraordinary event starts with a clear strategy. We partner with you from the earliest stages to define objectives, develop creative concepts, and build a comprehensive plan that aligns with your brand and audience goals.",
    slug: "strategy-planning",
    icon: "Compass",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    services: [
      {
        id: "event-strategy",
        title: "Event Strategy & Consulting",
        shortDescription: "Align your event with business objectives and audience expectations",
        description:
          "We work with your leadership team to define clear event objectives, identify key performance metrics, and develop a strategic framework that ensures every element of your event delivers measurable impact.",
        icon: "Target",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
        features: [
          "Stakeholder alignment workshops",
          "Event objective mapping",
          "Audience analysis & segmentation",
          "KPI definition & measurement planning",
        ],
      },
      {
        id: "creative-development",
        title: "Creative Concept Development",
        shortDescription: "Transform your vision into a compelling event narrative",
        description:
          "Our creative team translates your brand story into an immersive event experience — from theme development and visual direction to programming flow and audience journey mapping.",
        icon: "Lightbulb",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
        features: [
          "Theme & narrative development",
          "Visual direction & mood boards",
          "Programming & agenda design",
          "Audience journey mapping",
        ],
      },
      {
        id: "budget-planning",
        title: "Budget & Resource Planning",
        shortDescription: "Maximize impact within your investment parameters",
        description:
          "We develop detailed budgets, resource plans, and timelines that ensure your investment delivers maximum value — with full transparency and proactive management throughout the planning process.",
        icon: "Calculator",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
        features: [
          "Detailed budget development",
          "Vendor sourcing & negotiation",
          "Timeline & milestone planning",
          "Risk assessment & contingency",
        ],
      },
    ],
  },
  {
    id: "creative",
    title: "Creative & Design",
    subtitle: "Visual Impact That Resonates",
    description:
      "Your event's visual identity sets the tone for every interaction. Our creative team designs cohesive brand experiences across every touchpoint — from stage design and environmental graphics to digital content and post-event media.",
    slug: "creative-design",
    icon: "Brush",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
    services: [
      {
        id: "stage-set-design",
        title: "Stage & Set Design",
        shortDescription: "Create immersive environments that captivate your audience",
        description:
          "From intimate keynote stages to multi-environment conference spaces, we design and build physical environments that reinforce your brand message and create unforgettable visual moments.",
        icon: "Layout",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
        features: [
          "Custom stage design & fabrication",
          "Environmental design & wayfinding",
          "LED & projection surface design",
          "Scenic elements & installations",
        ],
      },
      {
        id: "event-branding",
        title: "Event Branding & Graphics",
        shortDescription: "Cohesive visual identity across every touchpoint",
        description:
          "We create comprehensive event branding systems — logos, signage, digital assets, and printed materials — that maintain visual consistency and elevate your brand presence throughout the experience.",
        icon: "Palette",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
        features: [
          "Event logo & identity systems",
          "Signage & banner design",
          "Digital asset creation",
          "Print collateral & programs",
        ],
      },
      {
        id: "video-content",
        title: "Video & Content Production",
        shortDescription: "Professional media that extends your event's impact",
        description:
          "Our production team captures and creates compelling video content — from live event coverage and highlight reels to post-event documentation that amplifies your message long after the event ends.",
        icon: "Clapperboard",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
        features: [
          "Event videography & photography",
          "Highlight reels & recap videos",
          "Live event coverage",
          "Post-production editing & delivery",
        ],
      },
    ],
  },
  {
    id: "production",
    title: "Production & Technical",
    subtitle: "Flawless Execution, Zero Surprises",
    description:
      "Deliver an immersive audience experience through precision sound, lighting, and visual technology engineered for flawless live execution. Our technical team brings decades of experience to every production.",
    slug: "production-technical",
    icon: "Radio",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    services: [
      {
        id: "av-technology",
        title: "Audio-Visual Technology",
        shortDescription: "State-of-the-art AV solutions for every venue and format",
        description:
          "From intimate boardrooms to arena-scale productions, we design and deploy professional audio-visual systems that deliver crystal-clear sound, dynamic lighting, and stunning visual displays.",
        icon: "Speaker",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
        features: [
          "Professional sound systems",
          "Intelligent lighting design",
          "LED video walls & displays",
          "Projection mapping",
        ],
      },
      {
        id: "technical-direction",
        title: "Technical Direction",
        shortDescription: "Expert oversight ensuring seamless technical execution",
        description:
          "Our technical directors manage every aspect of your event's technical infrastructure — coordinating crews, managing equipment, and ensuring every cue hits with precision timing.",
        icon: "Settings",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
        features: [
          "Technical planning & coordination",
          "Crew management & scheduling",
          "Equipment specification & sourcing",
          "Show calling & cue management",
        ],
      },
      {
        id: "hybrid-virtual",
        title: "Hybrid & Virtual Production",
        shortDescription: "Engage audiences anywhere with seamless hybrid experiences",
        description:
          "We design and produce hybrid events that deliver an equally compelling experience for in-person and remote attendees — with professional live streaming, interactive features, and broadcast-quality production.",
        icon: "Monitor",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
        features: [
          "Live streaming & webcasting",
          "Virtual event platforms",
          "Interactive audience engagement",
          "Broadcast-quality production",
        ],
      },
    ],
  },
  {
    id: "logistics",
    title: "Event Logistics",
    subtitle: "Precision Behind the Scenes",
    description:
      "The details that audiences never see are the ones that matter most. Our logistics team manages every operational element — from venue coordination and team management to on-site execution — so nothing falls through the cracks.",
    slug: "event-logistics",
    icon: "ClipboardList",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
    services: [
      {
        id: "venue-coordination",
        title: "Venue Coordination",
        shortDescription: "Seamless venue management from selection to strike",
        description:
          "We handle every aspect of venue logistics — from site selection and contract negotiation to load-in scheduling, floor plan optimization, and post-event restoration.",
        icon: "Building",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
        features: [
          "Venue sourcing & selection",
          "Contract negotiation",
          "Floor plan & layout design",
          "Load-in/load-out scheduling",
        ],
      },
      {
        id: "team-management",
        title: "Team & Vendor Management",
        shortDescription: "Coordinated execution across every partner and crew member",
        description:
          "Our production managers coordinate all vendors, crew, and internal teams — ensuring everyone is aligned, briefed, and executing on schedule with clear communication channels.",
        icon: "Users",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
        features: [
          "Vendor coordination & management",
          "Crew scheduling & briefings",
          "Cross-functional team alignment",
          "Communication protocols",
        ],
      },
      {
        id: "onsite-execution",
        title: "On-Site Execution",
        shortDescription: "Turnkey event management from setup to teardown",
        description:
          "Our on-site team manages every moment of your event — from early morning setup through the final guest departure — handling real-time decisions, troubleshooting, and ensuring a flawless attendee experience.",
        icon: "CheckSquare",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
        features: [
          "Day-of coordination",
          "Real-time problem solving",
          "Guest experience management",
          "Post-event wrap & reporting",
        ],
      },
    ],
  },
];

// Flat services list for backwards compatibility
export const services = serviceCategories.flatMap((cat) =>
  cat.services.map((s) => ({ ...s, category: cat.id }))
);

export const clientLogos: ClientLogo[] = [
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

export const caseStudies: CaseStudy[] = [
  {
    id: "scale-global-summit",
    slug: "scale-global-summit",
    title: "SCALE Global Summit",
    client: "SCALE",
    eventType: "Conference",
    location: "Los Angeles, CA",
    challenge:
      "SCALE needed a production partner capable of delivering a world-class technology summit for 5,000+ attendees, with complex multi-stage AV requirements, live streaming, and a three-day programming schedule that demanded flawless technical execution.",
    scope: [
      "End-to-end event production across 3 stages",
      "Full AV design and deployment including LED walls and professional sound",
      "Live streaming to 10,000+ remote attendees",
      "Stage design, branding, and environmental graphics",
      "On-site coordination for 100+ speakers",
    ],
    outcome:
      "Delivered a seamless three-day summit that received record-high attendee satisfaction scores and generated over 5 million social media impressions.",
    quote: {
      text: "Vision Matrix delivered on every front. The production quality was flawless — from sound to lighting to the LED walls. Our attendees and speakers were blown away.",
      author: "SALT",
      title: "Conference Producer",
    },
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", alt: "SCALE Global Summit main stage", caption: "Main stage keynote presentation" },
      { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800", alt: "Summit networking area", caption: "Attendee networking sessions" },
      { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800", alt: "Summit panel discussion", caption: "Industry leader panel discussion" },
      { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800", alt: "Summit exhibition hall", caption: "Exhibition and sponsor showcase" },
    ],
    stats: { attendees: "5,000+", days: "3", speakers: "100+" },
    category: "conference",
    featured: true,
  },
  {
    id: "milken-health-summit",
    slug: "milken-health-summit",
    title: "Milken Future of Health Summit",
    client: "Milken Institute",
    eventType: "Summit",
    location: "Washington, DC",
    challenge:
      "The Milken Institute required a production team that could handle the unique demands of a high-profile health policy summit — balancing intimate panel discussions with large keynote presentations, while managing complex last-minute schedule changes and VIP logistics.",
    scope: [
      "Multi-format production: keynotes, panels, and breakout sessions",
      "AV design optimized for both presentation and discussion formats",
      "Real-time schedule management and speaker coordination",
      "Hybrid production with live streaming capabilities",
      "VIP and executive logistics management",
    ],
    outcome:
      "Executed a two-day summit that exceeded client expectations, earning praise for adaptability, technical precision, and the team's ability to handle complex last-minute adjustments.",
    quote: {
      text: "Vision Matrix exceeded our expectations in every way. Their attention to detail and ability to handle complex, last-minute requests made our summit a tremendous success.",
      author: "Sarah Chen",
      title: "Event Director, Milken Institute",
    },
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800", alt: "Milken Health Summit stage", caption: "Opening keynote address" },
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", alt: "Health policy panel", caption: "Health policy expert panel" },
      { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800", alt: "VIP reception area", caption: "Executive networking reception" },
    ],
    stats: { attendees: "2,500+", days: "2", speakers: "50+" },
    category: "summit",
    featured: true,
  },
  {
    id: "hilton-charity-gala",
    slug: "hilton-charity-gala",
    title: "Annual Charity Gala",
    client: "Conrad N. Hilton Foundation",
    eventType: "Gala",
    location: "Beverly Hills, CA",
    challenge:
      "The Conrad N. Hilton Foundation needed a production partner to transform a traditional fundraising gala into an emotionally compelling, visually stunning experience that would inspire guests to increase their giving — all while maintaining the elegance and formality the event is known for.",
    scope: [
      "Stage design and scenic fabrication for black-tie setting",
      "Full lighting design creating dramatic atmosphere",
      "Multimedia presentations and live entertainment production",
      "Silent auction technology integration",
      "On-site event management for 800+ guests",
    ],
    outcome:
      "Created an unforgettable gala experience that raised over $2M for the foundation, with attendees praising the seamless blend of technology and elegance.",
    quote: {
      text: "The team's technical expertise and creative vision transformed our gala into an unforgettable experience. They truly understand how to create magic while maintaining complete professionalism.",
      author: "Michael Roberts",
      title: "Executive Director, Conrad N. Hilton Foundation",
    },
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800", alt: "Charity gala venue", caption: "Grand ballroom setting" },
      { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800", alt: "Gala stage design", caption: "Custom stage and lighting design" },
      { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800", alt: "Live entertainment", caption: "Live musical performance" },
    ],
    stats: { attendees: "800+", raised: "$2M+", performances: "5" },
    category: "gala",
    featured: true,
  },
  {
    id: "tech-product-launch",
    slug: "tech-product-launch",
    title: "Product Launch Event",
    client: "Tech Innovation Labs",
    eventType: "Corporate",
    location: "San Francisco, CA",
    challenge:
      "A leading technology company needed a high-energy product launch event that would generate buzz, showcase product capabilities through live demonstrations, and create a shareable brand experience for both in-person attendees and press coverage.",
    scope: [
      "Immersive stage design with LED displays and interactive elements",
      "Live product demonstration production",
      "Press and media coordination area",
      "Social media integration and live content capture",
      "Brand experience activation zones",
    ],
    outcome:
      "Produced a product launch that generated 50+ press mentions, 15 live demonstrations, and became the most-shared event in the client's history.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800", alt: "Product launch stage", caption: "Product reveal moment" },
      { src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800", alt: "Brand experience zone", caption: "Interactive demo stations" },
      { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800", alt: "Media coverage", caption: "Press and media area" },
    ],
    stats: { attendees: "1,200+", demos: "15", press: "50+" },
    category: "corporate",
    featured: false,
  },
  {
    id: "brand-activation",
    slug: "brand-activation",
    title: "Brand Experience Activation",
    client: "Global Brand",
    eventType: "Activation",
    location: "Miami, FL",
    challenge:
      "A global consumer brand needed a multi-day experiential activation that would drive foot traffic, generate social media content, and create meaningful brand interactions in a competitive festival environment.",
    scope: [
      "Interactive installation design and fabrication",
      "Photo and video content capture stations",
      "Live social media integration and UGC amplification",
      "Brand ambassador coordination and training",
      "Four-day on-site management and logistics",
    ],
    outcome:
      "Delivered a four-day activation that drove 10,000+ interactions and generated over 5 million social media impressions for the brand.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
    gallery: [
      { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800", alt: "Brand activation crowd", caption: "Festival crowd engagement" },
      { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800", alt: "Interactive installation", caption: "Interactive brand installation" },
      { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800", alt: "Content capture", caption: "Social media content station" },
    ],
    stats: { interactions: "10,000+", days: "4", impressions: "5M+" },
    category: "activation",
    featured: false,
  },
];

export const caseStudyCategories = [
  { id: "all", name: "All Projects" },
  { id: "conference", name: "Conferences" },
  { id: "summit", name: "Summits" },
  { id: "gala", name: "Galas" },
  { id: "corporate", name: "Corporate" },
  { id: "activation", name: "Activations" },
];

export const insightArticles: InsightArticle[] = [
  {
    id: "questions-before-hiring",
    slug: "5-questions-before-hiring-event-producer",
    title: "5 Questions to Ask Before Hiring an Event Producer",
    excerpt:
      "Choosing the right event production partner can make or break your event. These five questions will help you identify a team that aligns with your vision, budget, and standards.",
    content: [
      "Hiring an event production company is one of the most important decisions you'll make in the planning process. The right partner amplifies your vision; the wrong one creates unnecessary stress and compromises your brand. Before you sign a contract, ask these five questions to ensure you're choosing a team that can truly deliver.",
      "## 1. What is your experience with events of this scale and type?",
      "Not all production companies are built the same. A team that excels at intimate corporate dinners may struggle with a 5,000-person conference. Ask for specific examples of events they've produced that match your scope — and request references from those clients. Look for demonstrated expertise in your industry or event format.",
      "## 2. How do you handle last-minute changes and on-site challenges?",
      "Every live event involves surprises. What separates a good production team from a great one is their ability to adapt in real time without the client ever noticing. Ask how they've handled unexpected situations in the past — equipment failures, schedule changes, weather disruptions — and what protocols they have in place for rapid problem-solving.",
      "## 3. What does your technical team look like?",
      "Understanding who will actually be on-site executing your event is critical. Ask about the technical director's experience, the crew's credentials, and whether they use in-house staff or subcontractors. A production company that owns its own equipment and employs its own technical team typically delivers more consistent quality and faster response times.",
      "## 4. How do you approach budgeting and transparency?",
      "Budget overruns are one of the most common pain points in event production. Ask how the company handles cost estimation, change orders, and ongoing budget tracking. The best production partners provide detailed line-item budgets, proactive communication about potential overages, and creative solutions for maximizing value within your investment.",
      "## 5. Can you walk me through your planning and communication process?",
      "A production company's process reveals how they'll treat your event. Ask about their typical timeline, milestone checkpoints, and communication cadence. Do they assign a dedicated project manager? How do they share updates and gather feedback? A structured, transparent process is a strong indicator of a team that takes every event seriously.",
      "## The Bottom Line",
      "The right event production partner isn't just a vendor — they're a strategic extension of your team. By asking these questions early, you'll quickly identify whether a company has the experience, transparency, and operational excellence to bring your vision to life.",
    ],
    author: "Vision Matrix Team",
    publishDate: "2025-01-15",
    readTime: "5 min read",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    featured: true,
  },
  {
    id: "hybrid-event-checklist",
    slug: "hybrid-event-checklist",
    title: "The Complete Hybrid Event Checklist",
    excerpt:
      "Hybrid events require double the planning — one experience for in-person attendees and another for remote. Use this checklist to ensure both audiences receive an equally compelling experience.",
    content: [
      "Hybrid events are no longer an experiment — they're an expectation. But producing a hybrid event that truly serves both audiences requires more than pointing a camera at the stage. It demands intentional design, dedicated technology, and a production team that understands both live and digital experiences.",
      "## Pre-Production Essentials",
      "Start by defining your audience split. How many attendees will be in-person versus remote? This ratio determines everything from venue selection to bandwidth requirements. Build separate audience journey maps for each group, identifying where their experiences overlap and where they diverge.",
      "## Technology Requirements",
      "Your technology stack is the backbone of your hybrid event. At minimum, plan for: professional-grade cameras (not webcams), broadcast-quality audio mixing, a reliable streaming platform with interactive features, and redundant internet connections. Budget for a dedicated technical director who manages the virtual production independently from the live event.",
      "## Content Strategy",
      "Not all content translates equally across formats. Long keynotes work on-stage but lose remote audiences quickly. Interactive panels engage both groups when designed with virtual Q&A and polling. Plan your programming with both audiences in mind — shorter segments, more interaction points, and dedicated virtual-only content or networking breaks.",
      "## Engagement & Interaction",
      "Remote attendees disengage when they feel like passive observers. Build interaction into every session: live polls, moderated Q&A, virtual networking rooms, and real-time social feeds. Assign a dedicated virtual host who acknowledges remote attendees, surfaces their questions, and bridges the gap between audiences.",
      "## On-Site Execution",
      "Your on-site team needs to think in two dimensions. Every stage moment needs to look and sound good both in the room and on screen. Position cameras for broadcast-quality shots, not just documentation. Ensure speakers are briefed on addressing both audiences and looking into camera during key moments.",
      "## Post-Event Impact",
      "Hybrid events generate twice the content. Plan for on-demand replay, session recordings, highlight reels, and data analytics from both the physical and virtual experiences. Use engagement data from both audiences to measure success and refine your approach for future events.",
    ],
    author: "Vision Matrix Team",
    publishDate: "2025-02-01",
    readTime: "6 min read",
    category: "Production",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
    featured: false,
  },
  {
    id: "maximize-conference-roi",
    slug: "maximize-conference-roi",
    title: "How to Maximize ROI from Corporate Conferences",
    excerpt:
      "Corporate conferences are significant investments. Here's how to ensure your event delivers measurable business impact — not just a memorable experience.",
    content: [
      "A corporate conference is one of the largest line items in most marketing and events budgets. Yet many organizations struggle to quantify the return on their investment beyond anecdotal feedback and attendance counts. Here's how to build ROI into your event strategy from day one.",
      "## Define Success Before You Plan",
      "Before choosing a venue or booking speakers, define what success looks like for your organization. Is it lead generation? Brand awareness? Customer retention? Employee engagement? Each objective requires different event design, content strategy, and measurement frameworks. Without clear KPIs, you're planning in the dark.",
      "## Design for Outcomes, Not Just Experience",
      "Beautiful events that don't drive business outcomes are expensive parties. Every design decision — from session formats to networking structures to technology choices — should be evaluated against your stated objectives. If lead generation is your goal, build in structured networking, sponsor integration, and data capture at every touchpoint.",
      "## Invest in Content That Compounds",
      "The most cost-effective conferences generate value long after the last attendee leaves. Record every session. Create post-event content packages. Develop thought leadership articles from key presentations. A well-produced conference can fuel 6-12 months of content marketing — multiplying your ROI exponentially.",
      "## Leverage Data at Every Stage",
      "Modern event technology provides unprecedented data on attendee behavior. Track registration patterns, session attendance, engagement scores, networking connections, and post-event actions. Use pre-event surveys to shape content. Use real-time data to optimize the experience on the fly. Use post-event analytics to prove ROI and improve future events.",
      "## Partner with Production That Understands Business",
      "Your event production partner should understand your business objectives as well as they understand lighting and sound. The best production teams translate your strategic goals into event design — recommending formats, technologies, and experiences that directly serve your KPIs, not just create spectacle.",
      "## The Multiplier Effect",
      "When strategy drives production — not the other way around — conferences become powerful business tools. They generate leads, strengthen relationships, build brand equity, and create content that compounds over time. That's the difference between an event that costs money and an event that makes money.",
    ],
    author: "Vision Matrix Team",
    publishDate: "2025-03-10",
    readTime: "5 min read",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
    featured: false,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "tami",
    name: "Tami",
    role: "Founder & CEO",
    credentials: "20 years of event production leadership. MBA.",
    fullBio:
      "With over 20 years of experience in event production and an MBA, Tami founded Vision Matrix with a mission to deliver enterprise-quality event experiences with boutique-level attention. Under her leadership, Vision Matrix has grown from a local production company to a trusted partner for Fortune 500 companies, major foundations, and global brands.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    featured: true,
  },
  {
    id: "josh",
    name: "Josh",
    role: "Technical Director",
    credentials: "30+ years in technical direction and live production.",
    fullBio:
      "Josh brings over 30 years of technical direction experience to Vision Matrix, overseeing all AV production, staging, and technical execution. His deep expertise in sound systems, lighting design, LED technology, and live event engineering ensures that every Vision Matrix production runs with precision and reliability.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    featured: true,
  },
  {
    id: "michael-may",
    name: "Michael May",
    role: "Executive Producer",
    credentials: "Amazon, Intel, NATO Summit, 3 U.S. Presidents.",
    fullBio:
      "Michael May is an award-winning executive producer whose career spans some of the world's most high-profile events. He has produced events for Amazon, Intel, the NATO Summit, and three sitting U.S. Presidents. His ability to manage complex, high-stakes productions with calm precision makes him an invaluable asset to Vision Matrix's most demanding clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    featured: true,
  },
];

export const values: Value[] = [
  {
    title: "Excellence",
    description: "We pursue excellence in every detail, ensuring each event exceeds expectations.",
  },
  {
    title: "Creativity",
    description: "We bring innovative ideas and fresh perspectives to every project we undertake.",
  },
  {
    title: "Reliability",
    description: "Our clients trust us because we deliver on our promises, every single time.",
  },
  {
    title: "Partnership",
    description: "We work as an extension of your team, invested in your event's success.",
  },
];

export const testimonials: Testimonial[] = [
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

export const stats: Stat[] = [
  {
    value: "20+",
    label: "Years Experience",
    icon: "Award",
    description: "Nearly two decades of event production expertise",
  },
  {
    value: "500+",
    label: "Events Produced",
    icon: "Calendar",
    description: "From intimate gatherings to global conferences",
  },
  {
    value: "50+",
    label: "Fortune 500 Clients",
    icon: "Building",
    description: "Trusted by the world's leading organizations",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    icon: "ThumbsUp",
    description: "Committed to exceeding expectations every time",
  },
];

// Event type options for contact forms
export const eventTypeOptions = [
  "Conference",
  "Summit",
  "Gala",
  "Product Launch",
  "Brand Activation",
  "Corporate Event",
  "Hybrid / Virtual",
  "Other",
];

export const attendeeCountOptions = [
  "Under 100",
  "100 - 500",
  "500 - 1,000",
  "1,000 - 5,000",
  "5,000+",
];

export const timelineOptions = [
  "Within 1 month",
  "1 - 3 months",
  "3 - 6 months",
  "6 - 12 months",
  "12+ months",
  "Exploring options",
];
