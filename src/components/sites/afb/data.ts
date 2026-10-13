export const A = "/sites/afb";

// TODO: the stat figures below are placeholder estimates — confirm each with the client's real numbers before publishing.
export const USECASES = [
  {
    nav: "Property Consultant Dashboard",
    kicker: "Real estate",
    title: "Property Consultant Dashboard",
    text: "Quotes, PPT proposals and client documents in one place, until the deal closes.",
    stat: "70%",
    statLabel: "faster proposal creation",
    images: ["property-consultant.webp"],
  },
  {
    nav: "Fenster Field Ops",
    kicker: "Field operations",
    title: "Fenster Field Ops + AI Chat",
    text: "Crews, jobs and updates in one app, with an AI chat that answers the team instantly.",
    stat: "60%",
    statLabel: "less back-and-forth with the field",
    images: ["fenster-field-ops.webp", "fenster-ai-chat.webp"],
  },
  {
    nav: "Mitrin Invoice",
    kicker: "Billing automation",
    title: "Mitrin Bulk Invoicing",
    text: "Upload an Excel sheet. Every invoice is generated and emailed individually.",
    stat: "95%",
    statLabel: "less time on monthly invoicing",
    images: ["mitrin-invoice.webp"],
  },
  {
    nav: "Shero Food Delivery",
    kicker: "Food delivery",
    title: "Shero Multi-Partner Delivery",
    text: "Many partners, one platform: admin panel, AI voice calling, PPT maker and team task split.",
    stat: "3x",
    statLabel: "more orders handled per team member",
    images: ["shero.webp"],
  },
  {
    nav: "Courier Management",
    kicker: "Logistics",
    title: "AI Courier Management",
    text: "AI reads the address from a parcel photo, then tracks it until delivery.",
    stat: "80%",
    statLabel: "less manual address entry",
    images: ["courier.webp"],
  },
  {
    nav: "AI Voice Calling",
    kicker: "Healthcare",
    title: "AI Appointment Calling",
    text: "Books hospital appointments by voice, follows up automatically and updates patient profiles.",
    stat: "24/7",
    statLabel: "booking with automatic follow-ups",
    images: ["voice-calling.webp"],
  },
  {
    nav: "Hotel Chatbot",
    kicker: "Hospitality",
    title: "Hotel AI Chatbot",
    text: "Answers guest questions and takes booking enquiries on the hotel website, any time of day.",
    stat: "24/7",
    statLabel: "instant replies to guest enquiries",
    images: [] as string[],
    video: "hotel-chatbot.mp4",
    poster: "hotel-chatbot-thumb.webp",
  },
];

export const PROCESS = [
  { n: "01", title: "Listen first", desc: "We sit with your team and learn how work really moves through your business." },
  { n: "02", title: "Shape the plan", desc: "We agree what to build first, what to connect and what to leave alone." },
  { n: "03", title: "Build in steps", desc: "You see working software early and often, not a big reveal at the end." },
  { n: "04", title: "Launch and stay", desc: "We go live with you, train your people and keep improving the system." },
];

export const BUILD = [
  { title: "Business Platforms", items: ["Operations and management software", "Multi-user portals and dashboards", "Systems that replace spreadsheets"] },
  { title: "Websites & Stores", items: ["Fast, clear business websites", "Online ordering and ecommerce", "Booking and enquiry flows"] },
  { title: "AI & Automation", items: ["Assistants that handle routine requests", "Automated hand-offs between tools", "Smart recommendations inside your software"] },
];

export const FAQ = [
  { q: "What kind of software do you build?", a: "Operations platforms for service, property, delivery, food and education businesses, plus the websites, ordering flows and automation around them." },
  { q: "Can you build something for my industry?", a: "Most likely. If your work involves jobs, people, schedules or orders that are tracked by hand today, we can usually turn it into a system." },
  { q: "Do I need to replace the tools I already use?", a: "No. We can connect to the tools you rely on and only replace what is holding you back." },
  { q: "How long does a project take?", a: "It depends on scope. We start with a focused first release so you get something useful quickly, then add to it." },
  { q: "Will you support the system after launch?", a: "Yes. We stay on to fix, improve and extend the software as your business grows." },
];

export const FOOTER_COLS = [
  { title: "What we build", links: ["Business platforms", "Websites and stores", "AI and automation"] },
  { title: "Our platforms", links: ["Property Consultant", "Fenster Field Ops", "Mitrin Invoice", "Shero Delivery", "Courier Management", "AI Voice Calling", "Hotel Chatbot"] },
  { title: "Work with us", links: ["Start a project", "Talk on WhatsApp"] },
];
