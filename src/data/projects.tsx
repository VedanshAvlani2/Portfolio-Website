import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { Title } from "@radix-ui/react-toast";
import {
  ArrowUpRight,
  Workflow,
  Waypoints,
  Zap,
  Database,
  LineChart,
  ShieldAlert,
  Gauge,
} from "lucide-react";
import { ReactNode } from "react";
import {
  SiPython,
  SiJupyter,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiKeras,
  SiPlotly,
  SiStreamlit,
  SiFlask,
  SiFastapi,
  SiArduino,
  SiCplusplus,
  SiRaspberrypi,
  SiAdafruit,
  SiSmartthings,
  SiR,
  SiTidyverse,
  SiF1,
  SiSelenium,
  SiX,
  SiQuantconnect,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiWebgl,
  SiThreedotjs,
  SiNodedotjs,
  SiVercel,
  SiGithub,
  SiResend,
  SiCss3,
  SiHtml5,
  SiDocker,
  SiOpenai,
  SiSqlite,
  SiExpress,
  SiPytorch,
  SiPytest,
  SiChartdotjs,
  SiVite,
  SiEthereum,
  SiChainlink,
} from "react-icons/si";
import css from "styled-jsx/css";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <a
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </a>
      )}
      {repo && (
        <a
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </a>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  jupyter: {
    title: "Jupyter",
    bg: "black",
    fg: "white",
    icon: <SiJupyter />,
  },
  sklearn: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPandas />,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  keras: {
    title: "Keras",
    bg: "black",
    fg: "white",
    icon: <SiKeras />,
  },
  plotly: {
    title: "Plotly",
    bg: "black",
    fg: "white",
    icon: <SiPlotly />,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  arduino: {
  title: "Arduino",
  bg: "black",
  fg: "white",
  icon: <SiArduino />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  iot: {
    title: "IoT",
    bg: "black",
    fg: "white",
    icon: <SiSmartthings />,
  },
  lidar: {
    title: "LiDAR",
    bg: "black",
    fg: "white",
    icon: <SiAdafruit />,
  },
  r: {
    title: "R",
    bg: "black",
    fg: "white",
    icon: <SiR />,
  },
  tidyverse: {
    title: "Tidyverse",
    bg: "black",
    fg: "white",
    icon: <SiTidyverse />,
  },
  f1: {
    title: "FastF1 API",
    bg: "black",
    fg: "white",
    icon: <SiF1 />,
  },
  selenium: {
    title: "Selenium",
    bg: "black",
    fg: "white",
    icon: <SiSelenium />,
  },
  tweepy: {
    title: "Tweepy API",
    bg: "black",
    fg: "white",
    icon: <SiX />,
  },
  finance: {
    title: "Finance",
    bg: "black",
    fg: "white",
    icon: <SiQuantconnect />, 
  },
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <SiReact />,
  },
  nextjs: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <SiNextdotjs />,
  },
  typescript: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  tailwind: {
    title: "TailwindCSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  webgl: {
    title: "WebGL",
    bg: "black",
    fg: "white",
    icon: <SiWebgl />,
  },
  threejs: {
    title: "Three.js",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <SiNodedotjs />,
  },
  vercel: {
    title: "Vercel",
    bg: "black",
    fg: "white",
    icon: <SiVercel />,
  },
  github: {
    title: "GitHub",
    bg: "black",
    fg: "white",
    icon: <SiGithub />,
  },
  resend: {
    title: "Resend",
    bg: "black",
    fg: "white",
    icon: <SiResend />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <SiOpenai />,
  },
  langgraph: {
    title: "LangGraph",
    bg: "black",
    fg: "white",
    icon: <Workflow />,
  },
  langchain: {
    title: "LangChain",
    bg: "black",
    fg: "white",
    icon: <Waypoints />,
  },
  groq: {
    title: "Groq",
    bg: "black",
    fg: "white",
    icon: <Zap />,
  },
  chromadb: {
    title: "ChromaDB",
    bg: "black",
    fg: "white",
    icon: <Database />,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  recharts: {
    title: "Recharts",
    bg: "black",
    fg: "white",
    icon: <SiChartdotjs />,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <SiPytorch />,
  },
  pytest: {
    title: "pytest",
    bg: "black",
    fg: "white",
    icon: <SiPytest />,
  },
  fred: {
    title: "FRED API",
    bg: "black",
    fg: "white",
    icon: <LineChart />,
  },
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  web3: {
    title: "web3.py",
    bg: "black",
    fg: "white",
    icon: <SiEthereum />,
  },
  chainlink: {
    title: "Chainlink",
    bg: "black",
    fg: "white",
    icon: <SiChainlink />,
  },
  llmsafety: {
    title: "LLM Red-Teaming",
    bg: "black",
    fg: "white",
    icon: <ShieldAlert />,
  },
  montecarlo: {
    title: "Monte Carlo",
    bg: "black",
    fg: "white",
    icon: <Gauge />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "f1-race-strategist",
    category: "Agentic AI / Machine Learning",
    title: "F1 Race Strategist: AI Team General Manager",
    src: "/assets/projects-screenshots/F1 Race Strategist/F1 Race Strategist Header.jpg",
    screenshots: ["F1 Race Strategist Header.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.recharts,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.langgraph,
        PROJECT_SKILLS.groq,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.f1,
      ],
    },
    github: "https://github.com/VedanshAvlani2/F1-Race-Prediction",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A pit wall that argues with itself before it tells you to box
          </TypographyP>
          <TypographyP className="font-mono">
            A real-time Formula 1 strategy system in which a LangGraph multi-agent
            pipeline of strategist, risk, skeptic and synthesis agents deliberates over
            deterministic model outputs. The agents disagree visibly and then reconcile
            into a pit-stop recommendation with a confidence score, and every piece of
            LLM reasoning is strictly grounded in numbers the models actually computed
            rather than anything the language model invented.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              Four-agent LangGraph deliberation loop (strategist, risk, skeptic,
              synthesis) producing confidence-scored pit-stop calls
            </li>
            <li>
              Tire degradation model trained on 85,000+ laps across 99 Grands Prix
              using leakage-free GroupKFold cross-validation
            </li>
            <li>
              0.58s MAE on lap-time degradation versus a 0.80s baseline, a 28%
              improvement
            </li>
            <li>
              Per-circuit pit loss measured from 2,400+ real pit stops, feeding a
              Monte Carlo pre-race planner at 800 simulations per plan
            </li>
            <li>
              Generated pit-wall briefs with fallback plans and explicit switch triggers
            </li>
            <li>
              React dashboard with telemetry-driven race replay and live championship
              tracking over a FastAPI backend
            </li>
            <li>
              LLM output constrained to computed values only, so recommendations stay
              auditable rather than hallucinated
            </li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/F1 Race Strategist/F1 Race Strategist 1.png`,
              `${BASE_PATH}/F1 Race Strategist/F1 Race Strategist 2.png`,
              `${BASE_PATH}/F1 Race Strategist/F1 Race Strategist 3.png`,
              `${BASE_PATH}/F1 Race Strategist/F1 Race Strategist 4.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "devassist",
    category: "Agentic AI / Developer Tools",
    title: "DevAssist: AI Coding Assistant",
    src: "/assets/projects-screenshots/DevAssist/DevAssist Header.jpg",
    screenshots: ["DevAssist Header.jpg"],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.langgraph,
        PROJECT_SKILLS.langchain,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.chromadb,
        PROJECT_SKILLS.groq,
        PROJECT_SKILLS.openai,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.pytest,
        PROJECT_SKILLS.github,
      ],
    },
    github: "https://github.com/VedanshAvlani2/DevAssist",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Point it at any GitHub repo, describe the change in English, get a pull request
          </TypographyP>
          <TypographyP className="font-mono">
            A self-hosted AI coding assistant that works against any GitHub repository.
            You describe a task in plain language and it plans the change, retrieves
            relevant context through RAG, generates code with a real unified diff, writes
            pytest tests, runs them in a sandbox, and opens a pull request, with no human
            intervention until the approval step. Validated across retrylib, FastAPI, and
            custom repositories.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              Six-node stateful LangGraph pipeline: plan, RAG retrieve, multi-file
              generate, diff, test-write, and sandboxed test run
            </li>
            <li>
              Real-time Server-Sent Events streaming, so every node&apos;s progress lands in
              the browser as it happens
            </li>
            <li>
              750 tokens/sec generation throughput via Groq Llama 3.3 70B, with 18s
              end-to-end pipeline latency
            </li>
            <li>
              RAG over ChromaDB with OpenAI text-embedding-3-small: repos chunked at
              1,000 characters with 200-character overlap, top-5 retrieval per query, and
              fallback handling for retrieval misses
            </li>
            <li>
              513-task eval bank across 38 subcategories, with regex-based zero-cost task
              selection that eliminated GPT-4o calls from the selection phase entirely and
              saved roughly $0.10 per eval run
            </li>
            <li>
              Per-repo named ChromaDB collections persisted to disk, so indexing is a
              one-time cost per repository
            </li>
            <li>
              Inline code editing before approval, then automated commit and PR creation
              through PyGitHub
            </li>
            <li>SQLite-backed metrics tracking timing and cost on every run</li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/DevAssist/DevAssist 1.png`,
              `${BASE_PATH}/DevAssist/DevAssist 2.png`,
              `${BASE_PATH}/DevAssist/DevAssist 3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "velox",
    category: "FinTech / Full-Stack",
    title: "Velox: Goldman Sachs Hackathon (3rd Place)",
    src: "/assets/projects-screenshots/Velox/Velox Header.jpg",
    screenshots: ["Velox Header.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.recharts,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.css,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.fred,
        PROJECT_SKILLS.groq,
        PROJECT_SKILLS.finance,
        PROJECT_SKILLS.montecarlo,
      ],
    },
    github:
      "https://github.com/VedanshAvlani2/VELOX--Goldman-Sachs-Hackathon-2k26",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A macro-aware portfolio engine, 3rd place at the Goldman Sachs Hackathon
          </TypographyP>
          <TypographyP className="font-mono">
            A full-stack investment platform that classifies the market into Risk-On,
            Moderate, and Risk-Off regimes using FRED GDP and Fed Funds Rate signals, then
            drives monthly ETF rebalancing benchmarked against SPY. Performance charts are
            shaded by regime so you can see which calls the macro signal actually earned.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              Market regime classification from FRED macro signals, driving monthly ETF
              rebalancing benchmarked against SPY
            </li>
            <li>
              1,000-path Monte Carlo simulations via Geometric Brownian Motion over five
              years of per-ticker price history
            </li>
            <li>
              p10–p90 fan charts with max drawdown, CAGR, and goal-attainment probability
            </li>
            <li>
              Composite Health Score ring blending diversification, a volatility
              proxy, goal alignment, and cash buffer, with a concentration penalty
              when one holding dominates
            </li>
            <li>
              Live Yahoo Finance quotes with weighted portfolio beta and an automatic
              stocks-versus-funds split
            </li>
            <li>
              React + Vite client over an Express + SQLite API with JWT and bcrypt auth,
              running entirely on localhost
            </li>
            <li>Portfolio shock simulator for stress-testing allocations</li>
            <li>
              Groq-powered AI assistant seeded with the user&apos;s live holdings and current
              macro context
            </li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/Velox/Velox 1.jpg`,
              `${BASE_PATH}/Velox/Velox 2.jpg`,
              `${BASE_PATH}/Velox/Velox 3.jpg`,
              `${BASE_PATH}/Velox/Velox 4.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "prism",
    category: "FinTech / Risk Intelligence",
    title: "PRISM: DeFi Risk Intelligence (FinHack 2026)",
    src: "/assets/projects-screenshots/PRISM/PRISM Header.jpg",
    screenshots: ["PRISM Header.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.recharts,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
        PROJECT_SKILLS.web3,
        PROJECT_SKILLS.chainlink,
        PROJECT_SKILLS.montecarlo,
      ],
    },
    github: "https://github.com/VedanshAvlani2/PRISM---FinHack-2026",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Protocol Reflexivity, Insolvency, Stress and Marketability Score
          </TypographyP>
          <TypographyP className="font-mono">
            A DeFi risk intelligence platform that scores protocols 0–100 and outputs
            exactly one signal: ENTER, HOLD, REDUCE, or EXIT. PRISM measures TVL
            <i> quality</i>, not TVL level. It tells a portfolio manager whether their
            position is too large for a protocol&apos;s real exit liquidity under stress.
            Built for FinHack 2026 at UT Dallas.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              Six weighted risk pillars (liquidity resilience, liquidation cascade,
              governance capture, oracle reliability, supply pressure, and narrative
              risk) recomputed every 15 minutes from live on-chain data
            </li>
            <li>
              Triple Convergence Alert: fires only when a narrative mention spike, a new
              governance proposal within 48 hours, and a &gt;5% TVL decline hit at once,
              applying an 8-point penalty and escalating the action one level
            </li>
            <li>
              Stress Lab with six predefined scenarios (ETH crash, whale exit, oracle
              staleness and more) plus Monte Carlo analysis and a four-act cascade demo
            </li>
            <li>
              Multi-source ingestion across DefiLlama, The Graph, Snapshot, Dune
              Analytics, and Chainlink on-chain feeds read via web3.py
            </li>
            <li>
              VADER sentiment NLP over live news feeds driving the narrative risk pillar,
              with a mention-velocity chart
            </li>
            <li>
              Cross-protocol portfolio view with a risk table, safe allocation chart, and
              correlation matrix
            </li>
            <li>Monitoring Aave V3, Uniswap V3, and Stargate Finance</li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/PRISM/PRISM 1.jpg`,
              `${BASE_PATH}/PRISM/PRISM 2.jpg`,
              `${BASE_PATH}/PRISM/PRISM 3.jpg`,
              `${BASE_PATH}/PRISM/PRISM 4.jpg`,
              `${BASE_PATH}/PRISM/PRISM 5.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "promptsentinel",
    category: "AI Safety & LLM Evaluation",
    title: "PromptSentinel: Prompt Security Platform",
    src: "/assets/projects-screenshots/PromptSentinel/PromptSentinel Header.jpg",
    screenshots: ["PromptSentinel Header.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.groq,
        PROJECT_SKILLS.llmsafety,
        PROJECT_SKILLS.github,
      ],
    },
    github: "https://github.com/VedanshAvlani2/PromptSentinel",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Audit. Harden. Ship with confidence.
          </TypographyP>
          <TypographyP className="font-mono">
            Your system prompt is an attack surface. A single crafted user message can
            override your instructions, extract your proprietary prompt, or jailbreak the
            model, and most developers have no way to test for it before shipping.
            PromptSentinel closes that gap: paste a system prompt, get a security score,
            see exactly how each attack would succeed, and download a hardened rewrite
            with safety rules injected.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>
              Shield: a red-team audit across 10 attack vectors including prompt injection, role
              confusion, system prompt leak, DAN jailbreak, token boundary manipulation,
              indirect injection, multi-turn escalation, context overflow, instruction
              hierarchy attacks, and output format manipulation
            </li>
            <li>
              Per-vector verdict (VULNERABLE / WARNING / BLOCKED) with a realistic
              adversarial input, the simulated failure response, and Data, Brand, and
              Compliance risk ratings
            </li>
            <li>
              Calibrated 0-100 security score: a bare prompt lands at 10-25, a fully
              hardened one at 75–95
            </li>
            <li>
              Hardened rewrite with a second scoring pass, so the point improvement is
              measured rather than estimated, viewable in diff or full mode
            </li>
            <li>
              Named fix strategies mapped per vulnerability: Instruction Isolation,
              Persona Hardening, Confidentiality Guardrails, Override Resistance, Content
              Sanitization, Context Persistence
            </li>
            <li>
              Forge: a structured five-section prompt builder that sends straight to
              Shield, auto-injecting detected vulnerabilities as safety rules
            </li>
            <li>
              Downloadable pre- and post-hardening reports with full audit data and
              deployment recommendations
            </li>
            <li>
              Powered by Groq with Llama 3.3 70B under a forced JSON response schema
            </li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/PromptSentinel/PromptSentinel 1.jpg`,
              `${BASE_PATH}/PromptSentinel/PromptSentinel 2.jpg`,
              `${BASE_PATH}/PromptSentinel/PromptSentinel 3.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "sentiment-analysis",
    category: "NLP",
    title: "Sentiment Analysis of Player Tweets",
    src: "/assets/projects-screenshots/Twitter Sentiment Analysis/Sentiment Header.png",
    screenshots: ["Sentiment Header.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.selenium,
        PROJECT_SKILLS.tweepy,
      ], 
    },
    github: "https://github.com/VedanshAvlani2/Sentiment-Analysis-of-Player-Tweets",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A sentiment analysis project that collects real-time tweets for three
            selected players using Tweepy, cleans the text, and classifies polarity
            with TextBlob. The system compares fan sentiment across players and
            visualizes positive vs negative distributions using clear charts.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Technologies Used</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Twitter data extraction using Tweepy API</li>
            <li>Text cleaning pipeline to remove noise (URLs, hashtags, mentions)</li>
            <li>Sentiment classification via polarity scores</li>
            <li>Player-to-player sentiment comparison</li>
            <li>Visualized results using Matplotlib bar charts</li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/Twitter Sentiment Analysis/Sentiment 1.jpeg`,
              `${BASE_PATH}/Twitter Sentiment Analysis/Sentiment 2.jpeg`,
              `${BASE_PATH}/Twitter Sentiment Analysis/Sentiment 3.jpeg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "customer-churn",
    category: "Predictive Analytics",
    title: "Customer Churn Prediction",
    src: "/assets/projects-screenshots/Customer Churn Prediction/Customer Churn Prediction Header.png",
    screenshots: ["Customer Churn Prediction Header.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.r,
        PROJECT_SKILLS.tidyverse
      ],
    },
    github: "https://github.com/VedanshAvlani2/Customer-Churn-Prediction-in-Telecom",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A predictive analytics project focused on identifying customers likely to churn in the
            telecom industry. Using demographic data, service usage patterns, and payment history,
            the model uncovers key drivers of customer attrition and provides insights to help
            businesses improve retention strategies through data-driven decision making.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Project Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Data cleaning, preprocessing, and categorical encoding</li>
            <li>Exploratory analysis to reveal churn patterns and risk groups</li>
            <li>Models: Logistic Regression, Decision Tree, Random Forest, Neural Network</li>
            <li>Model evaluation using accuracy, specificity, and interpretability</li>
            <li>Random Forest chosen as final model for its stability, high specificity, and strong generalization</li>
            <li>Actionable recommendations for reducing churn and improving retention</li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/Customer Churn Prediction/Customer Churn Prediction Header.png`,
              `${BASE_PATH}/Customer Churn Prediction/Random Forest Feature Importance Plot.png`,
              `${BASE_PATH}/Customer Churn Prediction/Comparison of all Models.png`,
              `${BASE_PATH}/Customer Churn Prediction/Comparison of all Models 2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "customer-conversion",
    category: "Marketing Analytics / Machine Learning",
    title: "Customer Conversion Prediction in Digital Marketing Campaigns",
    src: "/assets/projects-screenshots/Customer Conversion in Digital Marketing/Customer Conversion in Digital Marketing Header.png",
    screenshots: ["Customer Conversion in Digital Marketing Header.png"],
    skills: {
      frontend: [PROJECT_SKILLS.jupyter],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.plotly,
      ],
    },
    github: "https://github.com/VedanshAvlani2/Customer-Conversion-in-Digital-Marketing-Campaigns",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A complete machine learning workflow for predicting customer conversion in digital marketing campaigns.
            Using demographic data, customer behavior metrics, engagement signals, and campaign details, the project
            identifies key drivers of conversion and builds predictive models that help businesses optimize marketing spend
            and improve ROI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Customer behavior & engagement-based prediction modeling</li>
            <li>Class balancing with SMOTE for improved accuracy</li>
            <li>Comparison of Logistic, Tree-based, and XGBoost models</li>
            <li>ROC-AUC based evaluation for best model selection</li>
            <li>Insights into demographic & channel-based conversion drivers</li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/Customer Conversion in Digital Marketing/Customer Conversion in Digital Marketing Header.png`,
              `${BASE_PATH}/Customer Conversion in Digital Marketing/Correlation Heatmap.png`,
              `${BASE_PATH}/Customer Conversion in Digital Marketing/Decision tree trained on SMOTE data.png`,
              `${BASE_PATH}/Customer Conversion in Digital Marketing/Top 10 features in XG Boost.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "healthcare-chatbot",
    category: "AI Chatbot",
    title: "Healthcare Chatbot",
    src: "/assets/projects-screenshots/Healthcare Chatbot/Healthcare Header.png",
    screenshots: ["Healthcare Header.png"],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
      ],
    },
    github: "https://github.com/VedanshAvlani2/Healthcare-Chatbot",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A machine learning–powered healthcare chatbot that predicts possible
            diseases based on user-reported symptoms. It uses Decision Tree and SVM
            models to classify conditions, provides severity analysis, and suggests
            precautions, supported by text-to-speech interaction.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Capabilities</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Symptom-based disease prediction using ML models</li>
            <li>Support for Decision Tree & SVM classification</li>
            <li>Severity scoring and precaution recommendations</li>
            <li>Text-to-speech feedback for user assistance</li>
            <li>Pattern matching for recognizing symptoms from input</li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/Healthcare Chatbot/Healthcare 1.png`,
              `${BASE_PATH}/Healthcare Chatbot/Healthcare 2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "dprox",
    category: "Embedded Systems / IoT Safety",
    title: "DPROX",
    src: "/assets/projects-screenshots/DPROX/DPROX Header.png",
    screenshots: ["DPROX Header.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.cplusplus,
        PROJECT_SKILLS.iot,
        PROJECT_SKILLS.lidar,
        PROJECT_SKILLS.arduino,
      ],
    },
    github: "https://github.com/VedanshAvlani2/DPROX",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
          DPROX is a LiDAR-powered smart helmet designed to enhance motorcycle rider safety.
          The system integrates multiple TF Mini-S LiDAR sensors with an Arduino Uno to
          detect obstacles in real time on the rider’s left, right and rear sides. Readings are
          displayed on an onboard OLED screen, giving riders instant awareness of nearby hazards.
          This project combines embedded hardware, microcontroller programming, and 3D-printed
          integration to create an intelligent safety device for on-road environments.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Technical Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Real-time obstacle detection using high-precision LiDAR sensors</li>
            <li>Continuous distance monitoring on left, right and rear sides</li>
            <li>OLED display for instant visual feedback and alerts</li>
            <li>Arduino-based data processing with optimized C++ firmware</li>
            <li>3D-printed mounts for helmet integration and sensor stability</li>
            <li>Future support for wireless communication and IoT alerts</li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow 
          images={[
            `${BASE_PATH}/DPROX/DPROX 1.jpg`,
            `${BASE_PATH}/DPROX/DPROX 2.jpg`,
            `${BASE_PATH}/DPROX/DPROX 3.jpg`,
          ]} 
          />
        </div>
      );
    },
  },
  {
    id: "finhack-trading-challenge",
    category: "Quantitative Finance",
    title: "100K Trading Challenge – FinHack 2025",
    src: "/assets/projects-screenshots/FinHack/Finhack Header.png",
    screenshots: ["Finhack Header.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.finance,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
        PROJECT_SKILLS.sklearn,   
      ],
    },
    github: "https://github.com/VedanshAvlani2/100K-Trading-Challenge---FinHack-2025",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A quantitative finance project built for FinHack 2025 that simulates 
            four ETF-based investment strategies using $100K initial capital. 
            The project uses historical market data, backtesting engines, and 
            risk simulations to identify the most robust strategy for beginner 
            investors. The Macro-Aware Momentum model emerged as the final winner.
          </TypographyP>

          <ProjectsLinks repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Backtesting of Buy & Hold, Momentum, Risk-Parity, and Macro-Aware Momentum models</li>
            <li>Historical ETF data collection using Yahoo Finance (yfinance)</li>
            <li>Performance metrics: returns, volatility, Sharpe ratio, drawdowns</li>
            <li>Monte Carlo simulations for forward-looking robustness testing</li>
            <li>Identification of the optimal strategy using macroeconomic filters</li>
          </ul>

          <SlideShow
            images={[
              `${BASE_PATH}/FinHack/Finhack 1.png`,
              `${BASE_PATH}/FinHack/Finhack 2.png`,
              `${BASE_PATH}/FinHack/Finhack 3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "portfolio-website",
    category: "Full-Stack Web Development",
    title: "3D Interactive Portfolio Website",
    src: "/assets/projects-screenshots/Portfolio Website/Portfolio Header.png",
    screenshots: ["Portfolio Header.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.nextjs,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.webgl,
        PROJECT_SKILLS.threejs,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.vercel,
        PROJECT_SKILLS.github,
        PROJECT_SKILLS.resend,
      ],
    },
    github: "https://github.com/VedanshAvlani2/Portfolio-Website",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A fully custom-built 3D interactive portfolio website developed with
            Next.js, React, Spline 3D scenes, and TailwindCSS. Designed to showcase
            technical projects, visual demos, and real-time interactive components
            across devices with smooth animations and responsive layouts.
          </TypographyP>

          <ProjectsLinks repo={this.github} live={this.live} />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>3D interactive Spline scenes integrated directly into React components</li>
            <li>Dynamic project pages powered by modular JSON configuration</li>
            <li>Fully responsive UI with TailwindCSS and custom animations</li>
            <li>Optimized image and component rendering for speed and smoothness</li>
            <li>Complete redesign of About, Skills, Projects, and Contact sections</li>
          </ul>

          <SlideShow images={[
            `${BASE_PATH}/Portfolio Website/Portfolio 1.png`,
            `${BASE_PATH}/Portfolio Website/Portfolio 2.png`,
            `${BASE_PATH}/Portfolio Website/Portfolio 3.png`,
            `${BASE_PATH}/Portfolio Website/Portfolio 4.png`,
          ]} />
        </div>
      );
    },
  },
  {
    id: "prompt-fuzzing-framework",
    category: "AI Safety & LLM Evaluation",
    title: "Prompt Fuzzing Framework",
    src: "/assets/projects-screenshots/Prompt Fuzzing/Prompt Fuzzing Header.png",
    screenshots: ["Prompt Fuzzing Header.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.github,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.openai,
      ],
    },
    github: "https://github.com/VedanshAvlani2/Prompt-Fuzzing-Framework-for-LLM-Safety-Testing",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Designed an automated prompt fuzzing framework to evaluate safety,
            alignment, and policy violations in open-source LLMs (LLaMA, Mistral).
            Built a model-aware attack engine that mutated a curated corpus of 186
            seed prompts using paraphrasing, obfuscation, contextual role injection,
            and GODMODE-style jailbreak wrappers to stress-test guardrails at scale.
          </TypographyP>

          <ProjectsLinks repo={this.github} live={this.live} />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Led attack engine development on a 5-person team, architecting a modular 6-component safety evaluation system</li>
            <li>Four-variant mutation engine: paraphrasing, obfuscation, role injection, and adversarial persona wrappers</li>
            <li>Curated seed corpus (186 prompts) for reproducible safety stress-testing across LLaMA and Mistral</li>
            <li>Context-aware safety evaluation pipeline: Safe, Suspicious, Unsafe classification</li>
            <li>Reproducible benchmark artifacts + structured logs for traceability</li>
            <li>Triage dashboard with severity filtering and cross-model comparison</li>
            <li>Local LM Studio inference to optimize runtime from ~55 minutes to 2–3 minutes per seed</li>
          </ul>

          <SlideShow images={[
            `${BASE_PATH}/Prompt Fuzzing/Prompt Fuzzing 1.png`,
            `${BASE_PATH}/Prompt Fuzzing/Prompt Fuzzing 2.png`,
            `${BASE_PATH}/Prompt Fuzzing/Prompt Fuzzing 3.png`,
          ]} />
        </div>
      );
    },
  },
];

export default projects;
