
import { CaseStudy, TeamMember, FAQItem } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  // --- AI SOFTWARE BUILDS ---
  {
    id: 'insta-reels',
    category: 'software',
    name: "Instagram Reels Analysis",
    industry: "E-commerce & FMCG",
    timeline: "7 days",
    revenue: "Actionable Insights",
    aiUsed: "Custom Computer Vision",
    services: ["Computer Vision", "Hooks Analysis", "Content Strategy"],
    description: "Automating creative strategy by analyzing thousands of competitor reels.",
    problem: "Social teams produced Reels by intuition; no fast, data-backed way to know which hooks drive views.",
    solution: "Built a custom app that analysed 3,000+ competitor reels in minutes, extracted opening hooks (first 3–5s), and correlated hooks with views & engagement.",
    impact: [
      "Data-backed content strategy and repeatable hook frameworks.",
      "Faster content planning, reduced creative guesswork.",
      "Correlated visual cues with engagement benchmarks."
    ],
    clientFeeling: "This turned content creation from guesswork to evidence-based decisions.",
    stats: [{ label: "Reels Analyzed", value: "3,000+" }]
  },
  {
    id: 'ai-image-gen',
    category: 'software',
    name: "AI Image Generation Engine",
    industry: "E-commerce",
    timeline: "14 days",
    revenue: "80% Efficiency Gain",
    aiUsed: "Stable Diffusion",
    services: ["Stable Diffusion", "Batch Processing", "Creative Automation"],
    description: "Converting raw product photos into listing-ready visuals at scale.",
    problem: "High manual effort and slow turnaround to convert product images into ecommerce-ready creatives.",
    solution: "Developed an AI engine that transforms raw product photos into listing-ready and ad-ready visuals via style templates.",
    impact: [
      "80% reduction in manual effort & turnaround time.",
      "Faster catalog and campaign launches.",
      "Consistent brand visuals at scale."
    ],
    clientFeeling: "This replaced repetitive design tasks with a predictable, scalable pipeline.",
    stats: [{ label: "Manual Effort", value: "↓ 80%" }]
  },
  {
    id: 'ai-ads-gen',
    category: 'software',
    name: "AI Digital Ads Generator",
    industry: "Fast Food / QSR",
    timeline: "30 days",
    revenue: "2x Revenue Growth",
    aiUsed: "LLM Tone Mapping",
    services: ["LLM Copywriting", "Creative A/B Testing", "Automated Ops"],
    description: "Automated ad creation system that generates high-converting variations.",
    problem: "Manual ad creation with slow iteration, creative fatigue, and limited A/B testing speed.",
    solution: "Built an AI Ads Generator that ingests brand tone & objectives to auto-generate ad copy + creative variations.",
    impact: [
      "90% reduction in creative effort.",
      "2X revenue through faster testing & higher relevance.",
      "Eliminated creative fatigue across social channels."
    ],
    clientFeeling: "The system allowed the team to scale winners into campaigns instantly.",
    stats: [{ label: "Creative Effort", value: "↓ 90%" }, { label: "Revenue", value: "2X" }]
  },
  {
    id: 'ai-fluency',
    category: 'software',
    name: "AI Fluency Evaluation Platform",
    industry: "Education & Corporate",
    timeline: "21 days",
    revenue: "Capability Benchmarking",
    aiUsed: "Adaptive LLM Assessments",
    services: ["Adaptive Learning", "Dynamic Question Sets", "Personalized Reporting"],
    description: "Benchmarking AI fluency for organizations and individuals.",
    problem: "Individuals and teams lacked a scalable, role-relevant way to benchmark AI fluency as technology evolves.",
    solution: "Built an AI-powered platform that dynamically updates questions and adapts difficulty by level and role.",
    impact: [
      "Scalable, future-proof AI literacy benchmarking.",
      "Highly customized results for students & leaders.",
      "Institution-level capability building."
    ],
    clientFeeling: "This helps understand real capability gaps and prioritize practical upskilling.",
    stats: [{ label: "Logic", value: "Adaptive" }],
    impactTags: ["Adaptive", "Role-aware", "Dynamic"]
  },

  // --- DIGITAL MARKETING CASE STUDIES (FROM PDF) ---
  {
    id: 'sumukha',
    category: 'marketing',
    name: "Sumukha Hospitals",
    industry: "Healthcare",
    timeline: "Accelerated",
    revenue: "4X Patient Growth",
    aiUsed: "Hyper-local Targetting",
    services: ["Targeted Ads", "Google Maps SEO", "Community Engagement"],
    description: "Boosting dental patients for a new clinic in Hyderabad.",
    problem: "New dental clinic struggled with low patient volume (1 every 3 days). Social media wasn't driving appointments.",
    solution: "Shifted to hyper-local targeted Google Ads within 5km and organized medical camps near high-footfall community areas.",
    impact: [
      "4X increase in patients visiting the clinic.",
      "Established dominant presence on local search.",
      "Optimized CAC for dental services."
    ],
    clientFeeling: "Our clinic schedule went from empty to fully booked in under 3 months.",
    stats: [{ label: "Patient Volume", value: "4X" }]
  },
  {
    id: 'deccanmudra',
    category: 'marketing',
    name: "Deccanmudra.com",
    industry: "D2C Food & Agri",
    timeline: "60 days",
    revenue: "1.5X Sales Increase",
    aiUsed: "Audience Segmentation",
    services: ["D2C Growth", "Segmentation Strategy", "Messaging Optimization"],
    description: "Scaling sales for low GI rice and atta products online.",
    problem: "Struggled to scale sales and attract new customers for specialized health-food products.",
    solution: "Implemented a segmentation strategy dividing the potential customer base by buyer journey stage and tailoring messages effectively.",
    impact: [
      "1.5X increase in total online sales.",
      "Improved brand resonance with health-conscious segments.",
      "More efficient ad spend through better targeting."
    ],
    clientFeeling: "Tailored messaging changed our conversion rates overnight.",
    stats: [{ label: "Sales Increase", value: "1.5X" }]
  },
  {
    id: 'novelblack',
    category: 'marketing',
    name: "Novel Black",
    industry: "Luxury Leather",
    timeline: "60 days",
    revenue: "Rapid GTM Launch",
    aiUsed: "E-commerce Optimization",
    services: ["Store Build", "ICP Identification", "Content Strategy"],
    description: "E-commerce launch for a new leather brand in India.",
    problem: "Needed a full launch strategy: identifying who to sell to, building the store, and attracting first customers.",
    solution: "Pinpointed the ideal customer profile, built a stylish reflected-brand website, and created engaging content to draw traffic.",
    impact: [
      "Launched and live in 60 days.",
      "Clear target audience established from day 1.",
      "Successful market entry for a luxury brand."
    ],
    clientFeeling: "The speed from idea to a live, beautiful store was incredible.",
    stats: [{ label: "Launch Time", value: "60d" }]
  },
  {
    id: '1acre',
    category: 'marketing',
    name: "1acre.in",
    industry: "Real Estate",
    timeline: "Rapid",
    revenue: "4X Organic Traffic",
    aiUsed: "Technical SEO Engine",
    services: ["Technical SEO", "Content Marketing", "Keyword Strategy"],
    description: "Increasing organic traffic for a farmland real estate site.",
    problem: "Low organic visibility for a high-value niche like farmland real estate.",
    solution: "Two-pronged strategy: high-value blog creation (guides/tips) and deep technical SEO (URL structure, speed, linking).",
    impact: [
      "Doubled overall website traffic (2X).",
      "Quadrupled organic search traffic (4X).",
      "Established authority in the farm real estate niche."
    ],
    clientFeeling: "Our search visibility exploded, bringing in high-intent investors.",
    stats: [{ label: "Organic Traffic", value: "4X" }]
  },
  {
    id: 'fisique',
    category: 'marketing',
    name: "Fisique Fitness",
    industry: "Fitness & Wellness",
    timeline: "45 days",
    revenue: "4 Walk-ins/Day",
    aiUsed: "Performance Marketing",
    services: ["Google/Meta Ads", "Technical SEO", "Performance Strategy"],
    description: "Launch planning and digital marketing to drive gym footfall.",
    problem: "New gym needed immediate brand visibility and physical walk-ins to start operations.",
    solution: "Deployed a mix of blogs, technical SEO, and aggressive Google/Meta performance marketing to reduce CAC.",
    impact: [
      "Increased walk-ins from 0 to 4 high-quality visitors per day.",
      "Reduced cost per acquisition (CAC) significantly.",
      "Rapid brand visibility in the local area."
    ],
    clientFeeling: "We started seeing real people at the door within weeks of starting the campaign.",
    stats: [{ label: "Daily Walk-ins", value: "0→4" }]
  },
  {
    id: 'nprep',
    category: 'marketing',
    name: "NPrep",
    industry: "EdTech",
    timeline: "Accelerated",
    revenue: "4X Traffic Growth",
    aiUsed: "SEO Content Engine",
    services: ["Content Marketing", "Technical SEO", "Organic Engine"],
    description: "Attracting learners for Nursing exams via search.",
    problem: "Needed to attract more students for Nursing exam preparation in a competitive niche.",
    solution: "Developed an intensive content marketing and technical SEO plan focusing on candidate-intent keywords.",
    impact: [
      "Website traffic doubled (2X).",
      "Organic traffic quadrupled (4X) in accelerated timelines.",
      "Cost-effective scaling compared to paid ads."
    ],
    clientFeeling: "Our organic growth has become our most reliable lead source.",
    stats: [{ label: "Organic Growth", value: "4X" }]
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Aarav Sharma",
    role: "Founder & Strategy (IIM-A)",
    bio: "Ex-entrepreneur with 3 successful exits. AI strategist focused on zero-to-one validation.",
    linkedIn: "#",
    image: "https://picsum.photos/seed/aarav/200/200"
  },
  {
    name: "Priya Varma",
    role: "Head of AI Operations",
    bio: "Data scientist specializing in marketing automation and predictive lead scoring.",
    linkedIn: "#",
    image: "https://picsum.photos/seed/priya/200/200"
  },
  {
    name: "Marcus Chen",
    role: "Growth Engineering",
    bio: "Built funnels for Silicon Valley unicorns. Obsessed with conversion rate optimization.",
    linkedIn: "#",
    image: "https://picsum.photos/seed/marcus/200/200"
  },
  {
    name: "Sanya Gupta",
    role: "Sales Systems Lead",
    bio: "Expert in building scalable sales playbooks and AI-driven CRM architectures.",
    linkedIn: "#",
    image: "https://picsum.photos/seed/sanya/200/200"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Why AI vs traditional agencies?",
    answer: "Traditional agencies take months just for planning. We use AI to compress market research, content creation, and testing into a matter of days."
  },
  {
    question: "What if we don't hit revenue?",
    answer: "We focus on revenue as validation. If milestones aren't met, we continue the sprint at cost until targets are reached."
  },
  {
    question: "How much founder time?",
    answer: "We own execution. We need ~2 hours/week for alignment. You focus on the vision; we build the engine."
  }
];
