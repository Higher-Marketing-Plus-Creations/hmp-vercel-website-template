import type {
  CaseStudy,
  ContentItem,
  HeroMetric,
  Insight,
  LocationPage,
  Service,
  SiteSettings,
  Testimonial
} from "@/lib/types";
import { siteConfig } from "@/lib/site-config";

export const siteSettings: SiteSettings = {
  addressLabel: "Joplin, MO",
  bookingUrl: "https://link.highermarketingplus.com/widget/booking/ZOXJZBGYDvpFk4b6uHfl",
  city: "Joplin, MO",
  companyName: "Higher Marketing Plus",
  contactEmail: "hello@highermarketingplus.com",
  defaultDescription:
    "Higher Marketing Plus builds strategy-first websites, local SEO campaigns, Google growth systems, and AI voice workflows for service businesses in Joplin, Missouri and beyond.",
  defaultTitle: "Higher Marketing Plus | Websites, Local SEO, Google Experts, AI Voice",
  footerBlurb:
    "Maximize your success by elevating your online presence. Strategy-first websites, AI voice agents, and local SEO serving Joplin, MO and beyond.",
  footerTagline: "One agency handling websites, SEO, Google visibility, and AI-powered call coverage.",
  heroMetrics: [
    { label: "Websites That Convert", value: "Built to turn visitors into customers." },
    { label: "Rank Where It Matters", value: "Focused local and Google visibility." },
    { label: "24/7 Call Coverage", value: "AI voice systems that never clock out." }
  ],
  primaryCtaHref: "/contact",
  primaryCtaLabel: "See What's Possible",
  secondaryCtaHref: "/services",
  secondaryCtaLabel: "Explore Services",
  serviceArea: "Serving Joplin, MO and businesses nationwide",
  siteUrl: siteConfig.siteUrl,
  supportPhone: "(417) 555-0182"
};

export const homeProcessSteps: ContentItem[] = [
  {
    title: "Discovery & Research",
    description:
      "We dig into your business, your competitors, and the people you want to reach so every recommendation is grounded in real demand."
  },
  {
    title: "Strategy Development",
    description:
      "We map the offer, the pages, the search intent, and the conversion path before we touch execution."
  },
  {
    title: "Design & Development",
    description:
      "Every page is designed to feel premium, load fast, and guide visitors toward a next step that actually matters."
  },
  {
    title: "Launch & Optimize",
    description:
      "We ship with analytics, forms, and tracking in place, then improve from live behavior instead of guesswork."
  },
  {
    title: "Growth & Scale",
    description:
      "Once the foundation is live, we keep compounding visibility, conversion rate, and operational efficiency."
  }
];

export const homePrinciples: ContentItem[] = [
  {
    title: "Transparent Communication",
    description: "You'll always know what we're building, why it matters, and what comes next."
  },
  {
    title: "Data-Driven Decisions",
    description: "Strategy is backed by research, tracking, and real market behavior, not vague creative opinion."
  },
  {
    title: "Results-Focused Approach",
    description: "Everything points back to leads, appointments, and growth rather than vanity metrics."
  }
];

export const serviceBullets = [
  "AI tools your competitors haven't heard of yet",
  "Real data behind every decision",
  "One team handling everything — websites, SEO, ads, and more",
  "Results you can actually measure"
];

export const contactStats: HeroMetric[] = [
  { label: "Years Experience", value: "8+" },
  { label: "Clients Served", value: "50+" },
  { label: "Avg. Conversion Lift", value: "185%" },
  { label: "Client Satisfaction", value: "100%" }
];

export const contactSkills: HeroMetric[] = [
  { label: "Web Design & Development", value: "95%" },
  { label: "Search Engine Optimization", value: "90%" },
  { label: "Google Ads & Analytics", value: "88%" },
  { label: "AI Voice Automation", value: "85%" },
  { label: "Conversion Optimization", value: "92%" }
];

export const contactValues: ContentItem[] = [
  {
    title: "Results First",
    description:
      "Every decision is measured against one question: does it move the needle for your business?"
  },
  {
    title: "Speed & Precision",
    description:
      "We move quickly, but the work still ships polished, clear, and conversion-ready."
  },
  {
    title: "Genuine Partnership",
    description:
      "You get a team that treats your growth like shared work, not a ticket queue."
  },
  {
    title: "Continuous Improvement",
    description:
      "The market changes fast, so we keep learning, testing, and tightening what works."
  }
];

export const services: Service[] = [
  {
    closingCtaHref: siteSettings.bookingUrl,
    closingCtaLabel: "Start Your Project",
    closingDescription: "Ready to get a website that works as hard as you do?",
    closingTitle: "Let's Build Something That Actually Performs.",
    detailDescription:
      "Most business websites are digital brochures. They exist. They don't perform. If your site isn't generating leads while you sleep, it's not a website — it's a missed opportunity.",
    detailHeading: "The Problem",
    faq: [
      {
        question: "Do you build custom websites or use templates?",
        answer:
          "Every project is tailored to your business, your market, and the actions you want visitors to take."
      },
      {
        question: "Will the site be mobile-first and SEO-ready?",
        answer:
          "Yes. We build for mobile performance, clean page structure, and search visibility from the start."
      },
      {
        question: "Can you keep supporting the site after launch?",
        answer:
          "Yes. We can continue refining content, pages, tracking, and conversion flows as the business grows."
      }
    ],
    featureHeading: "Built from Scratch. Built to Win.",
    featureIntro:
      "Every Higher Marketing+ website is custom-designed, conversion-focused, and built on a foundation that search engines love.",
    featureItems: [
      { title: "Custom Design", description: "No templates. No shortcuts. Your brand, done right." },
      {
        title: "Mobile-First",
        description: "Most visitors are on their phones first, so we build for that reality instead of treating it like an afterthought."
      },
      { title: "Speed Optimized", description: "Fast pages keep people engaged and help every channel work harder." },
      {
        title: "SEO-Ready Architecture",
        description: "Rankings start at the code level with clean structure, hierarchy, and intent alignment."
      },
      { title: "Lead Capture Built In", description: "Calls to action, forms, and page flow are designed to convert." },
      { title: "Ongoing Support", description: "We don't build it, vanish, and leave you guessing." }
    ],
    heroCtaHref: siteSettings.bookingUrl,
    heroCtaLabel: "See What We Build",
    heroDescription:
      "We build custom websites that don't just look good — they convert visitors into customers, rank on Google, and run 24/7 without you lifting a finger.",
    heroEyebrow: "Custom Websites",
    heroImage: "/figma-assets/service-development-hero.jpg",
    heroImageClassName: "h-full w-full object-cover object-center md:object-[center_38%]",
    heroTitle: "Your Website Should Be",
    heroAccent: "Working Harder Than You Are.",
    label: "Web Development",
    processHeading: "Our Development Approach",
    processItems: [
      {
        title: "Mobile-First Development",
        description: "Every layout decision starts with the smallest screen so the experience holds up everywhere."
      },
      {
        title: "Performance Optimization",
        description: "Code, media, and structure are tuned for speed because slow pages bleed trust and leads."
      },
      {
        title: "Accessibility Standards",
        description: "We aim for clear, usable experiences that work for real people and strengthen quality overall."
      },
      {
        title: "Browser Compatibility",
        description: "The launch checklist covers the environments your customers actually use."
      },
      {
        title: "Scalable Architecture",
        description: "Pages and components are built so new services, locations, and campaigns can be added cleanly."
      },
      {
        title: "Documentation & Training",
        description: "You get clarity on what was built and how to keep it moving after launch."
      }
    ],
    seoDescription:
      "Custom website design and development from Higher Marketing Plus, built for speed, search visibility, and lead generation.",
    seoTitle: "Web Development | Higher Marketing Plus",
    slug: "development",
    summary:
      "Custom websites that look premium, rank cleanly, and convert visitors into customers.",
    title: "Web Development"
  },
  {
    closingCtaHref: siteSettings.bookingUrl,
    closingCtaLabel: "Get My Free SEO Audit",
    closingDescription:
      "Get your free SEO audit and see exactly what it takes to dominate your market.",
    closingTitle: "Your Competitors Are Ranking. You Should Be Too.",
    detailDescription:
      "Here's the truth about SEO: most agencies will rank you for keywords nobody searches and call it a win. We track revenue, leads, and real traffic — because those are the only numbers that matter to your business.",
    detailHeading: "The Reality Check",
    faq: [
      {
        question: "Do you focus on rankings or revenue?",
        answer:
          "Rankings matter only when they bring qualified traffic, calls, and leads. We optimize for the business outcome behind the ranking."
      },
      {
        question: "Can you optimize my Google Business Profile too?",
        answer:
          "Yes. Local SEO includes profile optimization, review strategy, citation work, on-site changes, and reporting."
      },
      {
        question: "How do you report progress?",
        answer:
          "We keep reporting plain-English and focused on visibility, traffic quality, and the actions people take after they find you."
      }
    ],
    featureHeading: "What Our SEO Includes",
    featureIntro: "Strategy First. Rankings Second. Revenue Always.",
    featureItems: [
      { title: "Local SEO", description: "Dominate your city, your neighborhood, and the searches that matter most." },
      { title: "Technical SEO", description: "We fix what is broken under the hood so search engines can understand the site." },
      {
        title: "Content Strategy",
        description: "Content is planned to rank, convert, and reinforce the service pages around it."
      },
      { title: "Link Building", description: "Authority is earned where it counts instead of sprayed everywhere." },
      {
        title: "Competitor Analysis",
        description: "We study the market so your plan is shaped by reality, not generic best practices."
      },
      { title: "Monthly Reporting", description: "Clear reporting that shows progress without burying you in fluff." }
    ],
    heroCtaHref: siteSettings.bookingUrl,
    heroCtaLabel: "Get a Free SEO Audit",
    heroDescription:
      "We don't do vanity rankings. We put your business in front of the people who are already looking for exactly what you offer — and we keep you there.",
    heroEyebrow: "SEO Services",
    heroImage: "/figma-assets/service-seo-hero.jpg",
    heroImageClassName: "h-full w-full object-cover object-center md:object-[center_55%]",
    heroTitle: "If You're Not on Page One,",
    heroAccent: "You're Invisible.",
    label: "Local SEO",
    processHeading: "Our Local SEO Process",
    processItems: [
      {
        title: "Local Market Audit",
        description: "We assess your visibility, your market, and the competitive gap you need to close first."
      },
      {
        title: "Google Business Optimization",
        description: "Profile setup, categories, media, posts, and positioning are tuned for local intent."
      },
      {
        title: "Citation Building",
        description: "We clean up business information and reinforce trust signals across the web."
      },
      {
        title: "On-Site Optimization",
        description: "Pages, metadata, structure, and schema are aligned to the searches you want to win."
      },
      {
        title: "Review Generation",
        description: "We help put review acquisition into the operating rhythm instead of treating it as an afterthought."
      },
      {
        title: "Ongoing Monitoring",
        description: "Visibility shifts, behavior changes, and new opportunities are monitored continuously."
      }
    ],
    seoDescription:
      "Local SEO services from Higher Marketing Plus to improve Google visibility, Google Business Profile performance, and lead generation.",
    seoTitle: "Local SEO | Higher Marketing Plus",
    slug: "local-seo",
    summary:
      "Local SEO built to increase rankings, calls, reviews, and qualified traffic in the markets you serve.",
    title: "Local SEO"
  },
  {
    closingCtaHref: siteSettings.bookingUrl,
    closingCtaLabel: "Book a Demo",
    closingDescription:
      "See how an AI Receptionist can transform your business with a free demo.",
    closingTitle: "Never Miss a Lead Again.",
    detailDescription:
      "Every missed call is a missed customer. Every voicemail that goes unreturned is a lead that went somewhere else. Your competitors are responding faster — and winning because of it.",
    detailHeading: "The Problem You Know Too Well",
    detailItems: [
      {
        title: "Save $40,000+ Per Year",
        description: "Compared to hiring full-time reception staff for the same coverage."
      },
      {
        title: "Capture 3-5x More Leads",
        description: "Instant answers mean fewer hangups and far fewer lost opportunities."
      },
      {
        title: "Increase Show-Up Rates",
        description: "Automated reminders and follow-up reduce the drop-off between booking and appointment."
      },
      {
        title: "Scale Without Hiring",
        description: "Handle more calls and more scheduling without turning every growth step into a staffing problem."
      }
    ],
    faq: [
      {
        question: "Is this just a chatbot for the phone?",
        answer:
          "No. The goal is conversational call handling tied to your booking flow, qualification criteria, and customer questions."
      },
      {
        question: "What kinds of businesses is this best for?",
        answer:
          "It is especially useful for service businesses where missed calls mean missed revenue, like HVAC, plumbing, legal, medical, dental, real estate, and auto repair."
      },
      {
        question: "Can the AI book appointments and sync with my systems?",
        answer:
          "Yes. The setup can connect to calendars and CRM workflows so calls do more than just end in a voicemail."
      }
    ],
    featureHeading: "Faster Than Human. Smarter Than a Script.",
    featureIntro: "What AI Receptionists Do",
    featureItems: [
      { title: "Instant Call Answering", description: "No hold music. No missed calls. Ever." },
      { title: "Lead Qualification", description: "Separate serious buyers from time-wasters automatically." },
      { title: "Appointment Booking", description: "Sync with your calendar and schedule in real time." },
      { title: "FAQ Handling", description: "Answer the most common questions immediately and consistently." },
      { title: "After-Hours Coverage", description: "The late-night lead still gets an answer." },
      { title: "CRM Integration", description: "Interactions can be logged and routed for follow-up automatically." }
    ],
    heroAccent: "Even When You're Not.",
    heroCtaHref: siteSettings.bookingUrl,
    heroCtaLabel: "See It In Action",
    heroDescription:
      "Our AI Receptionists answer calls, qualify leads, book appointments, and handle customer questions — 24 hours a day, 7 days a week, without hiring a single person.",
    heroEyebrow: "AI Receptionist Services",
    heroImage: "/figma-assets/service-ai-voice-hero.jpg",
    heroImageClassName: "h-full w-full object-cover object-center",
    heroStats: [
      { label: "Won't Leave Voicemail", value: "80%" },
      { label: "Hang Up Without A Person", value: "67%" },
      { label: "Average Lost Lead Value", value: "$1,000+" }
    ],
    heroTitle: "Your Business Is Open.",
    label: "AI Voice",
    processHeading: "Simple Setup, Powerful Results",
    processItems: [
      {
        title: "Custom Training",
        description: "We program the AI with your offers, your process, and the way you want calls handled."
      },
      {
        title: "Phone Integration",
        description: "Use your existing business number or launch with a dedicated line."
      },
      {
        title: "Calendar Sync",
        description: "Appointment availability is connected so the system can book in real time."
      },
      {
        title: "Go Live",
        description: "The AI starts taking calls immediately with a monitored, business-ready launch."
      },
      {
        title: "Continuous Optimization",
        description: "We improve the script, logic, and follow-up behavior as real conversations come in."
      }
    ],
    seoDescription:
      "AI voice agents and AI receptionist services from Higher Marketing Plus to capture calls, qualify leads, and book appointments around the clock.",
    seoTitle: "AI Voice Agents | Higher Marketing Plus",
    slug: "ai-voice-agents",
    summary:
      "AI-powered call handling that answers, qualifies, books, and follows up when your team cannot.",
    title: "AI Voice Agents"
  },
  {
    closingCtaHref: siteSettings.bookingUrl,
    closingCtaLabel: "Let's Talk Google Strategy",
    closingDescription:
      "Get your free Google audit and see how we can transform your online presence.",
    closingTitle: "Ready to Own Your Market on Google?",
    detailDescription:
      "Your Google Business Profile is often the first thing people see before they ever visit your website. Your Google Ads are either making you money or burning it. Most businesses have both set up wrong — and don't even know it.",
    detailHeading: "The Opportunity Most Businesses Miss",
    detailItems: [
      {
        title: "Google Business Profile Optimization",
        description:
          "We tune categories, media, posts, reviews, and local trust signals so your profile becomes a real lead source."
      },
      {
        title: "Google Ads That Actually Convert",
        description:
          "Campaigns are built around qualified action, not empty click volume and mystery spend."
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Tracking and reporting make it easier to understand where attention turns into revenue."
      }
    ],
    faq: [
      {
        question: "Do you manage Google Business Profile and Google Ads together?",
        answer:
          "Yes. We look at your Google footprint as one connected system rather than splitting profile, ads, and analytics into unrelated workstreams."
      },
      {
        question: "Can you improve tracking and reporting too?",
        answer:
          "Yes. Google Analytics, conversion tracking, and campaign attribution are part of making better decisions instead of guessing."
      },
      {
        question: "Is this only for big ad budgets?",
        answer:
          "No. The goal is efficient visibility and efficient spend, whether the budget is small or already scaling."
      }
    ],
    featureHeading: "Every Corner of Google. Fully Covered.",
    featureIntro: "What We Handle",
    featureItems: [
      {
        title: "Google Business Profile",
        description: "Optimization, review strategy, posts, and local authority building for the map pack and beyond."
      },
      {
        title: "Google Ads",
        description: "Campaigns built for conversions, smarter spend, ongoing testing, and transparent reporting."
      },
      {
        title: "Google Analytics & Tracking",
        description: "Setup and measurement that shows what channels and pages are actually working."
      }
    ],
    heroCtaHref: siteSettings.bookingUrl,
    heroCtaLabel: "Get Your Free Google Audit",
    heroDescription:
      "From Google Business Profile optimization to high-converting ad campaigns, we turn Google into your most powerful sales channel.",
    heroEyebrow: "Google Experts",
    heroImage: "/figma-assets/service-google-hero.jpg",
    heroImageClassName: "h-full w-full object-cover object-center md:object-[center_30%]",
    heroTitle: "Google Is Where Your Customers Are.",
    heroAccent: "We Make Sure They Find You.",
    label: "Google Experts",
    processHeading: "Google Ads That Actually Convert",
    processItems: [
      {
        title: "Keyword Research & Selection",
        description: "We target the searches where buyers are ready to call, book, or buy."
      },
      {
        title: "Ad Copy & Extension Optimization",
        description: "Messaging is shaped to attract the right click instead of any click."
      },
      {
        title: "Bid Strategy & Budget Management",
        description: "Spend is controlled so the account can grow efficiently instead of leaking cash."
      },
      {
        title: "Landing Page Optimization",
        description: "The page experience is aligned to the promise made in the ad."
      },
      {
        title: "Conversion Tracking Setup",
        description: "Calls, forms, and outcomes are tied back to the campaigns driving them."
      },
      {
        title: "Ongoing Optimization",
        description: "Campaigns are managed continuously because Google is never a set-it-and-forget-it channel."
      }
    ],
    seoDescription:
      "Google Business Profile optimization, Google Ads management, and analytics support from Higher Marketing Plus.",
    seoTitle: "Google Experts | Higher Marketing Plus",
    slug: "google-experts",
    summary:
      "Google visibility and ad systems that help service businesses get found, get clicks, and convert demand into calls.",
    title: "Google Experts"
  }
];

export const caseStudies: CaseStudy[] = [];

export const insights: Insight[] = [];

export const testimonials: Testimonial[] = [];

export const locations: LocationPage[] = [];
