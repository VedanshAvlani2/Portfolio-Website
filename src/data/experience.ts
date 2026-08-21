export type Role = {
  id: string;
  title: string;
  org: string;
  badge: string;
  location: string;
  start: string;
  end: string;
  duration: string;
  current?: boolean;
  bullets: string[];
  metrics?: { value: string; label: string }[];
};

export type Education = {
  degree: string;
  school: string;
  meta: string;
};

export const ROLES: Role[] = [
  {
    id: "utd-ta",
    title: "Graduate Teaching Assistant",
    org: "Naveen Jindal School of Management, UT Dallas",
    badge: "UT Dallas",
    location: "Richardson, TX",
    start: "JAN 2026",
    end: "MAY 2026",
    duration: "5 mos",
    current: true,
    bullets: [
      "Selected to TA across three advanced graduate courses: Applied AI & Machine Learning, Cybersecurity Threat Preparedness, and Systems Analysis & Project Management.",
      "Supported 150+ graduate students across technical and non-technical audiences, simplifying ML workflows, analytics concepts and system design principles.",
      "Assisted with grading, evaluation design and academic mentoring, bridging communication between faculty and students.",
    ],
    metrics: [
      { value: "150+", label: "graduate students" },
      { value: "3", label: "advanced courses" },
    ],
  },
  {
    id: "atit-ai-engineer",
    title: "AI Engineer",
    org: "Atit Traders",
    badge: "Atit Traders",
    location: "Mumbai, India",
    start: "AUG 2023",
    end: "JUL 2024",
    duration: "1 yr",
    bullets: [
      "Architected an OCR-based document intelligence pipeline in Python, OpenCV and Tesseract, extracting and normalizing data from 2,500+ receipts and invoices.",
      "Built ML-driven inventory forecasting across 50,000+ sales and inventory records, evaluating decision tree, random forest and XGBoost models to identify replenishment risk.",
      "Integrated OpenAI GPT-3.5 Turbo and Hugging Face Transformers to structure business information from 1,000+ OCR-processed documents.",
      "Automated recurring collection, reporting and email workflows with REST APIs, Selenium, BeautifulSoup and SMTP, and containerized the stack with Docker for reproducible deployment.",
    ],
    metrics: [
      { value: "40%", label: "less manual entry" },
      { value: "2h to 20m", label: "report prep" },
      { value: "2,500+", label: "documents parsed" },
      { value: "50k+", label: "records modelled" },
    ],
  },
  {
    id: "pulse-lighting",
    title: "Business Analyst Intern",
    org: "Pulse Lighting",
    badge: "Pulse Lighting",
    location: "Mumbai, India",
    start: "JAN 2023",
    end: "JUL 2023",
    duration: "7 mos",
    bullets: [
      "Designed executive Power BI reporting for sales, customer and market performance using DAX-driven KPIs and drill-down analysis.",
      "Analyzed and segmented sales, customer and lead data with Excel and SQL, identifying acquisition opportunities and high-potential customer segments.",
      "Translated insights into data-backed recommendations for digital outreach and lead generation, presenting findings to business stakeholders.",
    ],
    metrics: [
      { value: "34%", label: "revenue growth" },
      { value: "25%", label: "lead generation" },
      { value: "15%", label: "online following" },
      { value: "10%", label: "customer database" },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "M.S. Business Analytics & Artificial Intelligence",
    school: "University of Texas at Dallas",
    meta: "Aug 2024 to May 2026 · GPA 3.66",
  },
  {
    degree: "B.Tech Computer Engineering",
    school: "K. J. Somaiya College of Engineering",
    meta: "Honours in Cyber Security & Forensics · GPA 3.55",
  },
];
