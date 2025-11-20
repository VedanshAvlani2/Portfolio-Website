export enum SkillNames {
  PYTHON = "python",
  REACT = "react",
  POWERBI = "power bi",
  HTML = "html",
  AWS = "aws",
  POSTGRESQL = "postgres",
  STREAMLIT = "streamlit",
  CSS = "css",
  TABLEAU = "tableau",
  R = "r",
  MONGODB = "mongodb",
  DUCKDB = "duck db",
  JS = "javascript",
  AUTODESK = "autodesk",
  GITHUB = "github",
  ORACLE = "oracle db",
  JIRA = "jira",
  GIT = "git",
  HUGGINGFACE = "huggingface",
  MYSQL = "mysql",
  VSCODE = "vs code",
  M365 = "microsoft 365",
  VERSEL = "vercel",
  ARDUINO = "arduino",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription:
      "From data wrangling to deep learning - Python does it all.",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.REACT]: {
    id: 2,
    name: "react",
    label: "React",
    shortDescription:
      "A slick way to build fast and modern UIs.",
    color: "#61DAFB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.POWERBI]: {
    id: 3,
    name: "power bi",
    label: "Power BI",
    shortDescription:
      "Turning data one beautiful dashboard.",
    color: "#F2C811",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg",
  },
  [SkillNames.HTML]: {
    id: 4,
    name: "html",
    label: "HTML5",
    shortDescription:
      "The foundation of the web - simple, strong, and timeless.",
    color: "#E34F26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.AWS]: {
    id: 5,
    name: "aws",
    label: "AWS",
    shortDescription:
      "Deploying smarter, faster, \nand scalable.",
    color: "#FF9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  [SkillNames.POSTGRESQL]: {
    id: 6,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription:
      "An elephant never forgets - reliable SQL for analytics.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.STREAMLIT]: {
    id: 7,
    name: "streamlit",
    label: "Streamlit",
    shortDescription:
      "Where Python meets interactivity.",
    color: "#FF4B4B",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
  },
  [SkillNames.CSS]: {
    id: 8,
    name: "css",
    label: "CSS3",
    shortDescription: "Making pixels behave beautifully since forever.",
    color: "#1572B6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.TABLEAU]: {
    id: 9,
    name: "tableau",
    label: "Tableau",
    shortDescription: "Transforming complex data \ninto visual stories.",
    color: "#E97627",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg",
  },
  [SkillNames.R]: {
    id: 10,
    name: "r",
    label: "R",
    shortDescription:
      "Statistical sorcery and visualization in one package.",
    color: "#276DC3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 11,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Fast, flexible, and perfect for messy real-world data.",
    color: "#47A248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.DUCKDB]: {
    id: 12,
    name: "duck db",
    label: "DuckDB",
    shortDescription: "In-memory analytics at lightning speed.",
    color: "#FFC700",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", // Using SQLite as visual proxy
  },
  [SkillNames.JS]: {
    id: 13,
    name: "javascript",
    label: "JavaScript",
    shortDescription:
      "Making the web dynamic and alive - one script at a time.",
    color: "#F7DF1E",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.AUTODESK]: {
    id: 14,
    name: "autodesk",
    label: "Autodesk",
    shortDescription: "Bringing design ideas to life - from concept to CAD.",
    color: "#0696D7",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/autocad/autocad-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 15,
    name: "github",
    label: "GitHub",
    shortDescription:
      "Where collaboration meets version control.",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.ORACLE]: {
    id: 16,
    name: "oracle db",
    label: "Oracle DB",
    shortDescription:
      "Database muscle for mission-critical data.",
    color: "#F80000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
  [SkillNames.JIRA]: {
    id: 17,
    name: "jira",
    label: "Jira",
    shortDescription:
      "Managing projects, tickets, and sanity.",
    color: "#0052CC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  [SkillNames.GIT]: {
    id: 18,
    name: "git",
    label: "Git",
    shortDescription: "Because every great project deserves a version history.",
    color: "#F05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.HUGGINGFACE]: {
    id: 19,
    name: "huggingface",
    label: "Hugging Face",
    shortDescription:
      "Bringing NLP and transformer models to life.",
    color: "#FFD54F",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", // No official icon; fallback to Python
  },
  [SkillNames.MYSQL]: {
    id: 20,
    name: "mysql",
    label: "MySQL",
    shortDescription:
      "The classic relational database powering data.",
    color: "#4479A1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 21,
    name: "vs code",
    label: "VS Code",
    shortDescription:
      "Developer zone - clean, fast, ridiculously customizable.",
    color: "#007ACC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.M365]: {
    id: 22,
    name: "microsoft 365",
    label: "Microsoft 365",
    shortDescription: "Powerhouse for \nproductivity.",
    color: "#00A4EF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
  },
  [SkillNames.VERSEL]: {
    id: 23,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Fast, sleek, and effortless deployment for Next.js.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.ARDUINO]: {
    id: 24,
    name: "arduino",
    label: "Arduino",
    shortDescription:
      "Bridging the gap between software and circuits.",
    color: "#00979D",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

