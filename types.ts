
export interface CaseStudy {
  id: string;
  category: 'software' | 'marketing';
  name: string;
  industry: string;
  timeline: string;
  revenue: string;
  aiUsed: string;
  description: string;
  services?: string[];
  problem?: string;
  solution?: string;
  impact?: string[];
  keyResult?: string;
  speakerNote?: string;
  clientFeeling?: string;
  stats?: { label: string; value: string }[];
  // Added impactTags to support categorical metadata tags used in specific UI cards
  impactTags?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedIn: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
